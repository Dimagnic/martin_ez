import { useState, type FormEvent } from 'react';
import { SITE, waLink } from '../config';
import { Socials } from './Socials';

export function Contact() {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [message, setMessage] = useState('');
  const [trap, setTrap] = useState('');
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      // Guarda el contacto en Supabase vía función serverless; si falla, igual se abre WhatsApp.
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, event_info: info, message, website: trap }),
      });
    } catch {
      /* sin conexión al API (por ejemplo en desarrollo local) */
    }
    const text = `Hola Martín, soy ${name}. ${info ? `Mi evento: ${info}. ` : ''}${message}`;
    window.open(waLink(text), '_blank', 'noopener');
    setSending(false);
  }

  return (
    <section id="contacto" className="alt">
      <div className="wrap contact">
        <form onSubmit={onSubmit}>
          <h3>¿Te gustaría contratarme?</h3>
          <p>Cuéntame sobre tu evento y te responderé lo antes posible por WhatsApp.</p>
          <input name="n" placeholder="Nombre" required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} />
          <input name="d" placeholder="Fecha y lugar del evento" maxLength={160} value={info} onChange={(e) => setInfo(e.target.value)} />
          <textarea name="m" rows={4} placeholder="Mensaje / detalles" maxLength={1000} value={message} onChange={(e) => setMessage(e.target.value)} />
          <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website" value={trap} onChange={(e) => setTrap(e.target.value)} />
          <button className="btn" type="submit" disabled={sending}>Enviar solicitud por WhatsApp</button>
        </form>
        <div className="side">
          <h3 className="t" style={{ margin: 0 }}>¡Sigamos en contacto!</h3>
          <Socials />
          <p>WhatsApp<br /><b style={{ color: 'var(--txt)', fontSize: 18 }}>{SITE.phoneLabel}</b></p>
          <p>También puedes usar el botón de chat para hablar con el asistente virtual.</p>
        </div>
      </div>
    </section>
  );
}
