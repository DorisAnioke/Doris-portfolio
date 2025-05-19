import React from 'react'
import EmailIcon from '../components/Email-icon.png';
import whatsappIcon from '../components/Whatsapp.png'
import instagramIcon from '../components/Instagram-icon.png'
import FacebookIcon from '../components/Facebook-icon.png'
import GithubIcon from '../components/Github-icon.png'
import LinkedinIcon from '../components/Linkedin-icon.png'
import TiktokIcon from '../components/Tiktok-icon.png'
import { useState } from 'react';


const Contact = () => { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with emailjs or backend API for form submission
    alert('Form submitted! (Replace with actual functionality)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className='email-link'>
        <p>Or email me directly:</p>
        <a href="mailto:dorisanioke@gmail.com" className='email-icon'>
        <img src={EmailIcon} alt="Email" /> dorisanioke@gmail.com
        </a>
       
      </div>
      <div className="social-links">
        <a href="https://wa.me/2348143092486" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={whatsappIcon} alt="GitHub" /> 
        </a>
        <a href="https://github.com/DorisAnioke" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={GithubIcon} alt="GitHub" /> 
        </a>
        <a href="https://linkedin.com/in/dorisanioke" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
        <a href="https://facebook.com/doris.anioke1" target="_blank" rel="noopener noreferrer" className='social-icon'>
        <img src={FacebookIcon} alt="facebook" />
        </a>
        <a href="https://tiktok.com/@_doris123" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={TiktokIcon} alt="tiktok" />
        </a>
        <a href="https://instagram.com/iamdorisanioke" target="_blank" rel="noopener noreferrer" className='social-icon'>
        <img src={instagramIcon} alt="Instagram" /> 
        </a>
      </div>
    </section>
  );

  
}

export default Contact
