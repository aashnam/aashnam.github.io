import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const slides = [
  { step: "Research Other Competitors to understand weaknesses and strengths in their UI/UX design", image: "step 2.png", width: '60%' },
  { step: "Create multiple personas to better understand user needs. Was able to determine that the most important features were: customization and intuitive features to reduce learning curve and transition time. ", image: "step 3.png", width: '60%' },
  { step: "After determining what screens were needed and what features would go on these screens, sketch a wireframe.", image: "step 4.png", width: '60%'},
  { step: "Convert sketched wireframe to basic wireframe on Miro", image: "step 5.png", width: '60%'},
  { step: "Create first low fidelity prototypes and iterate as feedback is received", image: "step 6.png", width: '60%'},
  { step: "Refine visuals and layout to create medium fidelity mockup", image: "Dashboard.jpg", width: '60%'},


];

const TravelApp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{paddingBottom: '10%'}}>
      <h1 style={{ fontFamily: 'CustomFont', color: 'white', fontSize: '80px', lineHeight: '0.8' }} className="text-center mb-20">Travel Planning App</h1>
      <p style={{ fontSize: '2rem', paddingLeft: '3%', fontFamily: 'customFont', fontSize: '320%', color: 'white' }}>Overview</p>
      <p style={{ fontFamily: 'Roboto Mono', fontSize: '1.2rem', paddingLeft: '50px', paddingTop: '20px', color: 'white', marginRight: '5%'}}>
        I created this travel planning app to help simplify the otherwise overwhelming process of planning family vacations. All you have to do is pick a location, select dates, and let the app take care of everything else. 
        <br/>
        <br/>
        Once you have selected from our suggested list of landmarks and attractions, the app will generate a personalized itinerary and packing list for you. You can focus on enjoying your trip, while the app takes care of the rest!
      </p>
      <br></br>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Skills Used</p>
      <Stack direction="row" spacing={1} sx={{ mt: 2, paddingLeft: '50px' }}>
        <Chip label="React Native" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Full Stack Development" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Algorithm Implementation" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="API Integration" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
      </Stack>

      {/* Slider */}
      
      {/* <div id="provenance-container" style={{width: '100%', height: '300px' }}>
        <div id='projects-card' style={{marginTop: '50px'}}>
          <div id='slider-contents'>
            <Slider {...settings}>
              {slides.map((project, index) => (
                <div key={index} className="project-slide">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="project-image">
                    <img src={project.image} alt={project.image} className="enlarge-on-hover" style={{width: project.width, marginTop: '150px'}} />
                    </div>
                    <div className="project-text">
                      <h2 style={{fontFamily: 'Roboto Mono', fontSize: '1.2rem'}}>{project.step}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}
      {/* <br></br> */}
      <div id='steps-container' style={{marginTop: '30px'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
        <div style={{marginLeft: '10%'}}>
          <video 
            width="50%" 
            height="auto" 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ objectFit: 'cover' }}
          >
            <source src="./landingpage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.3rem', marginRight: '10%' }}>
          First, the user selects their <strong>destination and dates</strong> to start planning. 
          <br></br>
          <br/> They will then be redirected to their planning checklist.
        </p>
        <br/>
      </div>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '10%', marginRight: '10%' }}>
            Now our user gets to select the places they would like to see. <strong>Filters</strong> can help them find the perfect attractions for their needs.
            <br/> <br/>
            The app will take their choices and generate a schedule taking into account <strong>distance between places</strong> and <strong>duration at each landmark</strong> using <br/><strong>K-means++ clustering</strong>  and additional considerations.
          </p>
          <div style={{ textAlign: 'center' }}>
            <video 
              width="60%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./placesplan.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
        </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
      <div style={{ margin: '20px 0', textAlign: 'center', marginLeft: '10%' }}>
        <video 
          width="60%" 
          height="auto" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ objectFit: 'cover' }}
        >
          <source src="./detailedschedule.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginRight: '10%'}}>
            The app generates a more <strong>detailed schedule</strong> that can serve as an itinerary. <br></br>
            By utilizing the <strong>National Weather Service API</strong>, the app also displays the <strong>temperature</strong> at each location.
            <br></br> A drop down arrow opens up a <strong>map</strong> for the user to visually see what their day looks like.
          </p>
          <br/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '10%' }}>
            Based on the chosen places to see and weather forecast, the app will build a <strong>personalized packing list</strong>.
                      </p>
          <div style={{ textAlign: 'center', marginRight: '10%' }}>
            <video 
              width="60%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./packinglist.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
        </div>
      <br/>
      <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}> 
        <div style={{display: 'flex', justifyContent: 'left', marginLeft: '5%'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', gap: '20px' }}>
            <video 
              width="20%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./generalscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video 
                  width="20%" 
                  height="auto" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ objectFit: 'cover' }}
                >
                  <source src="./detailedscreen.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginRight: '5%', marginLeft: '2%'}}>
                  The <strong>general schedule</strong> and <strong>detailed schedule</strong> are easily accessible for users to reference on the planning page.
                </p>
          </div>
      </div>
      </div>
      </div>
      </div>
      <br/>
    </div>
  );
}


export default TravelApp;
