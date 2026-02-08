/** @jsxImportSource solid-js */
import { createSignal, Show } from 'solid-js';

// Types
interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  scentNotes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
  isNew?: boolean;
  isPopular?: boolean;
}

export default function ProductCard(props: ProductCardProps) {
  const [isHovered, setIsHovered] = createSignal(false);
  const [isAdded, setIsAdded] = createSignal(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <article
      class="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div class="product-card__image-container">
        <div class="product-card__image-frame">
          <img
            src={props.image}
            alt={props.name}
            class="product-card__image"
            loading="lazy"
          />
        </div>
        
        {/* Badges */}
        <div class="product-card__badges">
          <Show when={props.isNew}>
            <span class="product-card__badge product-card__badge--new">
              Nuevo
            </span>
          </Show>
          <Show when={props.isPopular}>
            <span class="product-card__badge product-card__badge--popular">
              Popular
            </span>
          </Show>
        </div>

        {/* Quick Add Button */}
        <button
          class={`product-card__quick-add ${isAdded() ? 'added' : ''}`}
          onClick={handleAddToCart}
          aria-label="Agregar al carrito"
        >
          <Show when={!isAdded()} fallback="✓">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </Show>
        </button>
      </div>

      <div class="product-card__content">
        <h3 class="product-card__name">{props.name}</h3>
        <p class="product-card__description">{props.description}</p>
        
        <Show when={props.scentNotes}>
          <div class="product-card__notes">
            <Show when={props.scentNotes?.top.length}>
              <div class="product-card__note">
                <span class="product-card__note-label">Salida</span>
                <span class="product-card__note-value">{props.scentNotes?.top.join(', ')}</span>
              </div>
            </Show>
          </div>
        </Show>

        <div class="product-card__footer">
          <span class="product-card__price">${props.price.toFixed(2)}</span>
          <a href={`/product/${props.id}`} class="product-card__link">
            Ver Detalle
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div 
        class={`product-card__overlay ${isHovered() ? 'visible' : ''}`}
      />
    </article>
  );
}
