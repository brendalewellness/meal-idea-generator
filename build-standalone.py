#!/usr/bin/env python3
"""
把整个应用打包成「单文件 HTML」——图片和菜品库全部内嵌，双击即可运行。

用法：
    python build-standalone.py

产出：
    dist/meal-idea-generator.html    （一个文件，含全部 32 张配图）

适合：直接发给别人（微信/邮件/网盘），对方不需要文件夹结构、不需要联网、不需要装任何东西。

注意：图片会等比压缩到 max 640px / JPEG q78 以内嵌，以控制单文件体积。
      原始高清图仍在 images/ 目录中，网页版用的是原图。
"""
import base64
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(ROOT, "images")
MEALS_JS = os.path.join(ROOT, "data", "meals.js")
NEW_RECIPES_JS = os.path.join(ROOT, "data", "new-recipes.js")
EXTRA_RECIPES_JS = os.path.join(ROOT, "data", "extra-recipes.js")
INGREDIENT_RECIPES_JS = os.path.join(ROOT, "data", "ingredient-recipes.js")
ADDED_RECIPES_JS = os.path.join(ROOT, "data", "added-recipes.js")
MICROS_JS = os.path.join(ROOT, "data", "micronutrients.js")
INDEX_HTML = os.path.join(ROOT, "index.html")
DIST = os.path.join(ROOT, "dist")

MAX_SIDE = 640      # 内嵌图最大边长
QUALITY = 78        # JPEG 质量


def encode_image(name):
    """把 images/<name> 读成 data: URI（等比压缩）。无法识别的图返回原路径。"""
    path = os.path.join(IMG_DIR, name)
    if not os.path.exists(path) or os.path.getsize(path) == 0:
        print(f"  ⚠ 跳过空/缺失图片: {name}")
        return f"images/{name}", 0
    try:
        from PIL import Image
    except ImportError:
        sys.exit("需要 Pillow：pip install pillow")

    try:
        im = Image.open(path)
    except Exception:
        print(f"  ⚠ 跳过无法识别的图片: {name}")
        return f"images/{name}", 0
    # PNG with transparency → keep as PNG to preserve alpha
    is_png = name.lower().endswith(".png")
    if is_png and im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        im.thumbnail((MAX_SIDE, MAX_SIDE))
        buf = io.BytesIO()
        im.save(buf, "PNG", optimize=True)
        b64 = base64.b64encode(buf.getvalue()).decode("ascii")
        return f"data:image/png;base64,{b64}", len(buf.getvalue())
    else:
        im = im.convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        b64 = base64.b64encode(buf.getvalue()).decode("ascii")
        return f"data:image/jpeg;base64,{b64}", len(buf.getvalue())


def main():
    if not os.path.exists(DIST):
        os.makedirs(DIST)

    meals_src = open(MEALS_JS, encoding="utf-8").read()

    # 把 meals.js 里所有 img: 'xxx.jpg' 换成内嵌 data URI
    cache = {}
    total_raw = 0
    def repl(match):
        nonlocal total_raw
        fname = match.group(1)
        if fname not in cache:
            uri, size = encode_image(fname)
            cache[fname] = uri
            total_raw += size
            print(f"  内嵌 {fname:42s} {size/1024:6.1f} KB")
        return f"img: '{cache[fname]}'"

    meals_out = re.sub(r"img: '([^']+\.jpg)'", repl, meals_src)
    replaced = len(cache)
    print(f"\n共内嵌 {replaced} 张菜品图片，原始合计 {total_raw/1024/1024:.2f} MB")

    # 读取 new-recipes.js（新菜品库，图片为 null 无需内嵌）
    new_recipes_src = ""
    if os.path.exists(NEW_RECIPES_JS):
        new_recipes_src = open(NEW_RECIPES_JS, encoding="utf-8").read()
        new_recipes_out = re.sub(r"img: '([^']+\.jpg)'", repl, new_recipes_src)
    else:
        new_recipes_out = ""

    # 读取 extra-recipes.js（扩展菜品库，图片内嵌）
    extra_recipes_out = ""
    if os.path.exists(EXTRA_RECIPES_JS):
        extra_recipes_src = open(EXTRA_RECIPES_JS, encoding="utf-8").read()
        extra_recipes_out = re.sub(r"img: '([^']+\.jpg)'", repl, extra_recipes_src)

    # 读取 ingredient-recipes.js（基础食材库，图片为 null 无需内嵌）
    ingredient_recipes_out = ""
    if os.path.exists(INGREDIENT_RECIPES_JS):
        ingredient_recipes_src = open(INGREDIENT_RECIPES_JS, encoding="utf-8").read()
        ingredient_recipes_out = re.sub(r"img: '([^']+\.jpg)'", repl, ingredient_recipes_src)

    # 读取 added-recipes.js（新增菜品库，图片为 null 无需内嵌）
    added_recipes_out = ""
    if os.path.exists(ADDED_RECIPES_JS):
        added_recipes_src = open(ADDED_RECIPES_JS, encoding="utf-8").read()
        added_recipes_out = re.sub(r"img: '([^']+\.jpg)'", repl, added_recipes_src)

    # 读取 micronutrients.js（微量元素数据，无需内嵌图片）
    micros_out = ""
    if os.path.exists(MICROS_JS):
        micros_out = open(MICROS_JS, encoding="utf-8").read()

    html = open(INDEX_HTML, encoding="utf-8").read()

    # 用内联脚本替换 <script src="data/meals.js"></script>
    tag = '<script src="data/meals.js"></script>'
    if tag not in html:
        sys.exit("index.html 中找不到 meals.js 的 script 标签，请检查是否被改动过")
    html = html.replace(tag, "<script>\n" + meals_out + "\n</script>")

    # 用内联脚本替换 <script src="data/new-recipes.js"></script>
    tag2 = '<script src="data/new-recipes.js"></script>'
    if tag2 in html:
        html = html.replace(tag2, "<script>\n" + new_recipes_out + "\n</script>")
    elif new_recipes_out:
        # 如果 HTML 中没有但 new-recipes.js 存在，追加到 meals script 之后
        html = html.replace("</script>\n<script>", "</script>\n<script>\n" + new_recipes_out + "\n</script>\n<script>", 1)

    # 用内联脚本替换 <script src="data/extra-recipes.js"></script>
    tag_extra = '<script src="data/extra-recipes.js"></script>'
    if tag_extra in html:
        html = html.replace(tag_extra, "<script>\n" + extra_recipes_out + "\n</script>")
    elif extra_recipes_out:
        html = html.replace("</script>\n<script>", "</script>\n<script>\n" + extra_recipes_out + "\n</script>\n<script>", 1)

    # 用内联脚本替换 <script src="data/ingredient-recipes.js"></script>
    tag_ing = '<script src="data/ingredient-recipes.js"></script>'
    if tag_ing in html:
        html = html.replace(tag_ing, "<script>\n" + ingredient_recipes_out + "\n</script>")
    elif ingredient_recipes_out:
        html = html.replace("</script>\n<script>", "</script>\n<script>\n" + ingredient_recipes_out + "\n</script>\n<script>", 1)

    # 用内联脚本替换 <script src="data/added-recipes.js"></script>
    tag_added = '<script src="data/added-recipes.js"></script>'
    if tag_added in html:
        html = html.replace(tag_added, "<script>\n" + added_recipes_out + "\n</script>")
    elif added_recipes_out:
        html = html.replace("</script>\n<script>", "</script>\n<script>\n" + added_recipes_out + "\n</script>\n<script>", 1)

    # 用内联脚本替换 <script src="data/micronutrients.js"></script>
    tag3 = '<script src="data/micronutrients.js"></script>'
    if tag3 in html:
        html = html.replace(tag3, "<script>\n" + micros_out + "\n</script>")
    elif micros_out:
        html = html.replace("</script>\n<script>", "</script>\n<script>\n" + micros_out + "\n</script>\n<script>", 1)

    # 内嵌 HTML 中引用的 images/ 图片（logo 等）
    html_img_cache = {}
    def repl_html_img(match):
        nonlocal html_img_cache
        fname = match.group(1)
        if fname not in html_img_cache:
            full_path = os.path.join(IMG_DIR, fname)
            if os.path.exists(full_path):
                uri, size = encode_image(fname)
                html_img_cache[fname] = uri
                print(f"  内嵌 HTML 图片 {fname:30s} {size/1024:6.1f} KB")
            else:
                html_img_cache[fname] = f"images/{fname}"
        return f'src="{html_img_cache[fname]}"'

    html = re.sub(r'src="images/([^"]+\.(?:jpg|jpeg|png|webp))"', repl_html_img, html)

    out_path = os.path.join(DIST, "meal-idea-generator.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)

    size = os.path.getsize(out_path)
    print(f"\n✓ 已生成: {out_path}")
    print(f"  单文件大小: {size/1024/1024:.2f} MB")
    print("  双击即可运行，不需要 images/ 或 data/ 目录，也不需要联网。")

    build_web_dir()


def build_web_dir():
    """组装「网页发布版」目录：只含 index.html + data/ + images/。

    为什么不用项目根目录直接发布：根目录还有 samples/（截图和 PDF，约 7MB）
    和几个脚本，传上去既浪费又会让线上站点暴露无关文件。
    多文件版比单文件版更适合手机：首屏 HTML 很小，图片按需加载。
    """
    import shutil

    web_dir = os.path.join(DIST, "web")
    if os.path.exists(web_dir):
        shutil.rmtree(web_dir)
    os.makedirs(os.path.join(web_dir, "data"))
    os.makedirs(os.path.join(web_dir, "images"))

    shutil.copy2(INDEX_HTML, os.path.join(web_dir, "index.html"))
    shutil.copy2(MEALS_JS, os.path.join(web_dir, "data", "meals.js"))
    if os.path.exists(NEW_RECIPES_JS):
        shutil.copy2(NEW_RECIPES_JS, os.path.join(web_dir, "data", "new-recipes.js"))
    if os.path.exists(EXTRA_RECIPES_JS):
        shutil.copy2(EXTRA_RECIPES_JS, os.path.join(web_dir, "data", "extra-recipes.js"))
    if os.path.exists(INGREDIENT_RECIPES_JS):
        shutil.copy2(INGREDIENT_RECIPES_JS, os.path.join(web_dir, "data", "ingredient-recipes.js"))
    if os.path.exists(ADDED_RECIPES_JS):
        shutil.copy2(ADDED_RECIPES_JS, os.path.join(web_dir, "data", "added-recipes.js"))
    if os.path.exists(MICROS_JS):
        shutil.copy2(MICROS_JS, os.path.join(web_dir, "data", "micronutrients.js"))
    n = 0
    for f in os.listdir(IMG_DIR):
        if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            shutil.copy2(os.path.join(IMG_DIR, f), os.path.join(web_dir, "images", f))
            n += 1

    total = sum(
        os.path.getsize(os.path.join(dp, f))
        for dp, _, fs in os.walk(web_dir) for f in fs
    )
    print(f"\n✓ 已生成发布目录: {web_dir}")
    print(f"  含 index.html + data/meals.js + data/new-recipes.js + data/micronutrients.js + {n} 张图片，合计 {total/1024/1024:.2f} MB")


if __name__ == "__main__":
    main()

