// ===== NAV TOGGLE (mobile) =====
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ===== NAV scroll effect =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(255,255,255,.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,.08)';
  }
});

// ===== SCROLL REVEAL =====
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to elements and observe
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.perfil-card, .sesion-item, .material-item, .org-card, .post-card, .legal-ref'
  );
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;
    el.classList.add('reveal-target');
    observer.observe(el);
  });
});

// Apply visible styles
const styleEl = document.createElement('style');
styleEl.textContent = `.reveal-target.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(styleEl);
