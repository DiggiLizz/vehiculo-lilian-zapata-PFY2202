import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-purple-900/90 backdrop-blur-sm flex justify-around p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50">
      <Link to="/" className="text-white font-bold hover:text-purple-300 transition-colors">🏠 Inicio</Link>
      <Link to="/nuevo" className="text-white font-bold hover:text-purple-300 transition-colors">➕ Nuevo</Link>
      <Link to="/inventario" className="text-white font-bold hover:text-purple-300 transition-colors">📋 Inventario</Link>
      <Link to="/nosotros" className="text-white font-bold hover:text-purple-300 transition-colors">👥 Nosotros</Link>
      <Link to="/contacto" className="text-white font-bold hover:text-purple-300 transition-colors">📞 Contacto</Link>
    </nav>
  );
};


const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px 0'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Navbar;