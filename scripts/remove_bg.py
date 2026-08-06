"""One-off: strip the white background from the llama asset."""
from pathlib import Path

from PIL import Image
from rembg import remove

root = Path(__file__).resolve().parent.parent
src = root / "public" / "llama.png"
dst = root / "public" / "llama-nobg.png"

with Image.open(src) as img:
    result = remove(img)
    result.save(dst)

print(f"saved {dst}")
