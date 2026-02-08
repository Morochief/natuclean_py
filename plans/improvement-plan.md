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

## 🎯 Plan de Mejora por Fases

### Fase 1: Hero Section - Impacto Visual
**Objetivo:** Crear primera impresión impactante

- [ ] Rediseñar hero con imagen inmersiva (usar fotos de /fotos/)
- [ ] Añadir headline con tipografía dramática (Playfair Display)
- [ ] Implementar subtítulo con valor diferencial
- [ ] Botón CTA con hover lift effect
- [ ] Fondo con gradiente sutil o imagen optimizada
- [ ] Animación de entrada suave (fade-in + scale)

### Fase 2: Catálogo de Productos - Grid Elegante
**Objetivo:** Mostrar productos de forma premium

- [ ] Crear componente ProductCard reutilizable
- [ ] Implementar grid responsivo (CSS Grid)
- [ ] Efecto glassmorphism en cards (backdrop-filter)
- [ ] Hover effect: imagen escala + sombra suave
- [ ] Etiquetas de precio elegantes
- [ ] Etiquetas de "Nuevo" o "Popular" si aplica
- [ ] Categorías filtrables (Velas, Kits, Accesorios)

### Fase 3: Sección "Nuestra Historia" - Artesanía
**Objetivo:** Contar la historia de la marca

- [ ] Layout asimétrico (imagen + texto alternado)
- [ ] Destacar proceso artesanal
- [ ] Incluir fotos del proceso de creación
- [ ] Estadísticas: "X años", "X productos creados", etc.
- [ ] Valores de marca: Natural, Sostenible, Artesanal

### Fase 4: Sección de Ingredientes - "Alquimia"
**Objetivo:** Educar sobre los ingredients

- [ ] Diseño visual de notas olfativas (antes mencionados)
- [ ] Iconos para cada ingrediente natural
- [ ] Descripciones de beneficios
- [ ] Animación al hacer scroll

### Fase 5: Newsletter y Contacto
**Objetivo:** Capturar leads

- [ ] Diseño minimalista del formulario
- [ ] Beneficio claro: "Recibe ofertas exclusivas"
- [ ] Integración con Hono backend (ya planificado)
- [ ] Validación en tiempo real con Solid.js
- [ ] Mensajes de éxito/error atractivos

### Fase 6: Navegación y Footer
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
4. `AboutSection.astro` - Historia de marca
5. `Ingredients.astro` - Sección de ingredientes
6. `Newsletter.astro` - Formulario de suscripción
7. `Header.astro` - Navegación
8. `Footer.astro` - Footer completo

### Animaciones y Efectos
- `animate-fade-in` - Entrada suave
- `animate-scale` - Escala en hover
- `glass-effect` - Glassmorphism
- Smooth scroll para secciones
- Parallax sutil en imágenes

---

## 📋 Checklist de Implementación

### Prioridad Alta
- [ ] Rediseñar Hero Section
- [ ] Crear ProductCard component
- [ ] Implementar Product Grid
- [ ] Completar About Section

### Prioridad Media
- [ ] Newsletter integration
- [ ] Mobile navigation
- [ ] Ingredients visualization
- [ ] Footer completo

### Prioridad Baja
- [ ] Scent Profiler quiz
- [ ] 3D Candle viewer
- [ ] Product Detail pages dinámicas

---

## 🎨 Elementos de Diseño a Adoptar de la Referencia

1. **Espaciado generoso** - Whitespace como elemento de diseño
2. **Imágenes redondeadas** - Bordes suaves (1rem radius)
3. **Micro-interacciones** - Hover states sutiles
4. **Tipografía jerárquica** - Playfair para headers, Inter para body
5. **Colores consistentes** - Mantener paleta actual
6. **Mobile-first** - Diseñar para móvil primero

---

## 📅 Próximos Pasos

1. **Revisar y aprobar este plan**
2. **Seleccionar fotos principales** del /fotos/ folder
3. **Crear componentes base** (Header, Footer, Hero)
4. **Iterar y mejorar** según feedback

---

*Plan creado el 2026-02-08 basado en análisis de www.homecraftedcandleco.com*
