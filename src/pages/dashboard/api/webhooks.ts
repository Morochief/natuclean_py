// n8n Webhook Endpoint for Natuclean Logistics
// Receives dispatch updates from n8n automations

import type { APIRoute } from 'astro';

interface DispatchUpdate {
    dispatch_id: string;
    status: 'en_ruta' | 'cargando' | 'entregado' | 'pendiente' | 'alerta';
    latitude?: number;
    longitude?: number;
    eta?: string;
    notes?: string;
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const payload: DispatchUpdate = await request.json();

        // Validate required fields
        if (!payload.dispatch_id || !payload.status) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Missing required fields: dispatch_id and status'
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Log the update (in production, this would store to KV/D1)
        console.log('[Webhook] Dispatch Update:', payload);

        // TODO: Store in Cloudflare KV or D1
        // const kv = context.env.DISPATCH_KV;
        // await kv.put(`dispatch:${payload.dispatch_id}`, JSON.stringify(payload));

        return new Response(
            JSON.stringify({
                success: true,
                message: `Dispatch ${payload.dispatch_id} updated to ${payload.status}`,
                timestamp: new Date().toISOString()
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('[Webhook] Error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Invalid JSON payload'
            }),
            {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};

// Health check endpoint
export const GET: APIRoute = async () => {
    return new Response(
        JSON.stringify({
            status: 'ok',
            service: 'Natuclean Logistics Webhook',
            version: '1.0.0',
            timestamp: new Date().toISOString()
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    );
};
