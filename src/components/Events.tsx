import { SITE, waLink } from '../config';
import { useEvents } from '../hooks/useEvents';
import { Icon } from './Icon';

function formatDate(iso: string | null): string {
  if (!iso) return 'Fecha por confirmar';
  return new Date(iso).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export function Events() {
  const events = useEvents();
  return (
    <section id="eventos">
      <div className="wrap">
        <h3 className="t"><Icon name="cal" />Próximos eventos</h3>
        <div className="ev">
          {events.map((e) => (
            <div className="card" key={e.id}>
              <h4>{e.venue}</h4>
              <small>{e.city ?? 'Puebla, Pue.'}</small>
              <small>{formatDate(e.event_date)}</small>
              <a className="btn" href={waLink(`Hola, quiero saber la próxima fecha en ${e.venue}.`)} target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
          ))}
          <div className="card">
            <h4>Evento privado</h4>
            <small>Bodas, cumpleaños, empresas</small>
            <small>Pregunta por disponibilidad</small>
            <a className="btn" href="#contacto">Cotizar</a>
          </div>
          <a className="vid" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
            <span className="play"><Icon name="play" style={{ fill: '#fff', stroke: 'none', width: 26, height: 26 }} /></span>
            <p>Disfruta un poco de mi música</p>
            <span className="btn fill" style={{ padding: '8px 18px', fontSize: 12 }}>Ver en YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
