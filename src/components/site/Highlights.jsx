import { highlights } from '../../data/profile';
export default function Highlights() { return <section id="highlights" className="highlights dark" aria-label="Highlights"><h2 className="sr-only">Highlights</h2><div className="container highlights-grid">{highlights.map(([value, detail]) => <div key={value}><strong>{value}</strong><p>{detail}</p></div>)}</div></section>; }
