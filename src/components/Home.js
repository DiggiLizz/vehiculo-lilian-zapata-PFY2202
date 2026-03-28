import React, { useState } from 'react';

const Home = ({ vehiculos }) => { // 1. Recibimos los vehículos de App.js
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);

  // Combinamos tus autos fijos con los que agregues en el formulario
  const autosPredefinidos = [
    { id: 1, marca: "DeLorean", modelo: "Cyber", precio: "45000000", img: "/assets/imagenes/DeLoreanCyber.jpg", descripcion: "Disponible para entrega inmediata." },
    { id: 2, marca: "Shelby", modelo: "GT500", precio: "85000000", img: "/assets/imagenes/ShelbyGT500.webp", descripcion: "Potencia pura en cada curva." },
    { id: 3, marca: "Tesla", modelo: "Model S", precio: "60000000", img: "/assets/imagenes/TeslaModelS.webp", descripcion: "Tecnología eléctrica de vanguardia." }
  ];

  // Unimos ambos arrays para que se vea todo en el inicio
  const todosLosAutos = [...autosPredefinidos, ...vehiculos];

  return (
    <div className="p-5 pb-24 flex flex-col items-center min-h-screen bg-purple-50">
      
      <h1 className="text-3xl font-extrabold text-purple-900 mb-10 text-center drop-shadow-sm">
        🏎️ Catálogo de Vehículos Sekhmet 🏎️
      </h1>

      {/* Grid Responsivo con Tailwind */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {todosLosAutos.map((auto, index) => (
          <div key={`${auto.id}-${index}`} className="bg-white p-5 rounded-2xl shadow-lg border border-purple-100 text-center transform hover:scale-105 transition duration-300">
            <img 
              src={auto.img || "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400"} 
              alt={auto.modelo} 
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold text-purple-800 uppercase">{auto.marca} {auto.modelo}</h2>
            <p className="text-gray-600 font-medium my-2">Precio: ${auto.precio}</p>
            
            <button 
              onClick={() => setAutoSeleccionado(auto)}
              className="mt-4 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors w-full"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* Modal / Card Flotante (Lógica de Tailwind) */}
      {autoSeleccionado && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setAutoSeleccionado(null)}
        >
          <div 
            className="bg-white p-8 rounded-3xl max-w-sm w-full relative shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
              onClick={() => setAutoSeleccionado(null)}
            >
              X
            </button>
            
            <img 
              src={autoSeleccionado.img || "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400"} 
              alt={autoSeleccionado.modelo} 
              className="w-full rounded-2xl shadow-md mb-4" 
            />
            <h3 className="text-2xl font-bold text-purple-900 mb-2">{autoSeleccionado.marca} {autoSeleccionado.modelo}</h3>
            <p className="text-xl font-black text-green-600 mb-4">Valor: ${autoSeleccionado.precio}</p>
            <p className="text-gray-600 italic">
              {autoSeleccionado.descripcion || "Este vehículo está disponible para entrega inmediata en nuestras sucursales de Automotora Sekhmet."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;