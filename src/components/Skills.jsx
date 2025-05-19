import React from 'react'
import { FaReact, FaCss3, FaJs, FaHtml5, } from 'react-icons/fa';
import { SiPython, SiDjango } from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills' className='skills-section'>
      <h2>SKILLS</h2>
      <div className='skills-grid'>
        <div className='skill-card'>
          <FaReact className='react-icon'/>
          <h3>React Js</h3>
        </div>
        <div className='skill-card'>
          <FaCss3 className='css-icon'/>
          <h3>CSS</h3>
        </div>
        <div className='skill-card'>
          <FaJs className='js-icon'/>
          <h3>JavaScript</h3>
        </div>
        <div className='skill-card'>
          <FaHtml5 className='html-icon'/>
          <h3>HTML</h3>
        </div>
        <div className='skill-card'>
          <SiPython className='py-icon'/>
          <h3>Python</h3>
        </div>
        <div className='skill-card'>
          <SiDjango className='django-icon'/>
          <h3>Django</h3>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;
