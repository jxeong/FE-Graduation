// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Overview from './components/Overview';
import DateSection from './components/DateSection';
import Location from './components/Location';
import ExhibitionContent from './components/ExhibitionContent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Overview />
      <DateSection />
      <Location />
      <ExhibitionContent />
      <Footer />
    </div>
  );
}

export default App;