import React, { useState } from 'react';

// componente para el catalogo de los autos
const Home = ({ vehiculos, onComprar, carrito = [] }) => {
  // estados para los detalles y los valores de filtros
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [filtros, setFiltros] = useState({ texto: "", marca: "", anio: "", precioMax: "" });

  // Lógica de exclusión: se muestran los autos que no estan selecionados
  const idsEnCarrito = carrito.map(item => item.id);
  const vehiculosDisponibles = vehiculos.filter(auto => 
    !idsEnCarrito.includes(auto.id) && auto.estado !== "vendido"
  );

  // filtros seguns sus variables
  const autosFiltrados = vehiculosDisponibles.filter((auto) => {
    // verificacion si la amrca o modelo existen y precios
    const coincideTexto = auto.marca.toLowerCase().includes(filtros.texto.toLowerCase()) || 
                          auto.modelo.toLowerCase().includes(filtros.texto.toLowerCase());
    const coincideMarca = filtros.marca === "" || auto.marca === filtros.marca;
    const coincideAnio = filtros.anio === "" || auto.año.toString() === filtros.anio;
    const coincidePrecio = filtros.precioMax === "" || Number(auto.precio) <= Number(filtros.precioMax);
    return coincideTexto && coincideMarca && coincideAnio && coincidePrecio;
  });

  // filtro para no tener mascaras repetidas y años
  const marcasUnicas = [...new Set(vehiculos.map(a => a.marca))];
  const aniosUnicos = [...new Set(vehiculos.map(a => a.año))].sort((a, b) => b - a);

  return (
    <div className="p-5 pb-24 flex flex-col items-center min-h-screen bg-purple-50">
      <h1 className="text-3xl font-extrabold text-purple-900 mb-6 text-center drop-shadow-sm">
        🏎️ Catálogo de Vehículos Sekhmet 🏎️
      </h1>

      {/* permite la busqueda dinamica */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-3xl shadow-lg mb-10 grid grid-cols-1 md:grid-cols-4 gap-4 border border-purple-100">
        <input type="text" placeholder="Buscar..." className="p-3 border-2 border-purple-100 rounded-xl outline-none" value={filtros.texto} onChange={(e) => setFiltros({...filtros, texto: e.target.value})} />
        <select className="p-3 border-2 border-purple-100 rounded-xl outline-none" value={filtros.marca} onChange={(e) => setFiltros({...filtros, marca: e.target.value})}>
          <option value="">Marcas</option>
          {marcasUnicas.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select className="p-3 border-2 border-purple-100 rounded-xl outline-none" value={filtros.anio} onChange={(e) => setFiltros({...filtros, anio: e.target.value})}>
          <option value="">Año</option>
          {aniosUnicos.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <input type="number" placeholder="Precio Máx" className="p-3 border-2 border-purple-100 rounded-xl outline-none" value={filtros.precioMax} onChange={(e) => setFiltros({...filtros, precioMax: e.target.value})} />
      </div>

      {/* como se ven las tarjetas con tail */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {autosFiltrados.map((auto) => (
          <div key={auto.id} className="bg-white p-5 rounded-2xl shadow-lg border border-purple-100 text-center transform hover:scale-105 transition duration-300">
            <img src={auto.img || "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400"} alt={auto.modelo} className={`w-full h-48 object-cover rounded-xl mb-4 ${auto.estado === 'vendido' ? 'grayscale' : ''}`} />
            <h2 className="text-xl font-bold text-purple-800 uppercase">{auto.marca} {auto.modelo}</h2>
            <p className="text-gray-500 text-sm italic">Año: {auto.año} | ${Number(auto.precio).toLocaleString()}</p>
            
            <div className="flex flex-col gap-2 mt-4">
              {/* boton para el detalle */}
              <button onClick={() => setAutoSeleccionado(auto)} className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold py-2 rounded-lg transition-colors">Detalles</button>
              
              {/* boton cambia de color segun el estado de venta */}
              <button 
                onClick={() => onComprar(auto)} 
                disabled={auto.estado === "vendido"}
                className={`font-bold py-2 rounded-lg shadow-md transition-all ${
                  auto.estado === "vendido" 
                  ? "bg-red-200 text-red-700 cursor-not-allowed" // Rojo suave si está vendido
                  : "bg-green-500 hover:bg-green-600 text-white" // Verde si está disponible
                }`}
              >
                {auto.estado === "vendido" ? "Vendido 🚫" : "Comprar 🛒"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* detalle especifico al hacer click */}
      {autoSeleccionado && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4" onClick={() => setAutoSeleccionado(null)}>
          <div className="bg-white p-8 rounded-3xl max-w-md w-full relative shadow-2xl animate-in zoom-in" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 font-bold" onClick={() => setAutoSeleccionado(null)}>X</button>
            <img src={autoSeleccionado.img || "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400"} alt={autoSeleccionado.modelo} className={`w-full rounded-2xl mb-4 ${autoSeleccionado.estado === 'vendido' ? 'grayscale' : ''}`} />
            <h3 className="text-2xl font-bold text-purple-900">{autoSeleccionado.marca} {autoSeleccionado.modelo}</h3>
            <p className="text-xl font-black text-green-600 mb-4">${Number(autoSeleccionado.precio).toLocaleString()}</p>
            
            {/* confirmacion de la compra */}
            <button 
              onClick={() => { onComprar(autoSeleccionado); setAutoSeleccionado(null); }} 
              disabled={autoSeleccionado.estado === "vendido"}
              className={`w-full font-extrabold py-3 rounded-xl shadow-lg transition-all ${
                autoSeleccionado.estado === "vendido" 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {autoSeleccionado.estado === "vendido" ? "No disponible" : "Confirmar Compra"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;