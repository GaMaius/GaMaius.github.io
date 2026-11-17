"""포트폴리오 도트 아이콘을 Aseprite에서 한 번에 고치기 위한 도구.

    python tools/icons/icons.py sheet   # img/px 의 아이콘들을 한 장(icons-sheet.png)으로 모은다
    python tools/icons/icons.py split   # 고친 icons-sheet.png 를 다시 img/px/<이름>.png 로 나눈다

시트는 가로 8칸, 한 칸 24×24px 이고 칸 사이 여백이 없다.
Aseprite에서 View > Grid > Grid Settings 를 24×24 로 맞추면 칸이 그대로 보인다.
칸 순서는 order.txt 에 적힌 순서(왼쪽 위부터 오른쪽으로)다. 순서를 바꾸지 말 것.
"""
import os
import sys

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
PX = os.path.join(ROOT, "img", "px")
SHEET = os.path.join(HERE, "icons-sheet.png")
CELL, COLS = 24, 8


def names():
    with open(os.path.join(HERE, "order.txt"), encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]


def sheet():
    ns = names()
    rows = (len(ns) + COLS - 1) // COLS
    out = Image.new("RGBA", (COLS * CELL, rows * CELL), (0, 0, 0, 0))
    for i, n in enumerate(ns):
        icon = Image.open(os.path.join(PX, n + ".png")).convert("RGBA")
        if icon.size != (CELL, CELL):
            sys.exit(f"{n}.png 이 {CELL}×{CELL} 이 아닙니다: {icon.size}")
        out.paste(icon, ((i % COLS) * CELL, (i // COLS) * CELL))
    out.save(SHEET)
    print(f"{SHEET} 저장 ({len(ns)}개, {out.width}×{out.height})")


def split():
    ns = names()
    im = Image.open(SHEET).convert("RGBA")
    for i, n in enumerate(ns):
        x, y = (i % COLS) * CELL, (i // COLS) * CELL
        icon = im.crop((x, y, x + CELL, y + CELL))
        # 반투명 픽셀이 생겼다면(브러시 안티앨리어싱 등) 완전 투명/불투명으로 정리
        a = icon.getchannel("A").point(lambda v: 255 if v >= 128 else 0)
        icon.putalpha(a)
        icon.save(os.path.join(PX, n + ".png"))
    print(f"{len(ns)}개 아이콘을 img/px 에 저장")


if __name__ == "__main__":
    {"sheet": sheet, "split": split}.get(sys.argv[1] if len(sys.argv) > 1 else "", lambda: print(__doc__))()
