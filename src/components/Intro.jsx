import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onClickLogo, fadeOut }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(match.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    match.addEventListener('change', handleChange);
    return () => match.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className={`intro-container ${fadeOut ? 'fade-out' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
      onClick={onClickLogo}
    >
      <div className="intro-content">
        <img
          src={isDarkMode ? '/images/exampleLogo2.png' : '/images/exampleLogo.png'}
          alt="Intro Logo"
          className="intro-logo"
        />
        <p className="intro-text">what is happening?</p>
      </div>
    </div>
  );
};

export default Intro;
