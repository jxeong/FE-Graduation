// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // 메뉴 닫기 애니메이션 실행 후 상태 변경
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false); // 애니메이션 끝난 후 상태 초기화
      }, 300); // 애니메이션 지속 시간 (0.3초)
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="header">
      <div className="title">전시제목</div>
      <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#credits">CREDITS</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <a>MENU</a>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
          <div className="menu-content">
            <a href="#home">HOME</a>
            <a href="#projects">PROJECTS</a>
            <a href="#credits">CREDITS</a>
            <button className="close-button" onClick={toggleMenu}>close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
