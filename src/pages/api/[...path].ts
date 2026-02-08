import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
    return c.json({ message: 'Bienvenido a la API de Natuclean_py' });
});

app.post('/newsletter', async (c) => {
    const { email } = await c.req.json();
    // Here you would integrate with a service like Resend or Mailchimp
    console.log(`Newsletter signup: ${email}`);
    return c.json({ success: true, message: '¡Gracias por suscribirte!' });
});

export const ALL = (context: any) => app.fetch(context.request);
