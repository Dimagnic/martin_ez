const NAV = [
  ['INICIO', '#inicio'],
  ['MÚSICA', '#musica'],
  ['EVENTOS', '#eventos'],
  ['GALERÍA', '#galeria'],
  ['CONTACTO', '#contacto'],
] as const;

export function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#inicio">
          <i className="sg" role="img" aria-label="Martín EZ" style={{ height: 50, width: 120 }} />
        </a>
        <nav>
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn hdr-btn" href="#contacto">CONTRATACIONES</a>
      </div>
    </header>
  );
}
