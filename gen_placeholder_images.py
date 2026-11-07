#!/usr/bin/env python3
"""
Generate polished placeholder food images using PIL.
Each image: 400x300 JPEG with type-specific gradient + recipe name.
"""
import json, os, sys
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(BASE, 'images')
MANIFEST = os.path.join(BASE, '_missing_images.json')

# Gradient colors matching the app's CSS
GRADIENTS = {
    'breakfast': ((253, 244, 231), (247, 227, 198)),  # cream
    'lunch':     ((234, 241, 236), (216, 232, 220)),  # sage
    'dinner':    ((233, 241, 246), (211, 226, 237)),  # blue
    'snack':     ((251, 238, 243), (245, 219, 229)),   # pink
}

# Text colors
TEXT_DARK = (61, 79, 77)    # brand-dark
TEXT_MUTED = (130, 130, 130)
ACCENT = (212, 150, 125)    # brand-coral

# Font paths (Windows)
FONT_REGULAR = 'C:/Windows/Fonts/segoeui.ttf'
FONT_BOLD = 'C:/Windows/Fonts/segoeuib.ttf'
FONT_LIGHT = 'C:/Windows/Fonts/segoeuil.ttf'

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

def make_gradient(width, height, color1, color2):
    """Create a diagonal gradient image."""
    img = Image.new('RGB', (width, height))
    px = img.load()
    for y in range(height):
        for x in range(width):
            # Diagonal interpolation
            t = (x / width * 0.5 + y / height * 0.5)
            r = int(color1[0] + (color2[0] - color1[0]) * t)
            g = int(color1[1] + (color2[1] - color1[1]) * t)
            b = int(color1[2] + (color2[2] - color1[2]) * t)
            px[x, y] = (r, g, b)
    return img

def make_gradient_fast(width, height, color1, color2):
    """Create a diagonal gradient image using numpy-style approach (faster)."""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    # Draw horizontal gradient lines (faster than pixel-by-pixel)
    for y in range(height):
        t_y = y / height * 0.5
        r = int(color1[0] + (color2[0] - color1[0]) * t_y)
        g = int(color1[1] + (color2[1] - color1[1]) * t_y)
        b = int(color1[2] + (color2[2] - color1[2]) * t_y)
        # Also vary horizontally
        for x in range(0, width, 4):  # step by 4 for speed
            t_x = x / width * 0.5
            r2 = int(r + (color2[0] - color1[0]) * t_x)
            g2 = int(g + (color2[1] - color1[1]) * t_x)
            b2 = int(b + (color2[2] - color1[2]) * t_x)
            draw.rectangle([x, y, x + 3, y], fill=(r2, g2, b2))
    return img

def draw_rounded_rect(draw, xy, radius, fill):
    """Draw a rounded rectangle."""
    x1, y1, x2, y2 = xy
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill)
    draw.pieslice([x1, y1, x1 + 2*radius, y1 + 2*radius], 180, 270, fill=fill)
    draw.pieslice([x2 - 2*radius, y1, x2, y1 + 2*radius], 270, 360, fill=fill)
    draw.pieslice([x1, y2 - 2*radius, x1 + 2*radius, y2], 90, 180, fill=fill)
    draw.pieslice([x2 - 2*radius, y2 - 2*radius, x2, y2], 0, 90, fill=fill)

def wrap_text(text, font, max_width, draw):
    """Wrap text to fit within max_width."""
    words = text.split()
    lines = []
    current = []
    for w in words:
        test = ' '.join(current + [w])
        bbox = draw.textbbox((0, 0), test, font=font)
        w_px = bbox[2] - bbox[0]
        if w_px <= max_width or not current:
            current.append(w)
        else:
            lines.append(' '.join(current))
            current = [w]
    if current:
        lines.append(' '.join(current))
    return lines

def generate_image(recipe):
    """Generate a placeholder image for a recipe."""
    filepath = os.path.join(IMG_DIR, recipe['img'])
    if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
        return True

    name = recipe['name']
    rtype = recipe.get('type', 'snack')
    emoji = recipe.get('emoji', '')

    W, H = 400, 300
    c1, c2 = GRADIENTS.get(rtype, GRADIENTS['snack'])

    # Create gradient background
    img = make_gradient_fast(W, H, c1, c2)
    draw = ImageDraw.Draw(img)

    # Draw a subtle white rounded rectangle in center for text area
    margin = 30
    rect_xy = (margin, H // 2 - 60, W - margin, H // 2 + 60)
    # Semi-transparent white overlay
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    draw_rounded_rect(overlay_draw, rect_xy, 12, (255, 255, 255, 140))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Draw emoji (if renderable) - large, centered above text
    try:
        emoji_font = ImageFont.truetype('C:/Windows/Fonts/seguiemj.ttf', 48)
        # Try to draw emoji
        bbox = draw.textbbox((0, 0), emoji, font=emoji_font)
        ew = bbox[2] - bbox[0]
        eh = bbox[3] - bbox[1]
        draw.text((W // 2 - ew // 2, 50), emoji, font=emoji_font, fill=TEXT_DARK)
    except:
        pass

    # Draw recipe name
    name_font = get_font(FONT_BOLD, 24)
    lines = wrap_text(name, name_font, W - 2 * margin - 20, draw)
    total_h = len(lines) * 30
    start_y = H // 2 - total_h // 2 + 10
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=name_font)
        tw = bbox[2] - bbox[0]
        x = (W - tw) // 2
        y = start_y + i * 30
        draw.text((x, y), line, font=name_font, fill=TEXT_DARK)

    # Draw a decorative line below the name
    line_y = start_y + total_h + 8
    line_w = 60
    draw.rectangle([(W // 2 - line_w // 2, line_y), (W // 2 + line_w // 2, line_y + 2)], fill=ACCENT)

    # Save as JPEG
    img.save(filepath, 'JPEG', quality=82)
    return True

def main():
    with open(MANIFEST, 'r') as f:
        recipes = json.load(f)

    # Filter out existing
    to_gen = []
    for r in recipes:
        fp = os.path.join(IMG_DIR, r['img'])
        if not (os.path.exists(fp) and os.path.getsize(fp) > 5000):
            to_gen.append(r)

    total = len(to_gen)
    print(f'Generating {total} placeholder images...')
    sys.stdout.flush()

    success = 0
    failed = 0
    for i, recipe in enumerate(to_gen):
        try:
            generate_image(recipe)
            success += 1
        except Exception as e:
            failed += 1
            print(f'  FAILED {recipe["id"]}: {str(e)[:60]}')
        if (i + 1) % 25 == 0 or (i + 1) == total:
            print(f'  [{i+1}/{total}] OK={success} FAIL={failed}')
            sys.stdout.flush()

    print(f'\nDone! Generated: {success}, Failed: {failed}')

if __name__ == '__main__':
    main()
