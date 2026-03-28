import React from 'react';
import { Link } from 'react-router-dom';

// componenet que recibe el carrito
const Navbar = ({ carrito = [] }) => { 
  return (
    // barra de navegacion
    <nav className="fixed bottom-0 left-0 w-full bg-purple-900/90 backdrop-blur-sm flex justify-around p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50">
      <Link to="/" className="text-white font-bold hover:text-purple-300 transition-colors">🏠 Inicio</Link>
      <Link to="/nuevo" className="text-white font-bold hover:text-purple-300 transition-colors">➕ Nuevo</Link>
      <Link to="/inventario" className="text-white font-bold hover:text-purple-300 transition-colors">📋 Inventario</Link>
      
      {/* boton del carrito */}
      <Link to="/carrito" className="relative text-white font-bold hover:text-purple-300 transition-colors">
        <span>🛒 Carrito</span>
        {/* validacion del carrito */}
        {carrito.length > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
            {carrito.length}
          </span>
        )}
      </Link>

      <Link to="/nosotros" className="text-white font-bold hover:text-purple-300 transition-colors">👥 Nosotros</Link>
      <Link to="/contacto" className="text-white font-bold hover:text-purple-300 transition-colors">📞 Contacto</Link>
    </nav>
  );
};

export default Navbar;