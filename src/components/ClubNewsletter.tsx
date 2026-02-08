/** @jsxImportSource solid-js */
import { createSignal, Show } from 'solid-js';

type SubscriptionTier = 'monthly' | 'quarterly' | 'yearly';

export default function ClubNewsletter() {
  const [email, setEmail] = createSignal('');
  const [tier, setTier] = createSignal<SubscriptionTier>('monthly');
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [isSuccess, setIsSuccess] = createSignal(false);
  const [error, setError] = createSignal('');

  const tiers = [
    { key: 'monthly' as const, label: 'Mensual', price: '$25/mes', features: ['1 vela mensual', 'Acceso anticipado', 'Recetas exclusivas'] },
    { key: 'quarterly' as const, label: 'Trimestral', price: '$60/3meses', features: ['3 velas + surprise', '15% descuento', 'Consultoría aroma'] },
    { key: 'yearly' as const, label: 'Anual', price: '$200/año', features: ['12 velas premium', '20% descuento', 'VIP todo incluido'] },
  ];

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!email() || !email().includes('@')) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');
  };

  return (
    <section class="club">
      <div class="club__background">
        <div class="club__gradient"></div>
      </div>
      
      <div class="container club__container">
        <div class="club__content">
          <span class="club__label">Únete a la Experiencia</span>
          <h2 class="club__title">Club Natuclean</h2>
          <p class="club__description">
            Sé parte de nuestra comunidad. Obtén acceso exclusivo a nuevas colecciones, 
            descuentos especiales y secretos de aromaterapia.
          </p>
          
          <Show when={!isSuccess()} fallback={
            <div class="club__success">
              <div class="club__success-icon">✓</div>
              <h3>¡Bienvenido al Club!</h3>
              <p>Revisa tu email para confirmar tu suscripción</p>
            </div>
          }>
            <form class="club__form" onSubmit={handleSubmit}>
              <div class="club__tiers">
                {tiers.map((t) => (
                  <label class={`club__tier ${tier() === t.key ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="tier"
                      value={t.key}
                      checked={tier() === t.key}
                      onChange={() => setTier(t.key)}
                    />
                    <div class="club__tier-content">
                      <span class="club__tier-label">{t.label}</span>
                      <span class="club__tier-price">{t.price}</span>
                    </div>
                  </label>
                ))}
              </div>
              
              <div class="club__input-group">
                <input
                  type="email"
                  placeholder="Tu email"
                  value={email()}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  class="club__input"
                  disabled={isSubmitting()}
                />
                <button type="submit" class="btn btn-primary" disabled={isSubmitting()}>
                  <Show when={!isSubmitting()} fallback="Enviando...">
                    Unirse al Club
                  </Show>
                </button>
              </div>
              
              <Show when={error()}>
                <p class="club__error">{error()}</p>
              </Show>
              
              <p class="club__privacy">
                <span class="club__privacy-icon">🔒</span>
                Tu información está segura. No spam, solo contenido exclusivo.
              </p>
            </form>
          </Show>
        </div>
        
        <div class="club__features">
          <div class="club__feature">
            <div class="club__feature-icon">🎁</div>
            <div class="club__feature-text">
              <strong>1 Vela Mensual</strong>
              <span>Edición limitada</span>
            </div>
          </div>
          <div class="club__feature">
            <div class="club__feature-icon">💰</div>
            <div class="club__feature-text">
              <strong>Hasta 20% Descuento</strong>
              <span>En toda la tienda</span>
            </div>
          </div>
          <div class="club__feature">
            <div class="club__feature-icon">🔮</div>
            <div class="club__feature-text">
              <strong>Acceso Anticipado</strong>
              <span>Nuevas colecciones</span>
            </div>
          </div>
          <div class="club__feature">
            <div class="club__feature-icon">📚</div>
            <div class="club__feature-text">
              <strong>Recetas de Aroma</strong>
              <span>Exclusivas para ti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
