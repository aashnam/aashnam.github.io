import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { programming, softwares, languages } from "../data";
import '../styles/fonts.css';


export default function Skills() {

  const slides = [
    { title: "Programming Languages", items: programming },
    { title: "Software Tools", items: softwares },
    { title: "Languages", items: languages }
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="skills-section">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4" style={{fontFamily: 'customFont', fontSize: '50px'}}>
            Skills &amp; Technologies
          </h1>
        </div>
        <Slider {...settings}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <h2 className="text-xl font-semibold text-white mb-4 text-center" style={{fontFamily: 'CustomFontLight', fontSize: '30px'}}>
                {slide.title}
              </h2>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {slide.items.map((item, index) => (
                  <div key={index} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center item-container">
                      <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-white" style={{fontFamily: 'Roboto Mono'}}>
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
