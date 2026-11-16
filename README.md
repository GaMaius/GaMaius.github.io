# 지우가람 포트폴리오

**https://gamaius.github.io**

Unity 게임 클라이언트 개발자 지우가람의 포트폴리오 사이트입니다.
대표작 Drilling의 분위기를 따라, 위쪽은 도트 게임 UI이고 아래로 내려갈수록 일반 UI로 해상도가 올라가도록 구성했습니다.
대표작은 Steam에 정식 출시한 [Drilling](https://store.steampowered.com/app/4304980/Drilling/)입니다.

## 구조

| 파일 | 역할 |
|---|---|
| `data.js` | 모든 내용(소개, 프로젝트, 경력, 기술). 내용 수정은 이 파일만 고치면 됩니다 |
| `site.js` | `data.js`를 읽어 화면을 그리고 프로젝트 상세 창을 엽니다 |
| `site.css` | 스타일 |
| `index.html` | 첫 페이지 |
| `projects.html` | 예전 주소 호환용. 첫 페이지 프로젝트 구간으로 넘어갑니다 |
| `specs.html` | 예전 주소 호환용. 첫 페이지의 경력 구간으로 넘어갑니다 |
| `img/` | WebP로 변환한 스크린샷 |
| `img/px/` | Pixel Factory로 만든 도트 이미지(배경, 아이콘). 없는 아이콘은 광석 모양으로 대체됩니다 |

빌드 과정 없이 정적 파일 그대로 GitHub Pages로 배포됩니다.
로컬에서 볼 때는 `python -m http.server` 후 `http://localhost:8000`을 엽니다.

## 이전 디자인

2026-11-16 개편 이전의 디자인과 파일은 태그 `design-before-recruit-20261116`에 남아 있습니다.

```bash
git checkout design-before-recruit-20261116 -- .
```
