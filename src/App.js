// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import CustomCursor from './components/CustomCursor';
import Overview from './pages/Overview';
import PdfViewer from './pages/PdfViewer';
import ExhibitionContent from './pages/ExhibitionContent';
import ProjectDetail from './pages/ProjectDetail';
import Thanksto from './pages/Thanksto';
import Musics from './pages/Musics';
import Intro from './components/Intro';

import './App.css';

// 페이지 전환 애니메이션 wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Overview /></PageWrapper>} />
        <Route path="/pdf" element={<PageWrapper><PdfViewer /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><ExhibitionContent /></PageWrapper>} />
        <Route path="/project/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/musics" element={<PageWrapper><Musics /></PageWrapper>} />
        <Route path="/thanksto" element={<PageWrapper><Thanksto /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleIntroClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 700);
  };

  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        {showIntro ? (
          <Intro onClickLogo={handleIntroClick} fadeOut={fadeOut} />
        ) : (
          <>
            <Header />
            <AnimatedRoutes />
            <ScrollToTopButton />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
