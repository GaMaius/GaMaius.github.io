---
name: 회색 캔버스 + 흰 카드, 깊은 초록 주색 (포트폴리오판)
description: 회색 바탕 위 흰 섹션 카드, 깊은 초록 하나로 행동을 보이고 빨강은 문제 표시에만 쓰는 모바일 우선 웹 UI. 지우가람 포트폴리오(/profile/)용
colors:
  ink: '#191f28'
  ink-secondary: '#4e5968'
  muted: '#6b7684'
  faint: '#8b95a1'
  primary: '#0b6b4f'
  primary-strong: '#09553f'
  primary-line: '#1f8a63'
  primary-tint: '#e7f3ed'
  primary-tint-press: '#d3eadf'
  line: '#e5e8eb'
  border: '#d1d6db'
  fill: '#f2f4f6'
  fill-2: '#f9fafb'
  bg: '#ffffff'
  red: '#e02a3b'
  red-strong: '#d22030'
  red-tint: '#ffeeee'
typography:
  family: Pretendard Variable, Pretendard, system-ui, -apple-system, Apple SD Gothic Neo, Malgun Gothic, sans-serif
  hero-number: { fontSize: 34px, fontWeight: 700, use: 대시보드 큰 숫자 }
  page-title: { fontSize: 26px, fontWeight: 700, lineHeight: 1.35, use: 화면 제목 (모바일 24px) }
  section-title: { fontSize: 20px, fontWeight: 700, use: 섹션 카드 제목 }
  emphasis: { fontSize: 17px, fontWeight: 600, use: 큰 버튼, 다음 할 일 문장, 앱 이름(700) }
  input: { fontSize: 16px, fontWeight: 400, use: 입력칸·리드 문장만 (iOS 확대 방지) }
  body: { fontSize: 15px, fontWeight: 400, lineHeight: 1.5, use: 본문·표 }
  label: { fontSize: 14px, fontWeight: 600, use: 칩, 옅은 버튼, 입력 이름 }
  caption: { fontSize: 13px, fontWeight: 400, use: 배지, 힌트, 출처 }
  micro: { fontSize: 12px, fontWeight: 400, use: 아래 탭 글자, 보조 설명. 이보다 작게 쓰지 않는다 }
rounded:
  badge: 6px
  sm: 10px
  md: 12px
  button: 16px
  card: 20px
  pill: 999px
spacing: [4, 8, 12, 16, 20, 32]
layout:
  breakpoints: { mobile: '~767px (기본)', tablet: '768px~', desktop: '1200px~' }
  gutter: { mobile: 22px, tablet: 40px, desktop: 64px }
  card-padding: { mobile: 20px, tablet+: 28px }
  page-max: { tablet: 600~760px (화면 종류별), desktop: 1040px }
  topbar: 64px (태블릿·PC, sticky)
  tabbar: 64px + safe-area (모바일, 아래 고정)
  touch-target: 44px 이상
---

# 디자인 시스템: 회색 캔버스 + 흰 카드 (포트폴리오판)

> [aws.ai.maestro.6](https://github.com/GaMaius/aws.ai.maestro.6)의 `web/DESIGN.md`를 일반화한 판을 포트폴리오(`/profile/`)에 맞게 옮겼다.
> 바꾼 것은 **주색(파랑 → 깊은 초록)** 과 아래 "포트폴리오에서 쓰는 법"뿐이고, 나머지 규칙은 그대로 따른다.

## 포트폴리오에서 쓰는 법

| 업무 화면의 구성요소 | 포트폴리오에서 |
| --- | --- |
| 지금 할 일 카드 | 첫 화면 "지금 하는 일": 진행 중인 일 한 줄과 옅은 버튼 |
| 대시보드 숫자 칸 | 이력 요약(수상, 배포·운영 중, Steam 출시, 프로젝트). 주색 채움은 수상 칸 하나. 누르면 그 묶음으로 거른 프로젝트 목록 |
| 목록 + 거르기 칩 | 프로젝트 목록. 카드 위에 화면 그림(없으면 쓴 기술), 아래 회색 칸에 분야·기간·구성과 옅은 버튼 |
| 표 → 카드 (모바일) | 이력 표: 날짜, 구분, 내용, 증서 |
| 막대 목록 | 기술: 스스로 평가한 수준, 막대 끝에 숙련·중급·입문 |
| 아래에서 올라오는 시트 | 모바일의 프로젝트 상세·증서 창. PC는 가운데 창으로 열고, 그림자 대신 뒤 배경을 어둡게 한다 |

- 화면마다 채운 버튼은 하나: 첫 화면은 "메일 보내기", 상세 창은 "배포된 사이트 열기"(없으면 저장소).
- 정적 사이트라 글꼴은 빌드 대신 CDN(jsDelivr, Pretendard v1.3.9)으로 불러온다.

업무용 웹 서비스(검토·승인·대시보드·채팅처럼 "처리할 일"이 있는 화면)를 위한 디자인 규칙이다.
부산항 통관 서류 검토 서비스([aws.ai.maestro.6](https://github.com/GaMaius/aws.ai.maestro.6), `web/DESIGN.md`)에서 쓴 방식을 다른 프로젝트에 옮겨 쓸 수 있게 일반화했다.

**새 프로젝트에 쓰는 법**

1. 이 파일을 프로젝트 맨 위(또는 `web/`)에 `DESIGN.md`로 둔다. AI 코딩 도구와 사람 모두 화면을 고치기 전에 이 파일을 먼저 읽는다.
2. 맨 끝 [시작 CSS](#11-시작-css)를 전역 스타일로 복사한다.
3. 바꿀 것은 대개 **주색(초록) 하나**와 앱 이름뿐이다. 주색을 바꾸면 [색](#3-색)의 대비 표를 다시 잰다.
4. 새 색·크기가 필요하면 이 문서에 먼저 적고 CSS 변수로 쓴다. CSS에 16진 값을 바로 쓰지 않는다.

## 1. 한 줄 성격

**회색 바탕 위에 흰 카드를 놓고, 누를 것과 고른 것만 초록, 문제만 작은 빨강.** 그림자·테두리·장식 없이 바탕색 단계로 층을 나눈다.

## 2. 원칙

1. **할 일이 먼저, 기록은 나중.** 화면 맨 위에 "지금 할 일" 한 줄과 그 일로 가는 버튼을 둔다. 처리 과정·기록은 접어 둔다.
2. **초록은 행동, 빨강은 문제 표시.** 초록은 누를 것·고른 것·지금 할 일·그래프에만 쓴다. 빨강은 오류 배지, 실패 ✖, 문제 칸 테두리, 문제 줄 바탕에만 쓰고 **큰 면을 빨강으로 칠하지 않는다.** 그 밖은 회색 단계로만 나눈다.
3. **색만으로 뜻을 전하지 않는다.** 빨강 옆에는 늘 글자·기호(✖, !, ✔)를 함께 둔다. 고른 메뉴는 색에 더해 굵기와 점으로 보인다.
4. **층은 바탕색으로.** 그림자를 쓰지 않는다. `--fill`(회색 바탕) → `--bg`(흰 카드) → `--fill`(카드 안 칸) 순으로 겹친다.
5. **데이터는 그대로.** 서버·원본에서 온 숫자·문장은 화면이 다시 세거나 반올림하지 않는다. 넘치면 줄을 바꿔 보인다.
6. **모바일 우선.** 가장 좁은 화면을 기본으로 만들고 768px·1200px에서 넓힌다.

## 3. 색

회색 단계는 Toss 공개 화면에서 관찰한 값을 빌렸다. **빌린 것은 회색 값뿐이다.** 주색 초록은 이 포트폴리오를 위해 새로 골랐고 흰 바탕 대비를 다시 쟀다. Toss 로고·이름·글꼴(Toss Product Sans)은 쓰지 않고, 다른 글꼴을 Toss 글꼴이라고 부르지 않는다.

| 토큰 | 값 | 흰 바탕 대비 | 쓰는 곳 |
| --- | --- | --- | --- |
| `--ink` | `#191f28` | 16.6:1 | 제목, 본문, 값 |
| `--ink-secondary` | `#4e5968` | 7.1:1 | 보조 글자, 표 머리, 회색 칸 위 작은 글자 |
| `--muted` | `#6b7684` | 4.6:1 | 힌트, 출처, 설명 (회색 칸 위에서는 4.2:1이라 13px 이하에 쓰지 않는다) |
| `--faint` | `#8b95a1` | 3.0:1 | 입력칸 안내문, 장식, 꺼진 표시. **글자로 쓰지 않는다** |
| `--primary` | `#0b6b4f` | 6.5:1 | 채운 버튼, 고른 칩·탭·후보 바탕 (흰 글자 올림) |
| `--primary-strong` | `#09553f` | 8.8:1 | 채운 버튼 누름 |
| `--primary-line` | `#1f8a63` | 4.3:1 | 테두리, 포커스 링, 그래프 막대. **흰 글자 바탕으로 쓰지 않는다** |
| `--primary-tint` | `#e7f3ed` | – | 옅은 초록 버튼·안내 상자 바탕 |
| `--primary-tint-press` | `#d3eadf` | – | 옅은 초록 버튼 누름 |
| `--line` | `#e5e8eb` | – | 구분선, 위 막대 아래 줄 |
| `--border` | `#d1d6db` | – | 입력칸·표 테두리, 끌어다 놓기 칸 점선 |
| `--fill` | `#f2f4f6` | – | **화면 바탕**, 카드 안 회색 칸, 표 머리, 고르지 않은 칩 |
| `--fill-2` | `#f9fafb` | – | 더 옅은 칸, 접힌 기록 묶음 |
| `--bg` | `#ffffff` | – | 카드, 위 막대, 아래 탭 |
| `--red` | `#e02a3b` | 4.6:1 | 오류·실패·문제 표시에만 |
| `--red-strong` | `#d22030` | 5.3:1 | 옅은 빨강 바탕 위 글자(4.7:1), 빨강 버튼 누름 |
| `--red-tint` | `#ffeeee` | – | 문제 줄·문제 안내 상자 바탕 |

- 성공 색은 따로 없다. 성공은 ✔ 표시와 글자, 또는 옅은 초록 배지로 보인다.
- 초록 칸 위의 보조 글자는 회색 대신 `rgba(255,255,255,0.92)`.
- 주색을 바꾸면: 채운 버튼 색은 흰 글자 4.5:1 이상, 선·링 색은 바탕 3:1 이상이 되게 두 값을 따로 고른다.

### 상태 배지 세 단계

| 단계 | 모양 | 예 |
| --- | --- | --- |
| 오류 | 빨강 바탕 + 흰 글자, 줄이면 빨간 왼쪽 막대 | 불일치, 실패 |
| 주의 | 흰 바탕 + 빨강 테두리 + 빨강 글자 | 확인 필요 |
| 참고·보통 | `--fill` 바탕 + `--ink-secondary` 글자 | 대기, 참고 |
| 끝남·좋음 | `--primary-tint` 바탕 + `--primary` 글자 | 완료, 등록됨 |

"대기"는 오류가 아니다. 회색으로 둔다.

### 그래프

한 색(주색)의 짙기만 바꾼다: `#0b6b4f` → `#1f8a63` → `#4ea883` → `#86c6a8` → `#c3e3d3` → `#e7f3ed`.
그래프 아래(또는 옆)에는 **같은 값의 표**를 늘 둔다. 막대는 `--fill` 트랙 위에 주색 막대, 끝에 숫자.

## 4. 글자

- 글꼴: [Pretendard](https://github.com/orioncactus/pretendard) (OFL). npm `pretendard`로 빌드에 넣고 외부 주소를 부르지 않는다.
- 크기는 위 `typography`의 단계만 쓴다: 34 · 26 · 20 · 17 · 15 · 14 · 13 · 12px. **16px은 입력칸과 리드 문장에만.**
- 제목 자간 `-0.03em`(26px) · `-0.02em`(20px), 본문 `-0.01em`. 줄 높이 본문 1.5, 제목 1.35.
- 한글은 낱말 중간에서 줄을 바꾸지 않는다: `word-break: keep-all; overflow-wrap: break-word`. 긴 번호·영문은 `overflow-wrap: anywhere`로 끊는다.
- 입력칸 글자는 16px 이상 (iOS가 입력할 때 화면을 확대하지 않게).
- 숫자는 원본에 적힌 그대로. 표의 숫자 열만 오른쪽 정렬, `font-variant-numeric: tabular-nums`.

## 5. 간격 · 모서리 · 깊이 · 움직임

- 간격: 4 · 8 · 12 · 16 · 20 · 32px. 카드 안쪽 20px(모바일)·28px(태블릿 이상). 카드 사이 12px.
- 모서리: 배지 6 · 옅은 버튼·메뉴 10 · 입력칸·작은 칸 12 · 채운 버튼 16 · 카드 20 · 칩 999px.
- 깊이: 그림자 없음. 예외는 화면 아래에서 올라오는 시트(모바일 목록) 하나: `0 -8px 24px rgba(0,0,0,0.08)`.
- 움직임: 0.15~0.2초, `ease-out`. 누를 때 `scale(0.98)`. `prefers-reduced-motion: reduce`면 모두 끈다.

## 6. 배치

### 틀

| | 모바일 (~767px) | 태블릿 (768~1199px) | PC (1200px~) |
| --- | --- | --- | --- |
| 양옆 여백 | 22px | 40px | 64px |
| 본문 폭 | 제한 없음 | 화면 종류별 600~760px, 가운데 | **1040px**, 가운데 |
| 메뉴 | 아래 고정 탭 64px + 안전 영역 | 위 막대 64px (sticky) | 위 막대 64px (sticky), 메뉴도 1040px 안 |
| 카드 안쪽 | 20px | 28px | 28px |

- 넓은 화면에서 본문을 창 너비만큼 늘리지 않는다 (`max-width` + `margin: 0 auto`). 위 막대의 앱 이름·메뉴도 같은 폭 안에 넣어 본문과 왼쪽 선을 맞춘다.
- 페이지에 가로 스크롤을 만들지 않는다. 넓은 표·단계 표시줄만 그 안에서 민다. 넘침은 `min-width: 0`으로 막는다.

### 위 막대 (태블릿·PC)

흰 바탕(`rgba(255,255,255,0.96)` + 흐림), 높이 64px, 아래 1px `--line`, 스크롤해도 붙어 있다.
왼쪽 앱 이름 17px/700, 메뉴는 글자만 (`--muted` 15px/500), 고른 메뉴는 `--fill` 칸 + `--ink` 700.
모바일에서는 위 막대에 `sticky`·`backdrop-filter`를 걸지 않는다 (안의 `position: fixed` 탭이 막대 기준으로 붙어 버린다).

### 아래 탭 (모바일)

흰 바탕, 위 1px `--line`, 높이 64px + `env(safe-area-inset-bottom)`. 칸마다 아이콘 + 12px 글자.
고른 탭은 `--ink` 600 + 글자 아래 4px 초록 점. 본문 아래에 탭 높이 + 24px 여백을 둔다.

### 아래 고정 행동 (모바일)

업로드·채팅처럼 주 행동이 하나인 화면은 버튼·입력칸을 아래 탭 바로 위에 고정하고, 이런 화면은 본문을 카드로 감싸지 않는다.
태블릿은 화면 아래 가운데에 고정, PC는 내용 안에 둔다.

## 7. 구성요소

| 이름 | 모양 | 상태 |
| --- | --- | --- |
| **채운 버튼** (화면마다 하나) | `--primary` 바탕, 흰 글자 17px/600, 16px 모서리, 높이 56px 이상, 모바일은 꽉 찬 폭 | 누름 `--primary-strong` + 0.98배, 꺼짐 투명도 0.45 |
| **옅은 버튼** (보조 행동) | `--primary-tint` 바탕, `--primary` 글자 14px/600, 10px 모서리, 높이 40px | 누름 `--primary-tint-press`. 옅은 빨강 상자 안에서는 흰 바탕 |
| **회색 버튼** (취소·닫기) | `--fill` 바탕, `--ink` 글자, 10px 모서리 | 누름 `--border` |
| **글자 버튼** | 바탕 없음, `--primary` 글자, 밑줄 없음 | – |
| **칩·탭** | 999px. 고르지 않음 `--fill` 바탕 + `--ink-secondary` / 고름 `--primary` 바탕 + 흰 글자. 회색 바탕 위에 바로 놓이면 고르지 않은 칩은 흰 칸 | `aria-selected` / `aria-pressed` |
| **섹션 카드** | 흰 바탕, 테두리·그림자 없음, 20px 모서리, 안쪽 20/28px, 제목 20px/700 | – |
| **지금 할 일 카드** | 흰 카드, 왼쪽 작은 이름표("다음 할 일") + 문장 17px/700 + 옅은 버튼. 문제 상태면 `--red-tint` 바탕까지는 허용 (진한 빨강 면은 금지) | – |
| **단계 표시줄** | 흰 칸 여러 개 가로 (모바일은 가로 밀기), 12px 모서리. 칸마다 표시 원 + 이름 14px/600 + 설명 12px. 고른 칸은 안쪽 2px `--ink` 테두리 | 표시 원: 완료 ✔·할 일 ! 주색, 대기 … 회색, 실패 ✖ 빨강 |
| **배지** | 6px 모서리, 높이 24~26px, 13px/600, 테두리 없음 ([상태 배지 세 단계](#상태-배지-세-단계)) | – |
| **입력칸** | `--fill` 바탕, 테두리 없음, 높이 52px, 12px 모서리, 16px 글자, 안내문 `--faint` | 포커스 링 |
| **폼** | 세로 한 줄: 이름 → 입력 → 안내 → 확인 상자 → 꽉 찬 채운 버튼. 가로로 늘어놓지 않는다. 필요한 칸을 채워야 버튼이 켜진다 | – |
| **표** | 머리 `--fill` 바탕 + `--ink-secondary` 13px, 본문 흰 바탕 + `--ink` 15px, 가로줄 1px `--line`. 세로줄 없음 | – |
| **표 → 카드 (모바일)** | `<table>`은 그대로 두고 767px 이하에서 줄마다 `--fill` 카드(12px 모서리)로 바꾼다. 칸 이름은 `td`의 `data-label`을 `::before`로 왼쪽에 | – |
| **목록 카드** | 흰 카드 한 장 = 항목 하나. 위에 제목·상태 배지, 가운데 내용, 아래 회색 칸에 요약 줄(문제 · 할 일)과 옅은 버튼 | – |
| **대시보드 숫자 칸** | 흰 카드, 이름 14px/600 → 큰 숫자 34px/700 + 단위 → 설명 13px. 할 일이 가장 급한 칸 하나만 주색 채움 + 흰 글자 | 누르면 해당 목록으로 |
| **막대 목록** | 이름 · `--fill` 트랙 위 주색 막대 · 숫자. 같은 값의 표를 함께 | – |
| **끌어다 놓기 칸** | 흰 칸, 1.5px 점선 `--border`, 가운데 + 아이콘과 "파일 고르기" | 끌어 올림 중 `--primary-line` 실선 + `--primary-tint` 바탕 |
| **빈 화면·안내** | `--muted` 15px 한두 줄, 가운데. 할 수 있는 행동이 있으면 옅은 버튼 하나 | – |
| **문제 위치 표시** (그림·문서 위) | 문제 칸에 빨강 테두리만, 설명 말풍선은 `--ink` 바탕 흰 글자 | – |
| **포커스 링** | 모든 누를 수 있는 것: `outline: 2px solid var(--primary-line); outline-offset: 2px` (`:focus-visible`) | – |

## 8. 화면 패턴

| 패턴 | 위에서 아래로 |
| --- | --- |
| **상세 / 처리 화면** | 제목 + 상태 배지 → 지금 할 일 카드 → 단계 표시줄 → 고른 단계 하나의 내용 카드. 처음 열 때는 할 일이 있는 단계를 연다. 처리 기록은 묶어서 접고, 실패가 있는 묶음만 펼친다 |
| **대시보드** | 제목 → 숫자 칸 한 줄(모바일 2열) → 섹션 카드 2열(PC)·1열(모바일): 막대 목록 + 같은 값의 표. 칸을 누르면 거른 목록으로 간다 |
| **목록** | 왼쪽(PC) 또는 위(모바일)에 거르기 칩 → 목록 카드. 모바일은 아래에서 올라오는 시트로 상세 |
| **업로드** | 가운데 제목 26px + 리드 16px → 끌어다 놓기 칸 → 고른 파일 목록(오른쪽 위 X로 빼기) → 채운 버튼(모바일은 아래 고정) |
| **채팅** | PC: 왼쪽 제목·예시 질문 칩, 오른쪽 대화 카드 + 입력칸. 모바일: 예시 → 대화 → 입력칸 아래 고정. 답에는 조건 칩과 표(모바일은 카드)를 함께 |

## 9. 접근성 체크리스트

- [ ] 누르는 곳 44×44px 이상 (아래 탭 칸, 칩, 아이콘 버튼 포함)
- [ ] 입력칸 글자 16px 이상
- [ ] 글자 대비 4.5:1 이상 (큰 글자 3:1), UI 선·막대 3:1 이상. `--faint`는 글자에 쓰지 않음
- [ ] 상태를 색만으로 구분하지 않음 (글자·기호·굵기·점 함께)
- [ ] 모든 누를 수 있는 것에 `:focus-visible` 링
- [ ] 아래 고정 요소는 `safe-area-inset-bottom`만큼 띄움
- [ ] `prefers-reduced-motion`에서 움직임·자동 재생 끔
- [ ] 그래프에는 같은 값의 표, 아이콘만 있는 버튼에는 `aria-label`
- [ ] 화면에 안 보이는 이름표는 `.visually-hidden` (`display: none` 아님)

## 10. 할 것 / 하지 말 것

**할 것**

- 화면마다 채운 버튼은 하나. 나머지 행동은 옅은 버튼·글자 버튼.
- 새 색·크기는 이 문서에 먼저 적고 CSS 변수로.
- 빨강을 쓸 때 글자·기호를 같이.
- 원본 값은 그대로 보이고, 넘치면 줄 바꿈.

**하지 말 것**

- 그림자·테두리로 층을 만들지 않는다 (아래 시트만 예외).
- 큰 면(카드 바탕, 상자 채움)을 진한 빨강으로 칠하지 않는다.
- 초록을 장식에 쓰지 않는다 (누를 것·고른 것·그래프만).
- `--primary-line`(`#1f8a63`) 위에 흰 글자를 올리지 않는다.
- 12px보다 작은 글자, 위 단계에 없는 크기를 쓰지 않는다.
- Toss 로고·이름·글꼴을 쓰지 않는다.
- 다크 모드는 정의돼 있지 않다. 필요하면 회색 단계를 새로 잡고 대비를 다시 잰 뒤 이 문서에 먼저 추가한다.

## 11. 시작 CSS

전역 스타일에 그대로 복사해 쓴다. 클래스 이름은 예시다. 프로젝트에 맞게 바꿔도 값은 바꾸지 않는다.

```css
/* 글꼴: npm i pretendard → import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"; */
:root {
  --ink: #191f28;
  --ink-secondary: #4e5968;
  --muted: #6b7684;
  --faint: #8b95a1;
  --primary: #0b6b4f;
  --primary-strong: #09553f;
  --primary-line: #1f8a63;
  --primary-tint: #e7f3ed;
  --primary-tint-press: #d3eadf;
  --line: #e5e8eb;
  --border: #d1d6db;
  --fill: #f2f4f6;
  --fill-2: #f9fafb;
  --bg: #ffffff;
  --red: #e02a3b;
  --red-strong: #d22030;
  --red-tint: #ffeeee;

  --radius-badge: 6px;
  --radius-sm: 10px;
  --radius-md: 12px;
  --radius-btn: 16px;
  --radius-card: 20px;

  --gutter: 22px;
  --card-pad: 20px;
  --page-max: 1040px;
  --topbar-h: 64px;
  --tabbar-h: 64px;
  --safe-bottom: env(safe-area-inset-bottom, 0px);

  font-family: "Pretendard Variable", Pretendard, system-ui, -apple-system, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
  color: var(--ink);
  -webkit-text-size-adjust: 100%;
}

@media (min-width: 768px) { :root { --gutter: 40px; --card-pad: 28px; } }
@media (min-width: 1200px) { :root { --gutter: 64px; } }

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  word-break: keep-all;
  overflow-wrap: break-word;
  background: var(--fill);
  -webkit-font-smoothing: antialiased;
}

h1 { margin: 0; font-size: 24px; font-weight: 700; line-height: 1.35; letter-spacing: -0.03em; }
h2 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
@media (min-width: 768px) { h1 { font-size: 26px; } }
p { margin: 0; }

:focus-visible { outline: 2px solid var(--primary-line); outline-offset: 2px; }

.visually-hidden {
  position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0;
  overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0;
}

/* 본문 틀 */
.content {
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 20px var(--gutter) calc(var(--tabbar-h) + var(--safe-bottom) + 24px);
}
@media (min-width: 768px) { .content { padding: 32px var(--gutter) 48px; } }

/* 섹션 카드 */
.card { padding: var(--card-pad); background: var(--bg); border-radius: var(--radius-card); }
.card + .card { margin-top: 12px; }

/* 버튼 셋 */
button { font: inherit; color: inherit; cursor: pointer; border: 0; }
button:disabled { cursor: not-allowed; opacity: 0.45; }

.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 56px; padding: 0 24px;
  font-size: 17px; font-weight: 600; color: #fff;
  background: var(--primary); border-radius: var(--radius-btn);
  transition: transform 0.15s ease-out, background 0.15s ease-out;
}
.btn-primary:active { background: var(--primary-strong); transform: scale(0.98); }

.btn-tint {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 40px; padding: 0 16px;
  font-size: 14px; font-weight: 600; color: var(--primary);
  background: var(--primary-tint); border-radius: var(--radius-sm); text-decoration: none;
}
.btn-tint:active { background: var(--primary-tint-press); }

.btn-gray {
  min-height: 40px; padding: 0 16px; font-size: 14px; font-weight: 600;
  color: var(--ink); background: var(--fill); border-radius: var(--radius-sm);
}

.btn-text { padding: 0; color: var(--primary); background: none; }

/* 칩 */
.chip {
  display: inline-flex; align-items: center; gap: 6px;
  min-height: 44px; padding: 0 16px;
  font-size: 14px; font-weight: 600; color: var(--ink-secondary);
  background: var(--fill); border-radius: 999px;
}
.chip[aria-selected="true"], .chip[aria-pressed="true"] { color: #fff; background: var(--primary); }

/* 배지 */
.badge {
  display: inline-flex; align-items: center; min-height: 24px; padding: 0 8px;
  font-size: 13px; font-weight: 600; color: var(--ink-secondary);
  background: var(--fill); border-radius: var(--radius-badge);
}
.badge-error { color: #fff; background: var(--red); }
.badge-warn { color: var(--red-strong); background: var(--bg); box-shadow: inset 0 0 0 1.5px var(--red); }
.badge-done { color: var(--primary); background: var(--primary-tint); }

/* 입력칸 (16px: iOS 확대 방지) */
input[type="text"], input[type="search"], input[type="email"], select, textarea {
  min-height: 52px; padding: 0 16px;
  font: inherit; font-size: 16px; color: var(--ink);
  background: var(--fill); border: 0; border-radius: var(--radius-md);
}
textarea { padding: 14px 16px; }
::placeholder { color: var(--faint); }

/* 표 → 모바일 카드 (td 에 data-label) */
table.cells { width: 100%; font-size: 15px; border-collapse: collapse; }
table.cells th, table.cells td { padding: 12px 8px; text-align: left; border-bottom: 1px solid var(--line); }
table.cells th { font-size: 13px; font-weight: 600; color: var(--ink-secondary); background: var(--fill); }
@media (max-width: 767px) {
  table.cards, table.cards tbody, table.cards tr { display: block; }
  table.cards thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  table.cards tr { margin-bottom: 8px; padding: 6px 18px; background: var(--fill); border-radius: var(--radius-md); }
  table.cards td {
    display: grid; grid-template-columns: 84px minmax(0, 1fr); gap: 10px;
    padding: 8px 0; border-bottom: 1px solid var(--line); overflow-wrap: anywhere;
  }
  table.cards td:last-child { border-bottom: 0; }
  table.cards td::before { content: attr(data-label); color: var(--muted); }
}

/* 메뉴: 모바일 아래 탭 → 태블릿·PC 위 막대 */
.topbar { display: flex; align-items: center; gap: 28px; padding: 16px var(--gutter) 0; }
.brand { font-size: 17px; font-weight: 700; color: var(--ink); }
.menu {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 20;
  display: flex; height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding: 0 12px var(--safe-bottom);
  background: var(--bg); border-top: 1px solid var(--line);
}
.menu-item {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  min-height: 44px; font-size: 12px; color: var(--muted); background: none;
}
.menu-item::after { content: ""; width: 4px; height: 4px; border-radius: 50%; }
.menu-item[aria-current="page"] { font-weight: 600; color: var(--ink); }
.menu-item[aria-current="page"]::after { background: var(--primary); }

@media (min-width: 768px) {
  .topbar {
    position: sticky; top: 0; z-index: 30;
    /* 앱 이름·메뉴를 본문(.content)과 같은 왼쪽 선에 맞춘다 */
    height: var(--topbar-h); padding: 0 max(var(--gutter), calc((100% - var(--page-max)) / 2 + var(--gutter)));
    background: rgba(255, 255, 255, 0.96); border-bottom: 1px solid var(--line);
    backdrop-filter: saturate(1.4) blur(10px);
  }
  .menu { position: static; height: auto; gap: 2px; padding: 0; background: none; border: 0; }
  .menu-item { flex: none; flex-direction: row; min-height: 40px; padding: 0 14px; font-size: 15px; font-weight: 500; border-radius: var(--radius-sm); }
  .menu-item .icon, .menu-item::after { display: none; }
  .menu-item:hover { color: var(--ink); background: var(--fill); }
  .menu-item[aria-current="page"] { font-weight: 700; background: var(--fill); }
}

/* 아래에서 올라오는 시트: 그림자를 쓰는 유일한 곳 */
.sheet {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 40;
  padding: 24px var(--gutter) calc(24px + var(--safe-bottom));
  background: var(--bg); border-radius: var(--radius-card) var(--radius-card) 0 0;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
```

## 출처

- 처음 만든 곳: [aws.ai.maestro.6](https://github.com/GaMaius/aws.ai.maestro.6) `web/DESIGN.md`, `web/src/styles.css` (2026 AWS X PNU AI 마에스트로 해커톤 6팀, 화면 담당)
- 색 값: Toss 공개 화면 관찰값 (2026-09). 색 값 외의 Toss 자산은 쓰지 않는다
- 글꼴: Pretendard (SIL Open Font License 1.1)
