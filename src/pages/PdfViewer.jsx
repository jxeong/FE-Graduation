import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/PdfViewer.css';  // CSS 파일 추가

const PdfViewer = () => {
  const pdfUrl = '/sample.pdf';  // public 폴더에 위치한 PDF 파일 경로

  return (
    <Box className="pdf-viewer-container">
      <div className="pdf-texts">
        <h1>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시: 공명</h1>
        <h2>온라인 도록 공개</h2>
        <p> * 로드 오류 발생 시 새로고침 권장 <br/> * 총 __ 페이지 </p>
      </div>
      {/* iframe을 사용하여 PDF 렌더링 */}
      <iframe
        src={pdfUrl + '#toolbar=0'}  // PDF 경로와 툴바 숨기기, 확대/축소 설정
        className="pdf-object"
        title="PDF Viewer"
        width="100%"  // 원하는 너비
        height="80vh"  // 원하는 높이 (화면 크기에 맞게 설정)
        style={{ border: 'none' }}
      />
    </Box>
  );
};

export default PdfViewer;
