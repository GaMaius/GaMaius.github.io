/*
 * 범용 포트폴리오(/profile/)에서 무엇을 앞에 둘지.
 * 프로젝트·경력·기술 내용은 루트의 data.js(window.PORTFOLIO)를 그대로 쓴다.
 * Drilling 은 data.js 의 featured 에서 프로젝트 카드로 만들어 쓴다(profile.js).
 */
window.PROFILE = {
  badge: "부산대학교 인공지능전공 재학",
  lead: "AI 서비스와 게임을 만들고, 배포해서 실제로 쓰이게 합니다.",

  // 첫 화면 "지금 하는 일" 카드 (디자인 문서의 '지금 할 일 카드')
  now: { label: "지금 하는 일", text: "LoL AI 코칭 리포트를 실제 결제가 되는 서비스로 전환하고 있습니다.", id: "riot-report" },

  // 숫자 칸. 숫자는 tags 의 개수로 센다. 누르면 그 묶음으로 거른 프로젝트 목록으로 간다.
  // strong: true 인 칸 하나만 주색으로 채운다.
  tiles: [
    { tag: "award", label: "수상", unit: "회", note: "해커톤 최우수상, 우수상", strong: true },
    { tag: "live", label: "배포·운영 중", unit: "개", note: "지금 열어 보거나 돌아가는 서비스" },
    { tag: "shipped", label: "Steam 출시", unit: "편", note: "8명 팀, 2026.11 정식 출시" },
    { tag: "all", label: "프로젝트", unit: "개", note: "AI, 웹, 게임" }
  ],
  tags: {
    award: ["maestro", "on-life"],
    live: ["maestro", "riot-report", "visionlab", "bithumb", "devcompass"],
    shipped: ["drilling"]
  },

  // 프로젝트 목록 순서
  order: ["maestro", "riot-report", "drilling", "gambalabs", "visionlab", "bithumb", "devcompass", "on-life", "infotive", "push-force", "sign-cnn"],

  // 카드 위 상태 배지. tone: done(옅은 초록) | plain(회색)
  status: {
    "maestro": ["최우수상", "done"],
    "riot-report": ["운영 중", "done"],
    "drilling": ["Steam 출시", "done"],
    "gambalabs": ["인턴 납품", "done"],
    "visionlab": ["운영 중", "done"],
    "bithumb": ["실전 운영", "done"],
    "devcompass": ["배포", "plain"],
    "on-life": ["우수상", "done"],
    "infotive": ["해커톤 수료", "plain"],
    "push-force": ["해커톤 수료", "plain"],
    "sign-cnn": ["완료", "plain"]
  },

  // 기술 묶음 순서 (data.js skills 의 group 이름)
  skillOrder: ["AI · 비전", "게임 개발", "웹", "협업 · 배포"]
};
