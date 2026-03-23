import React, { useState } from 'react'; // Agregamos useState para el inventario
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import Formulario from './components/Formulario'; // NUEVO
import Inventario from './components/Inventario'; // NUEVO

function App() {
  // --- Lógica de la Semana 2: Gestión de Estado ---
  // Aquí vive la lista global de vehículos
  const [vehiculos, setVehiculos] = useState([
    { id: 1, marca: "Tesla", modelo: "Model S", precio: "60000000", año: "2023", descripcion: "Eléctrico de alta gama" }
  ]);

  // Función para agregar un nuevo auto a la lista
  const agregarVehiculo = (nuevoAuto) => {
    setVehiculos([...vehiculos, { ...nuevoAuto, id: Date.now() }]);
  };

  return (
    <Router>
      <div className="App">
        
        {/* Aquí viven las páginas según la URL */}
        <Routes>
          <Route path="/" element={<Home vehiculos={vehiculos} />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* NUEVAS RUTAS SEMANA 2 */}
          <Route path="/nuevo" element={<Formulario agregarVehiculo={agregarVehiculo} />} />
          <Route path="/inventario" element={<Inventario vehiculos={vehiculos} />} />
        </Routes>

        {/* El Navbar abajo con los 5 links */}
        <Navbar />
        
      </div>
    </Router>
  );
}

export default App;