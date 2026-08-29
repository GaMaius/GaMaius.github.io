window.PORTFOLIO_DATA = {
  // 1. 프로필 정보 (Profile Info)
  profile: {
    name: "지우가람",
    title: "Game • Web • AI Developer",
    // Hero 영역의 타자 애니메이션 키워드 목록
    typingWords: [
      "Game Developer",
      "Python Programmer",
      "AI Developer",
      "Creative Problem Solver"
    ],
    // Hero 영역 하단 소개글
    heroDescription: "몰입감 있는 게임 개발, 인공지능 모델과 LLM 기술의 실무 융합에 관심이 많은 개발자입니다.",
    // Profile 섹션 좌측 자기소개 문단
    bioTitle: "학습한 다양한 기술의 융합을 시도하는 개발자",
    bioParagraphs: [
      "단일 분야에 머무르지 않고, <strong>게임 개발</strong>, <strong>웹 풀스택</strong>, <strong>인공지능(AI)</strong> 등 다양한 분야에서 공부하고, 그 경험들을 활용해 새로운 기술을 공부해나가는 개발자입니다.",
      "게임 개발에서 배운 Unity의 사용법과 Python에서 학습한 Mediapipe를 융합해 카메라 2대를 활용한 모션캡쳐 프로그램을 제작한 경험이 이 예시입니다.",
      "해커톤에 참여하여 웹 프로그래밍과 AI 기술을 융합해 <strong>웹 기반의 3D 모델 뷰어와 AI 피드백 시스템</strong>을 갖춘 웹 사이트를 제작하는 등 협업 경험을 쌓았습니다."
    ],
    // 학력 사항 (초, 중, 고)
    education: [
      {
        level: "경화초등학교 졸업",
        period: "2013.03 - 2019.02"
      },
      {
        level: "진해남중학교 졸업",
        period: "2019.03 - 2022.02"
      },
      {
        level: "창원과학고등학교 졸업",
        period: "2022.03 - 2025.02"
      },
      {
        level: "부산대학교 재학",
        period: "2025.03 - 재학중"
      }
    ]
  },

  // 2. 기술 스택 숙련도 (Skills & Levels)
  // 수준(level)은 "Advanced" (숙련), "Intermediate" (중급), "Beginner" (초급) 중 하나로 기입하며,
  // 카테고리(category)는 "language", "frontend", "backend", "devtools", "devops", "others" 중 하나로 지정합니다.
  skills: [
    { name: "Python", level: "Advanced", percentage: 95, category: "language" },
    { name: "Unity Engine", level: "Advanced", percentage: 95, category: "devtools" },
    { name: "C++", level: "Intermediate", percentage: 75, category: "language" },
    { name: "C# Core", level: "Intermediate", percentage: 75, category: "language" },
    { name: "JavaScript", level: "Beginner", percentage: 50, category: "language" },
    { name: "HTML5 / CSS3", level: "Intermediate", percentage: 55, category: "frontend" },
    { name: "React.js", level: "Beginner", percentage: 30, category: "frontend" },
    { name: "FastAPI & Node.js", level: "Beginner", percentage: 30, category: "backend" },
    { name: "Git & GitHub", level: "Intermediate", percentage: 70, category: "devops" },
    { name: "Vercel", level: "Intermediate", percentage: 75, category: "devops" },
    { name: "Render", level: "Intermediate", percentage: 70, category: "devops" },
    { name: "Mediapipe", level: "Advanced", percentage: 85, category: "others" },
    { name: "PyTorch & CNN", level: "Intermediate", percentage: 75, category: "others" },
    { name: "OpenCV", level: "Intermediate", percentage: 65, category: "others" },
    { name: "Notion", level: "Intermediate", percentage: 75, category: "others" },
    { name: "Aseprite", level: "Intermediate", percentage: 70, category: "others" }
  ],

  // 3. 스펙 이력 목록 (Specifications)
  // type은 배지 종류를 나타냅니다: "launch" (출시), "award" (수상), "education" (교육 수료), "internship" (인턴십)
  // 새로운 이력을 맨 위에 추가하면 최신 순서대로 렌더링됩니다.
  specs: [
    {
      type: "launch",
      badgeText: "출시",
      institution: "Steam",
      title: "PC 인디 게임 'Drilling' 공식 데모 출시",
      date: "2026.04",
      relatedProjectTitle: "Drilling 게임 출시",
      priority: 0
    },
    {
      type: "education",
      badgeText: "수료",
      institution: "블레이버스 (Blaybus)",
      title: "블레이버스 MVP 개발 해커톤 수료",
      date: "2025.10",
      relatedProjectTitle: "기계 부품 3D 뷰어 및 AI 공부 보조 사이트",
      priority: 2
    },
    {
      type: "education",
      badgeText: "수료",
      institution: "테크위크 (Techweek)",
      title: "테크위크 1일 게임 해커톤 수료",
      date: "2025.09",
      relatedProjectTitle: "push --force 게임",
      priority: 4
    },
    {
      type: "award",
      badgeText: "수상",
      institution: "라이프 스타일 해커톤 위원회",
      title: "라이프 스타일 해커톤 우수상 수상",
      date: "2025.07",
      relatedProjectTitle: "LLM 기반 스마트 미러 웹앱",
      priority: 1
    },
    {
      type: "internship",
      badgeText: "인턴십",
      institution: "감바랩스 (Gamba Labs)",
      title: "기업체험형 인턴십 (온디바이스 AI)",
      date: "2026.07.27 - 2026.08.07",
      relatedProjectTitle: "감바랩스 오피스 AI 자동화 도구",
      desc: "온디바이스(On-Device) AI 음성인식(KWS) 전문 기업 '감바랩스'에서 2주간 진행한 기업체험형 인턴십입니다.\n담당 과제는 'PowerPoint / Excel LLM 활용 시나리오 설계 및 구현'으로, 사내에 흩어져 있던 반복 수작업을 LLM 기반 데스크톱 자동화 앱 하나로 묶어 설계·구현하고 최종 보고서와 인수인계 문서까지 납품했습니다.",
      details: "- 과제 정의 및 시나리오 설계:\n  - 현업 담당자 인터뷰를 통해 실제 반복 업무(브랜드 발표자료 제작, 연구비·실험 데이터 정리, 도식 벡터 변환) 도출\n  - '인턴이 처음부터 끝까지 만든 것은 회사가 신뢰하기 어렵다'는 제약을 받아들여, 검증된 오픈소스를 엮는 인터페이스로 설계 방향 수립\n- LLM 활용 경계 설정 (핵심 설계 원칙):\n  - LLM은 '무엇을' 할지 판단하고, 실제 파일 수술은 결정적(deterministic) 코드가 담당하도록 역할 분리\n  - LLM에 파일을 통째로 맡기면 엑셀 수식이 날아가고 PPT 레이아웃이 무너지는 문제를 구조로 차단\n  - 생성물은 사람이 검토한 뒤 내보내는 human-in-the-loop 구조 채택\n- 자가 수정(self-correction) 루프 설계:\n  - 기획(JSON) → 코드 생성 → 실행 → 품질 검사 → 결함 지적 후 재작성(최대 3회) → 실패 시 템플릿 폴백\n- 납품 가능한 형태로 마무리:\n  - PyInstaller 기반 자립 exe 빌드(Node 런타임·에셋 포함), 경로 단일화로 소스와 빌드본의 동작 일치\n  - 회사 제출용 최종 결과 보고서 및 인수인계 문서(Word) 작성",
      tags: ["On-Device AI", "LLM Pipeline", "Python", "Office Automation", "Git & GitHub"],
      result: "사내 오피스 자동화 도구 구현 및 최종 결과 보고서·인수인계 문서 납품 (2주 과정 수료)",
      link: "https://github.com/GaMaius/GambaLabs",
      image: "",
      priority: 3
    }
  ],

  // 4. 프로젝트 상세 정보 (Featured Projects)
  // category는 필터링 기준입니다: "game", "web", "ai"
  // priority: 중요도로 0부터 시작하여 작을수록 중요도가 높으며 상단에 정렬됩니다.
  projects: [
    {
      priority: 0,
      category: "game",
      title: "Drilling 게임 출시",
      tags: ["Unity", "C#", "Game Launch", "Steam"],
      period: "2025.06 - 진행중 (12개월+)",
      team: "8인 개발 (개발자 5명, 디자이너 3명)",
      role: "메인 개발자(인벤토리, 상점, 업그레이드 시스템, 미니게임 맵 로직, 보상 시스템 구현)",
      desc: "스팀(Steam) 데모 출시 완료 및 서비스를 운영 중인 Unity 엔진 기반 캐주얼 힐링 게임 '드릴링(Drilling)' 프로젝트입니다.\n화려한 전투나 치열한 경쟁 대신, 땅을 파고 깊은 곳으로 내려가며 자원을 채굴하는 탐험 본연의 즐거움에 집중하도록 설계했습니다.\n\n주요 특징:\n- 지상을 향해 탐험하는 메인 캐릭터 '드릴이'와 몰입도 높은 연출\n- 층별로 존재하는 9가지 등급의 희귀 광석 채굴 및 랜덤 보상 시스템\n- 획득한 자원으로 드릴의 크기, 파워, 속도 등을 강화하는 모듈 업그레이드 시스템",
      details: "- 게임플레이 코어 로직 및 UI/UX 설계:\n  - 인벤토리 시스템 및 실시간 광물 반영 상점 기능 개발\n  - 드릴 파워, 범위 등 스탯 강화를 위한 모듈형 업그레이드 아키텍처 설계\n- 미니게임 기믹 및 보상 시스템 설계:\n  - 탐험 시 무작위로 만나는 미니게임 이벤트 맵 로직 설계 및 성공 보상 지급 판정 로직 완성\n- QA 및 퍼블리싱:\n  - 데모 버전 스팀(Steam) 런칭을 위한 연동 작업 및 클라이언트 빌드 최적화 및 QA 수행",
      result: "스팀 정식 데모 출시 완료 및 서비스 운영",
      github: "https://store.steampowered.com/app/4304980/Drilling/",
      icon: "⛏️",
      platformLabel: "Unity / Steam",
      image: ["./Drilling00.png", "./Drilling01.png"]
    },
    {
      priority: 4,
      category: "web",
      title: "LLM 기반 스마트 미러 웹앱",
      tags: ["Python (Flask)", "MediaPipe & OpenCV", "MiniMax LLM", "Vanilla JS"],
      period: "2026.02 (3일, 라이프 스타일 해커톤)",
      team: "3인 개발 (풀스택 1명, 백엔드 1명, 라즈베리파이 1명)",
      role: "풀스택 아키텍처 설계, OpenAI GPT LLM 개발, 음성 인식(STT) 및 APP과의 연동 개발",
      desc: "MediaPipe와 LLM(MiniMax) 기반의 음성 비서를 결합하여 사용자의 업무 루틴과 건강한 일상 관리를 돕는 성장형 가상 캐릭터 웹앱입니다.\n실시간 웹캠 분석을 통해 거북목과 졸음을 감지하여 가상 펫 '데브(Dev)'의 HP/퀘스트에 반영하며, 음성 대화를 통해 일정 관리, 타이머 설정, 실시간 날씨/뉴스 통합 브리핑을 제공합니다.",
      details: "- 실시간 자세/상태 분석 및 피드백:\n  - OpenCV와 MediaPipe Face Mesh 기술로 거북목 및 눈감음(졸음) 실시간 감지\n  - 비정상 자세 감지 시 가상 펫 캐릭터 '데브'의 HP 차감 및 실시간 자세 교정 피드백 알림 연동\n  - Flask 비디오 스트리밍 엔드포인트를 구성하여 분석 중인 카메라 화면을 웹앱으로 실시간 송출\n- 지능형 음성 비서 및 외부 API 통합 (STT/TTS/LLM):\n  - SpeechRecognition 및 gTTS 기반의 웨이크 워드('데브') 활성화 음성 파이프라인 연동\n  - MiniMax API와 시스템 프롬프트 튜닝을 통해 자연스러운 일상 브리핑(날씨/네이버 뉴스 API 요약) 제공\n  - LLM의 특수 명령어 출력을 파싱하는 휴리스틱 처리로 타이머(카운트업/다운/리셋), 일정 등록/삭제 실행 모듈 구축\n- 가상 펫 성장 및 데이터 시각화:\n  - 일상 웰니스 행동 촉진을 위한 RPG 퀘스트 수락/달성 및 레벨업/친밀도 성장 로직 설계\n  - 자세 로그와 활동 로그를 기반으로 누적 통계 시각화 대시보드 UI 연동\n- 대시보드 상태 및 데이터 영속성 관리:\n  - JSON 기반 데이터 영속화 레이어및 프론트엔드 실시간 연동용 폴링 API 설계",
      result: "라이프 스타일 해커톤 우수상 수상",
      github: "https://github.com/GaMaius/On-Life.git",
      icon: "🪞",
      platformLabel: "Python / Flask",
      image: ["./DevGotchi00.png", "./DevGotchi01.png", "./DevGotchi02.png"]
    },
    {
      priority: 7,
      category: "ai",
      title: "CNN을 통한 수화 인식 프로그램",
      tags: ["Python", "PyTorch", "OpenCV (CNN)"],
      period: "2023.03 - 2023.09 (6개월)",
      team: "3인 개발 (모델 1명, 데이터 가공 2명)",
      role: "학습 시스템 개발 및 Resnet-18 모델 적용, OpenCV로 실시간 웹캠 처리 구현",
      desc: "CNN을 활용하여 카메라로 캡처한 수어 동작을 분석하고 실시간으로 문자로 번역해주는 프로그램입니다.",
      details: "PyTorch를 활용한 모델 학습 파이프라인 개발, OpenCV를 통한 실시간 웹캠 프레임 받아오는 기능 구현.\n손 부분의 정확한 정보 추출을 위해 데이터 전처리 구현, ResNet-18을 통한 학습 정확도 향상을 위한 튜닝 수행.",
      result: "경량화 모델 최적화 및 30 FPS 이상 실시간 인식률 확보",
      // github: "https://github.com/GaMaius",
      icon: "🤟",
      platformLabel: "Python / PyTorch",
      image: ["./CNN00.png", "./ResNet18.png"]
    },
    {
      priority: 6,
      category: "web",
      title: "기계 부품 3D 뷰어 및 AI 공부 보조 사이트",
      tags: ["Three.js", "React", "FastAPI (LLM)"],
      period: "2025.10 (3일, 블레이버스 MVP 해커톤)",
      team: "4인 개발 (프론트 2, 백엔드 1, 3D 모델러 1)",
      role: "Three.js 기반 OBJ/GLTF 3D 기계 메쉬 렌더러 컴포넌트 구현, FastAPI 공부 보조 챗봇 어시스턴트 구조 설계",
      desc: "WebGL 기반의 3D CAD 기계 부품 분해 뷰어와 OpenAI GPT 챗봇 어시스턴트를 연동한 3D 양방향 교육용 웹 서비스입니다.\n사용자가 브라우저에서 드론이나 로봇 암 등의 3D 모델을 조작 및 분해하며 작동 원리를 시각적으로 이해하고, 학습 어시스턴트를 통해 부품별 기계적 특성에 대해 실시간 질의응답을 할 수 있는 환경을 제공합니다.\n\n주요 특징:\n- Three.js WebGL 기반 고성능 3D 기계 부품 렌더링 및 분해 뷰(Explode View) 연동\n- 부품 클릭 시 기계적 매커니즘 및 물성을 알려주는 OpenAI GPT 연동 챗봇\n- 3D 기계 부품 객체 메타데이터와 대화 이력을 연동한 맞춤형 학습 퀴즈 및 요약 제공",
      details: "- Three.js 기반 3D CAD 부품 인터랙티브 뷰어 구현:\n  - Three.js 라이브러리를 활용해 드론, V4 엔진, 로봇 암 등 복잡한 GLB 메쉬 파일 로드 및 조작 기능 최적화\n  - 카메라 시점 제어, 타겟 추적 및 메쉬 분해율(Explode Value) 조작 로직 수립\n  - 시각화 상태(카메라 좌표, 분해 정도)를 데이터베이스(SQLite)와 실시간 동기화하여 이전 상태 복구 기능 구현\n- 지능형 LLM 챗봇 어시스턴트 설계:\n  - OpenAI GPT API 기반 공부 보조 어시스턴트 연동 및 시스템 프롬프팅 최적화\n  - 3D 부품 선택 정보(부품명, 물성 등)와 유저 질문을 병합하여 정확한 답변을 도출하는 RAG 기초 구조 설계\n  - 대화 맥락 분석을 통한 대화 요약 생성 및 맞춤형 학습 퀴즈 자동 출제 모듈 구현\n- API 아키텍처 및 데이터 흐름 구축:\n  - FastAPI 및 Django 인프라 하에서 부품 정보(PartInfo) 비동기 조회 고성능 API 설계\n  - 대화 히스토리 및 사용자 설정 데이터를 데이터베이스 및 JSON 파일에 효율적으로 격리 저장하는 CRUD 파이프라인 구현",
      result: "블레이버스 MVP 개발 해커톤 수료",
      github: "https://github.com/GaMaius/Infotive.git",
      icon: "⚙️",
      platformLabel: "WebGL / React / FastAPI",
      image: ["./Blaybus00.png", "./Blaybus03.png", "./Blaybus01.png", "./Blaybus02.png"]
    },
    {
      priority: 8,
      category: "game",
      title: "push --force 게임",
      tags: ["Unity 2D", "C#", "URP", "Input System"],
      period: "2025.07 (1일, 테크위크 해커톤)",
      team: "3인 개발 (개발자 3명)",
      role: "맵로직 개발자 (대전 맵 낙사, 아이템, 장애물 기믹 및 승리 판정 루프 개발)",
      desc: "Unity 엔진 기반의 2D 캐주얼 로컬 대전 액션 게임 'PUSH--FORCE'입니다.\n원형 전장 안에서 두 명의 플레이어가 공격과 넉백을 활용해 서로를 밀어내어 맵 밖으로 떨어뜨리는(Ring Out) 직관적이고 박진감 넘치는 배틀 본연의 재미에 집중하도록 설계했습니다.",
      details: "- 로컬 2인 대전 및 물리 기반 전투 시스템:\n  - 단일 키보드 독립 조작 체계(WASD / 방향키) 및 공격 넉백·반동 물리 메커니즘 설계\n- 동적 맵 기믹 및 매치 루프 제어:\n  - 자기장 축소 및 장애물 소환 등 3종 맵 기믹과 3판 2선승제 라운드 제어 루프 구축\n- 낙사 판정 및 동적 아이템 스포너:\n  - 맵 중심 기준의 실시간 링아웃 판정 및 안전 구역을 추적하여 생성하는 아이템 스포너 설계",
      // result: "테크위크 해커톤 최종 우승 (1위)",
      github: "https://github.com/Apptive-Game-Team/push--force.git",
      icon: "💥",
      platformLabel: "Unity 2D / PC"
    },
    {
      priority: 1,
      category: "ai",
      title: "감바랩스 오피스 AI 자동화 도구",
      tags: ["Python", "LLM (Groq)", "pywebview", "pptxgenjs", "openpyxl"],
      period: "2026.07.27 - 2026.08.07 (2주, 감바랩스 인턴십)",
      team: "1인 개발 (기획 · 구현 · 문서화 전담)",
      role: "과제 정의부터 시나리오 설계, 전체 구현, exe 빌드, 최종 보고서 및 인수인계 문서 작성까지 단독 수행",
      desc: "온디바이스 AI 음성인식 기업 '감바랩스'의 인턴 과제 'PowerPoint / Excel LLM 활용 시나리오 설계 및 구현'의 결과물입니다.\n사내에 흩어져 있던 수작업(브랜드 발표자료 제작, 연구비·실험 데이터 정리, 도식 벡터 변환)을 데스크톱 앱 하나로 묶은 자동화 도구입니다.\n\n핵심 설계 원칙 — LLM은 '무엇을' 할지 판단하고, 실제 파일 수술은 결정적(deterministic) 코드가 한다.\nLLM에게 파일을 통째로 맡기면 엑셀 수식이 날아가고 PPT 레이아웃이 무너지기 때문에, LLM은 구조화·기획만 담당하고 셀 수정은 openpyxl, 슬라이드 렌더는 pptxgenjs가 수행하도록 역할을 분리했습니다.",
      details: "- PPT 자유 설계 파이프라인 (핵심):\n  - 러프 PPT/문서 입력 → LLM이 슬라이드 구성 JSON 기획 → 배경 장식 합성 → LLM이 pptxgenjs 코드를 직접 작성\n  - 생성된 코드를 실행한 뒤 deck_lint로 기하·품질 검사, 결함이 있으면 지적하고 재작성하는 자가 수정 루프 (최대 3회)\n  - 끝내 통과하지 못하면 템플릿 레이아웃으로 안전 폴백\n  - 설계 자유도는 모델에 주되 스타일·그리드 상수는 헬퍼가 고정해, 자유도와 브랜드 일관성을 동시에 확보\n- Excel 자동화:\n  - 자연어 요청으로 대시보드를 수정하되 기존 수식·차트를 보존 (openpyxl 기반 셀 단위 수술)\n  - 실험 스크립트에 한 줄(log_result)만 추가하면 엑셀 트래커에 결과가 누적되고 차트가 자동 갱신되는 연동 모듈 구현 (C 프로젝트용 헤더 포함)\n  - 간이 영수증 표준 양식 자동 작성\n- SVG 벡터 변환:\n  - vtracer 기반 비트맵→SVG 변환, 로고·도식·사진 유형별 파라미터 자동 튜닝 및 품질 채점\n- 납품 및 인수인계:\n  - PyInstaller로 Node 런타임·에셋을 포함한 자립 실행 폴더(exe) 빌드, 파이썬·Node 미설치 환경에서 동작\n  - src/common/paths.py로 경로를 단일화해 소스 실행과 exe 빌드본의 동작 불일치 제거\n  - 회사 제출용 최종 결과 보고서 및 인수인계 문서(Word) 작성",
      result: "2주 인턴십 과제 완수 — 사내 자동화 도구(exe) 및 최종 보고서·인수인계 문서 납품",
      github: "https://github.com/GaMaius/GambaLabs",
      icon: "🏢",
      platformLabel: "Python / pywebview / LLM"
    },
    {
      priority: 2,
      category: "web",
      title: "리그 오브 레전드 전적 분석 & AI 코칭 리포트",
      tags: ["FastAPI", "Next.js", "Gemini API", "Riot API", "PostgreSQL"],
      period: "2026.03 - 진행중",
      team: "1인 개발 (백엔드 · 프론트엔드 · 배포 전담)",
      role: "전체 아키텍처 설계, Gemini 기반 AI 코칭 리포트 생성기 구현, 티어별 백분위 지표 체계 설계, 배포 및 운영",
      desc: "Riot API의 실시간 경기·타임라인 데이터를 분석해 소환사별 심층 전적 리포트를 만들고, 그 지표를 근거로 Gemini 기반 AI 코치가 개인 맞춤 코칭 리포트를 생성하는 웹 서비스입니다.\n\n단순 전적 검색이 아닙니다. '잘한다/못한다'가 아니라 같은 티어·같은 포지션 분포에서의 백분위로 강약점을 짚고, 다음 3판 / 다음 10판에 무엇을 연습해야 하는지까지 문장으로 내려주는 것이 목표입니다.\n\n주요 특징:\n- Gemini를 챌린저급 프로 코치로 역할 지정한 4종 AI 리포트 (종합 코칭 / 데스 분석 / 라인전 분석 / 구간 흐름과 미션)\n- 티어 × 포지션으로 분리 수집한 실제 분포 기반의 체급·인분·주도권 백분위\n- 타임라인 기반 골드 격차 그래프, 미니맵 사망 위치 시각화, 참여도 레이더 차트",
      details: "- AI 코칭 리포트 생성기 (핵심 기능):\n  - Gemini에 챌린저급 프로 코치 역할을 부여하고, 계산된 지표 JSON만을 근거로 리포트를 작성하도록 시스템 지시 설계\n  - 종합 리포트: 정체성 한 줄 요약, 강점/약점 3가지, 라인전·중반·후반·시야·오브젝트별 코칭, 챔피언 풀 진단, 다음 3판/10판 훈련 과제\n  - 데스 분석: 데스를 '자원 손실' 관점으로 해석해 잃은 오브젝트·웨이브 상태 손실·시야 공백을 지적\n  - 라인전 분석: 15분 전 지표로 주도권 활용도, 정글 시너지, 귀환 타이밍과 아이템 빌드 효율 평가\n- 환각 차단 설계 (프롬프트 설계의 절반):\n  - response_mime_type을 application/json으로 강제해 모델이 JSON만 출력하도록 고정, 기존의 코드 펜스 문자열 파싱 제거\n  - 표본이 부족한 지표는 null로 넘기고 '추정하지 말고 데이터 부족이라고만 하라'를 지시에 명시\n  - 목표 수치는 서버가 계산한 값을 그대로 쓰게 해 숫자를 지어내지 못하도록 차단\n  - 칼바람 나락 분기: 랭크·라인전·와드·정글이 존재하지 않으므로 언급 자체를 금지하고 조언 축을 포지셔닝·한타 개시·부활 대기시간으로 전환\n- LLM 호출 비용·지연 최적화:\n  - 은퇴한 모델이 체인 1순위라 매 호출마다 404 왕복을 낭비하던 문제를 진단, 404 발생 시 해당 모델을 프로세스 캐시에서 제외\n  - thinking 토큰이 지연의 대부분(2,782토큰)을 차지하던 것을 thinking_level 조정으로 축소\n  - 동기 SDK를 asyncio.to_thread로 감싸던 것을 네이티브 async 클라이언트로 교체\n  - 근거가 같은 구간 해설과 제안 미션을 한 번의 호출로 병합 (무료 티어에서는 호출 수가 곧 비용)\n- 티어별 백분위 지표 체계:\n  - 체급·인분·라인전 주도권을 상수 평균이 아닌 실제 분포의 백분위로 계산\n  - 기준선을 티어 × 포지션으로 분리 수집 (통합 시 챌린저가 백분위 58로 나오는 문제 실측 후 수정)\n  - 작을수록 좋은 지표는 부호를 뒤집어 저장해 '상위 N%' 규칙을 하나로 통일\n- 운영 제약 대응:\n  - 리포트 1건 = Riot API 약 80회 호출, 개인 키 한도는 2분당 100회 → DB가 비면 첫 사용자 두 명이 쿼터를 전부 소진하는 구조를 파악하고 외부 Postgres 영속화를 필수화\n  - 헬스체크가 DB 실패 시에도 200을 반환하도록 설계 (서버리스 DB가 깨어나는 동안 컨테이너 재시작 루프에 빠지는 것 방지)\n  - 응답 스키마 버전을 캐시 키에 섞어, 계산식 변경 시 예전 형태의 캐시가 자동 무효화되도록 처리",
      result: "AI 코칭 리포트 4종 및 티어별 백분위 지표 체계 구현, Render 배포 및 운영 중",
      github: "https://github.com/GaMaius/Riot_Report",
      icon: "🎯",
      platformLabel: "FastAPI / Next.js / Gemini"
    },
    {
      priority: 3,
      category: "web",
      title: "VisionLab AI — 온디바이스 비전 웹앱",
      tags: ["Next.js 15", "TypeScript", "MediaPipe", "ONNX Runtime Web", "three.js"],
      period: "2026.07 - 진행중",
      team: "1인 개발 (기획 · 구현 · 배포 전담)",
      role: "전체 설계 및 구현. rPPG 알고리즘 포팅, 임베딩 기반 랭킹 엔진 설계, 실시간 3D 모션캡처 파이프라인 구축",
      desc: "웹캠 하나로 나를 스캔하는 온디바이스 비전 앱 모음입니다. 심박수·스트레스 측정부터 퍼스널 컬러 진단, 닮은 포켓몬 찾기, 실시간 3D 모션캡처까지 모든 추론이 브라우저 안에서 돌아갑니다.\n\n수록 앱:\n- HeartPulse — 얼굴 미세 혈류를 추적해 심박수(BPM)·HRV·스트레스 지수 측정 (rPPG)\n- PersonalFrame — 조명 보정 후 CIELAB 퍼스널 컬러 톤과 얼굴 골격·비율 진단\n- PokeMatch — 얼굴을 스캔해 시각적으로 가장 닮은 포켓몬 5마리 추천\n- VRM Capture — 얼굴·손·포즈를 실시간 추적해 3D 캐릭터(VRM·FBX)를 구동",
      details: "- HeartPulse (rPPG):\n  - rPPG-Toolbox의 POS 알고리즘을 TypeScript로 직접 포팅하고, 사전학습 DeepPhys(ONNX)를 onnxruntime-web으로 병행 실행하는 이중 엔진 구성\n  - MediaPipe FaceLandmarker로 ROI를 잡고 자체 구현 FFT로 BPM·HRV·스트레스 지수 산출\n- PokeMatch (정답 라벨이 없는 문제):\n  - 얼굴-포켓몬 매칭 데이터셋이 존재하지 않으므로 지도학습이 아닌 임베딩 채점 + 얼굴 계측 + 멀티모달 LLM 심사의 3단계로 분해\n  - 원시 코사인 유사도는 누가 스캔해도 같은 종이 1등이 되는 허브니스 문제가 있어, 종별 z-score로 인기 편향 제거\n  - 기준 통계가 공개 얼굴 데이터셋 분포라 실제 웹캠 셀피와 어긋나던 문제를 실측 임베딩으로 재보정하고 표준편차 하한 적용\n  - 임베딩의 약 86%가 '일반적인 사람 얼굴' 성분이라 개인차를 덮는 문제를 확인, 평균 벡터를 차감해 개인 고유 편차를 추출\n  - 진화계열이 상위를 독식하지 않도록 NMS 다양성 재랭킹 적용 (4인 leave-one-out 검증에서 상위권 공유 종 0개)\n  - fp16 변환은 모델 구조상 로드 불가 파일을 만들고 int8 양자화는 정확도가 붕괴해 fp32 유지 (44MB, WASM 실행)\n- VRM Capture (실시간 3D 모션캡처):\n  - 웹캠 → MediaPipe(Face·Pose·Hand) → Kalidokit → three-vrm → three.js 파이프라인 구축\n  - Kalidokit Pose 솔버가 이미 좌우를 교차한다는 점을 실측으로 규명하고, 손도 동일하게 교차 적용하도록 규약 통일\n  - Kalidokit 손목 솔버가 손바닥 roll을 yaw에 복사해 손이 팔뚝에서 비틀리는 문제를 확인, 손바닥 기하 기반 자체 손목 솔버 구현\n  - '골반이 안 보이면 전체 포즈 스킵' 로직 때문에 가까이 앉은 사용자의 아바타가 T포즈로 얼어붙던 문제를 부위별 게이팅으로 해결\n  - 인식 품질이 튜닝이 아니라 프레임레이트 문제임을 참고 앱 분석으로 규명하고, 무거운 모델을 프레임 단위로 번갈아 실행하도록 스케줄링\n  - Mixamo 등 비VRM 리그를 VRM 휴머노이드로 어댑트 (A-pose→T-pose 정렬, Z-up→Y-up, 스케일·접지·정면 방향 자동 보정)\n- 테스트 설계:\n  - 실제 VRM 파일을 Node에서 로드해 기하학적으로 검증하는 테스트 작성 ('거리는 방향이 아니다' — 주먹과 역굽힘이 같은 거리를 내 부호가 반대인 코드가 통과했던 사례 반영)",
      result: "Vercel 배포 및 운영 중 (https://skillprac.vercel.app)",
      github: "https://github.com/GaMaius/WebCam",
      icon: "👁️",
      platformLabel: "Next.js / MediaPipe / ONNX"
    },
    {
      priority: 5,
      category: "ai",
      title: "빗썸 암호화폐 자동 매매 프로그램",
      tags: ["Python", "scikit-learn", "Bithumb API", "PostgreSQL", "Docker"],
      period: "2026.04 - 진행중",
      team: "1인 개발 (전략 · 백테스트 · 서버 운영 전담)",
      role: "상용 봇 역분석 및 Python 재구현, 편향 없는 백테스트 하네스 설계, 4봇 병렬 서버 및 웹 대시보드 구축",
      desc: "빗썸 거래소 API 기반의 24시간 무인 자동매매 시스템입니다. 서로 다른 전략을 가진 4개의 봇을 하나의 서버에서 병렬 구동하고, 웹 대시보드로 실시간 감시·제어합니다.\n\n핵심은 '돌아가는 봇'이 아니라 편향 없이 검증된 전략입니다. look-ahead가 섞인 백테스트 수치를 걷어내고, 워크포워드·구간분할 민감도·자본 규모 의존성까지 확인한 뒤에야 실전 파라미터를 바꾸는 구조로 만들었습니다.\n\n메인 전략 BlueCore는 상용 자동매매 프로그램(C# WinForms)을 역분석해 핵심 알고리즘을 Python으로 완전히 재구현하고, 원본에 없던 자동 종목 선정·포지션 영속화·가상 매매 모드를 추가한 엔진입니다.",
      details: "- 전략 엔진 (BlueCore):\n  - 상용 프로그램의 C# 로직을 역분석해 Python으로 재구현, 불필요한 외부 서버 종속성 제거\n  - 장기 SMA(550봉) 상승 추세 확인 → 단기 고점 대비 2.6% 조정 시 진입 → 2% 추가 하락 시 분할 매수(최대 3회) → 물타기 횟수에 따라 보수화되는 동적 익절\n  - 24시간 거래대금·변동률 조건으로 매매 종목을 자동 선별하는 CoinSelector 구현\n- 편향 없는 백테스트 하네스 (가장 공들인 부분):\n  - 기존 백테스트가 '캔들을 받은 날 기준 상위 종목'을 골라놓고 그 이전 기간을 재생하는 look-ahead 구조임을 발견, 거기서 나온 +66% 수치를 폐기\n  - 종목 풀을 구간 시작 시점의 거래대금·변동률만으로 선정하도록 재설계 (유니버스 KRW 231종목)\n  - 워크포워드 검증 결과 '튜닝은 일반화되지 않는다'를 확인 — 폴드마다 최적값을 다시 고르면 +13.35%, 파라미터를 고정하면 +21.65%\n  - 폴드 경계를 6가지로 바꾸는 구간분할 민감도 검증으로 노이즈성 우위를 제거\n  - 최소 주문금액 때문에 소액 계좌와 큰 계좌의 동작이 달라지는 자본 규모 의존성을 함께 검증\n  - 43개 독립 구간 × 2가지 자본 규모에서 모든 지표가 동시에 개선되는 유일한 변경(물타기 2회→3회)만 실전 반영\n- 실전 운영 및 손실 원인 분석:\n  - 왕복 수수료 0.5%를 감안하면 기존 익절 하한(1.2/1.8%)이 구조적 파산 구간임을 확인하고 3.0/3.5%로 교정\n  - 실전 손실 원인 조사를 통해 거래대금 하한이 너무 낮아 슬리피지가 수익을 잠식함을 규명, 5억→10억으로 상향\n  - 주문 응답의 실제 체결가를 읽도록 수정 (기존에는 지정가 기준으로 손익을 잘못 계산)\n- 서버 및 인프라:\n  - 4개 봇을 각각 전용 스레드에서 감시 실행하는 통합 서버 구축 (이전 버전은 tick() 미보유 봇을 조용히 건너뛰며 '분석 완료' 로그만 찍고 실제로는 한 번도 돌지 않았음)\n  - 재배포 시 파일시스템이 초기화되어 거래 기록이 사라지던 문제를 Neon(Postgres) 영속 계층으로 해결, 단 DB 실패가 거래 경로를 막지 않도록 예외를 격리\n  - 포지션 저장을 '변경 시에만'으로 바꿔 쓰기 횟수를 하루 2,880회에서 수 회로 축소 (서버리스 DB 무료 한도 대응)\n  - 텔레그램 실시간 체결 알림 및 원격 제어, 브라우저에서 설정을 직접 수정하는 웹 대시보드 구현",
      result: "4봇 병렬 실전 운영 중, 편향 제거 백테스트 하네스로 전략 검증 체계 구축",
      github: "https://github.com/GaMaius/Bithumb_Auto_Invest",
      icon: "📈",
      platformLabel: "Python / Docker / Render"
    }
  ]
};
