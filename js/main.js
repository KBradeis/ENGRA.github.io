// Mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu';
  });
}
// Project filters on subject pages
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(f => f.addEventListener('click', () => {
  const tag = f.dataset.filter;
  filters.forEach(o => o.setAttribute('aria-pressed', o === f));
  document.querySelectorAll('[data-tags]').forEach(card => {
    card.hidden = tag !== 'all' && !card.dataset.tags.split('|').includes(tag);
  });
}));
