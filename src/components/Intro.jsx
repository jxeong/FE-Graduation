import React, { useEffect, useMemo, useState } from 'react';
import './Intro.css';
import logo from './exampleLogo2.png';

// 배경 영상들 import
import bg3 from './background3.mp4';
import bg4 from './background4.mp4';
import bg5 from './background5.mp4';
import bg6 from './background6.mp4';

const Intro = ({ onClickLogo, fadeOut }) => {
  // 영상 배열에서 1개 랜덤 선택
  const videoSources = useMemo(() => [bg3, bg4, bg5, bg6], []);
  const [selectedVideo] = useState(() => {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
  });

  // 5초 후 자동 전환
  useEffect(() => {
    const timer = setTimeout(() => {
      onClickLogo();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClickLogo]);

  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`} onClick={onClickLogo}>
      {/* 랜덤 배경 영상 */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 중앙 콘텐츠 */}
      <div className="intro-content">
        <img src={logo} alt="로고" className="intro-logo" />
        <h1 className="intro-title">2025<br/>DSWU SOFTWARE<br />GRADUATION EXHIBITION</h1>
        <h3>Click to Enter!</h3>
      </div>
    </div>
  );
};

export default Intro;
