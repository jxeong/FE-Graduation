import React, { useEffect, useRef, useState, useMemo } from 'react';
import '../styles/Overview.css';

const Overview = () => {
  const targetDate = useMemo(() => new Date('2025-09-07T14:00:00'), []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  const h1Refs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) clearInterval(timer);
      else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    const currentRefs = h1Refs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentRefs.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleIndexes((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


  const renderAnimatedH1 = (text, index) => {
  return (
    <h1
      key={index}
      ref={(el) => {
        if (el) h1Refs.current[index] = el;
      }}
      className={`fade-in-section ${visibleIndexes.includes(index) ? 'visible' : ''}`}
    >
      {text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </h1>
  );
};

  return (
    <section id="overview" className="overview-container">
      <div className="overview-text">
        {renderAnimatedH1('DSWU SOFTWARE\nGRADUATION EXHIBITION', 0)}
        <h2>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시: 공명(共鳴) </h2>
        <h3 className="location">덕성여대 도서관 오스카라운지<br />09.07 - 09.09</h3>
        <p>
          서로 다른 주파수를 가진 이들이 한 공간에 모였습니다.
          그러나 같은 열정, 같은 방향성, 같은 목적이 우리를 공명하게 했습니다.
          이번 졸업전시는 4년간의 배움과 고민, 도전과 협업이 만나 하나의 큰 울림을 만들어낸 순간입니다.
        </p>
        {renderAnimatedH1('WHERE\nAND WHEN', 1)}
        <p>
          덕성여자대학교 도서관 1층 오스카라운지<br />
          9월 7일 (일) 14:00-18:00<br />
          9월 8일 (월) 12:00-18:00<br />
          9월 9일 (화) 09:00-12:00<br />
          * 도서관 공용공간 사용으로 인해 1일차, 3일차 운영 시간이 짧은 점 양해 바랍니다.
        </p>
        {renderAnimatedH1('D-DAY', 2)}
        <div className="countdown">
          {['days', 'hours', 'minutes', 'seconds'].map((key) => (
            <div className="time-unit" key={key}>
              <span id={key}>{timeLeft[key]}</span>
              <p>{key === 'days' ? '일' : key === 'hours' ? '시간' : key === 'minutes' ? '분' : '초'}</p>
            </div>
          ))}
        </div>

        {renderAnimatedH1('오시는 길', 3)}
        <p>수정해야 한다 수정</p>
        <a href="https://naver.me/FQyQBwba">네이버지도</a><br />
        <a href="https://place.map.kakao.com/16067281">카카오맵</a>
      </div>
    </section>
  );
};

export default Overview;
