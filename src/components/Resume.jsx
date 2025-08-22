import React from 'react';
import resume from '../assets/Doriscv.pdf';

function Resume() {
  return (
    <div id='resume'  className="resume-section">
      <h1>My Resume</h1>
      
      <a href={resume} download className="resume-link">
        Download Resume
      </a>
      
    </div>
  );
}

export default Resume;