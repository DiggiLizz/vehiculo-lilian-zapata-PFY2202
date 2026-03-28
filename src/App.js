import React, { useState, useEffect } from 'react'; 
import './App.css';
// cambiamos BrowserRouter por HashRouter para que github pages no de error 404
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import Formulario from './components/Formulario';
import Inventario from './components/Inventario';
import Carrito from './components/Carrito';

const IMG_DEFECTO = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400";

function App() {
  // carga inicial desde localstorage
  const [vehiculos, setVehiculos] = useState(() => {
    const guardados = localStorage.getItem("sekhmet_vehiculos");
    // nota: aqui ya eliminamos las comillas en los numeros para el filtro
    return guardados ? JSON.parse(guardados) : [
      { id: 1, marca: "DeLorean", modelo: "Cyber", precio: 45000000, año: 2026, descripcion: "Edición limitada.", img: "/assets/imagenes/DeLoreanCyber.jpg", estado: "disponible", modificadoPor: "Sistema" },
      { id: 2, marca: "Shelby", modelo: "GT500", precio: 85000000, año: 2024, descripcion: "Alto rendimiento.", img: "/assets/imagenes/ShelbyGT500.webp", estado: "disponible", modificadoPor: "Sistema" },
      { id: 3, marca: "Tesla", modelo: "Model S", precio: 60000000, año: 2023, descripcion: "Eléctrico alta gama.", img: "/assets/imagenes/TeslaModelS.webp", estado: "disponible", modificadoPor: "Sistema" }
    ];
  });

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("sekhmet_carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // persistencia automatica en localstorage
  useEffect(() => {
    localStorage.setItem("sekhmet_vehiculos", JSON.stringify(vehiculos));
  }, [vehiculos]);

  useEffect(() => {
    localStorage.setItem("sekhmet_carrito", JSON.stringify(carrito));
  }, [carrito]);

  // funciones de gestion de inventario
  const agregarVehiculo = (nuevoAuto) => {
    const nombreOperador = prompt("Ingrese su nombre para registrar el ingreso:");
    if (!nombreOperador) return;
    const autoConMetadata = { ...nuevoAuto, id: Date.now(), estado: "disponible", modificadoPor: nombreOperador, img: nuevoAuto.img || IMG_DEFECTO };
    setVehiculos([...vehiculos, autoConMetadata]);
  };

  const editarVehiculo = (id, nuevosDatos) => {
    const nombreOperador = prompt("¿Quién modifica?");
    if (!nombreOperador) return;
    setVehiculos(vehiculos.map(v => v.id === id ? { ...v, ...nuevosDatos, modificadoPor: nombreOperador } : v));
  };

  const manejarCompra = (auto) => {
    if (!carrito.find(item => item.id === auto.id)) {
      setCarrito([...carrito, auto]);
      alert(`✅ ${auto.marca} añadido.`);
    }
  };

  const finalizarCompraTotal = () => {
    const idsEnCarrito = carrito.map(item => item.id);
    setVehiculos(vehiculos.map(v => idsEnCarrito.includes(v.id) ? { ...v, estado: "vendido", modificadoPor: "Venta Online" } : v));
    setCarrito([]);
    alert("🏁 Venta realizada.");
  };

  return (
    /* el componente Router aqui actua como HashRouter */
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home vehiculos={vehiculos} onComprar={manejarCompra} carrito={carrito} />} />
          <Route path="/nuevo" element={<Formulario agregarVehiculo={agregarVehiculo} />} />
          <Route path="/inventario" element={
            <Inventario 
              vehiculos={vehiculos} 
              carrito={carrito} 
              onEditar={editarVehiculo} 
              onEliminar={(id) => setVehiculos(vehiculos.filter(v => v.id !== id))} 
            />
          } />
          <Route path="/carrito" element={
            <Carrito items={carrito} setCarrito={setCarrito} onFinalizar={finalizarCompraTotal} />
          } />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Navbar carrito={carrito} />
      </div>
    </Router>
  );
}

export default App;