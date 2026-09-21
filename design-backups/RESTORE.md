# 디자인 변경 전 백업

## 평소 디자인 전환

현재 사이트의 상단 **화려한** 링크를 누르면 `vivid/`의 이전 디자인으로 이동합니다.
그 화면의 **심플한** 링크를 누르면 현재 디자인으로 돌아옵니다. 홈·프로젝트·스펙 모두 대응하는 페이지로 전환됩니다.
복원 명령은 필요하지 않습니다. 두 디자인은 루트 `data.js`를 공유하므로 프로젝트 내용도 함께 갱신됩니다.
`vivid/assets.js`는 하위 경로에서 이미지가 열리도록 경로만 보정합니다.

`before-modern-20260921.zip`은 2026-09-21 후보 제작 직전 루트의 HTML, CSS, JavaScript, PNG, Markdown 파일을 보관합니다.
기준 Git 커밋: `a00de2e51521c83930e6771a27dcef5e3ff33ccc`.

E 후보를 기반으로 홈·프로젝트·스펙에 Studio 테마를 적용했습니다.
원래 `styles.css`, `script.js`, `data.js`는 그대로 유지했습니다. 새 디자인은 `studio.css`, `studio.js`와 각 HTML의 연결 및 홈 Hero 변경으로 구성됩니다.
후보는 `design-preview/`에 별도로 남아 있습니다.

## Git으로 원래 디자인 복원

복원 태그: `design-before-studio-20260921` (위 기준 커밋을 가리킴).
현재 작업을 먼저 커밋하거나 별도 백업한 뒤 저장소 루트에서 다음 명령을 실행합니다.

```powershell
git restore --source=design-before-studio-20260921 -- index.html projects.html specs.html
```

위 세 HTML을 복원하면 원래 Hero와 원래 스타일 연결로 돌아갑니다. `studio.css`와 `studio.js`는 연결이 해제되므로 삭제하지 않아도 됩니다. 이후 실제 배포에 반영하려면 복원 변경사항을 커밋하고 푸시합니다.
추후 원래 CSS/JS도 변경했다면 필요한 파일을 태그에서 추가로 복원하세요. `data.js`를 복원하면 이후 작성한 프로젝트 내용도 되돌아가므로 주의하세요.

나중에 복원하려면 ZIP을 별도 임시 폴더에 풀고, 그 시점의 변경사항을 먼저 백업한 뒤 필요한 파일만 원래 위치에 복사하세요.
이 ZIP은 사이트 파일의 스냅샷이며 Git 이력은 포함하지 않습니다.
