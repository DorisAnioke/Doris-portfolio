import React from 'react';
import '../App.css'; // Or wherever your CSS is stored

const Projects = () => {
  const projects = [

{
    id : 1,
    src: "/images/styleverse.png",
    alt: "A Modern E-commerce website ",
    stack: ['HTML', 'CSS', 'JavaScript','Django'],
    demo: "https://styleverse-qn4e.onrender.com",
    

  },

    {
      id: 2,
      src: '/images/kfood.png',
      alt: "Seri's Korean Kitchen",
      stack: [ 'HTML', 'React.Js', 'CSS'],
      linkDemo: 'https://korean-kitchen.vercel.app/',
      linkCode: 'https://github.com/DorisAnioke/korean-kitchen'
    },

  {
    id : 3,
    src: "/images/strive.jpg",
    alt:"A Digital Marketing Agency Website",
    stack: ['React', 'Bootstrap', 'CSS'],
    demo: "https://strive-agency.vercel.app/",
    code: "https://github.com/DorisAnioke/strive-agency",

  },

    {
      id: 4,
      src: '/images/lbs.png',
      alt: 'Lux Bathroom Solution',
      stack: ['HTML', 'CSS', 'JavaScript'],
      linkDemo: 'https://bath-solution-tp2l.vercel.app/',
      linkCode: 'https://github.com/DorisAnioke/bath-solution'
    },
    
  ];

  return (
    <section id='projects' className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="projects-item">
            <img src={project.src} alt={project.alt} className="projects-image" />
            <h3 className="project-name">{project.alt}</h3>
            <div className="project-stack">
              {project.stack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="project-btn">Demo</a>
              <a href={project.linkCode} target="_blank" rel="noopener noreferrer" className="project-btn">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;