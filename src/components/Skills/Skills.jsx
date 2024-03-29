import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillsCard from '../Skills/SkillsCard/SkillsCard';
import SkillsInfoCard from '../Skills/SkillsInfoCard/SkillsInfoCard';


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              inActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          {/* Corrected property name from 'Skills' to 'skills' */}
          <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
