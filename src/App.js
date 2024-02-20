import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CameraScreen from './components/CameraScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CameraScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
