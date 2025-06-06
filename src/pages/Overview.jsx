// src/components/Overview.jsx
import React from 'react';
import '../styles/Overview.css';

const Overview = () => (
  <section id="overview" className="overview-container">
    <div className="overview-text">
      <h1>DSWU SOFTWARE<br />GRADUATION EXHIBITION</h1>
      <h2>덕성여자대학교 소프트웨어전공 <br/> 제 3회 졸업전시회 </h2>
      <h3 className="location">도서관 오스카라운지<br />09.07 - 09.09</h3>
      <p>
        서로 다른 주파수를 가진 이들이 한 공간에 모였습니다.
        그러나 같은 열정, 같은 방향성, 같은 목적이 우리를 공명하게 했습니다.
        이번 졸업전시는 4년간의 배움과 고민, 도전과 협업이 만나 하나의 큰 울림을 만들어낸 순간입니다.
      </p>

      <h1>WHERE<br />AND WHEN</h1>
      <p>
        덕성여자대학교 도서관 1층 오스카라운지<br/>
        9월 7일 (일) 14:00-18:00<br/>
        9월 8일 (월) 12:00-18:00<br/>
        9월 9일 (화) 09:00-12:00<br/>
        * 도서관 공용공간 사용으로 인해 1일차, 3일차 운영 시간이 짧은 점 양해 바랍니다.
      </p>

      <h1>PROJECTS</h1>
      <p>
        졸업전시 한달 전 공개됩니다.
      </p>

    </div>
  </section>
);

export default Overview;
