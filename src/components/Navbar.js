import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveSection(location.pathname === '/' ? 'about' : location.pathname.slice(1));
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            About
          </a>
          {/* <NavLink to="/" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} >
            About
          </NavLink> */}
        </li>
        <li className="nav-item">
          <a href="#skills-section" className={`nav-link ${activeSection === 'skills-section' ? 'active' : ''}`}>
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects-section" className={`nav-link ${activeSection === 'projects-section' ? 'active' : ''}`}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#experience-section" className={`nav-link ${activeSection === 'experience-section' ? 'active' : ''}`}>
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a href="#values-section" className={`nav-link ${activeSection === 'values-section' ? 'active' : ''}`}>
            Values
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
