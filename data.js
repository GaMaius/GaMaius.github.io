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
      desc: "Unity 엔진 기반의 하이퍼 캐주얼 게임 빌드 설계 및 스팀 런칭/운영.",
      details: "광물 채굴 인벤토리 및 상점 업그레이드 시스템 설계, 미니게임 맵 로직과 보상 시스템 구현 및 QA 수행.",
      tags: ["Unity", "C#", "PC", "Indie Game"],
      result: "스팀 정식 데모 출시 완료 및 서비스 운영",
      link: "https://store.steampowered.com/app/4304980/Drilling/",
      image: "./Drilling00.png"
    },
    {
      type: "education",
      badgeText: "수료",
      institution: "블레이버스 (Blaver)",
      title: "블레이버스 MVP 해커톤 최우수상 수상",
      date: "2025.10",
      desc: "Three.js 기반 3D CAD 부품 웹 뷰어 및 LLM 피드백 공부 보조 사이트 기획/개발로 MVP 경쟁 우수 평가 획득.",
      details: "Three.js 라이브러리를 활용한 3D CAD 부품 객체 로드 및 조작 기능 구현, OpenAI API 기반 학습 보조 챗봇 프롬프트 튜닝 및 실시간 챗 인터페이스 연동.",
      tags: ["Three.js", "React.js", "FastAPI", "OpenAI API"],
      result: "블레이버스 MVP 해커톤 최우수상 수상 (1등)",
      link: "https://github.com/GaMaius",
      image: ""
    },
    {
      type: "education",
      badgeText: "수료",
      institution: "테크위크 (Techweek)",
      title: "테크위크 1일 게임 해커톤 우승",
      date: "2025.09",
      desc: "24시간 동안 Unity를 활용하여 Git 명령어 테마의 로컬 멀티플레이 난투 게임 'push --force' 프로토타입 빌드 완성.",
      details: "Git 명령어 컨셉의 밀치기 액션 및 가속 물리 반사 로직 설계, 단독 게임플레이 클라이언트 코딩 및 24시간 내 시연 완성도 확보.",
      tags: ["Unity", "C#", "Physics Engine", "Game Jam"],
      result: "테크위크 해커톤 최종 우승 (1위)",
      link: "https://github.com/GaMaius",
      image: ""
    },
    {
      type: "award",
      badgeText: "수상",
      institution: "라이프 스타일 해커톤 위원회",
      title: "라이프 스타일 해커톤 우수상 수상",
      date: "2025.07",
      desc: "OpenAI GPT-4 API 및 비동기 음성 인식 연동 대시보드 스마트 미러 웹앱 개발.",
      details: "React 기반 스마트 미러 대시보드 컴포넌트 개발, Node.js 기반 OpenAI 비동기 호출 아키텍처 수립, 날씨/캘린더 외부 API 통합 파이프라인 연동.",
      tags: ["React.js", "Node.js", "OpenAI GPT-4", "Speech Recognition"],
      result: "라이프 스타일 해커톤 우수상 수상",
      link: "https://github.com/GaMaius",
      image: ""
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
      image: ""
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
      image: ""
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
      tags: ["Unity", "C#", "Game Launch"],
      period: "2025.11 - 2026.02 (4개월)",
      team: "3인 개발 (클라이언트 2, 그래픽 1)",
      role: "메인 게임 프로그래머 (물리 충돌 반사 기믹 구현, 코어 채굴 루프 및 업그레이드 데이터 영속화 처리)",
      desc: "지하 깊은 곳으로 드릴을 하강시키며 희귀 광물을 수집하고 위협적인 장애물을 회피하는 모바일 아케이드 게임입니다. 터치 드래그에 반응하는 최적화된 물리 가속 조작감을 완성하고 빌드를 구글 플레이에 출시하여 배포 주기를 경험했습니다.",
      github: "https://github.com/GaMaius",
      icon: "⛏️",
      platformLabel: "Unity / Mobile"
    },
    {
      priority: 2,
      category: "web",
      title: "LLM 기반 스마트 미러 웹앱",
      tags: ["React", "Node.js", "OpenAI API"],
      period: "2025.07 (3일, 라이프 스타일 해커톤)",
      team: "4인 개발 (프론트 2, 백엔드 1, 디자인 1)",
      role: "백엔드 아키텍처 설계, OpenAI GPT-4 대화 인터페이스 통합, 음성 인식(STT) 라이브러리 연동 API 개발",
      desc: "거울 디스플레이 배후 스크린에 탑재하는 스마트 미러 대시보드 웹앱입니다. 사용자의 아침 음성 질문을 수신하여 날씨 정보 분석 및 캘린더 일정을 조회하고, 맞춤화된 요약 일과 및 의상 제안을 생성형 AI를 거쳐 화면에 출력합니다. 우수상을 수상했습니다.",
      github: "https://github.com/GaMaius",
      icon: "🪞",
      platformLabel: "Web / LLM"
    },
    {
      priority: 4,
      category: "ai",
      title: "CNN을 통한 수화 인식 프로그램",
      tags: ["Python", "PyTorch", "OpenCV (CNN)"],
      period: "2025.04 - 2025.06 (2개월)",
      team: "2인 개발 (모델 1, 데이터 가공 1)",
      role: "CNN 모델 아키텍처 설계, PyTorch 학습 파이프라인 개발, OpenCV 웹캠 인터페이스 실시간 프레임 예측 구현",
      desc: "컴퓨터 비전 기술을 접목하여 카메라로 캡처한 손짓 동작을 분석하고 실시간으로 지문자 수화(A-Z) 문자로 분류해 주는 프로그램입니다. 데이터 전처리, 경량화된 CNN 레이어 최적화 설계를 거쳐 저사양 PC 환경에서도 프레임 손실 없는 높은 정확도의 인식을 완성했습니다.",
      github: "https://github.com/GaMaius",
      icon: "🤟",
      platformLabel: "Python / PyTorch"
    },
    {
      priority: 1,
      category: "web",
      title: "기계 부품 3D 뷰어 및 AI 공부 보조 사이트",
      tags: ["Three.js", "React", "FastAPI (LLM)"],
      period: "2025.10 (3일, 블레이버스 MVP 해커톤)",
      team: "4인 개발 (프론트 2, 백엔드 1, 3D 모델러 1)",
      role: "Three.js 기반 OBJ/GLTF 3D 기계 메쉬 렌더러 컴포넌트 구현, FastAPI 공부 보조 챗봇 어시스턴트 구조 설계",
      desc: "웹 브라우저 내에서 CAD 기계 설계 파일을 WebGL을 이용해 3D 렌더링하고 분해도를 볼 수 있는 플랫폼입니다. 업로드된 기계 부품의 원리와 작동 방식을 학습할 수 있도록 우측 뷰에 LLM 챗봇을 연결해 학습 보조 사이트를 설계했습니다. 최우수상을 받았습니다.",
      github: "https://github.com/GaMaius",
      icon: "⚙️",
      platformLabel: "WebGL / React / FastAPI"
    },
    {
      priority: 3,
      category: "game",
      title: "push --force 게임",
      tags: ["Unity", "C#", "Game Jam"],
      period: "2025.09 (24시간, 테크위크 해커톤)",
      team: "2인 개발 (클라이언트 1, 기획/아트 1)",
      role: "단독 1인 프로그래밍 (플레이어 탑다운 이동 물리 반발력 구현, 키보드 대전 맵 낙사 기믹 및 승리 판정 루프 완성)",
      desc: "Git 강제 푸시 명령어 'push --force' 컨셉을 탑다운 격투 메카닉으로 승화시킨 로컬 멀티플레이어 밀치기 난투 게임입니다. 24시간 해커톤 동안 충돌 가속도 반발 공식과 스피디한 이동 컨트롤러를 단독 구현하여 기획성을 입증받고 우승을 차지했습니다.",
      github: "https://github.com/GaMaius",
      icon: "💥",
      platformLabel: "Unity / PC"
    }
  ]
};
