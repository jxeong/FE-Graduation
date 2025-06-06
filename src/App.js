// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import ExhibitionContent from './pages/ExhibitionContent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Overview />
      {/* <ExhibitionContent /> */}
      <Footer />
    </div>
  );
}

export default App;