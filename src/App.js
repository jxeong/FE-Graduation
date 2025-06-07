import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Switch -> Routes로 변경
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Overview from './pages/Overview';
import PdfViewer from './pages/PdfViewer';
import ExhibitionContetnt from './pages/ExhibitionContent';
import ProjectDetail from './pages/ProjectDetail';
import Thanksto from './pages/Thanksto';
import './App.css';

function App() {
  return (
    <Router>  {/* Router로 앱을 감싸 라우팅 기능 활성화 */}
      <div className="app-container">
        <Header />

        {/* Routes로 변경 */}
        <Routes>
          <Route path="/" element={<Overview />} />  {/* 기본 경로 (홈 페이지) */}
          <Route path="/pdf" element={<PdfViewer />} />  {/* /pdf 페이지 */}
          <Route path="/projects" element={<ExhibitionContetnt />} />  {/* 프로젝트 페이지 */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/thanksto" element={<Thanksto />} />  {/* /크레딧 페이지 */}
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
