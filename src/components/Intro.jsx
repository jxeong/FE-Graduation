import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onClickLogo, fadeOut }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScattered, setIsScattered] = useState(false);
  const [randomTransforms, setRandomTransforms] = useState([]);

  // 다크모드 감지
  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(match.matches);
    const handleChange = (e) => setIsDarkMode(e.matches);
    match.addEventListener('change', handleChange);
    return () => match.removeEventListener('change', handleChange);
  }, []);

  // 텍스트 한 글자씩 나눠 랜덤 위치 미리 생성
  useEffect(() => {
    const textLength = Math.max('What is happening?'.length, 'CLICK ANYWHERE'.length);
    const transforms = [];
    for (let i = 0; i < textLength; i++) {
      const x = (Math.random() - 0.5) * 1000; // -500 ~ 500
      const y = (Math.random() - 0.5) * 600;  // -300 ~ 300
      const r = Math.random() * 360;
      transforms.push({ x, y, r });
    }
    setRandomTransforms(transforms);
  }, []);

  // 클릭 시 흩어지게
  const handleScatter = () => {
    if (!isScattered) setIsScattered(true);
    onClickLogo(); // 기존 intro 클릭 기능도 유지
  };

  // 텍스트 렌더링
  const renderScatterText = (text, className) => {
    return (
      <div className={className}>
        {text.split('').map((char, idx) => {
          const { x, y, r } = randomTransforms[idx] || { x: 0, y: 0, r: 0 };
          return (
            <span
              key={idx}
              className="scatter-letter"
              style={{
                transform: isScattered
                  ? `translate(${x}px, ${y}px) rotate(${r}deg)`
                  : 'translate(0, 0) rotate(0deg)',
                transition: 'transform 0.7s ease-out',
                display: 'inline-block',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`intro-container ${fadeOut ? 'fade-out' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
      onClick={handleScatter}
    >
      <div className="intro-content">
        <img
          src={isDarkMode ? '/images/exampleLogo2.png' : '/images/exampleLogo.png'}
          alt="Intro Logo"
          className="intro-logo"
        />
        {renderScatterText('What is happening?', 'intro-text')}
        {/* {renderScatterText('CLICK ANYWHERE', 'intro-text')} */}
      </div>
      <div className="click-guide">Click Anywhere to Enter!</div>
    </div>
  );
};

export default Intro;
