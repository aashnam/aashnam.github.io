import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"; 
import '../styles/fonts.css';

const slides = [
  { step: "Research competitors to understand weaknesses and strengths in their UI/UX design", image: "step 2.png", width: '50%' },
  { step: "Create multiple personas to better understand user needs. Was able to determine that the most important features were: customization and intuitive features to reduce learning curve and transition time. ", image: "step 3.png", width: '80%'},
  { step: "After determining what screens were needed and what features would go on these screens, sketch a wireframe.", image: "step 4.png", width: '80%'},
  { step: "Convert sketched wireframe to basic wireframe on Miro", image: "step 5.png", width: '80%'},
  { step: "Create first low fidelity prototypes and iterate as feedback is received", image: "step 6.png", width: '100%'},
  { step: "Refine visuals and layout to create medium fidelity mockup", image: "Dashboard.jpg", width: '80%'},
];

const Provenance = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div style={{ paddingTop: '100px',  marginLeft: '50px', marginRight: '50px' }}>
      <h1 style={{ fontFamily: 'CustomFont', color: 'white', fontSize: '80px', lineHeight: '0.8' }} className="text-center mb-20">Provenance Security</h1>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Overview</p>
      <p style={{ fontFamily: 'Roboto Mono', fontSize: '1.2rem', paddingLeft: '50px', paddingTop: '20px', color: 'white' }}>
        Provenance Security is an innovative cybersecurity platform aiming to help security analysts identify and resolve alerts 
        through the use of provenance graphs. These graphs along with additional statistics provide data to better understand potential threats. 
        Our goal with this website is to provide an interactive experience for investigation and resolution of any security issues. 
        <br/><br/>
        My team and I at Illinois Design Consulting meticulously designed the user interface of this cybersecurity website to provide security analysts 
        an intuitive and visually appealing experience. We wanted the navigation experience to be effortless.
      </p>
      <br/>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Skills Used</p>
      <Stack direction="row" spacing={1} sx={{ mt: 2, paddingLeft: '50px' }}>
        <Chip label="Figma" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
        <Chip label="UI/UX" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Miro" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
        <Chip label="Visual Design" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Prototyping" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip' />
      </Stack>

      <div id="provenance-container" style={{width: '100%', height: '300px' }}>
        <div id='projects-card' style={{marginTop: '50px'}}>
          <div id='slider-contents'>
            <Slider {...settings}>
              {slides.map((project, index) => (
                <div key={index} className="project-slide">
                  <div className="grid grid-cols-2 gap-4" id='slider-info'>
                    <div className="provenance-image">
                      <img src={project.image} style={{width: project.width}}alt={project.image} className="enlarge-on-hover"  />
                    </div>
                    <div className="provenance-text">
                      <h2 style={{fontFamily: 'Roboto Mono'}}>{project.step}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <br/>
      <div id='steps-container' style={{marginTop: '250px'}}>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white', marginTop: '50px', marginBottom: '20px' }}>Demonstration</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./Dashboard.jpg" className="enlarge-on-hover" style={{ width: '50%', height: 'auto', marginLeft: '30px'}} alt="Dashboard" />
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
            Our security analyst John logs in and lands on the <strong>dashboard</strong>, where he is able to get a high level overview of the performance of his security: <strong> a health bar, data about alerts and endpoints, and notifications. </strong>
            <br/>The customizable feature of these widgets ensures that John can personalize what he wants for his overview.
          </p>
          <br/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
            The alerts page displays what types of alerts are occurring over a given timeline: Critical, Vulnerable, and Secure.
            <br/>With a customizable graph widget, John will have the ability to customize the timeline over which he would like to analyze the alerts.
            <br/>In a table of Unmanaged Alerts, John can get a glance at all the alerts.
          </p>
          <img src="./Alerts.jpg" className="enlarge-on-hover" style={{ width: '50%', height: 'auto', marginRight: '40px' }} alt="Alerts" />
          <br/>
        </div>
        <br/>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./Specific Alerts.png" className="enlarge-on-hover" style={{ width: '50%', height: 'auto', marginLeft: '40px' }} alt="Alert Details" />
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
            By clicking on a specific alert, John is redirected to a separate page where he can dive deeper into his analysis including <strong>priority classification, status, timestamp, and related alerts.</strong>
            <br/>By further examining the provenance graph, John can determine whether this specific alert poses a threat after which he can either resolve or escalate the alert.
          </p>
          <br/>
        </div>
        <br/>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px'}}>
            Lastly, the settings page will give John any additional control over his experience on the cybersecurity platform.
          </p>
          <img src="./Settings.png" className="enlarge-on-hover" style={{ width: '50%', height: 'auto', marginRight: '40px' }} alt="Alerts" />
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Provenance;
