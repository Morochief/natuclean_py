/** @jsxImportSource solid-js */
import { createSignal } from 'solid-js';

interface ProductProps {
    id: string;
    name: string;
    price: string;
    image: string;
    tag?: string;
}

export default function ProductCard(props: ProductProps) {
    const [isHovered, setIsHovered] = createSignal(false);

    return (
        <div
            class="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div class="image-wrapper">
                <img src={props.image} alt={props.name} />
                {props.tag && <span class="tag">{props.tag}</span>}
                <div class={`overlay ${isHovered() ? 'visible' : ''}`}>
                    <button class="quick-add">Vista Rápida</button>
                </div>
            </div>
            <div class="details">
                <h3>{props.name}</h3>
                <p class="price">{props.price}</p>
            </div>

            <style>{`
        .product-card {
          background: white;
          padding: 1rem;
          border-radius: 1.5rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          border: 1px solid #f0f0f0;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
        
        .image-wrapper {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 1rem;
          background: #f9f9f9;
        }
        
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .product-card:hover img {
          transform: scale(1.1);
        }
        
        .tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(25, 230, 60, 0.9);
          color: white;
          padding: 0.2rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
        }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(4px);
        }
        
        .overlay.visible {
          opacity: 1;
        }
        
        .quick-add {
          background: white;
          color: black;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }
        
        .overlay.visible .quick-add {
          transform: translateY(0);
        }
        
        .details {
          padding-top: 1.5rem;
          text-align: center;
        }
        
        .details h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        
        .price {
          font-weight: 600;
          color: #19e63c;
          font-size: 1.1rem;
        }
      `}</style>
        </div>
    );
}
