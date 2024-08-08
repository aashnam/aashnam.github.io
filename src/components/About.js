import React, { useState, useEffect } from "react";
import "../App.css"; 
import '../styles/fonts.css';

export default function About() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);
  
  return (
    <section id="about" style={{ backgroundColor: 'rgb(24, 23, 61)', padding: '20px', margin: '20px auto', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" style={{ fontFamily: 'CustomFont', color: 'white', fontSize: '100px',  lineHeight: '0.8' }}>
            Hi, I'm Aashna Mauskar.
          </h1>
          {showText && (<p style={{fontFamily: 'Roboto Mono', color:'white', fontSize:'20px'}}>
           <TypingEffect text='Statistics and Computer Science, Business Minor @ University of Illinois at Urbana-Champaign'/>
          </p>)}
          <div className="flex justify-center">
          </div>
          <div className= "socials">
          <a href="linkedin.com/in/aashnamauskar/" target="_blank" rel="noopener noreferrer">
            <img
              className="linkedin"
              src="./linkedin-negative.png"
              alt="LinkedIn"
            />
          </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 image-container">
          <img
            className="profile-image"
            src="./headshot.jpg"
          />
        </div>
      </div>
    </section>
  );

}

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currInd = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + text[currInd]);
      currInd++;
      if (currInd === text.length) {
        clearInterval(intervalId);
      }
    }, 60); 
    return () => clearInterval(intervalId);
  }, [text]);

  return <>{displayText}</>;
};

