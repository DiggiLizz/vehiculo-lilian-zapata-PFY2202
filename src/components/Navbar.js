import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>🏠 Inicio</Link>
      <Link to="/nuevo" style={styles.link}>➕ Nuevo</Link>
      <Link to="/inventario" style={styles.link}>📋 Inventario</Link>
      <Link to="/nosotros" style={styles.link}>👥 Nosotros</Link>
      <Link to="/contacto" style={styles.link}>📞 Contacto</Link>
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