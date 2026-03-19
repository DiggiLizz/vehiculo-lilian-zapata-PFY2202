import React, { useState } from 'react';

const Home = () => {
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);

  const autos = [
    { id: 1, modelo: "DeLorean Cyber", precio: "$45.000.000", img: "/assets/imagenes/DeLoreanCyber.jpg" },
    { id: 2, modelo: "Shelby GT500", precio: "$85.000.000", img: "/assets/imagenes/ShelbyGT500.webp" },
    { id: 3, modelo: "Tesla Model S", precio: "$60.000.000", img: "/assets/imagenes/TeslaModelS.webp" }
  ];

  return (
    <div style={styles.mainContainer}>
      {/* Título Centrado con Mayúscula Inicial */}
      <h1 style={styles.title}>🏎️ Catálogo de Vehículos 🏎️</h1>

      {/* Grid de Autos Centrado y Responsivo */}
      <div style={styles.grid}>
        {autos.map(auto => (
          <div key={auto.id} style={styles.card}>
            <img 
              src={auto.img} 
              alt={auto.modelo} 
              style={styles.cardImg} 
            />
            <h2 style={{ color: '#6a1b9a' }}>{auto.modelo}</h2>
            <p><strong>Precio:</strong> {auto.precio}</p>
            
            <button 
              onClick={() => setAutoSeleccionado(auto)}
              style={styles.button}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* Modal / Card Flotante */}
      {autoSeleccionado && (
        <div style={styles.overlay} onClick={() => setAutoSeleccionado(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setAutoSeleccionado(null)}>X</button>
            
            <img src={autoSeleccionado.img} alt={autoSeleccionado.modelo} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{autoSeleccionado.modelo}</h3>
            <p style={{ fontSize: '1.2rem', color: '#2c3e50' }}><strong>Valor: {autoSeleccionado.precio}</strong></p>
            <p>Este vehículo está disponible para entrega inmediata en nuestras sucursales de Automotora Sekhmet.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ESTILOS UNIFICADOS
const styles = {
  mainContainer: {
    padding: '20px',
    marginBottom: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    color: '#6a1b9a', 
    marginBottom: '40px',
    fontSize: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1100px', 
    justifyContent: 'center'
  },
  card: {
    backgroundColor: 'white', 
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(106, 27, 154, 0.1)',
    textAlign: 'center',
    border: '1px solid #e1bee7' 
  },
  cardImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  button: {
    marginTop: '15px',
    backgroundColor: '#9575cd',
    padding: '12px 25px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
  },
  modal: {
    backgroundColor: 'white', padding: '25px', borderRadius: '15px',
    width: '85%', maxWidth: '400px', textAlign: 'center', position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
  },
  closeBtn: {
    position: 'absolute', top: '10px', right: '10px', border: 'none',
    background: '#ff4d4d', color: 'white', borderRadius: '50%', cursor: 'pointer', width: '30px', height: '30px'
  }
};

export default Home;