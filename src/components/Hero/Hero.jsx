// Hero.js

import React, { useState, useEffect } from 'react';

import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const text = "Building Digital Experiences That Inspire";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust the typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>
          {typedText}
          <span className="typed-cursor">|</span>
        </h2>
        <p>Passionate Full-Stack Developer | Transforming Ideas into Seamless and Visually Stunning Solutions</p>
      </div>
      <div className='hero-img-container'>
        <div className='tech-icons-left'>
          <div className='tech-icon'>
            <img src="public/assets/images/img00.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="../../assets/images/img02.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="../../assets/images/img03.png" alt="" />
          </div>
        </div>
        <img src="../../assets/images/hero-img.png" alt="" />
        <div className='tech-icons-below'>
          <div className='tech-icon'>
            <img src="../../assets/images/img04.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="../../assets/images/img05.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="../../assets/images/img06.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

