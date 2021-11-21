import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotelsGallery from './components/HotelsGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exect path='/' element={<HotelsGallery />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
