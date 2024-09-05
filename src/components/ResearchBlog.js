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

const ResearchBlog = () => {
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
      <h1 style={{ fontFamily: 'CustomFont', color: 'white', fontSize: '80px', lineHeight: '0.8' }} className="text-center mb-20">Research Blog Website</h1>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Overview</p>
      <p style={{ fontFamily: 'Roboto Mono', fontSize: '1.2rem', paddingLeft: '50px', paddingTop: '20px', color: 'white' }}>
        I designed this blog website for researchers and anyone interested in the latest advancements in the area of research. This website aims to encourage collaboration and curiosity by keeping users up to date with the latest topics.
      </p>
      <br></br>
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white' }}>Skills Used</p>
      <Stack direction="row" spacing={1} sx={{ mt: 2, paddingLeft: '50px' }}>
        <Chip label="Figma" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="UI/UX" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Visual Design" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Wireframing" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Prototyping" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
        <Chip label="Responsive Design" sx={{ fontSize: '1.2rem', padding: '8px 16px' }} id='chip'/>
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
      <p style={{ fontSize: '2rem', paddingLeft: '50px', fontFamily: 'customFont', fontSize: '50px', color: 'white', marginTop: '50px', marginBottom: '20px' }}>Demonstration</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./blog-landing.png" style={{ width: '50%', height: 'auto', marginLeft: '30px'}} alt="Dashboard" />
        <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
              Our user lands on the home page, which displays <strong>research articles and a navigation bar </strong> that showcases the many features of this blog website.
        </p>
        <br></br>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
            Our user can <strong>log in or create an account </strong>to have a more personalized experience and unlock all features.
          </p>
          <div style={{ margin: '20px 0', textAlign: 'center', marginRight: '10px' }}>
            <video 
              width="95%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./login.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
        </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: '20px 0', textAlign: 'center', marginLeft: '40px' }}>
        <video 
          width="95%" 
          height="auto" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ objectFit: 'cover' }}
        >
          <source src="./filterCategories.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginTop: '-20px', marginRight: '40px' }}>
              <strong>Filtering the articles </strong>on the home feed gives the user complete control over which topics they want to browse through.
          </p>
          <br/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
            Our user can conveniently <strong>bookmark </strong> any articles they want to revisit <br/>by adding them to boards. The user also has the ability to <strong>send any articles to others </strong>, such as their peers on research projects.
          </p>
          <div style={{ margin: '20px 0', textAlign: 'center', marginRight: '10px' }}>
            <video 
              width="95%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./save.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
        </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: '20px 0', textAlign: 'center', marginLeft: '40px' }}>
        <video 
          width="95%" 
          height="auto" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ objectFit: 'cover' }}
        >
          <source src="./dropdown.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginTop: '-20px', marginRight: '40px' }}>
          For more extensive research of a specific topic, the user can use the <strong>dropdown menu </strong> on the navigation bar to <br/> redirect to a separate page dedicated to their topic of interest.
          <br/> Users can also <strong>follow a topic </strong>to get the latest articles on their home feed. 
          </p>
          <br/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
            The Researchers Directory allows users to look through all the scholars with published works. Users can also sort the list by <strong>experience, field of study, or alphabetical order.</strong> 
            <br/> At first glance, users can see the <strong>university affiliation and experience level</strong> of each researcher.
            <br/> This page is particularly useful for researchers looking to <strong>collaborate with other researchers</strong> with similar or varying expertise.
          </p>
          <div style={{ margin: '20px 0', textAlign: 'center', marginRight: '10px' }}>
            <video 
              width="95%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./researchers.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: '20px 0', textAlign: 'center', marginLeft: '40px' }}>
        <video 
          width="95%" 
          height="auto" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ objectFit: 'cover' }}
        >
          <source src="./researcherIndividual.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginTop: '-20px', marginRight: '40px' }}>
          Each researcher gets an individual page that <strong>highlights their contributions and past collaborations.</strong> <br/> 
          Users can also conveniently use their displayed <strong>social media links</strong> to reach out to researchers for collaborations.
          </p>
          <br/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
           Users can navigate to the calendar page, where they can stay up to date on the latest seminars and conferences. <br/>
           They can also sort through the calendar by the type of event: <strong>webinars, seminars, conferences, workshops, and presentations. </strong>
          </p>
          <div style={{ margin: '20px 0', textAlign: 'center', marginRight: '10px' }}>
            <video 
              width="95%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./calendar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: '20px 0', textAlign: 'center', marginLeft: '40px' }}>
        <video 
          width="95%" 
          height="auto" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ objectFit: 'cover' }}
        >
          <source src="./bookmarked.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginTop: '-20px', marginRight: '40px' }}>
            The <strong>bookmark page</strong> allows users to create boards to collect and categorize any relevant articles for research projects or future reading.
          </p>
          <br/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
          <p style={{ fontFamily: 'Roboto Mono', color: 'white', fontSize: '1.2rem', marginLeft: '50px', marginTop: '-20px', marginRight: '40px' }}>
           Users have the ability to <strong>directly message other users</strong> to connect and collaborate on projects seamlessly. 
          </p>
          <div style={{ margin: '20px 0', textAlign: 'center', marginRight: '10px' }}>
            <video 
              width="95%" 
              height="auto" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ objectFit: 'cover' }}
            >
              <source src="./inbox.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
      </div>
      

      


      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
      
        </div>
      </div>
        <br></br>
      </div>
      

    </div>
    </div>
  );
}


export default ResearchBlog;
