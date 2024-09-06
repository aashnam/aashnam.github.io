import React from "react";
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Provenance from "./components/Provenance"; 
import PeopleWeave from "./components/PeopleWeave";
import TeamTech from "./components/TeamTech";
import ResearchBlog from "./components/ResearchBlog";
import TravelApp from "./components/TravelApp.js";
import Footer from "./components/Footer"; 
import Values from './components/Values';
import "./App.css"; 
import './styles/fonts.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container" style={{backgroundColor: 'rgb(24, 23, 61)', height: '100%'}}>
      {/* <Navbar /> */}
      {location.pathname === '/' ? (
        <Navbar />
      ) : (
        <div style={{ backgroundColor: '#17173d', height: '60px', width: '100%' }}></div>
      )}
      <Routes>
        <Route path="/" element={
          <>
            <div className="about-section">
              <About />
            </div>
            <div id="skills-section" className="skills">
              <Skills />
            </div>
            <div id="projects-section" className="projects-section">
              <Projects />
            </div>
            <div id="experience-section" className="experience-section">
              <Experience />
            </div>
            <div id="values-section" className='values-section'>
              <Values />
            </div>
            {/* <div>
              <Contact />
            </div> */}
          </>
        } />
        <Route path="/provenance" element={<Provenance />} />
        <Route path="/peopleweave" element={<PeopleWeave />} />
        <Route path="/teamtech" element={<TeamTech />} />
        <Route path="/researchblog" element={<ResearchBlog />} />
        <Route path="/travelapp" element={<TravelApp />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </div>
  );
};

export default function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
