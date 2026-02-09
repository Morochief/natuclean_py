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
              <div class="club__success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
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
                <span class="club__privacy-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                Tu información está segura. No spam, solo contenido exclusivo.
              </p>
            </form>
          </Show>
        </div>

        <div class="club__features">
          <div class="club__feature">
            <div class="club__feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
            </div>
            <div class="club__feature-text">
              <strong>1 Vela Mensual</strong>
              <span>Edición limitada</span>
            </div>
          </div>
          <div class="club__feature">
            <div class="club__feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="19" y1="5" x2="5" y2="19" />
                <circle cx="6.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
            </div>
            <div class="club__feature-text">
              <strong>Hasta 20% Descuento</strong>
              <span>En toda la tienda</span>
            </div>
          </div>
          <div class="club__feature">
            <div class="club__feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div class="club__feature-text">
              <strong>Acceso Anticipado</strong>
              <span>Nuevas colecciones</span>
            </div>
          </div>
          <div class="club__feature">
            <div class="club__feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
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
