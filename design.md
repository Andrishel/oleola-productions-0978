# Olé Olá Producciones — Sistema de Diseño

Landing page SPA festiva, mobile-first, enfocada en conversión. Empresa de animación de eventos infantiles en Piura, Perú.

## Personalidad
Festivo, limpio, moderno, alegre. Bordes muy redondeados, sombras suaves, brillo/glitter en micro-interacciones. Nada de saturación agresiva: pasteles luminosos sobre blanco.

## Paleta (pastel)
Definida como variables CSS en `styles.css`.
- Rosa Chicle `#FF7EB9` → botones CTA principales, acentos
- Turquesa Menta `#4ECDC4` → badges, estados interactivos, hover
- Violeta Lilac `#A88BEB` → fondos de tarjetas, headers, degradados
- Amarillo Sol `#FFD86E` → chispas/acentos secundarios (glitter)
- Fondo base `#FFFFFF` y `#F8F9FA`
- Texto: `#2B2540` (violeta muy oscuro, no negro puro), secundario `#6B6480`

Degradado de marca: rosa → violeta → turquesa (usado en títulos con `bg-clip-text` y en botones/badges).

## Tipografía (Google Fonts)
- Display / títulos: **Fredoka** (700/600) — redonda, festiva
- Cuerpo / UI: **Poppins** (400/500/600)
- `font-display` = Fredoka, `font-sans` = Poppins. antialiased.
- Jerarquía: hero 3xl–6xl, secciones 2xl–4xl, generoso line-height.

## Layout
- Scroll SPA con navbar sticky (glass/blur, se compacta al hacer scroll).
- Secciones con `scroll-mt` para anclas: #inicio #habilidades #servicios #paquetes #proceso #galeria #contacto.
- Contenedor máx ~1200px, padding lateral generoso, mucho espacio en blanco.
- Tarjetas: `rounded-3xl`, `shadow-lg` suave, borde sutil, hover con lift + glow.
- Fondos decorativos: blobs pastel difuminados, confeti/estrellas sutiles, degradados mesh.

## Componentes clave
- **Navbar**: logo + links + "📍 Piura, Perú" + CTA [Cotizar por WhatsApp].
- **Hero**: título brillante, subtítulo, badge "+5 Años de Experiencia" animado, foto real de evento + collage.
- **Habilidades**: 3 pilares (Creatividad, Animación, Puntualidad).
- **Servicios**: tabs (Shows, Hora Loca, Baby/Gender, Glitter Bar, Gincanas, Activaciones) con packs y precios reales; cada tarjeta con CTA "Cotizar este Pack".
- **Proceso**: stepper visual de 5 pasos.
- **Cotizador**: formulario (nombre, paquete, fecha, distrito, notas) → genera link wa.me estructurado.
- **Galería**: grid tipo masonry con fotos reales + festivas.
- **Footer**: redes, correo, teléfono, ubicación.
- **WhatsApp flotante**: fijo, `#25D366`, mensaje predefinido.

## Motion
Reveal escalonado al cargar/scroll (Motion / fade-up). Micro-brillos en badges y botones. Hover lift en tarjetas. Sin exceso.

## Conversión
WhatsApp `+51 922 852 254` (wa.me/51922852254). Mensaje: 50% de adelanto para reservar. CTAs claros en cada pack.
