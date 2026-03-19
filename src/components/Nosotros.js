import React from 'react';

const Nosotros = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', marginBottom: '80px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏢 Nuestra Historia</h1>
      
      {/* IMAGEN CENTRADA  */}
      <div style={styles.imageContainer}>
        <img 
          src="/assets/imagenes/yoAutomotora.png" 
          alt="Lilian Zapata - Fundadora de Automotora Sekhmet" 
          style={styles.profileImage} 
        />
        <p style={{ fontStyle: 'italic', color: '#7f8c8d', marginTop: '10px' }}>
          Lilian Zapata - Fundadora y Experta en Tecnología Automotriz
        </p>
      </div>

      <p style={{ fontSize: '1.2rem', color: '#34495e', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 20px auto' }}>
        En <strong>Automotora Sekhmet</strong>, combinamos la pasión por la ingeniería 
        y la seguridad digital para ofrecerte los vehículos más confiables del mercado.
      </p>
      
      <div style={{ background: '#ecf0f1', padding: '25px', borderRadius: '15px', marginTop: '30px', maxWidth: '600px', margin: '30px auto 0 auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#2c3e50' }}>✅ Nuestra Misión</h3>
        <p style={{ color: '#7f8c8d' }}>
          Garantizar que cada cliente encuentre el auto de sus sueños con transparencia, 
          respaldo tecnológico y una experiencia de compra segura y personalizada.
        </p>
      </div>
    </div>
  );
};

// ESTILOS PARA LA IMAGEN Y EL DISEÑO
const styles = {
  imageContainer: {
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: '200px', 
    height: '200px', 
    objectFit: 'cover', 
    borderRadius: '50%', 
    border: '5px solid #bdc3c7', 
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
  }
};

export default Nosotros;