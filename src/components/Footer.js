import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

const quotes = [
    "\"The best way to predict your future is to create it.\"",
  ];

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
               <p style={{fontFamily: 'customFont', fontSize: '20px'}}>&copy; {new Date().getFullYear()} Aashna Mauskar. All rights reserved.</p>
          <div className="typing">
            <Typewriter
              options={{
                strings: quotes,
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 200,
                cursor: "|",
                pauseFor: 10000
              }}
            />
          </div>
        </div>
      </footer>
    );
  }
  

export default Footer;
