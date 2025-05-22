import React from 'react';
import resume from '../assets/DorisAnioke.pdf';

function Resume() {
  return (
    <div id='resume'  className="resume-section">
      <h1>My Resume</h1>
      
      <a href={resume} download className="resume-link">
        Download Resume
      </a>
      {/* Optional: Embed PDF preview */}
      {/* <iframe
        src={resume}
        title="Resume Preview"
        style={{ width: '100%', height: '500px', marginTop: '20px' }}
      /> */}
    </div>
  );
}

export default Resume;