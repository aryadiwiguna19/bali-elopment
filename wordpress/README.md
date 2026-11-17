# WordPress theme (phase 1)

Standalone theme `bali-elopement`. The old theme stays installed for rollback.

## Build
```
python wordpress/build.py
```
Output (git-ignored):
- `wordpress/dist/bali-elopement.zip` (~0.6 MB): the theme. It contains the code, `css/style.css`, the logo and the homepage hero, plus the package and portfolio data exported from `js/script.js`.
- `wordpress/dist/media-upload/` (326 photos, ~97 MB): every other photo, renamed to a flat name, e.g. `assets/images/portfolio/andi-eva/1.webp` → `btw-portfolio-andi-eva-1.webp`. The theme finds them in the Media Library by these names.

`python wordpress/build.py --full` puts all photos inside the theme zip instead. Use it only where you can upload through cPanel or FTP.

To change packages or portfolio stories in phase 1, edit `js/script.js`, rebuild, and upload the theme zip again. Re-upload photos only when they are new or changed.

## Install (wp-admin only, no cPanel needed)
1. Back up the site.
2. **Photos:** go to Media → Add New and drag every file from `wordpress/dist/media-upload/` into the uploader. Keep the file names as they are. Before you start, check that none of them is already in the library, because a second upload gets renamed to `...-1.webp`.
3. **Theme:** go to Appearance → Themes → Add New → Upload Theme and choose `bali-elopement.zip`. Use Live Preview, then Activate.
4. On activation the theme sets itself up automatically. A notice in wp-admin lists what was done:
   - It creates any missing pages, at these URLs: home, about, contact, faq, testimonials, designed-for-you, portfolio, wedding-journal, elopement, villa-wedding, pre-wedding, packages.
   - It sets Home as the front page and Wedding Journal as the posts page.
   - It switches permalinks to "Post name".
   - It adds the 5 journal articles.
5. If the notice has a WARNING (a URL is already taken by an old page or post), rename or delete the old item. Then set the correct URL on the new page.
6. Go to Settings → Permalinks and click Save once.

## URLs
| Page | URL |
| :--- | :--- |
| Service overview | `/elopement/`, `/villa-wedding/`, `/pre-wedding/` |
| Package | `/packages/<venue>/`, e.g. `/packages/tibumana-waterfall/` |
| Portfolio story | `/portfolio/<story>/` |
| Other pages | `/designed-for-you/`, `/about/`, `/contact/`, `/faq/`, `/testimonials/`, `/wedding-journal/` |

## Editable in wp-admin
- Journal articles (Posts). A sticky post shows as "Pinned"; the first 3 sticky posts appear at the top.
- Any extra pages, such as Privacy Policy.
- Titles and descriptions through Yoast. The theme supplies defaults, and the package and story pages are added to the Yoast sitemap.

In code for now: the content of the main pages, packages, portfolio, FAQ, and contact details. Phase 2 moves these to CPT/ACF.
