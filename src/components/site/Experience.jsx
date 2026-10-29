import { experience } from '../../data/profile';

export default function Experience() {
  return <section id="experience" className="section chapter">
    <div className="container">
      <div className="section-heading compact-heading"><div><p className="label">Where I work</p><h2>Building with <em>teams.</em></h2></div><p>Alongside personal projects, I build across mobile, web, and backend systems.</p></div>
      <div className="timeline">{experience.map(role => <article className="timeline-item" key={role.title}>
        <p className="timeline-date">{role.date}</p>
        <div>
          <h3>{role.title}</h3>
          {role.context && <p className="label">{role.context}</p>}
          {role.description && <p>{role.description}</p>}
          <p className="stack">{role.stack}</p>
          <details className="experience-details"><summary>What I worked on</summary><ul>{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details>
        </div>
      </article>)}</div>
    </div>
  </section>;
}
