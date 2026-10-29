import './App.css';
import { featuredProjects, profile } from './data/profile';
import Nav from './components/site/Nav';
import Hero from './components/site/Hero';
import Highlights from './components/site/Highlights';
import CaseStudy from './components/site/CaseStudy';
import ProjectGrid from './components/site/ProjectGrid';
import Experience from './components/site/Experience';
import Hackathons from './components/site/Hackathons';
import Research from './components/site/Research';
import Skills from './components/site/Skills';
import Education from './components/site/Education';
import Certifications from './components/site/Certifications';
import About from './components/site/About';
import Contact from './components/site/Contact';
import Footer from './components/site/Footer';
export default function App() {
  return <><Nav /><main id="main" tabIndex={-1}><Hero /><Highlights />
    <section id="work" className="section container" aria-labelledby="work-title"><div className="section-heading"><p className="label">Work</p><h2 id="work-title">Selected <em>work.</em></h2><p>{profile.workIntro}</p></div>{featuredProjects.map(project => <CaseStudy key={project.title} project={project} />)}<ProjectGrid /></section>
    <Experience /><Hackathons /><Research /><Skills /><Education /><Certifications /><About /><Contact />
  </main><Footer /></>;
}
