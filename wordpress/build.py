"""
Builds the WordPress theme from this repository.

    python wordpress/build.py

Output:
    wordpress/dist/bali-elopement/       the theme folder
    wordpress/dist/bali-elopement.zip    small theme zip: Appearance -> Themes -> Add New -> Upload Theme
    wordpress/dist/media-upload/         the photos with flat names (btw-*.webp): Media -> Add New

    python wordpress/build.py --full     puts every photo inside the theme instead (large zip,
                                         for hosts where you can upload through cPanel/FTP)

What goes in:
    wordpress/theme/*      templates, PHP and js/main.js
    css/style.css          the site styles (unchanged)
    assets/                photos and logo (assets/videos is left out: films go on YouTube)
    data/*.json            exported from js/script.js by export-data.js
"""
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
THEME_SRC = ROOT / "wordpress" / "theme"
DIST = ROOT / "wordpress" / "dist"
NAME = "bali-elopement"
OUT = DIST / NAME


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    shutil.copytree(THEME_SRC, OUT, dirs_exist_ok=True)
    (OUT / "css").mkdir(exist_ok=True)
    shutil.copy2(ROOT / "css" / "style.css", OUT / "css" / "style.css")
    full = "--full" in sys.argv
    if full:
        shutil.copytree(ROOT / "assets", OUT / "assets", ignore=shutil.ignore_patterns("videos", "Thumbs.db", "desktop.ini", ".DS_Store"))
    else:
        copy_lite_assets()

    subprocess.run(["node", str(ROOT / "wordpress" / "export-data.js"), str(OUT / "data")], check=True)

    make_screenshot()
    check_assets()

    zip_path = DIST / f"{NAME}.zip"
    zip_path.unlink(missing_ok=True)
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for file in sorted(OUT.rglob("*")):
            if file.is_file():
                zf.write(file, Path(NAME) / file.relative_to(OUT))
    size = zip_path.stat().st_size / 1024 / 1024
    print(f"Built {zip_path} ({size:.1f} MB)")


# Files that stay inside the theme: the logo and the photos css/style.css points to.
THEME_ASSETS = ["assets/logo-btw.png", "assets/images/pages/001.webp"]


def copy_lite_assets():
    """Theme gets only THEME_ASSETS; every other photo goes to dist/media-upload with a flat name."""
    for rel in THEME_ASSETS:
        (OUT / rel).parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / rel, OUT / rel)
    media = DIST / "media-upload"
    if media.exists():
        shutil.rmtree(media)
    media.mkdir()
    images = ROOT / "assets" / "images"
    count = 0
    for file in sorted(images.rglob("*")):
        rel = "assets/images/" + file.relative_to(images).as_posix()
        if file.is_file() and rel not in THEME_ASSETS and file.suffix.lower() in (".webp", ".jpg", ".jpeg", ".png"):
            shutil.copy2(file, media / media_name(rel))
            count += 1
    print(f"{count} photos for the Media Library in {media}")


def media_name(rel):
    """Same rule as btw_media_name() in inc/data.php."""
    return "btw-" + rel.removeprefix("assets/images/").replace("/", "-")


def asset_exists(rel):
    return (OUT / rel).exists() or (DIST / "media-upload" / media_name(rel)).exists()


def make_screenshot():
    """Theme thumbnail in Appearance -> Themes (1200x900)."""
    try:
        from PIL import Image
    except ImportError:
        print("Pillow not installed: skipping screenshot.png")
        return
    img = Image.open(ROOT / "assets" / "images" / "pages" / "001.webp").convert("RGB")
    img.thumbnail((1600, 1600))
    target = 1200 / 900
    w, h = img.size
    if w / h > target:
        new_w = int(h * target)
        img = img.crop(((w - new_w) // 2, 0, (w - new_w) // 2 + new_w, h))
    else:
        new_h = int(w / target)
        img = img.crop((0, (h - new_h) // 2, w, (h - new_h) // 2 + new_h))
    img.resize((1200, 900), Image.LANCZOS).save(OUT / "screenshot.jpg", quality=80)


def check_assets():
    """Every assets/... path used by the templates or the data must exist in the build."""
    import json
    import re

    missing = set()
    for php in OUT.rglob("*.php"):
        for path in re.findall(r"btw_asset\(\s*'([^']+)'", php.read_text(encoding="utf-8")):
            if not asset_exists(path):
                missing.add(f"{php.name}: {path}")
    for name in ("packages.json", "portfolio.json"):
        text = (OUT / "data" / name).read_text(encoding="utf-8")
        for path in set(re.findall(r'"(assets/[^"]+)"', text)):
            if not asset_exists(path) and not path.startswith("assets/videos/"):
                missing.add(f"{name}: {path}")
    if missing:
        print("Missing files:\n  " + "\n  ".join(sorted(missing)))
        sys.exit(1)


if __name__ == "__main__":
    main()
