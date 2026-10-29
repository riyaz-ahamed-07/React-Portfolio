import './App.css';
import Nav from './components/site/Nav';
import Hero from './components/site/Hero';
import About from './components/site/About';
import ProjectGrid from './components/site/ProjectGrid';
import Experience from './components/site/Experience';
import Background from './components/site/Background';
import Contact from './components/site/Contact';
import Footer from './components/site/Footer';

export default function App() {
  return <>
    <Nav />
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <ProjectGrid />
      <Experience />
      <Background />
      <Contact />
    </main>
    <Footer />
  </>;
}
