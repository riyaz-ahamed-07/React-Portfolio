import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import NeoCursor from './components/NeoCursor';

const App = () => {
  useEffect(() => {
    document.title = 'Mohamed Riyaz Ahamed | Full Stack AI Engineer';
  }, []);

  return (
    <div className="app-shell">
      <NeoCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default App;