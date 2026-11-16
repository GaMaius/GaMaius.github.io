/*
 * 포트폴리오 콘텐츠. 화면은 전부 이 파일에서 그려진다.
 *
 * 링크 규칙
 * - links.repo 에는 "공개" 저장소만 넣는다. 비공개를 넣으면 면접관에게 404가 뜬다.
 *   비공개라면 repo 를 비우고 codeNote 에 사유를 적는다.
 * - links.demo 는 배포 사이트, links.store 는 상점 페이지.
 *
 * 분야(kind): game | ai | web  →  색으로 구분된다(게임 주황, AI 보라, 웹 청록).
 * 아이콘(icon): img/px/<이름>.png (Pixel Factory로 만든 도트 이미지). 없으면 광석 모양으로 대체된다.
 * 기술 숙련도(pct): 0–100. 화면에는 5칸 게이지로 그려진다(20%당 1칸).
 */
window.PORTFOLIO = {
  person: {
    name: "지우가람",
    role: "Unity 게임 클라이언트 개발자",
    tagline: "Steam에 정식 출시한 Drilling의 인벤토리·상점·업그레이드·보상 시스템을 만들었습니다.",
    email: "rkfka04101212@gmail.com",
    github: "https://github.com/GaMaius",
    steam: "https://store.steampowered.com/app/4304980/Drilling/"
  },

  // 첫 화면 인벤토리 칸. 확인 가능한 사실만.
  slots: [
    { icon: "i-launch", label: "Steam 출시", sub: "Drilling, 2026.11", count: "1" },
    { icon: "i-intern", label: "기업 인턴", sub: "감바랩스, 2026.08" },
    { icon: "i-cert", label: "PCCP Lv.2", sub: "Python3 551점" },
    { icon: "i-school", label: "부산대 재학", sub: "2025.03 –" }
  ],

  // 어떤 개발자인지: 짧은 한 줄 + 근거
  strengths: [
    { icon: "i-launch", title: "끝까지 출시합니다", line: "8명 팀에서 17개월, 데모와 정식 출시를 모두 거쳤습니다.", proof: ["Drilling Steam 출시", "QA·빌드 최적화"] },
    { icon: "p-gear", title: "기술을 엮어 문제를 풉니다", line: "게임 엔진, 비전 AI, 웹을 한 프로젝트 안에서 섞어 씁니다.", proof: ["Unity + MediaPipe 모션캡처", "웹 3D + LLM 해커톤"] },
    { icon: "p-coin", title: "배포하고 운영합니다", line: "만든 서비스를 실제로 띄우고, 결제와 지표까지 붙입니다.", proof: ["Riot Report 구독 준비", "VisionLab 운영 중"] }
  ],

  featured: {
    id: "drilling",
    title: "Drilling",
    oneLine: "땅속에서 깨어난 드릴이를 조종해 지상으로 파 올라가는 2D 픽셀 채굴 어드벤처",
    facts: [
      { icon: "i-launch", term: "출시", desc: "2026.11.03 Steam 정식 출시" },
      { icon: "i-intern", term: "팀", desc: "Studio. HONGS, 8명 (개발 5, 디자인 3)" },
      { icon: "i-upgrade", term: "역할", desc: "메인 클라이언트 개발" },
      { icon: "ore-cyan", term: "엔진", desc: "Unity, C#" },
      { icon: "ore-gold", term: "지원", desc: "Windows, 8개 언어, 도전과제, 클라우드 저장" }
    ],
    milestones: [
      { date: "2025.06", label: "개발 시작" },
      { date: "2026.04", label: "Steam 데모 출시" },
      { date: "2026.11", label: "Steam 정식 출시" }
    ],
    systems: [
      { icon: "i-inventory", title: "인벤토리", body: "9등급 광석을 담는 인벤토리" },
      { icon: "i-shop", title: "상점", body: "채굴한 광물이 실시간으로 반영되는 상점" },
      { icon: "i-upgrade", title: "모듈형 업그레이드", body: "드릴 크기·파워·범위·속도를 모듈 단위로 강화" },
      { icon: "i-minigame", title: "미니게임과 보상", body: "무작위 미니게임 맵 로직, 성공 판정과 보상 지급" }
    ],
    alsoDid: ["Steam 연동", "클라이언트 빌드 최적화", "QA", "데모·정식 두 번의 출시"],
    image: { src: "img/drilling-play.webp", w: 1440, h: 810, alt: "Drilling 플레이 화면. 어두운 동굴 속에서 드릴이 바위를 뚫고, 하단에 광물 인벤토리 슬롯 세 칸이 보인다." },
    codeNote: "팀 프로젝트라 코드는 비공개입니다."
  },

  projects: [
    {
      id: "riot-report", kind: "web", icon: "p-riot",
      title: "LoL AI 코칭 리포트",
      period: "2026.03 – 진행 중", team: "1인 개발", role: "기획, 백엔드, 프론트엔드, 배포·운영",
      oneLine: "티어·포지션 분포로 강약점을 짚고 AI가 다음 판 연습 과제를 써 주는 웹 서비스",
      chips: ["AI 리포트 4종", "지표 25종 백분위", "구독 결제 Sandbox 검증"],
      thumb: "img/riot-report.webp",
      images: [
        { src: "img/riot-report.webp", w: 1440, h: 790, alt: "전적 분석 화면: 체급·인분·라인전 지표, 챔피언별 백분위, 플레이 스타일 레이더" },
        { src: "img/riot-home.webp", w: 960, h: 520, alt: "LoL Play Report 첫 화면과 소환사 검색" }
      ],
      sections: [
        { title: "AI 코칭 리포트", items: [
          "Gemini에 프로 코치 역할을 주고, 계산된 지표 JSON만 근거로 리포트를 쓰게 설계",
          "종합 리포트: 강점·약점, 라인전·중반·후반·시야·오브젝트별 코칭, 다음 3판·10판 과제",
          "데스 분석: 잃은 오브젝트, 웨이브 손실, 시야 공백을 '자원 손실' 관점으로 지적",
          "라인전 분석: 15분 전 지표로 주도권 활용, 귀환 타이밍, 아이템 효율 평가"
        ]},
        { title: "지어낸 수치 차단", items: [
          "출력을 JSON으로 강제해 코드 펜스 문자열 파싱 제거",
          "표본 없는 지표는 null로 넘기고 '데이터 부족'으로만 쓰게 지시",
          "칼바람 나락은 랭크·라인전·와드 언급을 금지하고 조언 축을 한타·포지셔닝으로 전환"
        ]},
        { title: "지표 체계", items: [
          "체급·인분·주도권을 상수 평균이 아니라 실제 분포의 백분위로 계산",
          "기준선을 티어 × 포지션으로 분리 수집 (통합 시 챌린저가 백분위 58로 나오던 문제 수정)"
        ]},
        { title: "비용과 운영", items: [
          "은퇴 모델 404 왕복 제거, thinking 토큰 축소, 네이티브 async 클라이언트로 지연 단축",
          "리포트 1건 = Riot API 약 80회 → 외부 Postgres 영속화로 쿼터 소진 방지",
          "Paddle 월 구독(주간 이용량 초기화)과 토큰 충전, 이용량 원장, 웹훅 검증 구현 → Sandbox 검증 완료",
          "운영자 전용 방문·전환 분석으로 베타 지표(재방문율, 두 번째 분석률) 측정 준비"
        ]}
      ],
      result: "Render 배포 운영 중, 실결제 전환 준비 중",
      stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Gemini API", "Paddle"],
      links: { demo: "https://riot-report.onrender.com" },
      codeNote: "실서비스 운영 준비 중이라 코드는 비공개입니다."
    },
    {
      id: "gambalabs", kind: "ai", icon: "p-gamba",
      title: "감바랩스 오피스 AI 도구",
      period: "2026.07 – 08 (2주)", team: "1인, 감바랩스 인턴 과제", role: "과제 정의부터 구현, exe 빌드, 보고서까지 단독",
      oneLine: "PPT 제작·엑셀 정리·도식 벡터 변환을 하나로 묶은 LLM 데스크톱 도구",
      chips: ["자가 수정 루프 3회", "exe 납품", "보고서·인수인계"],
      thumb: "img/gamba-pipeline.webp",
      images: [
        { src: "img/gamba-pipeline.webp", w: 1600, h: 714, alt: "PPT 생성 파이프라인 구조도: 기획, 코드 생성, 실행, 검사, 재작성 루프" },
        { src: "img/gamba-arch.webp", w: 1400, h: 877, alt: "앱 구조도: 사용자 UI, 제어 계층, PPT·Excel·SVG 모듈, 공통 백엔드" }
      ],
      sections: [
        { title: "설계 원칙", items: [
          "LLM은 '무엇을' 할지만 판단하고, 파일 수정은 openpyxl·pptxgenjs가 하도록 역할 분리",
          "검증된 오픈소스를 엮는 인터페이스로 설계 (회사가 신뢰할 수 있는 구조)"
        ]},
        { title: "PPT 자유 설계 파이프라인", items: [
          "기획(JSON) → 배경 합성 → LLM이 pptxgenjs 코드 작성 → 실행 → 품질 검사",
          "결함을 지적하고 다시 쓰는 자가 수정 루프(최대 3회), 실패 시 템플릿으로 폴백",
          "스타일·그리드 상수는 헬퍼가 고정해 브랜드 일관성 유지"
        ]},
        { title: "Excel과 SVG", items: [
          "자연어 요청으로 대시보드를 고치되 수식·차트 보존",
          "실험 스크립트 한 줄로 엑셀 기록과 차트 자동 갱신 (C 헤더 포함)",
          "비트맵 → SVG 변환, 유형별 파라미터 자동 튜닝과 품질 채점"
        ]},
        { title: "납품", items: [
          "Python·Node 미설치 PC에서도 도는 exe 빌드",
          "경로 단일화로 소스와 빌드본 동작 일치, 최종 보고서와 인수인계 문서 작성"
        ]}
      ],
      result: "2주 과제 완수, 도구와 보고서·인수인계 문서 납품",
      stack: ["Python", "pywebview", "openpyxl", "pptxgenjs", "Groq"],
      links: { repo: "https://github.com/GaMaius/GambaLabs" }
    },
    {
      id: "visionlab", kind: "web", icon: "p-vision",
      title: "VisionLab 웹캠 비전 앱",
      period: "2026.07 – 진행 중", team: "1인 개발", role: "기획, 구현, 배포",
      oneLine: "웹캠 하나로 심박수·퍼스널 컬러·닮은꼴·3D 모션캡처를 브라우저에서 처리",
      chips: ["앱 4종", "실시간 VRM 모션캡처", "브라우저 온디바이스 추론"],
      thumb: "img/vision-home.webp",
      images: [
        { src: "img/vision-home.webp", w: 1440, h: 900, alt: "VisionLab 첫 화면: HeartPulse, PersonalFrame, PokéMatch, VRM Capture 앱 카드" }
      ],
      sections: [
        { title: "VRM 실시간 모션캡처", items: [
          "웹캠 → MediaPipe(얼굴·포즈·손) → Kalidokit → three-vrm 파이프라인",
          "손목이 팔뚝에서 비틀리던 문제를 손바닥 기하 기반 자체 솔버로 해결",
          "가까이 앉으면 T포즈로 굳던 문제를 부위별 신뢰도 판정으로 해결",
          "무거운 모델을 프레임마다 번갈아 실행해 인식 품질(프레임레이트) 확보",
          "Mixamo 등 비VRM 리그 자동 보정 (A포즈 → T포즈, 축·스케일·접지)"
        ]},
        { title: "HeartPulse (rPPG)", items: [
          "POS 알고리즘을 TypeScript로 포팅하고 DeepPhys(ONNX)를 브라우저에서 병행 실행",
          "자체 FFT로 BPM·HRV·스트레스 지수 산출"
        ]},
        { title: "PokéMatch", items: [
          "정답 라벨이 없는 문제를 임베딩 채점 + 얼굴 계측 + 멀티모달 LLM 심사로 분해",
          "누구나 같은 결과가 나오던 쏠림을 z-score와 평균 벡터 차감으로 해결"
        ]},
        { title: "테스트", items: [
          "실제 VRM 파일을 Node에서 로드해 손·손목 방향을 기하학적으로 검증"
        ]}
      ],
      result: "Vercel 배포 운영 중",
      stack: ["TypeScript", "Next.js", "MediaPipe", "three.js", "ONNX Runtime Web"],
      links: { demo: "https://skillprac.vercel.app/", repo: "https://github.com/GaMaius/WebCam/tree/visionlab" }
    },
    {
      id: "push-force", kind: "game", icon: "p-push",
      title: "push --force",
      period: "2025.09 (1일)", team: "3명, 테크위크 게임 해커톤", role: "맵 로직 담당",
      oneLine: "원형 전장에서 서로를 밀어 떨어뜨리는 2인 로컬 대전 게임",
      chips: ["1일 완성", "맵 기믹 3종", "2인 로컬 대전"],
      sections: [
        { title: "전투", items: [
          "한 키보드 2인 조작(WASD / 방향키), 공격 넉백·반동 물리"
        ]},
        { title: "맵 로직 (담당)", items: [
          "자기장 축소, 장애물 소환 등 맵 기믹 3종",
          "3판 2선승 라운드 루프",
          "맵 중심 기준 실시간 링아웃 판정, 안전 구역을 따라 생성되는 아이템 스포너"
        ]}
      ],
      result: "테크위크 1일 게임 해커톤 수료",
      stack: ["Unity 2D", "C#", "URP", "Input System"],
      links: {},
      codeNote: "해커톤 팀 저장소가 비공개입니다."
    },
    {
      id: "on-life", kind: "web", icon: "p-onlife",
      title: "On-Life 스마트 미러",
      period: "2026.02 (3일)", team: "3명, 라이프 스타일 해커톤", role: "풀스택 설계, LLM·음성 인식 연동",
      oneLine: "자세와 졸음을 감지하고 음성 비서·가상 펫으로 생활 습관을 돕는 웹앱",
      chips: ["해커톤 우수상", "자세·졸음 실시간 감지", "음성 비서"],
      thumb: "img/onlife-1.webp",
      images: [
        { src: "img/onlife-1.webp", w: 1600, h: 782, alt: "On-Life 대시보드" },
        { src: "img/onlife-2.webp", w: 1600, h: 786, alt: "On-Life 자세 분석" },
        { src: "img/onlife-3.webp", w: 1600, h: 780, alt: "On-Life 가상 펫" }
      ],
      sections: [
        { title: "자세·상태 분석", items: [
          "OpenCV, MediaPipe Face Mesh로 거북목·졸음 실시간 감지",
          "나쁜 자세가 감지되면 가상 펫 '데브'의 체력 감소와 교정 알림",
          "분석 중인 카메라 화면을 Flask 스트리밍으로 웹앱에 송출"
        ]},
        { title: "음성 비서", items: [
          "웨이크 워드('데브')로 깨우는 STT·TTS 파이프라인",
          "날씨·뉴스 요약 브리핑, LLM 응답 속 명령을 해석해 타이머·일정 실행"
        ]},
        { title: "성장과 기록", items: [
          "퀘스트·레벨업·친밀도 성장 로직, 자세·활동 로그 통계 대시보드"
        ]}
      ],
      result: "라이프 스타일 해커톤 우수상",
      stack: ["Python", "Flask", "MediaPipe", "OpenCV", "LLM API"],
      links: { repo: "https://github.com/GaMaius/On-Life" }
    },
    {
      id: "devcompass", kind: "web", icon: "p-compass",
      title: "DevCompass 진로 탐색",
      period: "2026.10 – 진행 중", team: "1인 개발", role: "흐름 기획, 분석 규칙 설계, 구현",
      oneLine: "컴퓨터공학 12개 분야·48개 직무를 탐색하고 다음 할 일로 연결하는 웹앱",
      chips: ["직무 48개", "자동 테스트 32개", "공고 크롤러"],
      thumb: "img/devcompass-1.webp",
      images: [
        { src: "img/devcompass-1.webp", w: 1521, h: 722, alt: "DevCompass 시작 화면" },
        { src: "img/devcompass-2.webp", w: 1521, h: 722, alt: "DevCompass 탐색 화면" },
        { src: "img/devcompass-3.webp", w: 1521, h: 722, alt: "DevCompass 결과 화면" }
      ],
      sections: [
        { title: "문항과 분석", items: [
          "공통 24문항과 응답에 따른 재확인 질문",
          "흥미와 업무 부담이 충돌하는 경우, 체험 전후 응답 차이를 구분"
        ]},
        { title: "다음 행동으로 연결", items: [
          "직무별 오늘 할 과제, 작은 프로젝트 범위와 완료 기준, 포트폴리오 목차",
          "면접 준비 체크리스트와 Markdown 계획 다운로드"
        ]},
        { title: "근거와 검증", items: [
          "공식 채용 자료를 요구 내용 → 연습 과제 → 포트폴리오 증거로 연결",
          "공고 크롤러와 변경 감지, 자동 테스트 32개"
        ]}
      ],
      result: "Vercel 배포",
      stack: ["React", "Vite", "JavaScript"],
      links: { demo: "https://devcompass-rho.vercel.app/" },
      codeNote: "코드는 비공개입니다."
    },
    {
      id: "bithumb", kind: "ai", icon: "p-coin",
      title: "빗썸 자동 매매 시스템",
      period: "2026.04 – 진행 중", team: "1인 개발", role: "전략, 백테스트, 서버 운영",
      oneLine: "전략 봇 4개를 한 서버에서 돌리고, 편향 없는 백테스트로 전략을 검증",
      chips: ["봇 4종 병렬", "편향 제거 백테스트", "43개 구간 검증"],
      sections: [
        { title: "전략 엔진", items: [
          "상용 프로그램의 C# 로직을 분석해 Python으로 재구현",
          "상승 추세 확인 → 조정 시 진입 → 분할 매수 → 동적 익절",
          "거래대금·변동률 조건으로 종목 자동 선별"
        ]},
        { title: "편향 없는 백테스트 (가장 공들인 부분)", items: [
          "미래 정보를 엿보는 구조를 찾아내 +66% 결과를 폐기하고 재설계",
          "워크포워드 검증으로 '파라미터 튜닝은 일반화되지 않는다'를 수치로 확인",
          "43개 구간 × 2가지 자본 규모에서 모두 개선된 변경만 실전 반영"
        ]},
        { title: "운영", items: [
          "왕복 수수료를 감안한 익절 하한 교정, 실제 체결가 기준 손익 계산",
          "재배포 시 기록 유실을 Postgres 영속화로 해결, DB 장애가 매매를 막지 않게 격리",
          "텔레그램 체결 알림, 웹 대시보드에서 설정 직접 수정"
        ]}
      ],
      result: "실전 운영 중",
      stack: ["Python", "pandas", "scikit-learn", "PostgreSQL", "Docker"],
      links: {},
      codeNote: "거래소 연동 코드라 비공개입니다."
    },
    {
      id: "infotive", kind: "web", icon: "p-gear",
      title: "기계 부품 3D 뷰어",
      period: "2026.02 (3일)", team: "4명, 블레이버스 MVP 해커톤", role: "3D 렌더러, 챗봇 구조 설계",
      oneLine: "기계 부품을 브라우저에서 분해해 보고 고른 부품을 AI에게 묻는 학습 서비스",
      chips: ["3D 분해 뷰어", "부품 맥락 챗봇", "3일 해커톤"],
      thumb: "img/infotive-2.webp",
      images: [
        { src: "img/infotive-2.webp", w: 1600, h: 782, alt: "3D 뷰어 화면" },
        { src: "img/infotive-3.webp", w: 1600, h: 779, alt: "AI 학습 도우미 화면" }
      ],
      sections: [
        { title: "3D 뷰어", items: [
          "드론·V4 엔진·로봇 암 GLB 모델 로드, 분해 정도와 카메라 시점 조작",
          "카메라 좌표와 분해 상태를 DB에 저장해 이전 상태 복구"
        ]},
        { title: "AI 학습 도우미", items: [
          "선택한 부품 정보와 질문을 합쳐 답하는 챗봇",
          "대화 요약과 맞춤 퀴즈 자동 출제"
        ]}
      ],
      result: "블레이버스 MVP 개발 해커톤 수료",
      stack: ["Three.js", "React", "FastAPI", "OpenAI API"],
      links: {},
      codeNote: "해커톤 저장소가 비공개입니다."
    },
    {
      id: "sign-cnn", kind: "ai", icon: "p-hand",
      title: "CNN 수어 인식",
      period: "2023.03 – 2023.09", team: "3명", role: "학습 파이프라인, ResNet-18 적용, 실시간 처리",
      oneLine: "웹캠으로 찍은 수어 동작을 실시간으로 문자로 옮기는 프로그램",
      chips: ["30 FPS 실시간", "ResNet-18", "손 영역 전처리"],
      thumb: "img/sign-cnn-2.webp",
      images: [
        { src: "img/sign-cnn-2.webp", w: 734, h: 272, alt: "ResNet-18 구조도" }
      ],
      sections: [
        { title: "모델", items: [
          "PyTorch 학습 파이프라인, ResNet-18 튜닝",
          "손 영역을 정확히 뽑기 위한 데이터 전처리"
        ]},
        { title: "실시간 처리", items: [
          "OpenCV로 웹캠 프레임 처리, 경량화 후 30 FPS 이상 인식"
        ]}
      ],
      result: "경량화 후 30 FPS 이상 실시간 인식",
      stack: ["Python", "PyTorch", "OpenCV"],
      links: {}
    }
  ],

  // 날짜 내림차순. kind: 출시 | 인턴 | 자격 | 수상 | 수료
  timeline: [
    { date: "2026.11", kind: "출시", icon: "i-launch", title: "Drilling Steam 정식 출시", org: "Studio. HONGS", link: "#drilling" },
    { date: "2026.08", kind: "인턴", icon: "i-intern", title: "기업체험형 인턴십 수료", org: "감바랩스, 온디바이스 AI 음성인식", note: "2026.07.27 – 08.07", projectId: "gambalabs" },
    { date: "2026.05", kind: "자격", icon: "i-cert", title: "PCCP Lv.2", org: "프로그래머스", note: "Python3, 551 / 1000점" },
    { date: "2026.04", kind: "출시", icon: "i-launch", title: "Drilling Steam 데모 출시", org: "Studio. HONGS", link: "#drilling" },
    { date: "2026.02", kind: "수상", icon: "i-minigame", title: "라이프 스타일 해커톤 우수상", org: "On-Life 스마트 미러", projectId: "on-life" },
    { date: "2026.02", kind: "수료", icon: "ore-gold", title: "블레이버스 MVP 개발 해커톤", org: "기계 부품 3D 뷰어", projectId: "infotive" },
    { date: "2025.09", kind: "수료", icon: "ore-gold", title: "테크위크 1일 게임 해커톤", org: "push --force", projectId: "push-force" }
  ],

  education: [
    { icon: "i-school", school: "부산대학교", period: "2025.03 – 재학 중" },
    { icon: "i-cert", school: "창원과학고등학교", period: "2022.03 – 2025.02 졸업" }
  ],

  // pct 는 본인 평가(이전 포트폴리오 값). level: 숙련 | 중급 | 입문
  skills: [
    { group: "게임 개발", kind: "game", items: [
      { name: "Unity", pct: 95, level: "숙련", proof: "Drilling 상용 출시" },
      { name: "C#", pct: 75, level: "중급", proof: "Drilling, push --force" },
      { name: "C++", pct: 75, level: "중급", proof: "학교 수업, 객체지향 과제" },
      { name: "Aseprite", pct: 70, level: "중급", proof: "" }
    ]},
    { group: "AI · 비전", kind: "ai", items: [
      { name: "Python", pct: 95, level: "숙련", proof: "PCCP Lv.2, 백엔드·AI 전반" },
      { name: "MediaPipe", pct: 85, level: "숙련", proof: "VisionLab, On-Life, 모션캡처" },
      { name: "PyTorch · CNN", pct: 75, level: "중급", proof: "CNN 수어 인식" },
      { name: "OpenCV", pct: 65, level: "중급", proof: "On-Life, CNN 수어 인식" }
    ]},
    { group: "웹", kind: "web", items: [
      { name: "HTML · CSS", pct: 55, level: "중급", proof: "이 포트폴리오, DevCompass" },
      { name: "JavaScript", pct: 50, level: "입문", proof: "DevCompass, VisionLab" },
      { name: "React", pct: 30, level: "입문", proof: "DevCompass, 3D 뷰어" },
      { name: "FastAPI · Node.js", pct: 30, level: "입문", proof: "Riot Report 백엔드" }
    ]},
    { group: "협업 · 배포", kind: "tool", items: [
      { name: "Git · GitHub", pct: 70, level: "중급", proof: "팀 프로젝트 협업" },
      { name: "Vercel", pct: 75, level: "중급", proof: "VisionLab, DevCompass" },
      { name: "Render", pct: 70, level: "중급", proof: "Riot Report, 자동 매매 서버" },
      { name: "Notion", pct: 75, level: "중급", proof: "" }
    ]}
  ]
};
