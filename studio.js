document.addEventListener('DOMContentLoaded', () => {
  // Run after the existing content renderer and preserve its filter/modal handlers.
  queueMicrotask(() => {
    document.querySelectorAll('.nav-links a[href="index.html"]').forEach(link => {
      link.classList.add('archive-back');
      link.setAttribute('aria-label', '포트폴리오 홈으로');
    });
    const filters = document.querySelectorAll('.filter-btn');
    const fields = document.querySelectorAll('[data-studio-field]');
    function sync(value) {
      fields.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.studioField === value)));
      filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === value)));
    }
    fields.forEach(button => button.addEventListener('click', () => {
      const target = [...filters].find(filter => filter.dataset.filter === button.dataset.studioField);
      if (target) target.click();
      sync(button.dataset.studioField);
      document.getElementById('projects')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    }));
    filters.forEach(button => button.addEventListener('click', () => sync(button.dataset.filter)));
    sync('all');
    const summaries = [
      ['Drilling', '땅속을 탐험하고 자원을 모으는 캐주얼 채굴 게임. Steam 데모 출시.'],
      ['감바랩스', 'PPT 제작·Excel 편집·SVG 변환을 하나로 묶은 LLM 기반 사내 업무 도구.'],
      ['리그 오브', 'LoL 경기 지표를 분석하고 개인 맞춤 AI 코칭 리포트를 생성하는 웹 서비스.'],
      ['VisionLab', '웹캠으로 생체 신호·퍼스널 컬러를 분석하고 3D 캐릭터를 움직이는 비전 앱.'],
      ['스마트 미러', '웹캠 분석과 LLM 음성 비서를 결합한 성장형 스마트 미러 웹앱.'],
      ['빗썸', '네 가지 매매 봇과 백테스트, 실시간 모니터링 대시보드를 갖춘 자동매매 시스템.'],
      ['기계 부품', '기계 부품을 3D로 살펴보고 AI 피드백으로 학습하는 웹 서비스.'],
      ['CNN', '카메라에 담긴 수화를 CNN 모델로 인식하는 프로그램.'],
      ['push --force', 'Unity로 만든 2D 캐주얼 로컬 대전 게임.']
    ];
    document.querySelectorAll('.project-card-wrapper').forEach(card => {
      const title = card.querySelector('.project-card-title-text')?.textContent || '';
      const summary = summaries.find(([key]) => title.includes(key));
      if (summary) card.querySelector('.project-desc').textContent = summary[1];
      const label = document.createElement('span');
      label.className = 'studio-category';
      label.textContent = {game:'GAME', web:'WEB', ai:'AI'}[card.dataset.category] || 'PROJECT';
      card.querySelector('.project-card-header').prepend(label);
    });
    document.querySelectorAll('.project-card-wrapper,.clickable-spec,#specs-archive-table tbody tr').forEach(card => {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.addEventListener('keydown', event => {
        if (event.target === card && ['Enter', ' '].includes(event.key)) {
          event.preventDefault(); card.click();
        }
      });
    });
  });
});
