// Barra de progreso de lectura
window.addEventListener('scroll', () => {
  const article = document.querySelector('.post-content');
  const bar = document.getElementById('readingProgress');
  if (!article || !bar) return;
  const articleTop = article.offsetTop;
  const articleH = article.offsetHeight;
  const scrolled = window.scrollY - articleTop + window.innerHeight * 0.5;
  const pct = Math.min(100, Math.max(0, (scrolled / articleH) * 100));
  bar.style.width = pct + '%';
});

// TOC activo al hacer scroll
function scrollToH2(index) {
  const headings = document.querySelectorAll('.post-content h2');
  if (headings[index]) {
    const y = headings[index].getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

window.addEventListener('scroll', () => {
  const headings = document.querySelectorAll('.post-content h2');
  const links = document.querySelectorAll('.toc-nav a');
  let active = 0;
  headings.forEach((h, i) => {
    if (h.getBoundingClientRect().top < 140) active = i;
  });
  links.forEach((l, i) => {
    l.classList.toggle('active', i === active);
  });
});
