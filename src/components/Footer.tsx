import { SITE, waLink } from '../config';
import { Socials } from './Socials';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <i className="sg fsig" role="img" aria-label="Martín EZ" style={{ aspectRatio: '625/256' }} />
            <p>Cantante solista en Puebla. Música en vivo, romántica y bohemia para eventos, restaurantes y celebraciones.</p>
            <a className="wal" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp: {SITE.phoneLabel}</a>
            <Socials />
          </div>
          <div>
            <h5>Navegación</h5>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#musica">Música</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5>Servicios</h5>
            <ul>
              <li><a href="#contacto">Restaurantes y bares</a></li>
              <li><a href="#contacto">Eventos privados</a></li>
              <li><a href="#contacto">Bodas y cumpleaños</a></li>
              <li><a href="#contacto">Eventos empresariales</a></li>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer">Cotizar por WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <p>Cotizaciones sin compromiso. Disponibilidad sujeta a la fecha, horario y lugar del evento.</p>
            <p>Puebla, Pue.<br />Contrataciones por WhatsApp.</p>
          </div>
          <div>
            <h5>Asistente virtual</h5>
            <div className="qr"><img src="/img/qr-asistente.png" alt="QR del asistente virtual" /></div>
            <p>Escanea el código y chatea con nuestro asistente.</p>
          </div>
        </div>
        <div className="fbar">
          <p>© {new Date().getFullYear()} Martín EZ. Todos los derechos reservados.</p>
          <div className="by">
            <span>DISEÑADO POR</span>
            <a className="pill" href={SITE.agencyUrl} target="_blank" rel="noopener noreferrer" aria-label="Cero+">
              <img src="/img/cero-logo.jpg" alt="Cero+" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
