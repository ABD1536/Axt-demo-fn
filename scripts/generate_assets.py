import os
import urllib.request
from PIL import Image, ImageDraw, ImageEnhance, ImageFont

IMAGES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images")
os.makedirs(IMAGES_DIR, exist_ok=True)

# Curated high-resolution Unsplash assets for each component
ASSET_DEFINITIONS = {
    "hero_card_1.jpg": {
        "url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=85",
        "size": (600, 800),
    },
    "hero_card_2.jpg": {
        "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=800&q=85",
        "size": (600, 800),
    },
    "hero_card_3.jpg": {
        "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=85",
        "size": (600, 800),
    },
    "avatar_1.jpg": {
        "url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=85",
        "size": (200, 200),
    },
    "avatar_2.jpg": {
        "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=85",
        "size": (200, 200),
    },
    "avatar_3.jpg": {
        "url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=85",
        "size": (200, 200),
    },
    "parallax_office.jpg": {
        "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=900&q=85",
        "size": (1600, 900),
    },
    "stacked_service_1.jpg": {
        "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "stacked_service_2.jpg": {
        "url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "stacked_service_3.jpg": {
        "url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "stacked_service_4.jpg": {
        "url": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "about_future_city.png": {
        "url": "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&h=800&q=85",
        "size": (800, 800),
    },
    "stage_1.jpg": {
        "url": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "stage_2.jpg": {
        "url": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "stage_3.jpg": {
        "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
    "stage_4.jpg": {
        "url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600&q=85",
        "size": (800, 600),
    },
}

def create_fallback_graphic(filename, size, title):
    w, h = size
    img = Image.new("RGB", (w, h), color=(10, 10, 12))
    draw = ImageDraw.Draw(img)
    # Draw dark cyber grid lines
    grid_spacing = max(20, w // 15)
    for x in range(0, w, grid_spacing):
        draw.line([(x, 0), (x, h)], fill=(20, 30, 20), width=1)
    for y in range(0, h, grid_spacing):
        draw.line([(0, y), (w, y)], fill=(20, 30, 20), width=1)
    
    # Draw accent glow border
    draw.rectangle([1, 1, w - 2, h - 2], outline=(10, 205, 0), width=2)
    return img

def ensure_asset(filename, info):
    filepath = os.path.join(IMAGES_DIR, filename)
    # Check if exists and valid
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1024:
        try:
            with Image.open(filepath) as img:
                img.verify()
            print(f"✓ Valid asset: {filename}")
            return
        except Exception:
            print(f"! Corrupt asset, re-generating: {filename}")
    
    # Attempt download
    try:
        req = urllib.request.Request(info["url"], headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=8) as resp:
            content = resp.read()
            with open(filepath, "wb") as f:
                f.write(content)
        # Verify downloaded image
        with Image.open(filepath) as test_img:
            test_img.verify()
        print(f"✓ Downloaded asset: {filename}")
    except Exception as e:
        print(f"Fallback generation for {filename} ({e})")
        fallback = create_fallback_graphic(filename, info["size"], filename)
        fallback.save(filepath, quality=95)
        print(f"✓ Created fallback asset: {filename}")

def main():
    print("Verifying and generating all website image assets...")
    for filename, info in ASSET_DEFINITIONS.items():
        ensure_asset(filename, info)
    print("All image assets successfully synchronized!")

if __name__ == "__main__":
    main()
