<?php
/**
 * Inquiry forms (Contact page and package pages).
 *
 * Every submission is saved as an "Inquiry" in wp-admin, so nothing is lost even when
 * the notification email does not arrive. "Send via Email" posts the form here and the
 * planner gets the notification by email. "Send via WhatsApp" opens WhatsApp in the
 * browser and also saves a copy here.
 */

const BTW_INQUIRY_FIELDS = array(
	'email'        => 'Email',
	'target_month' => 'Target month / date',
	'package'      => 'Package',
	'channel'      => 'Sent via',
	'page_url'     => 'Sent from page',
	'ip'           => 'IP address',
);

add_action(
	'init',
	function () {
		register_post_type(
			'btw_inquiry',
			array(
				'labels'          => array(
					'name'          => 'Inquiries',
					'singular_name' => 'Inquiry',
					'menu_name'     => 'Inquiries',
					'all_items'     => 'All Inquiries',
					'edit_item'     => 'Inquiry',
					'search_items'  => 'Search Inquiries',
					'not_found'     => 'No inquiries yet.',
				),
				'public'          => false,
				'show_ui'         => true,
				'show_in_menu'    => true,
				'menu_position'   => 25,
				'menu_icon'       => 'dashicons-email-alt',
				'supports'        => array( 'title', 'editor' ),
				'capability_type' => 'post',
				'capabilities'    => array( 'create_posts' => 'do_not_allow' ),
				'map_meta_cap'    => true,
			)
		);
	}
);

/** Address the notifications go to. Change it with the btw_inquiry_recipient filter. */
function btw_inquiry_recipient() {
	$email = btw_config( 'email' );
	return apply_filters( 'btw_inquiry_recipient', $email['address'] ?? get_option( 'admin_email' ) );
}

function btw_inquiry_ip() {
	return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ?? '' ) );
}

add_action( 'wp_ajax_btw_inquiry', 'btw_handle_inquiry' );
add_action( 'wp_ajax_nopriv_btw_inquiry', 'btw_handle_inquiry' );

function btw_handle_inquiry() {
	// phpcs:disable WordPress.Security.NonceVerification.Missing -- public form; protected by honeypot, fill time and rate limit (a nonce breaks behind page caching).
	$in = wp_unslash( $_POST );

	// Spam: bots fill the hidden field or submit instantly. Answer "ok" so they move on.
	$elapsed = (int) ( $in['elapsed'] ?? 0 );
	if ( ! empty( $in['website'] ) || $elapsed < 3 ) {
		wp_send_json_success();
	}

	$ip    = btw_inquiry_ip();
	$limit = 'btw_inq_' . md5( $ip );
	$count = (int) get_transient( $limit );
	if ( $count >= 5 ) {
		wp_send_json_error( array( 'message' => 'Too many inquiries were sent from your connection. Please try again in a few minutes, or contact us on WhatsApp.' ), 429 );
	}

	$data = array(
		'name'         => sanitize_text_field( $in['name'] ?? '' ),
		'email'        => sanitize_email( $in['email'] ?? '' ),
		'target_month' => sanitize_text_field( $in['target_month'] ?? '' ),
		'package'      => sanitize_text_field( $in['package'] ?? '' ),
		'message'      => sanitize_textarea_field( $in['message'] ?? '' ),
		'channel'      => 'whatsapp' === ( $in['channel'] ?? '' ) ? 'WhatsApp' : 'Email',
		'page_url'     => esc_url_raw( $in['page_url'] ?? '' ),
		'ip'           => $ip,
	);
	// phpcs:enable

	$errors = array();
	if ( '' === $data['name'] ) {
		$errors['name'] = 'Please enter your name.';
	}
	if ( ! is_email( $data['email'] ) ) {
		$errors['email'] = 'Please enter a valid email address.';
	}
	if ( '' === $data['target_month'] ) {
		$errors['target_month'] = 'Please tell us your preferred month or date.';
	}
	if ( $errors ) {
		wp_send_json_error( array( 'fields' => $errors ), 422 );
	}

	set_transient( $limit, $count + 1, 10 * MINUTE_IN_SECONDS );

	$post_id = wp_insert_post(
		array(
			'post_type'    => 'btw_inquiry',
			'post_status'  => 'private',
			'post_title'   => $data['name'] . ' – ' . ( $data['package'] ?: 'No package selected' ),
			'post_content' => $data['message'],
		)
	);
	if ( ! $post_id || is_wp_error( $post_id ) ) {
		wp_send_json_error( array( 'message' => 'Sorry, your inquiry could not be saved.' ), 500 );
	}
	foreach ( array_keys( BTW_INQUIRY_FIELDS ) as $key ) {
		update_post_meta( $post_id, '_btw_' . $key, $data[ $key ] );
	}

	// WhatsApp inquiries are already in the planner's WhatsApp; only email ones need a notification.
	$mailed = true;
	if ( 'Email' === $data['channel'] ) {
		$mailed = btw_send_inquiry_mail( $post_id, $data );
		update_post_meta( $post_id, '_btw_mailed', $mailed ? 'yes' : 'no' );
	}

	wp_send_json_success( array( 'mailed' => $mailed ) );
}

function btw_send_inquiry_mail( $post_id, $data ) {
	$subject = sprintf( '[Bali Elopement Inquiry] %s – %s', $data['package'] ?: 'Inquiry', $data['name'] );
	$lines   = array(
		'New inquiry from the website.',
		'',
		'Name: ' . $data['name'],
		'Email: ' . $data['email'],
		'Target month / date: ' . $data['target_month'],
		'Package: ' . ( $data['package'] ?: '-' ),
		'',
		'Message:',
		$data['message'] ?: '(none)',
		'',
		'Sent from: ' . $data['page_url'],
		'View in wp-admin: ' . admin_url( 'post.php?post=' . $post_id . '&action=edit' ),
		'',
		'Reply to this email to answer the couple directly.',
	);
	$headers = array( 'Reply-To: ' . str_replace( array( "\r", "\n", '<', '>', '"', ',', ';' ), '', $data['name'] ) . ' <' . $data['email'] . '>' );
	return wp_mail( btw_inquiry_recipient(), $subject, implode( "\n", $lines ), $headers );
}

// ---------- wp-admin ----------

add_filter(
	'manage_btw_inquiry_posts_columns',
	function () {
		return array(
			'cb'                => '<input type="checkbox" />',
			'title'             => 'Name – Package',
			'btw_email'         => 'Email',
			'btw_target_month'  => 'Target month',
			'btw_channel'       => 'Sent via',
			'date'              => 'Received',
		);
	}
);

add_action(
	'manage_btw_inquiry_posts_custom_column',
	function ( $column, $post_id ) {
		$value = get_post_meta( $post_id, '_' . $column, true );
		if ( 'btw_email' === $column && $value ) {
			printf( '<a href="mailto:%1$s">%1$s</a>', esc_attr( $value ) );
		} elseif ( 'btw_channel' === $column && 'Email' === $value && 'no' === get_post_meta( $post_id, '_btw_mailed', true ) ) {
			echo 'Email <span style="color:#b32d2e">(notification not delivered)</span>';
		} else {
			echo esc_html( $value );
		}
	},
	10,
	2
);

add_action(
	'add_meta_boxes_btw_inquiry',
	function () {
		add_meta_box(
			'btw_inquiry_details',
			'Inquiry details',
			function ( $post ) {
				echo '<table class="widefat striped"><tbody>';
				foreach ( BTW_INQUIRY_FIELDS as $key => $label ) {
					$value = get_post_meta( $post->ID, '_btw_' . $key, true );
					if ( 'email' === $key && $value ) {
						$value = sprintf( '<a href="mailto:%1$s">%1$s</a>', esc_attr( $value ) );
					} elseif ( 'page_url' === $key && $value ) {
						$value = sprintf( '<a href="%1$s" target="_blank">%1$s</a>', esc_url( $value ) );
					} else {
						$value = esc_html( $value );
					}
					printf( '<tr><th style="width:180px">%s</th><td>%s</td></tr>', esc_html( $label ), $value ); // phpcs:ignore WordPress.Security.EscapeOutput -- escaped above.
				}
				if ( 'no' === get_post_meta( $post->ID, '_btw_mailed', true ) ) {
					echo '<tr><th>Notification</th><td style="color:#b32d2e">The email notification could not be sent. Check the mail settings (e.g. WP Mail SMTP).</td></tr>';
				}
				echo '</tbody></table><p>The message is shown in the editor below.</p>';
			},
			'btw_inquiry',
			'normal',
			'high'
		);
	}
);

// Unread count bubble next to the menu item (inquiries from the last 7 days).
add_action(
	'admin_menu',
	function () {
		global $menu;
		$recent = get_posts(
			array(
				'post_type'      => 'btw_inquiry',
				'post_status'    => 'private',
				'date_query'     => array( array( 'after' => '7 days ago' ) ),
				'fields'         => 'ids',
				'posts_per_page' => 99,
			)
		);
		if ( ! $recent ) {
			return;
		}
		foreach ( $menu as $i => $item ) {
			if ( 'edit.php?post_type=btw_inquiry' === ( $item[2] ?? '' ) ) {
				$menu[ $i ][0] .= ' <span class="awaiting-mod">' . count( $recent ) . '</span>'; // phpcs:ignore WordPress.WP.GlobalVariablesOverride
			}
		}
	},
	99
);
