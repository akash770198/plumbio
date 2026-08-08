"""One-off asset pipeline: resize/compress generated art and cut out the plumber."""
import os
from collections import deque
from PIL import Image

IMG = r"d:\CSS_Founder\Demo-ai-builder\service-industries\assets\img"

# target max width per asset
TARGETS = {
    "hero-plumber": 1920,
    "cta-pipes": 1920,
    "about-plumber": 900,
    "testimonial": 1100,
    "service-": 800,
    "gallery-": 700,
    "blog-": 800,
    "team-": 600,
}


def target_for(name):
    for k, v in TARGETS.items():
        if name.startswith(k):
            return v
    return 1000


def compress():
    for f in sorted(os.listdir(IMG)):
        if not f.lower().endswith(".jpg"):
            continue
        p = os.path.join(IMG, f)
        im = Image.open(p).convert("RGB")
        mw = target_for(os.path.splitext(f)[0])
        if im.width > mw:
            im = im.resize((mw, round(im.height * mw / im.width)), Image.LANCZOS)
        im.save(p, "JPEG", quality=82, optimize=True, progressive=True)
        print(f, im.size, f"{os.path.getsize(p)/1024:.0f}KB")


def cutout():
    """Flood fill the white studio backdrop from the borders so the portrait can
    sit directly on the blue section background."""
    src = os.path.join(IMG, "committed-plumber.jpg")
    im = Image.open(src).convert("RGB")
    mw = 900
    im = im.resize((mw, round(im.height * mw / im.width)), Image.LANCZOS)
    w, h = im.size
    px = im.load()
    alpha = Image.new("L", (w, h), 255)
    ap = alpha.load()

    thresh = 233
    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            q.append((x, y))

    while q:
        x, y = q.popleft()
        i = y * w + x
        if seen[i]:
            continue
        seen[i] = 1
        r, g, b = px[x, y]
        if r < thresh or g < thresh or b < thresh:
            continue
        ap[x, y] = 0
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx]:
                q.append((nx, ny))

    # soften the cut so the silhouette does not look stamped on
    from PIL import ImageFilter
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.8))
    out = im.convert("RGBA")
    out.putalpha(alpha)
    out = out.crop(out.getbbox())
    dst = os.path.join(IMG, "committed-plumber.png")
    out.save(dst, "PNG", optimize=True)
    os.remove(src)
    print("cutout", out.size, f"{os.path.getsize(dst)/1024:.0f}KB")


if __name__ == "__main__":
    cutout()
    compress()
