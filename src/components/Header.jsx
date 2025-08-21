import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <header>
      <div className='header-content'>
        <h1>DoriS</h1>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}
         aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? (
            <FaTimes className="hambuger-image close-icon" />
          ) : (
            <>
              <FaBars className="hambuger-image" />
              <span className='menu-text'></span>
            </>
          )}
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <a href="#resume" onClick={toggleMenu}>Resume</a>

        </nav>
      </div>
    </header>
  
  )
}

export default Header

  