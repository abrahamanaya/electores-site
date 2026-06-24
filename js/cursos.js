/**
 * Cargador dinámico de cursos desde cursos.json
 * electores.abrahamanaya.com — Abraham Anaya · Electores 40+
 */

async function cargarCursos() {
  const contenedor = document.getElementById("cursos-dinamicos");
  const contador   = document.getElementById("cursos-contador");
  if (!contenedor) return;

  try {
    const res = await fetch("/cursos.json?v=" + Date.now());
    if (!res.ok) throw new Error("Sin datos");
    const data = await res.json();
    const cursos = data.cursos || [];

    if (contador) contador.textContent = cursos.length;

    if (cursos.length === 0) {
      contenedor.innerHTML = `
        <div class="cursos-empty">
          <p>Próximamente nuevos cursos y talleres.</p>
          <a href="#contacto" class="btn btn-primary">Avisar cuando haya nuevo curso →</a>
        </div>`;
      return;
    }

    contenedor.innerHTML = cursos.map(curso => `
      <div class="curso-card-web" data-id="${curso.id}">
        <div class="curso-card-web-header">
          <span class="nivel-pill">${curso.nivel}</span>
          <span class="sesiones-pill">📚 ${curso.num_sesiones} sesiones</span>
        </div>
        <h3 class="curso-card-web-title">${curso.titulo}</h3>
        <p class="curso-card-web-desc">${curso.descripcion}</p>

        ${curso.objetivos && curso.objetivos.length > 0 ? `
        <div class="curso-card-web-obj">
          <strong>Aprenderás:</strong>
          <ul>
            ${curso.objetivos.slice(0,3).map(o => `<li>${o}</li>`).join("")}
          </ul>
        </div>` : ""}

        ${curso.sesiones && curso.sesiones.length > 0 ? `
        <div class="curso-card-web-sesiones">
          ${curso.sesiones.slice(0,3).map(s => `
            <div class="sesion-mini">
              <span class="sesion-mini-num">${s.numero}</span>
              <span class="sesion-mini-titulo">${s.titulo}</span>
            </div>
          `).join("")}
        </div>` : ""}

        <div class="curso-card-web-footer">
          <span class="audiencia-tag">👥 ${curso.audiencia}</span>
          <span class="duracion-tag">⏱ ${curso.duracion}</span>
          <a href="#contacto" class="btn btn-primary btn-sm">Inscribirme →</a>
        </div>
      </div>
    `).join("");

    // Actualización
    if (data.actualizacion) {
      const upd = document.getElementById("cursos-actualizacion");
      if (upd) {
        const fecha = new Date(data.actualizacion);
        upd.textContent = "Actualizado: " + fecha.toLocaleDateString("es-MX", {
          day: "numeric", month: "long", year: "numeric"
        });
      }
    }

  } catch (e) {
    // Si no hay JSON aún, no mostrar error — simplemente no mostrar la sección
    if (contenedor) contenedor.style.display = "none";
    const seccion = document.getElementById("seccion-cursos-dinamicos");
    if (seccion) seccion.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", cargarCursos);
