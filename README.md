# Electores 40+ — Sitio Web
### electores.abrahamanaya.com

Sitio de capacitación electoral ciudadana para las Elecciones Federales de México 2027.
Desarrollado por Abraham Anaya / Electores 40+.

---

## Estructura de archivos

```
electores-site/
├── index.html          ← Página principal
├── blog.html           ← Blog editorial
├── css/
│   ├── style.css       ← Estilos principales
│   └── blog.css        ← Estilos del blog
├── js/
│   └── main.js         ← Interacciones y animaciones
└── README.md           ← Este archivo
```

---

## Cómo publicarlo en 3 pasos

### PASO 1 — Subir a GitHub

1. Crea una cuenta en [github.com](https://github.com) si no tienes
2. Haz clic en **"New repository"**
3. Nombre: `electores-site`
4. Déjalo en **Public**
5. Crea el repositorio
6. Arrastra todos los archivos de esta carpeta al repositorio desde la interfaz web de GitHub
   (o usa VS Code con la extensión de GitHub)

### PASO 2 — Conectar con Render

1. Ve a [render.com](https://render.com) y crea cuenta gratuita
2. Haz clic en **"New +"** → **"Static Site"**
3. Conecta tu cuenta de GitHub y selecciona el repositorio `electores-site`
4. Configuración:
   - **Build Command:** (dejar vacío)
   - **Publish Directory:** `.`  ← solo un punto
5. Haz clic en **"Create Static Site"**
6. Render te da una URL como `electores-site.onrender.com` — ya está publicado

### PASO 3 — Conectar tu subdominio

En el panel de control de donde compraste el dominio `abrahamanaya.com`:
1. Ve a la sección de **DNS** o **Registros DNS**
2. Agrega un registro **CNAME**:
   - **Nombre/Host:** `electores`
   - **Valor/Destino:** `electores-site.onrender.com`
3. Espera 10–30 minutos para que propague
4. En Render, ve a tu sitio → **Settings** → **Custom Domains** → agrega `electores.abrahamanaya.com`

¡Listo! Tu sitio estará en `electores.abrahamanaya.com` con HTTPS gratuito.

---

## Cómo editar el contenido

Abre los archivos con **VS Code**. Todo el texto está en los archivos `.html`.

### Cosas que debes actualizar antes de publicar:

**index.html:**
- [ ] Línea con `wa.me/521XXXXXXXXXX` → Pon tu número de WhatsApp real
- [ ] `contacto@abrahamanaya.com` → Tu correo real
- [ ] Los links de Twitter y YouTube → Tus URLs reales

**Todos los archivos:**
- [ ] Cuando tengas fechas de sesiones → agrégalas en la sección de contacto

### Flujo de actualización:
1. Editas el archivo en VS Code
2. Guardas (Ctrl+S)
3. Subes el cambio a GitHub (drag & drop en la web o con VS Code)
4. Render detecta el cambio y actualiza el sitio automáticamente en ~30 segundos

---

## Próximas fases a agregar

### Fase 2 — Sistema de usuarios y descargas
- Página de login simple con correo y contraseña
- Base de datos de usuarios registrados (Supabase, gratis)
- Protección de PDFs descargables por usuario registrado

### Fase 3 — Pagos en línea
- Integración con **Stripe** (tarjeta de crédito/débito internacional)
- O **Conekta** (OXXO Pay, SPEI, tarjetas mexicanas)
- Página de checkout simple
- Acceso automático al contenido premium tras el pago

### Fase 4 — Plataforma de cursos
- Reproductor de video integrado (Vimeo o Bunny.net para privacidad)
- Progreso del usuario guardado
- Emisión automática de constancias (PDF generado con el nombre del usuario)

---

## Costos mensuales (estimados)

| Servicio | Plan | Costo |
|---------|------|-------|
| Render (hosting) | Free tier | $0 |
| GitHub | Free tier | $0 |
| Dominio | Ya lo tienes | $0 adicional |
| Total Fase 1 | | **$0 /mes** |

Para Fase 3 con pagos: Stripe cobra ~2.9% + $0.30 USD por transacción exitosa. Sin cuota mensual.

---

## Soporte
Sitio creado por Claude (Anthropic) para Abraham Anaya / Electores 40+
