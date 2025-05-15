import React from 'react'
import profilePhoto from './Profile.jpg'


const About = () => {
  return (
    <section id='about' className='about'>
      <div className='profile'>
         <img src={profilePhoto} alt="profile"/>
         <div>
          <h2>Hi There! I'm Doris Anioke </h2>
          <h1>Fullstack Web Developer</h1>
         </div>
         
      </div>
      <div className='profile2'>
         <h2>ABOUT ME</h2>
         <p>My name is Doris Anioke, a full stack developer who is  driven by curiosity and a passion for 
          continuous learning. I thrive on exploring new technologies, frameworks, and methodologies
           to stay ahead in the ever-evolving digital landscape.</p>

           <p> I craft robust, scalable, and user-centric digital solutions with
             expertise in front-end and back-end development.
              I'm committed to expanding my skill set, embracing new challenges,
               and staying up-to-date with industry trends</p>

               <p>I'm looking for collaborative opportunities, I'm eager to work with like-minded
                 individuals, share knowledge, and learn from others.

                I'm excited to take on complex projects, experiment with innovative solutions, 
                  and grow as a developer.</p>

                  <p>If you're looking for a dedicated, enthusiastic, and growth-oriented full 
                    stack developer, let's connect! I'm excited to learn, 
                    grow, and build something amazing together</p>


      </div>

        
      
    </section>
  )
}

export default About
