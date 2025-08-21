import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Brand / About */}
        <div className="footer-brand">
          <h3>Doris Anioke</h3>
          <p>Creative Web Developer passionate about building interactive, user-friendly digital experiences.</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaEnvelope /> dorisanioke@gmail.com</p>
          <p><FaWhatsapp /> +234 814 309 2486</p>
        </div>

        {/* Column 4 - Social */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="mailto:dorisanioke@gmail.com" target="_blank" rel="noopener noreferrer" className="email"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/dorisanioke" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedin /></a>
            <a href="https://github.com/DorisAnioke" target="_blank" rel="noopener noreferrer" className="github"><FaGithub /></a>
            <a href="https://instagram.com/iamdorisanioke" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
            <a href="https://facebook.com/doris.anioke1" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebook /></a>
            <a href="https://wa.me/2348143092486" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@_doris123" target="_blank" rel="noopener noreferrer" className="tiktok"><SiTiktok /></a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Doris Anioke Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;