import type { CSSProperties } from 'react';
import { Icon, type IconName } from './Icon';

const KINDS: { img: string; icon: IconName; title: string; text: string }[] = [
  { img: '/img/kind-1.jpg', icon: 'music', title: 'Música en vivo', text: 'Restaurantes, bares, eventos privados y celebraciones.' },
  { img: '/img/kind-2.jpg', icon: 'heart', title: 'Versatilidad', text: 'Desde baladas románticas hasta clásicos de todos los tiempos.' },
  { img: '/img/kind-3.jpg', icon: 'star', title: 'Experiencia', text: 'Años de trayectoria y una conexión especial con el público.' },
  { img: '/img/kind-4.jpg', icon: 'cal', title: 'Tu evento, mi música', text: 'Hagamos de tu ocasión algo único.' },
];

export function Kinds() {
  return (
    <section id="musica" className="alt">
      <div className="wrap">
        <div className="kinds">
          {KINDS.map((k) => (
            <div className="kind" key={k.title} style={{ '--im': `url(${k.img})` } as CSSProperties}>
              <Icon name={k.icon} />
              <h4>{k.title}</h4>
              <p>{k.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
