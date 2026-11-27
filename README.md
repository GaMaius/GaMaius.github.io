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

## 범용 버전

**https://gamaius.github.io/profile/**

어느 직무에나 낼 수 있게 만든 버전입니다. 깊은 숲색(#0f3b2e) 첫 화면과 연락 구간 사이에 흰 본문을 두고,
제목은 한글 세리프(Hahmlet), 본문은 Pretendard를 씁니다. 대표 작업 3개를 크게 보여 주고, 전체 작업은 목록으로 정리했습니다
(PC에서 줄에 마우스를 올리면 화면 미리보기). 상세는 오른쪽에서 열리는 서랍 창입니다.

| 파일 | 역할 |
|---|---|
| `profile/data-profile.js` | 이 버전에서 무엇을 앞에 둘지: 첫 화면 문장과 이력 요약, 대표 작업과 핵심 세 줄, 목록 순서 |
| `profile/profile.js`, `profile/profile.css` | 화면과 스타일 |

프로젝트·경력·기술 내용은 루트의 `data.js`를 같이 씁니다.

## 게임 외 직무용 버전

**https://gamaius.github.io/dev/**

게임 회사가 아닌 곳(AI·웹 서비스 개발)에 지원할 때 쓰는 버전입니다. 도트 연출 없이 밝은 일반 UI이고,
대표 프로젝트마다 데이터가 흐르는 길(파이프라인)과 그 사이에서 내린 결정을 보여 줍니다.

| 파일 | 역할 |
|---|---|
| `dev/data-dev.js` | 이 버전에서 무엇을 앞에 둘지, 파이프라인, 핵심 결정, 일하는 방식 문구 |
| `dev/dev.js`, `dev/dev.css` | 화면과 스타일 |
| `dev/img/` | Gemini로 만든 일러스트 |

프로젝트 상세(기간, 구성, 섹션, 스택, 링크)는 루트의 `data.js`를 같이 씁니다. 프로젝트 내용을 고치면 두 버전에 함께 반영됩니다.

빌드 과정 없이 정적 파일 그대로 GitHub Pages로 배포됩니다.
로컬에서 볼 때는 `python -m http.server` 후 `http://localhost:8000`을 엽니다.

## 이전 디자인

2026-11-16 개편 이전의 디자인과 파일은 태그 `design-before-recruit-20261116`에 남아 있습니다.

```bash
git checkout design-before-recruit-20261116 -- .
```
