import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = () => {
  const images = ['images/cs1.jfif', 'images/cs2.jpg', 'images/cs3.jpg'];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <FontAwesomeIcon icon={faArrowLeft} className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <FontAwesomeIcon icon={faArrowRight} className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="w-full">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center items-start relative">
            <img className="img-banner" src={each} />
            <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white">
              Hello, Nik
            </h1>
            <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">
              "Everything you can imagine is real."
            </p>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
