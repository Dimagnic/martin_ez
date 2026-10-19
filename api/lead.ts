import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const clean = (v: unknown, max: number): string => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  const body = (req.body ?? {}) as Record<string, unknown>;
  if (clean(body.website, 50)) return res.status(200).json({ ok: true }); // honeypot anti-spam

  const name = clean(body.name, 80);
  if (!name) return res.status(400).json({ ok: false, error: 'name_required' });

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(503).json({ ok: false, error: 'not_configured' });

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from('leads').insert({
    name,
    event_info: clean(body.event_info, 160),
    message: clean(body.message, 1000),
    source: 'web',
  });

  if (error) return res.status(500).json({ ok: false, error: 'insert_failed' });
  return res.status(200).json({ ok: true });
}
