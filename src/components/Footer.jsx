import React, { useEffect } from 'react';
import './Footer.css';
import kakaoIcon from '../assets/footer_kakao.png';

const Footer = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('5c38be5c3571ea58cc27577a8decd4cd');
    }

    window.Kakao.Link.createScrapButton({
      container: '#kakao-share-btn',
      requestUrl: window.location.href, // 현재 페이지 공유
      templateId: 121315 // 필요 시 추가
    });
  }, []);

  return (
    <footer>
      <p>덕성여자대학교 과학기술대학</p>
      <p>소프트웨어전공</p>
      <p>제 3회 졸업작품전시회</p>
      <p>서울특별시 도봉구 삼양로144길 33</p>
      <p>Instagram: @인스타그램아이디</p>

      <div className="kakao-share-btn">
      <img src={kakaoIcon} alt="카카오톡 공유" />
      <p>카카오톡<br />공유하기</p>
      </div>
    </footer>
  );
};

export default Footer;
