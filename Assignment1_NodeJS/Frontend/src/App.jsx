import React from 'react';
import './App.css'; // Global styles should load before component-specific styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';

function App() {
  return (
    <Router>
      {/* Navbar is outside Routes so it appears on every page */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;