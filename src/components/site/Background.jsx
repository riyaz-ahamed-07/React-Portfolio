import { useState } from 'react';
import { skills, education, certifications, hackathons, research } from '../../data/profile';
import ExternalLink from './ExternalLink';

const panels = ['Toolkit', 'Credentials', 'Hackathons', 'Research'];

export default function Background() {
  const [active, setActive] = useState('Toolkit');
  function navigate(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % panels.length;
    if (event.key === 'ArrowLeft') next = (index + panels.length - 1) % panels.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = panels.length - 1;
    if (next !== undefined) { event.preventDefault(); setActive(panels[next]); document.getElementById('tab-' + panels[next]).focus(); }
  }
  return <section id="background" className="section tinted chapter">
    <div className="container">
      <div className="section-heading compact-heading"><div><p className="label">Behind the work</p><h2>Always <em>learning.</em></h2></div><p>The tools I use, the things I’ve earned, and the questions I’m exploring.</p></div>
      <div className="background-tabs" role="tablist" aria-label="Background topics">{panels.map((panel, index) => <button key={panel} id={'tab-' + panel} role="tab" type="button" aria-selected={active === panel} aria-controls={'panel-' + panel} tabIndex={active === panel ? 0 : -1} onClick={() => setActive(panel)} onKeyDown={event => navigate(event, index)}>{panel}</button>)}</div>
      <div className="background-panel" id="panel-Toolkit" role="tabpanel" aria-labelledby="tab-Toolkit" hidden={active !== 'Toolkit'} tabIndex={0}>
        <div className="skill-groups">{skills.map(group => <details key={group.title} className="skill-disclosure"><summary>{group.title}</summary><ul className="chips">{group.items.map(item => <li key={item}>{item}</li>)}</ul></details>)}</div>
      </div>
      <div className="background-panel" id="panel-Credentials" role="tabpanel" aria-labelledby="tab-Credentials" hidden={active !== 'Credentials'} tabIndex={0}>
        <div className="credential-education"><h3>{education.title}</h3><p>{education.institution} · {education.date}</p></div>
        <div className="certification-grid">{certifications.map(item => <article key={item.title}><p className="label">{item.issuer} · {item.date}</p><h3>{item.title}</h3><ExternalLink href={item.href} label={'Verify ' + item.title}>Verify credential</ExternalLink></article>)}</div>
      </div>
      <div className="background-panel" id="panel-Hackathons" role="tabpanel" aria-labelledby="tab-Hackathons" hidden={active !== 'Hackathons'} tabIndex={0}>
        <p className="panel-intro">A real problem, a short clock, and a working demo at the end.</p><div className="award-grid">{hackathons.map(item => <article className="award-card" key={item.title}><p className="label">{item.date || item.project}</p><h3>{item.title}</h3><p className="award-result">{item.result}</p><p>{item.project}</p></article>)}</div>
      </div>
      <div className="background-panel" id="panel-Research" role="tabpanel" aria-labelledby="tab-Research" hidden={active !== 'Research'} tabIndex={0}><article className="research-note"><p className="label">{research.context}</p><h3>{research.title}</h3><p>{research.description}</p></article></div>
    </div>
  </section>;
}
