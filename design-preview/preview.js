const choices = document.querySelectorAll('[data-choice]');
function selectDesign(design) {
  if (!['a', 'b', 'c', 'd', 'e'].includes(design)) design = 'a';
  document.body.dataset.design = design;
  choices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.choice === design)));
  const url = new URL(location.href);
  url.searchParams.set('design', design);
  history.replaceState(null, '', url);
}
choices.forEach(button => button.addEventListener('click', () => selectDesign(button.dataset.choice)));
selectDesign(new URLSearchParams(location.search).get('design'));

document.querySelectorAll('[data-field]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-field]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-fields]').forEach(project => {
      const match = button.dataset.field === 'all' || project.dataset.fields.split(' ').includes(button.dataset.field);
      project.classList.toggle('field-muted', !match);
    });
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.project').forEach(project => observer.observe(project));
}
