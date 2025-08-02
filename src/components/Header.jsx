import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bgVideo from './background6.mp4'; // 📌 영상 파일 경로에 맞게 조정하세요

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
      {/* 🎬 배경 영상 */}
      <video className="header-bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="title">
        <Link to="/">
          <img src="/images/exampleLogo2.png" alt="전시 로고" className="header-logo" />
        </Link>
      </div>

      <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/projects"><span>PROJECTS</span></Link>
        <Link to="/pdf"><span>BOOKS</span></Link>
        {/* <Link to="/musics"><span>MUSICS</span></Link> */}
        <Link to="/thanksto"><span>THANKS-TO</span></Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span>MENU</span>
      </div>

      {isMenuOpen && (
        <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
          <div className="menu-content">
            <Link to="/" onClick={toggleMenu}><span>HOME</span></Link>
            <Link to="/projects" onClick={toggleMenu}><span>PROJECTS</span></Link>
            <Link to="/pdf" onClick={toggleMenu}><span>BOOKS</span></Link>
            {/* <Link to="/musics" onClick={toggleMenu}><span>MUSICS</span></Link> */}
            <Link to="/thanksto" onClick={toggleMenu}><span>THANKS-TO</span></Link>
            <span className="close-button" onClick={toggleMenu}>close</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
