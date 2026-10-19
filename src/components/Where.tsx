const PLACES = ['Santa Cecilia', 'Ceviche 107', 'El Salmón', 'Mareño', 'SICOM TV'];

export function Where() {
  return (
    <div className="where">
      <span>Dónde me has visto:</span>
      {PLACES.map((p) => (
        <b key={p}>{p}</b>
      ))}
    </div>
  );
}
