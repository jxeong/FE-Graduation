import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Link 임포트
import { CSSTransition } from 'react-transition-group';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="header">
      <div className="title">
        <Link to="/">전시제목</Link>
      </div>

      <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/projects">
          <a>PROJECTS</a>
        </Link>
        <Link to="/pdf">
          <a>BOOKS</a>
        </Link>
        <Link to="/thanks">
          <a>THANKSTO</a>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <a>MENU</a>
      </div>

      {isMenuOpen && (
        <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
          <div className="menu-content">
            <Link to="/projects" onClick={toggleMenu}>
              <a>PROJECTS</a>
            </Link>
            <Link to="/pdf" onClick={toggleMenu}>
              <a>BOOKS</a>
            </Link>
            <Link to="/thanks" onClick={toggleMenu}>
              <a>THANKSTO</a>
            </Link>
            <button className="close-button" onClick={toggleMenu}>close</button>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
