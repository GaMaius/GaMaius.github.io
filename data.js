/*
 * 포트폴리오 콘텐츠. 화면은 전부 이 파일에서 그려진다.
 *
 * 링크 규칙
 * - links.repo 에는 "공개" 저장소만 넣는다. 비공개 저장소를 넣으면 면접관에게 404가 뜬다.
 *   비공개라면 repo 를 비우고 codeNote 에 사유를 적는다.
 * - links.demo 는 배포된 사이트, links.store 는 상점 페이지.
 *
 * 프로젝트 표시 규칙
 * - home: true 인 것만 첫 페이지 목록에 나온다(대표작 Drilling 은 별도 섹션).
 * - 정렬은 배열 순서 그대로다. 보여주고 싶은 순서대로 적는다.
 */
window.PORTFOLIO = {
  person: {
    name: "지우가람",
    role: "Unity 게임 클라이언트 개발자",
    intro: [
      "Steam에 정식 출시한 2D 채굴 게임 Drilling에서 인벤토리, 상점, 업그레이드, 보상 시스템을 만들었습니다.",
      "게임 밖에서는 AI 코칭 리포트나 웹캠 비전 앱처럼 직접 만든 서비스를 배포하고 운영합니다."
    ],
    email: "rkfka04101212@gmail.com",
    github: "https://github.com/GaMaius"
  },

  // 첫 화면의 근거 목록. 짧게, 확인 가능한 사실만.
  proof: [
    { term: "상용 출시", desc: "Drilling, Steam 정식 출시 (2026.11)" },
    { term: "인턴십", desc: "감바랩스, 온디바이스 AI 기업 (2026.07–08)" },
    { term: "자격", desc: "PCCP Lv.2, Python3 551점 (2026.05)" },
    { term: "학교", desc: "부산대학교 재학" }
  ],

  featured: {
    id: "drilling",
    title: "Drilling",
    oneLine: "땅속 깊은 곳에서 깨어난 '드릴이'를 조종해 지상으로 파 올라가는 2D 픽셀 채굴 어드벤처",
    facts: [
      { term: "출시", desc: "2026년 11월 3일, Steam 정식 출시" },
      { term: "개발", desc: "Studio. HONGS, 8명 (개발 5명, 디자인 3명)" },
      { term: "기간", desc: "2025.06 – 2026.11, 데모 출시 후 정식 출시까지 17개월" },
      { term: "역할", desc: "메인 클라이언트 개발" },
      { term: "지원", desc: "Windows, 8개 언어, Steam 도전과제와 클라우드 저장" },
      { term: "기술", desc: "Unity, C#" }
    ],
    systems: [
      {
        title: "인벤토리와 상점",
        body: "9등급 광석을 담는 인벤토리와, 채굴한 광물이 실시간으로 반영되는 상점을 만들었습니다."
      },
      {
        title: "모듈형 업그레이드",
        body: "드릴의 크기, 파워, 범위, 이동 속도 같은 능력치를 모듈 단위로 강화하는 업그레이드 구조를 설계했습니다."
      },
      {
        title: "미니게임 이벤트 맵과 보상",
        body: "탐험 중 무작위로 만나는 미니게임 맵의 진행 로직과, 성공 여부를 판정해 보상을 지급하는 흐름을 만들었습니다."
      },
      {
        title: "출시 준비",
        body: "데모와 정식 버전의 Steam 연동, 클라이언트 빌드 최적화, QA를 맡아 두 번의 출시를 거쳤습니다."
      }
    ],
    images: [
      { src: "img/drilling-play.webp", w: 1440, h: 810, alt: "Drilling 플레이 화면. 어두운 동굴 속에서 드릴이 바위를 뚫고, 하단에 광물 인벤토리 슬롯 세 칸이 보인다." }
    ],
    links: {
      store: "https://store.steampowered.com/app/4304980/Drilling/"
    },
    codeNote: "팀 프로젝트라 코드는 비공개입니다."
  },

  projects: [
    {
      id: "riot-report",
      kind: "web",
      home: true,
      title: "리그 오브 레전드 AI 코칭 리포트",
      period: "2026.03 – 진행 중",
      team: "1인 개발",
      summary: "경기 데이터를 같은 티어·포지션 분포와 비교해 강약점을 짚고, Gemini가 다음 판에 연습할 과제를 써 주는 웹 서비스입니다. 구독제 운영을 준비하고 있습니다.",
      highlights: [
        "티어 × 포지션별로 직접 수집한 기준선으로 체급, 인분, 라인전 주도권을 백분위로 계산",
        "Gemini 출력을 JSON으로 강제하고, 표본이 없는 지표는 '데이터 부족'으로만 쓰게 해 지어낸 수치를 차단",
        "Paddle로 월 구독(주간 이용량 초기화)과 토큰 충전, 서버 이용량 원장, 웹훅 검증을 구현해 Sandbox 결제 검증까지 완료",
        "운영자 전용 방문·전환 분석을 붙여 무료 베타 지표(재방문율, 두 번째 분석률)를 측정할 준비"
      ],
      result: "Render 배포 운영 중, 실결제 전환 준비 중",
      stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Gemini API", "Paddle"],
      links: { demo: "https://riot-report.onrender.com" },
      codeNote: "실서비스 운영 준비 중이라 코드는 비공개입니다."
    },
    {
      id: "gambalabs",
      kind: "ai",
      home: true,
      title: "감바랩스 오피스 AI 자동화 도구",
      period: "2026.07 – 08, 2주",
      team: "1인 개발, 감바랩스 인턴 과제",
      summary: "발표자료 제작, 연구 데이터 정리, 도식 벡터 변환 같은 사내 반복 업무를 데스크톱 앱 하나로 묶은 LLM 자동화 도구입니다.",
      highlights: [
        "LLM은 무엇을 할지만 판단하고, 엑셀 셀 수정과 PPT 렌더는 openpyxl·pptxgenjs가 하도록 역할을 분리해 수식과 레이아웃 손상을 막음",
        "PPT 생성 → 실행 → 품질 검사 → 결함 지적 후 재작성(최대 3회) → 실패 시 템플릿으로 돌아가는 자가 수정 루프",
        "실험 스크립트에 한 줄만 추가하면 엑셀 기록과 차트가 갱신되는 로깅 모듈 (C 헤더 포함)",
        "Python·Node 미설치 PC에서도 도는 exe 빌드, 최종 보고서와 인수인계 문서까지 납품"
      ],
      result: "2주 과제 완수, 도구와 보고서·인수인계 문서 납품",
      stack: ["Python", "pywebview", "openpyxl", "pptxgenjs", "Groq"],
      links: { repo: "https://github.com/GaMaius/GambaLabs" }
    },
    {
      id: "visionlab",
      kind: "web",
      home: true,
      title: "VisionLab, 웹캠 비전 앱 모음",
      period: "2026.07 – 진행 중",
      team: "1인 개발",
      summary: "웹캠 하나로 심박수, 퍼스널 컬러, 닮은 포켓몬, 3D 아바타 모션캡처를 브라우저 안에서 처리하는 앱 모음입니다.",
      highlights: [
        "MediaPipe 얼굴·손·포즈 추적을 Kalidokit, three-vrm에 연결해 VRM 아바타를 실시간으로 구동",
        "손목이 팔뚝에서 비틀리던 문제를 손바닥 기하로 회전을 직접 계산하는 솔버로 해결",
        "카메라에 가까이 앉으면 아바타가 T포즈로 굳던 문제를 부위별 신뢰도 판정으로 해결",
        "rPPG 알고리즘(POS)을 TypeScript로 포팅하고 ONNX 모델을 브라우저에서 병행 실행"
      ],
      result: "Vercel 배포 운영 중",
      stack: ["TypeScript", "Next.js", "MediaPipe", "three.js", "ONNX Runtime Web"],
      links: { demo: "https://skillprac.vercel.app/", repo: "https://github.com/GaMaius/WebCam/tree/visionlab" }
    },
    {
      id: "push-force",
      kind: "game",
      home: true,
      title: "push --force",
      period: "2025.09, 1일",
      team: "3명, 테크위크 게임 해커톤",
      summary: "원형 전장에서 서로를 밀어 떨어뜨리는 2인 로컬 대전 게임입니다. 하루 만에 완성해 제출했습니다.",
      highlights: [
        "맵 로직 담당: 자기장 축소, 장애물 소환 등 3종 기믹과 3판 2선승 라운드 루프",
        "맵 중심 기준 실시간 링아웃 판정, 안전 구역을 따라가며 생성되는 아이템 스포너"
      ],
      result: "테크위크 1일 게임 해커톤 수료",
      stack: ["Unity 2D", "C#", "URP", "Input System"],
      links: {},
      codeNote: "해커톤 팀 저장소가 비공개입니다."
    },
    {
      id: "on-life",
      kind: "web",
      home: true,
      title: "LLM 스마트 미러, On-Life",
      period: "2026.02, 3일",
      team: "3명, 라이프 스타일 해커톤",
      summary: "웹캠으로 거북목과 졸음을 감지하고, 음성 비서와 가상 펫으로 생활 습관을 돕는 스마트 미러 웹앱입니다.",
      highlights: [
        "OpenCV, MediaPipe Face Mesh로 자세와 졸음을 실시간 감지해 가상 펫의 체력과 퀘스트에 반영",
        "웨이크 워드로 깨우는 음성 비서, LLM 응답 속 명령을 해석해 타이머와 일정 실행"
      ],
      result: "라이프 스타일 해커톤 우수상",
      stack: ["Python", "Flask", "MediaPipe", "OpenCV", "LLM API"],
      links: { repo: "https://github.com/GaMaius/On-Life" },
      images: [
        { src: "img/onlife-1.webp", w: 1600, h: 782, alt: "On-Life 대시보드 화면" },
        { src: "img/onlife-2.webp", w: 1600, h: 786, alt: "On-Life 자세 분석 화면" },
        { src: "img/onlife-3.webp", w: 1600, h: 780, alt: "On-Life 가상 펫 화면" }
      ]
    },
    {
      id: "devcompass",
      kind: "web",
      home: false,
      title: "DevCompass, 컴퓨터공학 진로 탐색",
      period: "2026.10 – 진행 중",
      team: "1인 개발",
      summary: "12개 분야, 48개 직무를 탐색하고 다음에 해 볼 프로젝트와 지원 준비로 연결해 주는 웹앱입니다.",
      highlights: [
        "공통 24문항과 응답에 따른 재확인 질문, 흥미와 업무 부담이 충돌하는 경우를 따로 구분",
        "직무별 오늘 할 과제, 작은 프로젝트 범위와 완료 기준, 포트폴리오 목차 제공",
        "공식 채용 공고 크롤러와 변경 감지, 자동 테스트 32개"
      ],
      result: "Vercel 배포",
      stack: ["React", "Vite", "JavaScript"],
      links: { demo: "https://devcompass-rho.vercel.app/" },
      codeNote: "코드는 비공개입니다.",
      images: [
        { src: "img/devcompass-1.webp", w: 1521, h: 722, alt: "DevCompass 시작 화면" },
        { src: "img/devcompass-2.webp", w: 1521, h: 722, alt: "DevCompass 탐색 화면" },
        { src: "img/devcompass-3.webp", w: 1521, h: 722, alt: "DevCompass 결과 화면" }
      ]
    },
    {
      id: "bithumb",
      kind: "ai",
      home: false,
      title: "빗썸 자동 매매 시스템",
      period: "2026.04 – 진행 중",
      team: "1인 개발",
      summary: "네 가지 전략 봇을 한 서버에서 돌리고 웹 대시보드로 감시하는 자동 매매 시스템입니다. 수익보다 전략 검증 방법에 공을 들였습니다.",
      highlights: [
        "기존 백테스트가 미래 정보를 엿보는 구조임을 찾아내 +66% 결과를 폐기하고, 구간 시작 시점 정보만 쓰도록 재설계",
        "워크포워드와 구간 분할 검증으로 '파라미터 튜닝은 일반화되지 않는다'는 결론을 수치로 확인",
        "재배포 때 거래 기록이 사라지던 문제를 Postgres 영속 계층으로 해결, DB 장애가 매매를 막지 않게 격리"
      ],
      result: "실전 운영 중",
      stack: ["Python", "pandas", "scikit-learn", "PostgreSQL", "Docker"],
      links: {},
      codeNote: "거래소 연동 코드라 비공개입니다."
    },
    {
      id: "infotive",
      kind: "web",
      home: false,
      title: "기계 부품 3D 뷰어와 AI 학습 도우미",
      period: "2026.02, 3일",
      team: "4명, 블레이버스 MVP 해커톤",
      summary: "드론, 엔진 같은 기계 부품을 브라우저에서 분해해 보고, 고른 부품에 대해 AI에게 질문하는 학습 서비스입니다.",
      highlights: [
        "Three.js로 GLB 모델 로드, 분해 정도와 카메라 시점 조작, 상태 저장과 복구",
        "선택한 부품 정보와 질문을 합쳐 답하는 챗봇, 대화 요약과 퀴즈 생성"
      ],
      result: "블레이버스 MVP 개발 해커톤 수료",
      stack: ["Three.js", "React", "FastAPI", "OpenAI API"],
      links: {},
      codeNote: "해커톤 저장소가 비공개입니다.",
      images: [
        { src: "img/infotive-2.webp", w: 1600, h: 782, alt: "3D 뷰어 화면" },
        { src: "img/infotive-3.webp", w: 1600, h: 779, alt: "AI 학습 도우미 화면" }
      ]
    },
    {
      id: "sign-cnn",
      kind: "ai",
      home: false,
      title: "CNN 수어 인식",
      period: "2023.03 – 2023.09",
      team: "3명",
      summary: "웹캠으로 찍은 수어 동작을 실시간으로 문자로 옮기는 프로그램입니다.",
      highlights: [
        "PyTorch 학습 파이프라인과 손 영역 추출 전처리, ResNet-18 튜닝",
        "OpenCV 실시간 프레임 처리로 30 FPS 이상 인식"
      ],
      result: "경량화 후 30 FPS 이상 실시간 인식",
      stack: ["Python", "PyTorch", "OpenCV"],
      links: {},
      images: [
        { src: "img/sign-cnn-2.webp", w: 734, h: 272, alt: "ResNet-18 구조도" }
      ]
    }
  ],

  // 날짜 내림차순으로 적는다.
  timeline: [
    { date: "2026.11", title: "Drilling Steam 정식 출시", org: "Studio. HONGS", kind: "출시", projectId: "drilling" },
    { date: "2026.08", title: "기업체험형 인턴십 수료", org: "감바랩스", note: "온디바이스 AI 음성인식 기업, 2026.07.27 – 08.07", kind: "인턴", projectId: "gambalabs" },
    { date: "2026.05", title: "PCCP Lv.2 취득", org: "프로그래머스", note: "Python3, 551 / 1000점", kind: "자격" },
    { date: "2026.04", title: "Drilling Steam 데모 출시", org: "Studio. HONGS", kind: "출시", projectId: "drilling" },
    { date: "2026.02", title: "라이프 스타일 해커톤 우수상", org: "라이프 스타일 해커톤", kind: "수상", projectId: "on-life" },
    { date: "2026.02", title: "블레이버스 MVP 개발 해커톤 수료", org: "블레이버스", kind: "수료", projectId: "infotive" },
    { date: "2025.09", title: "테크위크 1일 게임 해커톤 수료", org: "테크위크", kind: "수료", projectId: "push-force" }
  ],

  education: [
    { school: "부산대학교", period: "2025.03 – 재학 중" },
    { school: "창원과학고등학교", period: "2022.03 – 2025.02 졸업" }
  ],

  skills: [
    { group: "게임 클라이언트", items: ["C#", "Unity", "URP, Input System", "Aseprite"] },
    { group: "AI와 데이터", items: ["Python", "PyTorch", "OpenCV", "MediaPipe", "LLM API (Gemini, Groq)"] },
    { group: "웹과 서버", items: ["TypeScript", "React", "Next.js", "FastAPI", "PostgreSQL"] },
    { group: "협업과 배포", items: ["Git, GitHub", "Docker", "Vercel", "Render"] }
  ]
};
