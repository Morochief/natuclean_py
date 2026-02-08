# Plan de Mejora - Natuclean_py

## 📊 Análisis de Referencia

### Sitio de Referencia: www.homecraftedcandleco.com
- **Plataforma:** Wix (limitado en personalización)
- **Fortalezas identificadas:**
  - Diseño limpio y minimalista
  - Buena jerarquía visual en productos
  - Sección "About" destacada con narrativa de artesanía
  - Integración de newsletter efectiva
  - Diseño responsivo bien implementado

### Estado Actual del Proyecto
- **Stack:** Astro + Solid.js + Hono + Cloudflare
- **Theme:** Zen Minimalist + Luxury
- **Colores:** #19e63c (verde), #fdfcf9 (crema), #2c2c2c (carbón), #d4a373 (tierra)
- **Tipografía:** Playfair Display + Inter

---

## 🎯 Plan de Mejora por Fases (Actualizado)

### Fase 1: Hero Section - Impacto Visual
**Objetivo:** Crear primera impresión impactante

- [ ] Rediseñar hero con imagen inmersiva (usar fotos de /fotos/)
- [ ] Añadir headline con tipografía dramática (Playfair Display)
- [ ] Implementar subtítulo con valor diferencial
- [ ] Botón CTA con hover lift effect
- [ ] **Arched frames** para las imágenes de producto (look editorial)
- [ ] Animación de entrada suave (fade-in + scale)

### Fase 2: Catálogo de Productos - Grid Elegante
**Objetivo:** Mostrar productos de forma premium

- [ ] Crear componente ProductCard reutilizable
- [ ] Implementar grid responsivo (CSS Grid)
- [ ] Efecto glassmorphism en cards (backdrop-filter)
- [ ] **Arched image frames** en productos destacados
- [ ] Hover effect: imagen escala + sombra suave
- [ ] Etiquetas de precio elegantes
- [ ] Etiquetas de "Nuevo" o "Popular" si aplica
- [ ] Categorías filtrables (Velas, Kits, Accesorios)

### Fase 3: Product Detail Page - Scent Triangle
**Objetivo:** Página de producto interactiva

- [ ] Crear `src/pages/product/[id].astro`
- [ ] **Visualización Scent Triangle:**
  - Notas de Salida (Top notes)
  - Notas de Corazón (Middle notes)
  - Notas de Fondo (Base notes)
- [ ] Diseño split-screen (imagen izquierda, detalles derecha)
- [ ] Solid.js para contador y botón Add to Cart
- [ ] Descripción premium del producto

### Fase 4: "Ritual de Cuidado" - Sección Premium
**Objetivo:** Crear experiencia sensorial completa

- [ ] Diseño con iconografía premium (SVG icons elegantes)
- [ ] Pasos para disfrutar la vela:
  1. Preparar el espacio
  2. Encender con intención
  3. Dejar arder
  4. Extinguir con cuidado
- [ ] Imágenes ilustrativas o iconos editoriales
- [ ] Tipografía distinguida para cada paso
- [ ] Micro-animaciones en cada paso

### Fase 5: "Club Natuclean" - Suscripción Exclusiva
**Objetivo:** Crear comunidad de clientes fieles

- [ ] Diseño de newsletter con estética exclusiva
- [ ] Beneficios claros:
  - Acceso anticipado a nuevos productos
  - Descuentos exclusivos
  - Recipes/Secretos de aromaterapia
- [ ] Formulario minimalista y elegante
- [ ] Integración con Hono backend
- [ ] Tiers de suscripción (Mensual/Trimestral/Anual)

### Fase 6: "Nuestra Historia" - Artesanía
**Objetivo:** Contar la historia de la marca

- [ ] Layout asimétrico (imagen + texto alternado)
- [ ] Destacar proceso artesanal
- [ ] Incluir fotos del proceso de creación
- [ ] Estadísticas: "X años", "X productos creados", etc.
- [ ] Valores de marca: Natural, Sostenible, Artesanal

### Fase 7: Sección de Ingredientes - "Alquimia"
**Objetivo:** Educar sobre los ingredients

- [ ] Diseño visual de notas olfativas
- [ ] Iconos para cada ingrediente natural
- [ ] Descripciones de beneficios
- [ ] Animación al hacer scroll
- [ ] Grid de ingredientes con hover effects

### Fase 8: Navegación y Footer
**Objetivo:** Mejorar UX global

- [ ] Header fijo con blur effect
- [ ] Menú hamburguesa para móvil
- [ ] Footer completo con:
  - Links rápidos
  - Redes sociales
  - Información de contacto
  - Métodos de pago (si aplica)

---

## 📁 Assets de Referencia Disponibles

### Imágenes del Sitio de Referencia
Las siguientes imágenes están disponibles en `/public/reference_assets/`:
- `95de6b_2f98599f04734728a90f188fe9dba90emv2.jpeg` - Producto cuadrado
- `95de6b_3de626ae419e4a31b35d33a887c5524dmv2.jpeg` - Producto detalle
- `95de6b_5a483597d33342f8ab5a963511d5ce21mv2.jpeg` - Foto producto
- `95de6b_8c898a75b3a94cc1a4f4730420c53977mv2.jpeg` - Producto principal
- `95de6b_458c9624edb242eeac955a5f99c9255emv2.png` - Logo/Branding
- `95de6b_22a7b0e059644d668c2524ba854f2da5mv2.png` - Ícono vintage
- Múltiples thumbs de productos (147x147, 306x306)

### Fotos del Proyecto
- Carpeta `/fotos/` con +60 fotos de productos
- Imágenes de velas, detalles, colecciones

---

## 🔧 Mejoras Técnicas

### Componentes a Crear
1. `Hero.astro` - Sección principal
2. `ProductGrid.astro` - Grid de productos
3. `ProductCard.tsx` - Card individual (Solid.js)
4. `ScentTriangle.tsx` - Visualización de notas (Solid.js)
5. `AboutSection.astro` - Historia de marca
6. `RitualSection.astro` - Ritual de cuidado premium
7. `ClubNewsletter.astro` - Club Natuclean
8. `Ingredients.astro` - Sección de ingredientes
9. `Header.astro` - Navegación
10. `Footer.astro` - Footer completo

### Animaciones y Efectos
- `animate-fade-in` - Entrada suave
- `animate-scale` - Escala en hover
- `glass-effect` - Glassmorphism
- `arched-frame` - Marcos arqueados editoriales
- Smooth scroll para secciones
- Parallax sutil en imágenes

---

## 📋 Roadmap Actualizado (Según SITE.md)

### Completado
- [x] Iteration 1: Hero Section refinada

### En Progreso
- [ ] Iteration 2 (Elite): Product Detail con Scent Triangle
- [ ] Iteration 3 (Elite): Ritual de Cuidado
- [ ] Iteration 4 (Elite): Club Natuclean

### Futuro
- [ ] Iteration 5: Alquimia (ingredientes)
- [ ] Iteration 6: Contact form completo

---

## 🎨 Elementos de Diseño a Adoptar de la Referencia

1. **Espaciado generoso** - Whitespace como elemento de diseño
2. **Imágenes redondeadas/arqueadas** - Bordes suaves o arqueados (Arched frames)
3. **Micro-interacciones** - Hover states sutiles
4. **Tipografía jerárquica** - Playfair para headers, Inter para body
5. **Colores consistentes** - Mantener paleta actual
6. **Mobile-first** - Diseñar para móvil primero
7. **Iconografía premium** - Para Ritual de Cuidado
8. **Visualizaciones triangulares** - Para notas olfativas

---

## 📅 Próximos Pasos Inmediatos

1. **Fase 1: Hero Section** - Rediseño completo
2. **Componente ProductCard** - Base para catálogo
3. **Scent Triangle** - Para Iteration 2

---

*Plan actualizado el 2026-02-08 incorporando las nuevas ideas del SITE.md*
