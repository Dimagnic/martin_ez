import { waLink, SITE } from '../config';
import { Icon } from './Icon';
import { Socials } from './Socials';

export function Hero() {
  return (
    <div className="hero" id="inicio">
      <div className="wrap">
        <div>
          <h1>
            <i className="sg" role="img" aria-label="Martín EZ" style={{ width: 'min(100%,470px)', aspectRatio: '625/256', marginLeft: -8 }} />
          </h1>
          <h2>Canciones que acarician el alma</h2>
          <p>Música en vivo, romántica y bohemia para hacer de tus momentos especiales una experiencia inolvidable.</p>
          <div className="cta">
            <a className="btn fill" href={waLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="music" />Contrataciones por WhatsApp
            </a>
            <a className="btn" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
              <Icon name="play" style={{ fill: 'currentColor', stroke: 'none' }} />Ver mi música
            </a>
          </div>
          <Socials />
        </div>
        <div className="portrait">
          <img src="/img/martin.jpg" alt="Martín EZ con su guitarra" />
          <span>La música también se vive,<br />se siente y se comparte…</span>
        </div>
      </div>
    </div>
  );
}
