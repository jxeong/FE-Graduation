import React, { useEffect, useMemo, useState } from 'react';
import './Intro.css';
import logo from './exampleLogo2.png';

// 배경 영상들 import
import bg4 from './background4.mp4';
import bg5 from './background5.mp4';
import bg6 from './background6.mp4';

const Intro = ({ onClickLogo, fadeOut }) => {
  const videoSources = useMemo(() => [bg4, bg5, bg6], []);
  const [selectedVideo] = useState(() => {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
  });

  const [isVideoReady, setIsVideoReady] = useState(false);

  // 재생 가능 상태일 때만 7초 후 페이지 전환
  useEffect(() => {
    if (!isVideoReady) return;
    const timer = setTimeout(() => {
      onClickLogo();
    }, 7000);
    return () => clearTimeout(timer);
  }, [isVideoReady, onClickLogo]);

  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`} onClick={onClickLogo}>
      {/* 배경 영상 */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={() => setIsVideoReady(true)}
      >
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 중앙 콘텐츠 */}
      <div className="intro-content">
        <img src={logo} alt="로고" className="intro-logo" />
        <h1 className="intro-title">2025<br/>DSWU SOFTWARE<br />GRADUATION EXHIBITION</h1>
        <h3 className="intro-title2">Click to Enter!</h3>
      </div>
    </div>
  );
};

export default Intro;
