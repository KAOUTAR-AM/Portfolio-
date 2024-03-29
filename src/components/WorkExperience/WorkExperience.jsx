import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const WorkExperience = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Change the duration as needed




    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run only once on component mount

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const slideRight=()=>{
    sliderRef.current.slickNext();
  };

  const slideLeft=()=>{
    sliderRef.current.slickPrev();
  };
  return (
    <section className='experience-container'>
      <h5>Work experience</h5>
      <div className='experience-content'>
        <div className='arrow-right' onClick={slideRight}>
          <span class="material-symbols-outlined">
            chevron_right
          </span>
        </div>
        <div className='arrow-left' onClick={slideLeft}>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} detail={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
