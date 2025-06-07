import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const isMobile = () => {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isMobile()) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
    };
  }, []);

  useEffect(() => {
    const checkInteractive = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, label');
      setHoveringInteractive(!!isInteractive);
    };

    window.addEventListener('mouseover', checkInteractive);
    return () => window.removeEventListener('mouseover', checkInteractive);
  }, []);

  if (!visible) return null;
  if (isMobile()) return null;

  return (
    <div
      className={`custom-cursor ${hoveringInteractive ? 'white' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
