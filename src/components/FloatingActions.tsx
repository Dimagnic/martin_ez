import { waLink } from '../config';

/** WhatsApp flotante (arriba). El botón del widget ClienteAI queda debajo, en la esquina inferior derecha. */
export function FloatingActions() {
  return (
    <>
      <a className="fwa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" style={{ fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z" />
          <path d="M9 9.5c.3 2 2 3.8 4.5 4.5l1.2-1.2-1.8-.9-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-.9-1.8z" style={{ fill: '#fff', stroke: 'none' }} />
        </svg>
      </a>
      <a className="up" href="#inicio" aria-label="Subir">↑</a>
    </>
  );
}
