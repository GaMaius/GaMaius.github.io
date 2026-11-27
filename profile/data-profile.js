/*
 * 범용 포트폴리오(/profile/)에서 무엇을 앞에 둘지.
 * 프로젝트·경력·기술 내용은 루트의 data.js(window.PORTFOLIO)를 그대로 쓴다.
 * Drilling 은 data.js 의 featured(대표작 정보)로 프로젝트를 만들어 쓴다(profile.js).
 */
window.PROFILE = {
  school: "부산대학교 정보컴퓨터공학부 인공지능전공",
  // 첫 화면 큰 문장. 줄마다 끊어서 보인다.
  statement: ["AI 서비스와 게임을", "만들고, 내놓고,", "운영합니다."],
  intro: "해커톤에서 상을 받은 AI 에이전트, 직접 배포해 운영 중인 웹 서비스, 8명 팀으로 Steam에 출시한 게임까지. 만든 것을 실제로 쓰이게 하는 데까지 갑니다.",

  // 첫 화면 오른쪽 이력 요약 (확인 가능한 사실만)
  facts: [
    { label: "최우수상", text: "2026 AWS X PNU AI 마에스트로 해커톤", open: "maestro" },
    { label: "Steam 출시", text: "Drilling, 8명 팀 메인 클라이언트", open: "drilling" },
    { label: "운영 중", text: "LoL AI 코칭 리포트, 구독 결제 준비", open: "riot-report" },
    { label: "인턴", text: "감바랩스, LLM 오피스 도구 납품", open: "gambalabs" }
  ],

  // 대표 작업: 크게 보여 줄 세 개와 핵심 세 줄
  featured: [
    { id: "maestro", points: [
      "판정은 모델이 아니라 규칙 코드가 하게 나눠, 75세트 측정에서 지어낸 값 0칸",
      "오류를 누르면 서류 그림 위 그 칸에 박스를 띄우는 검토 화면 전체를 담당",
      "대회 뒤 AWS 없이도 열리는 데모와 로컬 실행으로 재구축"
    ]},
    { id: "riot-report", points: [
      "티어와 포지션을 나눠 기준선을 다시 수집 (챌린저가 백분위 58로 나오던 문제)",
      "출력을 JSON으로 강제하고, 표본 없는 지표는 null로 넘겨 지어낸 수치를 차단",
      "Paddle 월 구독과 웹훅 검증을 Sandbox에서 검증, Render에서 운영"
    ]},
    { id: "drilling", points: [
      "8명 팀에서 17개월, 메인 클라이언트 개발",
      "인벤토리, 상점, 모듈형 업그레이드, 미니게임 보상 시스템",
      "2026.04 Steam 데모, 2026.11 정식 출시"
    ]}
  ],

  // 전체 작업 목록 순서
  order: ["maestro", "riot-report", "drilling", "gambalabs", "visionlab", "bithumb", "devcompass", "on-life", "infotive", "push-force", "sign-cnn"],

  // 기술 묶음 순서 (data.js skills 의 group 이름)
  skillOrder: ["AI · 비전", "게임 개발", "웹", "협업 · 배포"]
};
