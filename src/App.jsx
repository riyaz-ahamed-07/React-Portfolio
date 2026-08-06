import { useEffect } from 'react';
import './App.css';
import LiquidRevealHero from './components/LiquidRevealHero';
import Marquee from './components/Marquee';
import FeaturedProjects from './components/FeaturedProjects';
import CtaSection from './components/CtaSection';
// Old design system shell + sections, disabled while the new dark layout
// (liquid reveal hero, marquee, projects, CTA) is being tried out.
// import Navbar from './components/Navbar';
// import NeoCursor from './components/NeoCursor';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Skills from './components/Skills';
// import Certificates from './components/Certificates';
// import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    document.title = 'Mohamed Riyaz Ahamed | Full Stack AI Engineer';
  }, []);

  return (
    <main>
      {/* <NeoCursor /> */}
      {/* <Navbar /> */}
      <LiquidRevealHero />
      <Marquee direction="left" />
      <FeaturedProjects />
      <Marquee direction="right" />
      <CtaSection />
      {/* <Hero /> */}
      {/* <Projects /> */}
      {/* <Experience /> */}
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Certificates /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default App;
