import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img src="/images/exampleLogo2.png" alt="전시 로고" className="header-logo" />
        </Link>
      </div>

      <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/projects">
          <a href='#!'>PROJECTS</a>
        </Link>
        <Link to="/pdf">
          <a href='#!'>BOOKS</a>
        </Link>
        <Link to="/musics">
          <a href='#!'>MUSICS</a>
        </Link>
        <Link to="/thanksto">
          <a href='#!'>THANKS-TO</a>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <a href='#!'>MENU</a>
      </div>

      {isMenuOpen && (
        <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
          <div className="menu-content">
            <Link to="/" onClick={toggleMenu}>
              <a href='#!'>HOME</a>
            </Link>
            <Link to="/projects" onClick={toggleMenu}>
              <a href='#!'>PROJECTS</a>
            </Link>
            <Link to="/pdf" onClick={toggleMenu}>
              <a href='#!'>BOOKS</a>
            </Link>
            <Link to="/musics" onClick={toggleMenu}>
              <a href='#!'>MUSICS</a>
            </Link>
            <Link to="/thanksto" onClick={toggleMenu}>
              <a href='#!'>THANKS-TO</a>
            </Link>
            <span className="close-button" onClick={toggleMenu}>close</span>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
