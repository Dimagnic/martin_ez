import { SITE } from '../config';
import { Icon } from './Icon';

const PHOTOS = [
  { src: '/img/gal-1.jpg', alt: 'Martín EZ en vivo' },
  { src: '/img/gal-2.jpg', alt: 'Martín EZ con guitarra' },
  { src: '/img/gal-3.jpg', alt: 'Martín EZ en concierto' },
  { src: '/img/gal-4.jpg', alt: 'Martín EZ sobre el escenario' },
];

export function Gallery() {
  return (
    <section id="galeria">
      <div className="wrap">
        <h3 className="t"><Icon name="star" />Galería</h3>
        <div className="gal">
          {PHOTOS.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
          ))}
        </div>
        <p className="more">
          <a className="btn" href={SITE.instagram} target="_blank" rel="noopener noreferrer"><Icon name="ig" />Ver más en Instagram</a>
        </p>
      </div>
    </section>
  );
}
