import React, { useEffect } from 'react';

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
      <p>덕성여자대학교 소프트웨어전공 제3회 졸업전시</p>
      <p>서울특별시 도봉구 삼양로144길 33</p>
      <p>Instagram: @인스타그램아이디</p>

      <button id="kakao-share-btn">
        카카오톡 공유
      </button>
    </footer>
  );
};

export default Footer;
