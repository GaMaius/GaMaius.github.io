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
      priority: 5
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
      type: "education",
      badgeText: "수료",
      institution: "C++ 프로그래밍 교육센터",
      title: "C++ 고급 프로그래밍 스페셜 교육 코스 수료",
      date: "2025.03 - 2025.06",
      desc: "OOP 핵심 디자인 패턴 학습 및 응용 설계 과제 수행, 모던 C++ 스마트 포인터 기반 리소스 관리 훈련, 멀티스레딩 및 동시성 제어 프로그래밍 실습.",
      details: "OOP 핵심 디자인 패턴 학습 및 응용 설계 과제 수행, 모던 C++ 스마트 포인터 기반 리소스 관리 훈련, 멀티스레딩 및 동시성 제어 프로그래밍 실습.",
      tags: ["C++", "STL", "Multi-Threading", "Design Patterns"],
      result: "고급 C++ 스페셜 코스 우수 수료 (최종 성적 A+)",
      link: "",
      image: "",
      priority: 4
    },
    {
      type: "internship",
      badgeText: "인턴십",
      institution: "실무 연계 매칭 프로그램",
      title: "실무 연계형 인턴십 과정",
      date: "준비 중",
      desc: "게임 프로그래밍 코어 로직 개발 및 백엔드 지능형 모듈 부문 실무 연계 프로젝트 검색 중.",
      details: "현업 연계 프로젝트 탐색 및 실무 지원 준비, Git/GitHub 기반의 형상 관리 및 대규모 협업 아키텍처 학습.",
      tags: ["Unity Engine", "C#", "Python", "Git & GitHub"],
      result: "실무 인턴십 기회 매칭 프로세스 진행 중",
      link: "",
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
      priority: 1,
      category: "web",
      title: "LLM 기반 스마트 미러 웹앱",
      tags: ["React", "Node.js", "OpenAI API", "LLM"],
      period: "2025.07 (3일, 라이프 스타일 해커톤)",
      team: "3인 개발 (풀스택 1명, 백엔드 1명, 라즈베리파이 1명)",
      role: "풀스택 아키텍처 설계, OpenAI GPT LLM 개발, 음성 인식(STT) 및 APP과의 연동 개발",
      desc: "라즈베리파이 기반의 스마트 미러 디바이스와 연동하여 아침 루틴을 돕는 LLM 기반 지능형 대시보드 웹앱입니다.\n음성 명령을 통해 하루 일정과 실시간 기상/캘린더 데이터를 모니터링하고, 가상 캐릭터 '데브'의 건강 퀘스트와 웹캠 자세 분석 기능을 접목하여 일상 관리에 재미 요소를 더했습니다.\n\n주요 기능:\n- 아침 음성 질문 분석 및 외부 API 기반 맞춤형 정보 요약 제공\n- 스트레칭, 산책 등 데일리 웰니스 퀘스트와 캐릭터 성장(가상 펫) 컨셉 연동\n- 컴퓨터 비전(웹캠) 기반 실시간 스트레칭 자세 분석 및 자세 교정 알림",
      details: "- OpenAI GPT 기반 대화 및 음성 처리 모듈 설계:\n  - 음성 인식(Web Speech API STT) 라이브러리를 연동하여 비동기 음성 명령 수집 아키텍처 구축\n  - GPT API의 시스템 프롬프트 조율 및 컨텍스트 요약을 통한 자연스러운 데일리 브리핑 답변 생성 로직 개발\n- 대시보드 및 서비스 아키텍처 연동:\n  - React 기반의 스마트 미러 화면 최적화 대시보드 UI 컴포넌트 구성\n  - 외부 날씨 API 및 캘린더 데이터 통합 연동을 통해 실시간 스케줄 관리 기능 및 알람 파이프라인 구축\n  - 라즈베리파이 디바이스 및 스마트 미러 앱과 웹앱 간의 실시간 WebSocket 통신 연동",
      result: "라이프 스타일 해커톤 우수상 수상",
      github: "https://github.com/GaMaius/On-Life.git",
      icon: "🪞",
      platformLabel: "Web / LLM"
    },
    {
      priority: 3,
      category: "ai",
      title: "CNN을 통한 수화 인식 프로그램",
      tags: ["Python", "PyTorch", "OpenCV (CNN)"],
      period: "2025.04 - 2025.06 (2개월)",
      team: "2인 개발 (모델 1, 데이터 가공 1)",
      role: "CNN 모델 아키텍처 설계, PyTorch 학습 파이프라인 개발, OpenCV 웹캠 인터페이스 실시간 프레임 예측 구현",
      desc: "컴퓨터 vision 기술을 접목하여 카메라로 캡처한 손짓 동작을 분석하고 실시간으로 지문자 수화(A-Z) 문자로 분류해 주는 프로그램입니다.",
      details: "CNN 모델 아키텍처 설계, PyTorch 학습 파이프라인 개발, OpenCV 웹캠 인터페이스 실시간 프레임 예측 구현.\n데이터 전처리 및 경량화된 CNN 레이어 최적화 설계 수행.",
      result: "경량화 모델 최적화 및 30 FPS 이상 실시간 인식률 확보",
      // github: "https://github.com/GaMaius",
      icon: "🤟",
      platformLabel: "Python / PyTorch",
      image: ["./CNN00.png"]
    },
    {
      priority: 2,
      category: "web",
      title: "기계 부품 3D 뷰어 및 AI 공부 보조 사이트",
      tags: ["Three.js", "React", "FastAPI (LLM)"],
      period: "2025.10 (3일, 블레이버스 MVP 해커톤)",
      team: "4인 개발 (프론트 2, 백엔드 1, 3D 모델러 1)",
      role: "Three.js 기반 OBJ/GLTF 3D 기계 메쉬 렌더러 컴포넌트 구현, FastAPI 공부 보조 챗봇 어시스턴트 구조 설계",
      desc: "WebGL 기반의 3D CAD 기계 부품 분해 뷰어와 OpenAI GPT 챗봇 어시스턴트를 연동한 3D 양방향 교육용 웹 서비스입니다.\n사용자가 브라우저에서 드론이나 로봇 암 등의 3D 모델을 조작 및 분해하며 작동 원리를 시각적으로 이해하고, 학습 어시스턴트를 통해 부품별 기계적 특성에 대해 실시간 질의응답을 할 수 있는 환경을 제공합니다.\n\n주요 특징:\n- Three.js WebGL 기반 고성능 3D 기계 부품 렌더링 및 분해 뷰(Explode View) 연동\n- 부품 클릭 시 기계적 매커니즘 및 물성을 알려주는 OpenAI GPT 연동 챗봇\n- 3D 기계 부품 객체 메타데이터와 대화 이력을 연동한 맞춤형 학습 퀴즈 및 요약 제공",
      details: "- Three.js 기반 3D CAD 부품 인터랙티브 뷰어 구현:\n  - Three.js 라이브러리를 활용해 드론, V4 엔진, 로봇 암 등 복잡한 GLB 메쉬 파일 로드 및 조작 기능 최적화\n  - 카메라 시점 제어, 타겟 추적 및 메쉬 분해율(Explode Value) 조작 로직 수립\n  - 시각화 상태(카메라 좌표, 분해 정도)를 데이터베이스(SQLite)와 실시간 동기화하여 이전 상태 복구 기능 구현\n- 지능형 LLM 챗봇 어시스턴트 설계:\n  - OpenAI GPT API 기반 공부 보조 어시스턴트 연동 및 시스템 프롬프팅 최적화\n  - 3D 부품 선택 정보(부품명, 물성 등)와 유저 질문을 병합하여 정확한 답변을 도출하는 RAG 기초 구조 설계\n  - 대화 맥락 분석을 통한 대화 요약 생성 및 맞춤형 학습 퀴즈 자동 출제 모듈 구현\n- API 아키텍처 및 데이터 흐름 구축:\n  - FastAPI 및 Django 인프라 하에서 부품 정보(PartInfo) 비동기 조회 고성능 API 설계\n  - 대화 히스토리 및 사용자 설정 데이터를 데이터베이스 및 JSON 파일에 효율적으로 격리 저장하는 CRUD 파이프라인 구현",
      result: "블레이버스 MVP 해커톤 최우수상 수상 (1등)",
      github: "https://github.com/GaMaius/Infotive.git",
      icon: "⚙️",
      platformLabel: "WebGL / React / FastAPI",
      image: ["./Blaybus00.png", "./Blaybus03.png", "./Blaybus01.png", "./Blaybus02.png"]
    },
    {
      priority: 4,
      category: "game",
      title: "push --force 게임",
      tags: ["Unity", "C#", "Game Jam"],
      period: "2025.09 (24시간, 테크위크 해커톤)",
      team: "2인 개발 (클라이언트 1, 기획/아트 1)",
      role: "단독 1인 프로그래밍 (플레이어 탑다운 이동 물리 반발력 구현, 키보드 대전 맵 낙사 기믹 및 승리 판정 루프 완성)",
      desc: "Git 강제 푸시 명령어 'push --force' 컨셉을 탑다운 격투 메카닉으로 승화시킨 로컬 멀티플레이어 밀치기 난투 게임입니다.",
      details: "Git 명령어 컨셉의 밀치기 액션 및 가속 물리 반사 로직 설계, 단독 게임플레이 클라이언트 코딩 및 24시간 내 시연 완성도 확보.",
      result: "테크위크 해커톤 최종 우승 (1위)",
      github: "https://github.com/GaMaius",
      icon: "💥",
      platformLabel: "Unity / PC"
    }
  ]
};
