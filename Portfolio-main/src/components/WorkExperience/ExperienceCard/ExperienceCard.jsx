import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ detail }) => {
  return (
    <div className='work-experience-card'>
      <h6>{detail.title}</h6>
      <div className='work-duration'>{detail.date}</div>
      <ul>
        {/* Check if detail.responsibilities is an array before using map */}
        {Array.isArray(detail.responsibilities) ? (
          // Use map function only if detail.responsibilities is an array
          detail.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          // Handle the case where detail.responsibilities is not an array
          <li>{detail.responsibilities}</li>
        )}
      </ul>
    </div>
  );
};

export default ExperienceCard;
