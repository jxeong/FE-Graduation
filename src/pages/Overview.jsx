import React, { useState, useEffect } from 'react';
import '../styles/Overview.css';

const Overview = () => {
  const targetDate = new Date('2025-09-07T14:00:00'); // 목표 날짜

  // 상태 변수 설정
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 목표 날짜와 현재 날짜의 차이 계산
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now; // 남은 시간 계산

      if (timeDifference <= 0) {
        clearInterval(timer); // 목표 날짜에 도달하면 타이머 정지
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 남은 일 계산
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 남은 시간 계산
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // 남은 분 계산
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // 남은 초 계산

        setTimeLeft({ days, hours, minutes, seconds }); // 상태 업데이트
      }
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  });

  return (
    <section id="overview" className="overview-container">
      <div className="overview-text">
        <h1>DSWU SOFTWARE<br />GRADUATION EXHIBITION</h1>
        <h2>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시회 </h2>
        <h3 className="location">도서관 오스카라운지<br />09.07 - 09.09</h3>
        <p>
          서로 다른 주파수를 가진 이들이 한 공간에 모였습니다.
          그러나 같은 열정, 같은 방향성, 같은 목적이 우리를 공명하게 했습니다.
          이번 졸업전시는 4년간의 배움과 고민, 도전과 협업이 만나 하나의 큰 울림을 만들어낸 순간입니다.
        </p>

        <h1>WHERE<br />AND WHEN</h1>
        <p>
          덕성여자대학교 도서관 1층 오스카라운지<br />
          9월 7일 (일) 14:00-18:00<br />
          9월 8일 (월) 12:00-18:00<br />
          9월 9일 (화) 09:00-12:00<br />
          * 도서관 공용공간 사용으로 인해 1일차, 3일차 운영 시간이 짧은 점 양해 바랍니다.
        </p>

        <h1>D-DAY</h1>
        <div className="countdown">
          <div className="time-unit">
            <span id="days">{timeLeft.days}</span>
            <p>일</p>
          </div>
          <div className="time-unit">
            <span id="hours">{timeLeft.hours}</span>
            <p>시간</p>
          </div>
          <div className="time-unit">
            <span id="minutes">{timeLeft.minutes}</span>
            <p>분</p>
          </div>
          <div className="time-unit">
            <span id="seconds">{timeLeft.seconds}</span>
            <p>초</p>
          </div>
        </div>

        <h1>오시는 길</h1>
        <p>수정해야 한다 수정</p>
        <a href="https://naver.me/FQyQBwba">네이버지도</a>
        <br/>
        <a href="https://place.map.kakao.com/16067281">카카오맵</a>
      </div>
    </section>
  );
};

export default Overview;
