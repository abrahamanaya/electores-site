// ===== AÑO DEL FOOTER =====
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

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

/* ===== FORMULARIO DE COTIZACIÓN ===== */
function enviarCotizacion(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-cotizar');
  const res_div = document.getElementById('cot-resultado');
  btn.disabled = true;
  btn.textContent = '⏳ Abriendo tu correo...';

  const payload = {
    nombre:      document.getElementById('cot-nombre').value,
    organizacion:document.getElementById('cot-org').value,
    email:       document.getElementById('cot-email').value,
    telefono:    document.getElementById('cot-tel').value,
    tipo_cliente:document.getElementById('cot-tipo').value,
    modalidad:   document.getElementById('cot-modalidad').value,
    num_personas:document.getElementById('cot-personas').value,
    tema:        document.getElementById('cot-tema').value,
    mensaje:     document.getElementById('cot-mensaje').value,
  };

  // Sitio estático sin backend: se compone directamente el correo con los datos del formulario.
  const asunto = encodeURIComponent(`Cotización — ${payload.tipo_cliente} — ${payload.nombre}`);
  const cuerpo = encodeURIComponent(
    `Nombre: ${payload.nombre}\nOrganización: ${payload.organizacion}\n` +
    `Email: ${payload.email}\nTeléfono: ${payload.telefono}\n` +
    `Tipo: ${payload.tipo_cliente}\nModalidad: ${payload.modalidad}\n` +
    `Personas: ${payload.num_personas}\nTema: ${payload.tema}\n\n${payload.mensaje}`
  );
  window.location.href = `mailto:contacto@abrahamanaya.com?subject=${asunto}&body=${cuerpo}`;

  res_div.style.display = 'block';
  res_div.innerHTML = `<div style="background:#fff8e1;border:1.5px solid #F39C12;border-radius:10px;padding:16px;font-size:.88rem">
    📧 Se abrió tu cliente de correo con los datos prellenados. Si no se abrió,
    escríbenos directamente a <a href="mailto:contacto@abrahamanaya.com">contacto@abrahamanaya.com</a>
    o por <a href="https://wa.me/523341150010">WhatsApp</a>.
  </div>`;

  btn.disabled = false;
  btn.textContent = 'Solicitar cotización →';
}

/* ===== EBOOKS DINÁMICOS ===== */
async function cargarEbooks() {
  const grid = document.getElementById('ebooks-grid');
  if (!grid) return;
  try {
    const resp = await fetch('ebooks.json');
    const data = await resp.json();
    grid.innerHTML = data.ebooks.map(eb => `
      <div class="ebook-card">
        <div class="ebook-cover" style="background:linear-gradient(135deg, ${eb.color}, ${eb.color}cc)">
          <span class="ebook-cover-badge">${eb.categoria}</span>
          <div class="ebook-cover-icon">📖</div>
          <div class="ebook-cover-titulo">${eb.titulo}</div>
        </div>
        <div class="ebook-body">
          <div class="ebook-subtitulo">${eb.subtitulo}</div>
          <div class="ebook-meta">
            <span>📄 ${eb.paginas} págs.</span>
            <span>📥 PDF</span>
          </div>
          <div class="ebook-precios">
            <span class="ebook-precio-tachado">$${eb.precio_tachado}</span>
            <span class="ebook-precio-final">$${eb.precio}</span>
            <span class="ebook-precio-moneda">MXN</span>
          </div>
          <span class="btn btn-disabled ebook-cta" style="width:100%;text-align:center;display:block">
            Muy pronto a la venta
          </span>
        </div>
      </div>
    `).join('');
  } catch(e) {
    grid.innerHTML = '<p style="color:var(--muted)">Próximamente disponible.</p>';
  }
}
document.addEventListener('DOMContentLoaded', cargarEbooks);
