import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

// Social icons
import EmailIcon from '../components/Email-icon.png';
import whatsappIcon from '../components/whatsapp.png';
import instagramIcon from '../components/Instagram-icon.png';
import FacebookIcon from '../components/Facebook-icon.png';
import GithubIcon from '../components/Github-icon.png';
import LinkedinIcon from '../components/Linkedin-icon.png';
import TiktokIcon from '../components/Tiktok-icon.png';

const Contact = () => { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
       'service_xbqb2ad',
      'template_n676ru8',
      form.current,
      '_PSGJz7aeI4dlKApR'
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("❌ Failed to send message. Please try again.");
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className='email-link'>
        <p>Or email me directly:</p>
        <a href="mailto:dorisanioke@gmail.com" className='email-icon'>
          <img src={EmailIcon} alt="Email" /> dorisanioke@gmail.com
        </a>
      </div>

      <div className="social-links">
        <a href="https://wa.me/2348143092486" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={whatsappIcon} alt="WhatsApp" /> 
        </a>
        <a href="https://github.com/DorisAnioke" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={GithubIcon} alt="GitHub" /> 
        </a>
        <a href="https://linkedin.com/in/dorisanioke" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={LinkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://facebook.com/doris.anioke1" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://tiktok.com/@_doris123" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={TiktokIcon} alt="TikTok" />
        </a>
        <a href="https://instagram.com/iamdorisanioke" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={instagramIcon} alt="Instagram" /> 
        </a>
      </div>
    </section>
  );
};

export default Contact;