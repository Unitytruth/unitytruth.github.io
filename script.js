const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

function closeMenu(){
  nav?.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
  menu?.setAttribute('aria-label','Open menu');
}

menu?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('open');
  menu?.setAttribute('aria-expanded', String(Boolean(isOpen)));
  menu?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', closeMenu));

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('open')) return;
  if (nav.contains(event.target) || menu?.contains(event.target)) return;
  closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) closeMenu();
});

document.getElementById('year').textContent = new Date().getFullYear();
