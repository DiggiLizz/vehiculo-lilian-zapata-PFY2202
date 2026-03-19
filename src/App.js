import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* Aquí viven las páginas según la URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        {/* 4. El Navbar abajo  */}
        <Navbar />
        
      </div>
    </Router>
  );
}

export default App;