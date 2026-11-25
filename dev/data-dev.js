/*
 * 게임 외 직무용 포트폴리오(/dev/)의 내용.
 * 프로젝트 상세(기간, 구성, 섹션, 스택, 링크)는 루트의 data.js(window.PORTFOLIO)를 그대로 쓰고,
 * 이 파일은 "무엇을 앞에 둘지"와 이 버전에만 있는 문구(파이프라인, 핵심 결정, 일하는 방식)만 담는다.
 *
 * 이미지 경로는 루트 기준(img/...)으로 적는다. 화면에서 ../ 를 붙여 쓴다.
 * dev/img/ 의 그림은 Gemini로 만든 일러스트다.
 */
window.DEV = {
  person: {
    role: "AI 서비스 개발자",
    tagline: "LLM과 비전 모델을 실제로 쓰이는 서비스로 만들고, 배포해서 운영합니다."
  },

  // 첫 화면 "지금 돌아가는 것". state: live(운영 중) | deployed(배포)
  live: [
    { id: "maestro", state: "deployed", label: "데모", note: "GitHub Pages, AWS 해커톤 최우수상" },
    { id: "riot-report", state: "live", label: "운영 중", note: "Render, 구독 결제 Sandbox 검증 완료" },
    { id: "visionlab", state: "live", label: "운영 중", note: "Vercel, 브라우저 온디바이스 추론" },
    { id: "bithumb", state: "live", label: "실전 운영", note: "전략 봇 4종, 체결 알림" },
    { id: "devcompass", state: "deployed", label: "배포", note: "Vercel, 자동 테스트 32개" }
  ],

  // 대표 프로젝트: 데이터가 흐르는 길(pipeline)과 핵심 결정(points)
  // pipeline 의 model: true 는 AI 모델이 들어가는 자리
  featured: [
    {
      id: "maestro",
      pipeline: [
        { label: "서류 4종 업로드" },
        { label: "Claude", sub: "분류·읽기, 구조화 출력", model: true },
        { label: "서류끼리 대조", sub: "규칙 코드" },
        { label: "HS 추천·확정", sub: "이력 → 서류 일치 → 후보 3개" },
        { label: "신고서 초안 · WMS 등록", sub: "문제 있으면 사람 승인" }
      ],
      points: [
        { q: "AI가 틀린 값을 그럴듯하게 지어내면", a: "판정은 모델이 아니라 규칙 코드가 하게 나눴습니다. 75세트 측정에서 지어낸 값은 0칸이었습니다." },
        { q: "어디가 틀렸는지 사람이 바로 봐야 함", a: "오류를 누르면 서류 그림 위 그 칸에 박스를 띄우는 화면을 만들었습니다 (OCR 위치)." },
        { q: "대회가 끝나면 AWS 배포가 사라짐", a: "GitHub Pages 데모로 항상 열리게 하고, 같은 코드를 SQLite·Groq로 로컬에서 돌리게 재구축했습니다." }
      ]
    },
    {
      id: "riot-report",
      pipeline: [
        { label: "Riot API" },
        { label: "PostgreSQL 저장" },
        { label: "지표 25종 백분위" },
        { label: "Gemini", sub: "JSON 출력 강제", model: true },
        { label: "AI 리포트 4종" }
      ],
      points: [
        { q: "챌린저가 백분위 58로 나오던 기준선", a: "티어와 포지션을 나눠 기준선을 다시 수집했습니다." },
        { q: "표본 없는 지표를 AI가 지어내는 문제", a: "출력을 JSON으로 강제하고, 표본 없는 지표는 null로 넘겨 '데이터 부족'으로만 쓰게 했습니다." },
        { q: "리포트 1건에 Riot API 약 80회", a: "외부 PostgreSQL에 저장해 쿼터 소진을 막았습니다." }
      ]
    },
    {
      id: "gambalabs",
      pipeline: [
        { label: "기획 JSON" },
        { label: "배경 합성" },
        { label: "LLM", sub: "pptxgenjs 코드 작성", model: true },
        { label: "실행" },
        { label: "품질 검사", loop: "결함이 있으면 다시 쓰기, 최대 3회" }
      ],
      points: [
        { q: "LLM에게 어디까지 맡길지", a: "LLM은 무엇을 할지만 판단하고, 파일 수정은 openpyxl·pptxgenjs가 하도록 나눴습니다." },
        { q: "생성 결과의 결함", a: "검사 결과를 돌려주고 다시 쓰게 하는 루프를 최대 3회 돌리고, 실패하면 템플릿으로 대체합니다." },
        { q: "개발 환경이 없는 PC", a: "Python·Node가 없어도 도는 exe로 빌드하고, 보고서와 인수인계 문서까지 납품했습니다." }
      ]
    },
    {
      id: "visionlab",
      pipeline: [
        { label: "웹캠" },
        { label: "MediaPipe", sub: "얼굴·포즈·손", model: true },
        { label: "Kalidokit" },
        { label: "손목 솔버", sub: "직접 구현" },
        { label: "three-vrm 아바타" }
      ],
      points: [
        { q: "손목이 팔뚝에서 비틀리는 문제", a: "손바닥 기하를 기준으로 회전을 계산하는 솔버를 직접 만들었습니다." },
        { q: "가까이 앉으면 T포즈로 굳는 문제", a: "부위별 신뢰도를 판정하도록 바꿔 해결했습니다." },
        { q: "손·손목 방향이 맞는지 확인", a: "실제 VRM 파일을 Node에서 불러 기하학적으로 검증합니다." }
      ]
    },
    {
      id: "bithumb",
      cover: "dev/img/bithumb-cover.webp",
      pipeline: [
        { label: "종목 자동 선별" },
        { label: "추세 확인, 조정 시 진입" },
        { label: "분할 매수" },
        { label: "동적 익절" },
        { label: "PostgreSQL 기록" },
        { label: "텔레그램 알림" }
      ],
      points: [
        { q: "+66%가 나온 백테스트", a: "미래 정보를 엿보는 구조를 찾아내 결과를 버리고 백테스트를 다시 설계했습니다." },
        { q: "파라미터 튜닝의 착시", a: "워크포워드 검증으로 튜닝이 일반화되지 않는 것을 수치로 확인했습니다." },
        { q: "어떤 변경을 실전에 넣을지", a: "43개 구간과 2가지 자본 규모에서 모두 나아진 변경만 반영합니다." }
      ]
    }
  ],

  // 그 밖의 프로젝트(순서대로). drilling 은 아래 extra 에 정의
  more: ["devcompass", "drilling", "on-life", "infotive", "sign-cnn"],

  // data.js 의 projects 에 없는 항목
  extra: [
    {
      id: "drilling", kind: "game",
      title: "Drilling",
      period: "2025.06 – 2026.11", team: "8명, Studio. HONGS (개발 5, 디자인 3)", role: "메인 클라이언트 개발",
      oneLine: "8명 팀에서 17개월 동안 만들어 Steam에 정식 출시한 2D 채굴 어드벤처 게임",
      chips: ["Steam 정식 출시", "8개 언어", "클라우드 저장"],
      thumb: "img/drilling-play.webp",
      images: [
        { src: "img/drilling-play.webp", w: 1440, h: 810, alt: "Drilling 플레이 화면. 어두운 동굴 속에서 드릴이 바위를 뚫고, 하단에 광물 인벤토리 슬롯 세 칸이 보인다." }
      ],
      sections: [
        { title: "맡은 시스템", items: [
          "9등급 광석을 담는 인벤토리",
          "채굴한 광물이 실시간으로 반영되는 상점",
          "드릴 크기·파워·범위·속도를 모듈 단위로 강화하는 업그레이드",
          "무작위 미니게임 맵 로직, 성공 판정과 보상 지급"
        ]},
        { title: "출시", items: [
          "2026.04 Steam 데모 출시, 2026.11.03 정식 출시",
          "Windows, 8개 언어, 도전과제, 클라우드 저장 지원"
        ]}
      ],
      result: "2026.11.03 Steam 정식 출시",
      stack: ["Unity", "C#"],
      links: { demo: "https://store.steampowered.com/app/4304980/Drilling/" },
      demoLabel: "Steam 상점 페이지"
    }
  ],

  strengths: [
    { title: "AI가 지어내지 못하게 설계합니다",
      line: "모델에게는 판단만 맡기고, 근거와 출력 형식은 코드로 묶습니다.",
      proof: ["통관 서류 Agent: 판정은 규칙 코드, 지어낸 값 0칸", "Riot Report: JSON 출력 강제, 표본 없는 지표는 null", "감바랩스: 결함을 돌려주는 자가 수정 루프"] },
    { title: "좋은 결과부터 의심합니다",
      line: "수치가 좋게 나오면 먼저 검증 구조를 다시 봅니다.",
      proof: ["자동 매매: 미래 정보 누수를 찾아 +66% 결과 폐기", "VisionLab: 실제 VRM 파일로 손목 방향 검증"] },
    { title: "배포하고 운영합니다",
      line: "만든 것을 실제로 띄우고 결제, 저장, 알림까지 붙입니다.",
      proof: ["Render·Vercel 배포 운영", "Paddle 구독 Sandbox 검증", "exe 납품과 인수인계 문서"] }
  ],

  // 기술 묶음 순서 (data.js skills 의 group 이름)
  skillOrder: ["AI · 비전", "웹", "협업 · 배포", "게임 개발"]
};
