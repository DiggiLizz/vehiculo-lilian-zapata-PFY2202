import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const manejarEnvio = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!nombre.trim()) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    if (!regexEmail.test(email)) {
      alert("⚠️ El formato del correo electrónico no es válido.");
      return;
    }
    
    alert(`¡Gracias "${nombre}"! Tu mensaje fue enviado, pronto te contactaremos.`);
  };

  return (
    <div style={{ padding: '20px', marginBottom: '80px', fontFamily: 'Arial, sans-serif' }}>
      <h1>📧 Contáctanos</h1>
      
      <div style={styles.contentContainer}>
        {/* COLUMNA IZQUIERDA: Formulario */}
        <div style={styles.formColumn}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="text" 
              placeholder="Tu nombre (Nombre y Apellido)" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={styles.input} 
            />
            <input 
              type="email" 
              placeholder="Tu correo electrónico (contacto@sekhmet.cl)" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input} 
            />
            <textarea 
              placeholder="¿En qué vehículo estás interesado?" 
              style={{ ...styles.input, height: '100px' }} 
            ></textarea>
            <button 
              type="button" 
              onClick={manejarEnvio} 
              style={styles.button}
            >
              Enviar Consulta
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA:foto profesional */}
        <div style={styles.imageColumn}>
          <img 
            src="/assets/imagenes/yoContacto.png"
            alt="Lilian Zapata - Soporte Automotora Sekhmet" 
            style={styles.profileImage} 
          />
          <p style={styles.imageLabel}>Tu ejecutiva de confianza</p>
        </div>
      </div>
    </div>
  );
};


const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    gap: '50px',              
    marginTop: '30px',
    flexWrap: 'wrap'
  },
  formColumn: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '450px'         
  },
  imageColumn: {
    flex: '1.5',             
    minWidth: '350px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  profileImage: {
    width: '100%',            
    maxWidth: '550px',        
    height: 'auto', 
    borderRadius: '20px',    
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)' 
  },
  imageLabel: {
    marginTop: '15px', 
    color: '#7f8c8d', 
    fontStyle: 'italic',
    fontSize: '1rem',         
    fontWeight: '500'
  },

  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' },
  button: { background: '#e91e63', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }
};
export default Contacto;