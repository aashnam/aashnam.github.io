import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { step: "Research computer vision models and sensors to determine how the app will achieve this.", image: "tt_research.png", width: '70%' },
  { step: "Once research is complete, determine the timeline of our project. Determine our minimum viable product and what our app needs.", image: "tt_timeline.png", width: '70%' },
  { step: "Create a Figma of our app to understand what screen we will need and what layout each screen will have.", image: "tt_figma.png", width: '65%' },
  { step: "After each screen was delegated to smaller groups, coding began. We started with frontend and then eventually implemented backend after the computer vision and sensors teams had completed their tasks.", image: "tt_sensors.png", width: '30%' },
];

const TeamTech = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div className="tt-prev">&lt;</div>,
    nextArrow: <div className="tt-next">&gt;</div>,
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'transparent' }}> {/* Preserve original background color */}
      <h1 style={{ fontFamily: 'CustomFont', color: 'white', fontSize: '80px', lineHeight: '0.8' }} className="text-center mb-20">Team Tech John Deere App</h1>
      <p style={{ color: 'white', fontSize: '50px', paddingLeft: '50px', fontFamily: 'customFont' }}>Overview</p>
      <p style={{ color: 'white', fontFamily: 'Roboto Mono', fontSize: '1.2rem', paddingLeft: '50px', paddingTop: '20px' }}>
        As a part of the App Development Team in the Team Tech Committee of Society of Women Engineers, I collaborate with the Computer Vision and Sensors teams to create an app for John Deere that aims to assist their farm technology. 
        The app is meant to differentiate between crops, animals, and debris to allow farm technology to correctly navigate through the land and properly tend to each group.
        <br/><br/>
      </p>
      <p style={{ color: 'white', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px' }}>Skills Used</p>
      <Stack direction="row" spacing={1} sx={{ mt: 2, paddingLeft: '50px' }}>
        <Chip label="React.js" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
        <Chip label="Javascript" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
        <Chip label="Backend Development" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
        <Chip label="Frontend Development" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
        <Chip label="Figma" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
      </Stack>

      <div id="provenance-container" style={{width: '100%', height: '300px' }}>
        <div id='projects-card' style={{marginTop: '50px'}}>
          <div id='slider-contents'>
            <Slider {...settings}>
              {slides.map((project, index) => (
                <div key={index} className="project-slide">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="project-image">
                      <img src={project.image} alt={project.image} style={{width: project.width, alignItems: 'center', flex: 'center', marginTop: '50px'}} />
                    </div>
                    <div className="project-text">
                      <h2 style={{fontFamily: 'Roboto Mono', fontSize: '1.2rem', marginRight: '80px'}}>{project.step}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <br/>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white', marginTop: '240px' }}>Demonstration</p>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src="./tt_sign.png" style={{ width: '15%', height: 'auto', marginLeft: '150px', marginTop: '50px' }} alt="Sign In Page" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '150px' }}>
          When the app is first loaded, the user has the opportunity to sign in. Having a login creates a more personalized and secure experience.
          <br/><br/>
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '150px', marginTop: '-20px', marginRight: '40px' }}>
          First time users will have the chance to create a secure account with a strong password.
          <br/><br/>
        </p>
        <img src="./tt_create.png" style={{ width: '20%', height: 'auto' }} alt="Create Account" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <img src="./tt_landing.PNG" style={{ width: '20%', height: 'auto', marginLeft: '150px'}} alt="Landing Page" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '150px' }}>
          Once our user is logged in, they can choose between redirecting themselves to the camera or the logs page.
          <br/><br/>
          The <strong>camera icon</strong> will take them to a camera that can identify objects in front of it and classify it as a crop, animal, or debris.
          <br/><br/>
          The <strong>logs page</strong> will allow them to look over and analyze any past data.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '150px', marginTop: '-20px', marginRight: '40px' }}>
          <strong>The logs page clearly divides data and previous entries based on each session. </strong> This makes it easy to look at any past data to analyze and draw conclusions.
        </p>
        <img src="./tt_logs.png" style={{ width: '20%', height: 'auto', marginRight: '150px' }} alt="Logs" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <img src="./tt_sensors.png" style={{ width: '20%', height: 'auto', marginLeft: '150px' }} alt="Sensors Page" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '150px' }}>
          The logs also allow the user to look through past images and get specific statistics on <strong>metal warnings, thermal warnings, and more.</strong>
        </p>
      </div>
    </div>
  );
}

export default TeamTech;
