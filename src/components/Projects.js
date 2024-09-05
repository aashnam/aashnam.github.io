import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../styles/fonts.css';
import "../App.css"; 


const projects = [
    {
        id: 1,
        title: "Travel Planning App",
        description: "Developed an app to help you plan your trips with generated itineraries and personalized packing lists!",
        imageUrl: "./travelappicon.jpeg",
        detailsUrl: "/travelapp"
    },
    {
        id: 2,
        title: "Provenance Security",
        description: "Designed frontend for cybersecurity startup Provenance Security",
        imageUrl: "./Alerts.jpg",
        detailsUrl: "/provenance"
    },
    {
        id: 3,
        title: "Caesar Research Group PeopleWeave Project",
        description: "Collaborating with Graph Visualizations team to develop an interactive graph visualization to connect researchers, improve networking experiences, and display research collaborations",
        imageUrl: "./secondPage.png",
        detailsUrl: "/peopleweave"
    },
    {
        id:4,
        title: "Team Tech App Development Team",
        description: "Collaborating with app development team in Society of Women Engineers to create an app for John Deere that helps differentiate crops, animals, and debris to assist farm technology",
        imageUrl: "/tt_landing.PNG",
        detailsUrl: "/teamtech"
    },
    {
        id:5,
        title: "Research Blog Website",
        description: "I designed the layout of a blog website for researchers",
        imageUrl: "./blog-landing.png",
        detailsUrl: "/researchblog"
    },
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{ position: 'relative', top: '-10px' }}>
                <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    background: "#fff",
                }}
            />
        ),
    };

    return (
<section id="projects-section">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4" style={{fontFamily: 'customFont', fontSize: '60px'}}>
                        Projects
                    </h1>
                </div>
                <div id='projects-card'>
                <div id='slider-contents'>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-slide">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="project-image">
                                    <img src={project.imageUrl} alt={project.title} className="custom-image-size" />
                                </div>
                                <div className="project-text">
                                    <h2 className="text-2xl font-semibold text-black mb-2" style={{fontFamily: 'customFontLight', fontSize:'45px', lineHeight: '1'}}>{project.title}</h2>
                                    <p className="text-black" style={{fontFamily: 'Roboto Mono', fontSize: '19px', maxWidth: '500px'}}>{project.description}</p>
                                    <br></br>
                                    <Link to={project.detailsUrl} style={{
                                        color: 'black',
                                        fontFamily: 'Roboto Mono',
                                        fontWeight: 1000,
                                        fontSize: '20px',
                                        textDecoration: 'none', 
                                        borderBottom: '1px solid black', 
                                        transition: 'border-bottom 0.3s ease'
                                    }}>More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
