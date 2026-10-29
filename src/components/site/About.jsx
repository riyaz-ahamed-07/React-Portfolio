import { profile } from '../../data/profile';

export default function About() {
  return <section id="about" className="section dark chapter">
    <div className="container about-layout">
      <div><p className="label">A little context</p><h2>Curious by default.<br /><em>Reliable</em> by design.</h2></div>
      <div>
        <p className="lead">{profile.about}</p>
        <ul className="about-proof">
          <li><strong>4×</strong><span>hackathon wins</span></li>
          <li><strong>Oracle certified</strong><span>Java SE 21 Professional</span></li>
        </ul>
      </div>
    </div>
  </section>;
}
