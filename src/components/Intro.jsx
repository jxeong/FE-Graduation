import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Intro.css';
import logo from './exampleLogo2.png';

const Intro = ({ onClickLogo, fadeOut }) => {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const videoSources = useMemo(() => [
    '/background4.mp4',
    '/background5.mp4',
    '/background6.mp4',
  ], []);

  const [selectedVideo] = useState(() => {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
  });

  // 7초 후 자동 전환 (영상이 준비된 경우만)
  useEffect(() => {
    if (!isVideoReady) return;
    const timer = setTimeout(() => {
      onClickLogo();
    }, 7000);
    return () => clearTimeout(timer);
  }, [isVideoReady, onClickLogo]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // 영상 멈춰있으면 재생만 시도 (페이지 전환 X)
      video.play().catch(() => {});
    } else {
      // 영상 이미 재생 중이면 → 페이지 넘어감
      onClickLogo();
    }
  };

  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`} onClick={handleClick}>
      <video
        ref={videoRef}
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

      <div className="intro-content">
        <img src={logo} alt="로고" className="intro-logo" />
        <h1 className="intro-title">2025<br/>DSWU SOFTWARE<br />GRADUATION EXHIBITION</h1>
        <h3 className="intro-title2">Click to Enter!</h3>
      </div>
    </div>
  );
};

export default Intro;
