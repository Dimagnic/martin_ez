import { useEffect, useState } from 'react';
import { waLink } from '../config';

const NAV = [
  ['INICIO', '#inicio'],
  ['MÚSICA', '#musica'],
  ['EVENTOS', '#eventos'],
  ['GALERÍA', '#galeria'],
  ['CONTACTO', '#contacto'],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#inicio" onClick={close}>
          <i className="sg" role="img" aria-label="Martín EZ" style={{ height: 50, width: 120 }} />
        </a>
        <nav>
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn hdr-btn" href="#contacto">CONTRATACIONES</a>
        <button
          className="burger"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div id="mobile-menu" className={`mmenu${open ? ' open' : ''}`}>
        {NAV.map(([label, href]) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
        <a className="btn fill" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={close}>
          Contrataciones por WhatsApp
        </a>
      </div>
    </header>
  );
}