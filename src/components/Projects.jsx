import React from 'react';
import '../App.css'; // Or wherever your CSS is stored

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: '/images/kfood.png',
      alt: "Seri's Korean Kitchen",
      stack: [ 'HTML', 'React.Js', 'CSS'],
      linkDemo: 'https://korean-kitchen.vercel.app/',
      linkCode: 'https://github.com/DorisAnioke/korean-kitchen'
    },
    {
      id: 2,
      src: '/images/lbs.png',
      alt: 'Lux Bathroom Solution',
      stack: ['HTML', 'CSS', 'JavaScript'],
      linkDemo: 'https://bath-solution-tp2l.vercel.app/',
      linkCode: 'https://github.com/DorisAnioke/bath-solution'
    },
    {
      id: 3,
      src: '/images/weatherd.png',
      alt: 'Weather App',
      stack: ['HTML', 'CSS', 'React.JS'],
      linkDemo: 'https://myweather-app2.vercel.app/',
      linkCode: 'https://github.com/DorisAnioke/myweather-app2'
    },
    {
      id: 4,
      src: '/images/quiz.jpg',
      alt: 'Quiz Game',
      stack: ['HTML', 'CSS', 'JavaScript' ],
      linkDemo: 'https://quiz-game-mu-jade.vercel.app/',
      linkCode: 'https://github.com/DorisAnioke/quiz-game/'
    },
    // {
    //   id: 5,
    //   src: '/images/admin-dashboard.jpg',
    //   alt: 'Admin Dashboard',
    //   stack: ['React.JS', 'Chart.js', 'TailwindCSS'],
    //   linkDemo: 'https://example.com/demo5',
    //   linkCode: 'https://github.com/example5'
    // },
    // {
    //   id: 6,
    //   src: '/images/login-page.jpg',
    //   alt: 'Login Page',
    //   stack: ['HTML', 'CSS', 'JavaScript'],
    //   linkDemo: 'https://example.com/demo6',
    //   linkCode: 'https://github.com/example6'
    // }
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