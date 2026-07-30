import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'education', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="neo-navbar">
      <div className="neo-brand">
        <h2>RIYAZ // DEV</h2>
      </div>
      <ul>
        <li><a href="#home" className={`neo-nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
        <li><a href="#projects" className={`neo-nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
        <li><a href="#experience" className={`neo-nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a></li>
        <li><a href="#education" className={`neo-nav-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a></li>
        <li><a href="#skills" className={`neo-nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
        <li><a href="#certificates" className={`neo-nav-link ${activeSection === 'certificates' ? 'active' : ''}`}>Certificates</a></li>
        <li><a href="#contact" className={`neo-nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;