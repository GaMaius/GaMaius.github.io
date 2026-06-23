document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // LOCAL PORTFOLIO DATABASE FALLBACK
  // (Prevents site crash if data.js is blocked or missing)
  // ==========================================
  const PORTFOLIO_DATA_FALLBACK = {
    profile: {
      name: "지우가람",
      title: "Game • Web • AI Developer",
      typingWords: [
        "Game Developer",
        "Python Programmer",
        "AI Developer",
        "Creative Problem Solver"
      ],
      heroDescription: "몰입감 있는 경험을 제공하는 게임 개발, 효율적이고 직관적인 웹 인프라 설계, 실효성 높은 인공지능(AI) 모델과 LLM 기술의 실무 융합에 깊은 관심을 둔 개발자입니다.",
      bioTitle: "기술 융합을 지향하는 하이브리드 엔지니어",
      bioParagraphs: [
        "단일 분야에 머무르지 않고, <strong>게임 개발</strong>, <strong>웹 풀스택</strong>, <strong>인공지능(AI)</strong> 도메인을 상호 보완하며 유기적인 구조를 갖춘 프로젝트를 만듭니다.",
        "게임 개발과 3D WebGL 뷰어 렌더링 최적화 로직에서 쌓은 리소스 핸들링 감각을 웹 인터랙션에 응용하고, 클라우드 환경 위에 AI 모델이나 OpenAI GPT API 등의 생성형 지능형 서비스를 안전하게 접목하는 아키텍처 구축을 지향합니다.",
        "프로토타이핑을 통해 아이디어를 린(Lean)하게 검증하는 해커톤 협업과, 복잡한 실무 문제를 본질적인 코드 최적화 및 논리적 설계를 통해 해결하는 과정 자체를 즐깁니다."
      ],
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
    skills: [
      { name: "Python", level: "Advanced", percentage: 95, category: "language" },
      { name: "Unity Engine", level: "Advanced", percentage: 95, category: "devtools" },
      { name: "C++", level: "Intermediate", percentage: 75, category: "language" },
      { name: "C# Core", level: "Intermediate", percentage: 75, category: "language" },
      { name: "JavaScript", level: "Beginner", percentage: 50, category: "language" },
      { name: "HTML5 / CSS3", level: "Intermediate", percentage: 55, category: "frontend" },
      { name: "React.js / Frontend", level: "Beginner", percentage: 30, category: "frontend" },
      { name: "FastAPI & Node.js / Backend", level: "Beginner", percentage: 30, category: "backend" },
      { name: "Git & GitHub", level: "Intermediate", percentage: 70, category: "devops" },
      { name: "Vercel", level: "Intermediate", percentage: 75, category: "devops" },
      { name: "Render", level: "Intermediate", percentage: 70, category: "devops" },
      { name: "Mediapipe", level: "Advanced", percentage: 85, category: "others" },
      { name: "PyTorch & CNN Architecture", level: "Intermediate", percentage: 75, category: "others" },
      { name: "OpenCV", level: "Intermediate", percentage: 65, category: "others" },
      { name: "Notion", level: "Intermediate", percentage: 75, category: "others" },
      { name: "Aseprite", level: "Intermediate", percentage: 70, category: "others" }
    ],
    specs: [
      {
        priority: 0,
        type: "launch",
        badgeText: "출시",
        institution: "Google Play Store",
        title: "모바일 캐주얼 아케이드 게임 'Drilling' 공식 출시",
        date: "2026.02",
        desc: "Unity 엔진 기반의 물리 및 터치 기믹 아케이드 게임 빌드 설계 및 구글 플레이 스토어 런칭/운영.",
        details: "터치 드래그 가속 물리 조작감 구현, 코어 채굴 루프 및 업그레이드 수집 시스템 설계, 구글 플레이 스토어 빌드 등록 및 출시 프로세스 전담 대응.",
        tags: ["Unity", "C#", "Android", "Mobile Game"],
        result: "구글 플레이 스토어 정식 출시 완료 및 서비스 운영",
        link: "https://play.google.com/store",
        image: ""
      },
      {
        priority: 1,
        type: "award",
        badgeText: "수상",
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
        priority: 2,
        type: "award",
        badgeText: "수상",
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
        priority: 3,
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
        priority: 4,
        type: "education",
        badgeText: "교육 수료",
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
        priority: 5,
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

  // 1. Establish data reference
  let data = window.PORTFOLIO_DATA;
  if (!data) {
    console.warn("data.js를 로드하지 못했거나 구조가 올바르지 않습니다. 로컬 백업 데이터를 사용합니다.");
    data = PORTFOLIO_DATA_FALLBACK;
  }

  // ==========================================
  // DATA-DRIVEN DOM INJECTION
  // ==========================================

  // 1. Hero 데이터 주입
  const heroDescNode = document.getElementById('hero-description');
  if (heroDescNode && data.profile?.heroDescription) {
    heroDescNode.textContent = data.profile.heroDescription;
  }

  // 2. Profile 자기소개 주입
  const bioTitleNode = document.getElementById('bio-title');
  if (bioTitleNode && data.profile?.bioTitle) {
    bioTitleNode.textContent = data.profile.bioTitle;
  }

  const bioContainerNode = document.getElementById('bio-text-container');
  if (bioContainerNode && data.profile?.bioParagraphs) {
    bioContainerNode.innerHTML = data.profile.bioParagraphs
      .map(para => `<p>${para}</p>`)
      .join('');
  }

  // 2-2. Profile 학력 사항 주입
  const eduContainerNode = document.getElementById('edu-timeline-container');
  if (eduContainerNode && data.profile?.education) {
    eduContainerNode.innerHTML = data.profile.education
      .map(edu => `
        <div class="edu-item">
          <div class="edu-dot"></div>
          <div class="edu-header">
            <span class="edu-level">${edu.level}</span>
            <span class="edu-period mono">${edu.period}</span>
          </div>
        </div>
      `).join('');
  }

  // 3. Skills Board Injection (Grouped Categorically)
  const skillsBoard = document.getElementById('skills-board-container');
  if (skillsBoard && data.skills) {
    skillsBoard.innerHTML = '';
    
    const categories = [
      { id: 'language', name: 'Language', icon: '📝' },
      { id: 'frontend', name: 'Frontend', icon: '🎨' },
      { id: 'backend', name: 'Backend', icon: '🗄️' },
      { id: 'devtools', name: 'DevTools', icon: '🛠️' },
      { id: 'devops', name: 'DevOps', icon: '🚀' },
      { id: 'others', name: 'Others', icon: '⚙️' }
    ];

    categories.forEach(cat => {
      const catSkills = data.skills.filter(s => s.category === cat.id);
      
      if (catSkills.length > 0) {
        const row = document.createElement('div');
        row.className = 'skill-row';
        
        const badgesMarkup = catSkills.map(skill => {
          const lvl = (skill.level || 'beginner').toLowerCase();
          return `<span class="skill-badge ${lvl}">${skill.name}</span>`;
        }).join('');

        row.innerHTML = `
          <div class="skill-category-header">
            <span class="skill-category-icon">${cat.icon}</span>
            <span class="skill-category-name">${cat.name}</span>
          </div>
          <div class="skill-badges-container">
            ${badgesMarkup}
          </div>
        `;
        skillsBoard.appendChild(row);
      }
    });
  }

  // Common Modal Elements
  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('project-modal-body');
  const projectModalClose = document.getElementById('project-modal-close');
  const projectModalOverlay = document.getElementById('project-modal-overlay');

  // Modal Close Logic
  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }
  if (projectModalOverlay) {
    projectModalOverlay.addEventListener('click', closeProjectModal);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // Modal Open For Spec Details
  function openSpecModal(spec) {
    if (!projectModal || !projectModalBody) return;

    const tagsMarkup = (spec.tags || [])
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join('');

    projectModalBody.innerHTML = `
      <div class="modal-header-icon">
        ${spec.type === 'launch' ? '🚀' : spec.type === 'award' ? '🏆' : spec.type === 'education' ? '🎓' : '💼'}
      </div>
      <h2 class="modal-project-title font-display">${spec.title}</h2>
      <div class="modal-project-platform" style="margin-bottom: 1.8rem;">
        <span class="specs-badge ${spec.type}" style="display:inline-block; vertical-align:middle; margin-right:0.5rem;">${spec.badgeText}</span>
        <span style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary); vertical-align:middle;">${spec.institution || ''}</span>
      </div>
      
      <div class="project-meta-grid" style="margin-bottom: 2rem;">
        <div class="project-meta-label">발행/수여 일자</div>
        <div class="project-meta-value">${spec.date || ''}</div>
        <div class="project-meta-label">개최기관 / 소속</div>
        <div class="project-meta-value">${spec.institution || ''}</div>
      </div>
      
      <h3 class="modal-desc-title">이력 개요</h3>
      <p class="modal-desc-text">${spec.desc || ''}</p>
      
      ${spec.details ? `
        <h3 class="modal-desc-title">수행 내용</h3>
        <p class="modal-desc-text" style="white-space: pre-wrap; margin-bottom: 2.2rem; line-height: 1.7;">${spec.details}</p>
      ` : ''}
      
      ${spec.tags && spec.tags.length > 0 ? `
        <h3 class="modal-desc-title" style="margin-bottom: 0.8rem;">관련 기술 스택</h3>
        <div class="project-tags" style="margin-bottom: 2.2rem;">
          ${tagsMarkup}
        </div>
      ` : ''}
      
      ${spec.result ? `
        <div style="background: rgba(var(--accent-rgb), 0.05); border: 1px solid rgba(var(--accent-rgb), 0.2); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.8rem;">
          <span style="font-size: 1.6rem; line-height: 1;">🏆</span>
          <div>
            <div style="font-size: 0.7rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--accent-primary); font-weight:600;">결과 및 성과 (Result)</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-top: 0.15rem;">${spec.result}</div>
          </div>
        </div>
      ` : ''}

      ${spec.link ? `
        <div class="project-links" style="padding-top: 1.5rem; border-top: 1px dashed var(--border-color); margin-top: 2rem;">
          <a href="${spec.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem; padding: 0.6rem 1.4rem;">
            관련 링크 바로가기 &rarr;
          </a>
        </div>
      ` : ''}
    `;
    
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // 4. Specs 목록 주입 (최대 4개 제한, 순서: 내용 -> 분류 -> 소속 -> 기간 & 클릭 시 모달 오픈)
  const specsContainer = document.getElementById('specs-list-container');
  if (specsContainer && data.specs) {
    specsContainer.innerHTML = '';
    
    // Sort specs by priority ascending
    const sortedSpecs = [...data.specs].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
    // Limit homepage specs list to 4
    const displaySpecs = sortedSpecs.slice(0, 4);
    
    displaySpecs.forEach(spec => {
      const specItem = document.createElement('div');
      specItem.className = 'specs-row-item clickable-spec';
      
      // Horizontal row order: Title (내용) -> Badge (분류) -> Institution (개최기관) -> Date (기간)
      specItem.innerHTML = `
        <div class="spec-col-title" style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">${spec.title}</div>
        <div class="spec-col-badge"><span class="specs-badge ${spec.type}">${spec.badgeText}</span></div>
        <div class="spec-col-institution" style="font-weight: 600; font-size: 0.9rem; color: var(--text-secondary);">${spec.institution || ''}</div>
        <div class="spec-col-date mono" style="font-size: 0.85rem; color: var(--text-muted); text-align: right;">${spec.date}</div>
      `;
      
      // Bind click trigger for spec modal
      specItem.addEventListener('click', () => {
        openSpecModal(spec);
      });
      
      specsContainer.appendChild(specItem);
    });
  }

  // Modal Open For Project Details
  function openProjectModal(project) {
    if (!projectModal || !projectModalBody) return;

    const tagsMarkup = (project.tags || [])
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join('');

    projectModalBody.innerHTML = `
      <div class="modal-header-icon">${project.icon || '📁'}</div>
      <h2 class="modal-project-title font-display">${project.title}</h2>
      <div class="modal-project-platform">${project.platformLabel || ''}</div>
      
      <div class="project-meta-grid" style="margin-bottom: 2rem;">
        <div class="project-meta-label">개발 기간</div>
        <div class="project-meta-value">${project.period || ''}</div>
        <div class="project-meta-label">인원 구성</div>
        <div class="project-meta-value">${project.team || ''}</div>
        <div class="project-meta-label">본인 역할</div>
        <div class="project-meta-value">${project.role || ''}</div>
      </div>
      
      <h3 class="modal-desc-title">상세 설명</h3>
      <p class="modal-desc-text" style="white-space: pre-wrap;">${project.desc || ''}</p>
      
      <div class="project-tags" style="margin-bottom: 2rem;">
        ${tagsMarkup}
      </div>

      <div class="project-links" style="padding-top: 1.5rem; border-top: 1px dashed var(--border-color);">
        <a href="${project.github || '#'}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem; padding: 0.6rem 1.4rem;">
          <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor; margin-right: 0.3rem;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub Repository
        </a>
      </div>
    `;
    
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // 5. Projects 목록 주입 (최대 6개 제한 & 클릭 시 모달 팝업 연결)
  const projectsContainer = document.getElementById('projects-list-container');
  if (projectsContainer && data.projects) {
    projectsContainer.innerHTML = '';
    
    // Sort projects by priority ascending
    const sortedProjects = [...data.projects].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
    // Limit to max 6 projects for the home page list
    const displayProjects = sortedProjects.slice(0, 6);
    
    displayProjects.forEach((project) => {
      const projCard = document.createElement('div');
      projCard.className = 'project-card-wrapper glass-card reveal';
      projCard.dataset.category = project.category;
      
      const tagsMarkup = project.tags
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join('');

      projCard.innerHTML = `
        <div class="project-card">
          <div class="project-img-wrapper">
            <div class="project-img-placeholder">
              <span class="project-placeholder-icon">${project.icon || '📁'}</span>
              <span class="project-placeholder-platform">${project.platformLabel || ''}</span>
            </div>
          </div>
          <div class="project-content">
            <div class="project-tags">${tagsMarkup}</div>
            <h3 class="project-title">${project.title}</h3>
            
            <p class="project-desc">${project.desc.length > 100 ? project.desc.substring(0, 95) + '...' : project.desc}</p>
            
            <div class="project-links" style="margin-top: auto;">
              <span class="project-link" style="color: var(--accent-primary); font-weight:600; cursor:pointer;">
                자세히 보기 &rarr;
              </span>
            </div>
          </div>
        </div>
      `;
      
      // Open Modal on Card Click
      projCard.addEventListener('click', () => {
        openProjectModal(project);
      });

      projectsContainer.appendChild(projCard);
    });
  }

  // ==========================================
  // 3-STATE THEME MANAGER (LIGHT / DARK / SYSTEM)
  // ==========================================
  const themeButtons = {
    light: document.getElementById('theme-opt-light'),
    dark: document.getElementById('theme-opt-dark'),
    system: document.getElementById('theme-opt-system')
  };
  
  const systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  function applySystemTheme() {
    const isDark = systemMediaQuery.matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  function setThemeMode(mode) {
    Object.values(themeButtons).forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (themeButtons[mode]) {
      themeButtons[mode].classList.add('active');
    }

    if (mode === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (mode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      applySystemTheme();
    }

    localStorage.setItem('portfolio-theme-mode', mode);
  }

  Object.keys(themeButtons).forEach(mode => {
    const btn = themeButtons[mode];
    if (btn) {
      btn.addEventListener('click', () => setThemeMode(mode));
    }
  });

  systemMediaQuery.addEventListener('change', () => {
    const currentMode = localStorage.getItem('portfolio-theme-mode') || 'system';
    if (currentMode === 'system') {
      applySystemTheme();
    }
  });

  const savedMode = localStorage.getItem('portfolio-theme-mode') || 'light';
  setThemeMode(savedMode);

  // ==========================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================
  const burgerMenuBtn = document.getElementById('burger-menu-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

  function toggleMobileMenu() {
    burgerMenuBtn.classList.toggle('open');
    mobileNavOverlay.classList.toggle('open');
    if (mobileNavOverlay.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  if (burgerMenuBtn) {
    burgerMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenuBtn.classList.remove('open');
      mobileNavOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ==========================================
  // HEADER SCROLL STYLING
  // ==========================================
  const headerElement = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      headerElement.classList.add('scrolled');
    } else {
      headerElement.classList.remove('scrolled');
    }
  });

  // ==========================================
  // TYPING EFFECT (HERO)
  // ==========================================
  const typingTarget = document.getElementById('typing-text');
  const wordsToType = data.profile?.typingWords || ["Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentWord = wordsToType[wordIndex];
    
    if (isDeleting) {
      typingTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % wordsToType.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typingTarget) {
    typeEffect();
  }

  // ==========================================
  // INTERSECTION OBSERVER FOR SCROLL REVEALS
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ==========================================
  // ACTIVE NAVIGATION LINK SYNC ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const mobileNavLinksActive = document.querySelectorAll('.mobile-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentActiveSectionId = '';
    const scrollPosition = window.scrollY + 200; // Offset

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentActiveSectionId = section.getAttribute('id');
      }
    });

    const updateActiveState = (links) => {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentActiveSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    updateActiveState(navLinks);
    updateActiveState(mobileNavLinksActive);
  });

  // ==========================================
  // PROJECTS CATEGORY FILTER
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');
      const projectCards = document.querySelectorAll('.project-card-wrapper');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
});
