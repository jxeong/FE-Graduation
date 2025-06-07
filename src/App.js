import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Switch -> Routes로 변경
import Header from './components/Header';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import PdfViewer from './pages/PdfViewer';  // PdfViewer 페이지 임포트
import './App.css';

function App() {
  return (
    <Router>  {/* Router로 앱을 감싸 라우팅 기능 활성화 */}
      <div className="app-container">
        <Header />

        {/* Routes로 변경 */}
        <Routes>
          <Route path="/pdf" element={<PdfViewer />} />  {/* /pdf 경로에서 PdfViewer 페이지로 이동 */}
          <Route path="/" element={<Overview />} />  {/* 기본 경로 (홈 페이지) */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
