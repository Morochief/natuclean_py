/** @jsxImportSource solid-js */
import { createSignal, Show } from 'solid-js';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [subject, setSubject] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [status, setStatus] = createSignal<FormStatus>('idle');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call to Hono backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success simulation
    setStatus('success');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const contactInfo = [
    { icon: '📍', label: 'Dirección', value: 'Asunción, Paraguay' },
    { icon: '📱', label: 'WhatsApp', value: '+595 981 123 456' },
    { icon: '✉️', label: 'Email', value: 'hola@natuclean.com' },
    { icon: '⏰', label: 'Horario', value: 'Lun - Sáb: 9:00 - 18:00' },
  ];

  return (
    <section class="contact" id="contacto">
      <div class="container contact__container">
        <div class="contact__info">
          <span class="contact__label">Contáctanos</span>
          <h2 class="contact__title">Hablemos</h2>
          <p class="contact__description">
            ¿Tienes preguntas sobre nuestros productos? ¿Te gustaría hacer un pedido personalizado? 
            Estamos aquí para ayudarte a crear la experiencia perfecta.
          </p>
          
          <div class="contact__details">
            {contactInfo.map((item) => (
              <div class="contact__detail">
                <span class="contact__detail-icon">{item.icon}</span>
                <div class="contact__detail-text">
                  <span class="contact__detail-label">{item.label}</span>
                  <span class="contact__detail-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div class="contact__social">
            <a href="#" class="contact__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="contact__social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="contact__form-wrapper">
          <Show when={status() !== 'success'} fallback={
            <div class="contact__success">
              <div class="contact__success-icon">✓</div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias por contactarnos. Te responderemos en breve.</p>
              <button class="btn btn-secondary" onClick={() => setStatus('idle')}>
                Enviar otro mensaje
              </button>
            </div>
          }>
            <form class="contact__form" onSubmit={handleSubmit}>
              <div class="contact__form-group">
                <label class="contact__label-field" for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name()}
                  onInput={(e) => setName(e.currentTarget.value)}
                  class="contact__input"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div class="contact__form-group">
                <label class="contact__label-field" for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email()}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  class="contact__input"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div class="contact__form-group">
                <label class="contact__label-field" for="subject">Asunto</label>
                <select
                  id="subject"
                  value={subject()}
                  onChange={(e) => setSubject(e.currentTarget.value)}
                  class="contact__select"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="pedido">Información de Pedido</option>
                  <option value="personalizado">Pedido Personalizado</option>
                  <option value="mayorista">Venta Mayorista</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div class="contact__form-group">
                <label class="contact__label-field" for="message">Mensaje</label>
                <textarea
                  id="message"
                  value={message()}
                  onInput={(e) => setMessage(e.currentTarget.value)}
                  class="contact__textarea"
                  placeholder="Tu mensaje..."
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" class="btn btn-primary contact__submit" disabled={status() === 'submitting'}>
                <Show when={status() !== 'submitting'} fallback="Enviando...">
                  Enviar Mensaje
                </Show>
              </button>
            </form>
          </Show>
        </div>
      </div>
    </section>
  );
}
