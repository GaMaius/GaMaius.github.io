document.addEventListener('DOMContentLoaded', () => {
  // Run after the existing content renderer and preserve its filter/modal handlers.
  queueMicrotask(() => {
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
