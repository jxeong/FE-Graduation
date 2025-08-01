import React from 'react';
import { Box } from '@mui/material';
import '../styles/PdfViewer.css';  // CSS 파일 추가

const PdfViewer = () => {
  return (
    <Box className="pdf-viewer-container">
      <div className="pdf-texts">
        <h1>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시: 공명(共鳴)</h1>
        <h2>온라인 도록 공개</h2>
        <p> * 로드 오류 발생 시 새로고침 권장 <br/> * 총 __ 페이지 </p>
      </div>
      
      {/* PDF preview로 해줘야 오류 안남 */}
      <embed src="https://drive.google.com/file/d/1fyzw0HFpHl8EZIjjvvLppruE2DmUnVv0/preview?usp=sharing" frameborder="0" width="100%" height="100%"></embed>
    </Box>
  );
};

export default PdfViewer;
