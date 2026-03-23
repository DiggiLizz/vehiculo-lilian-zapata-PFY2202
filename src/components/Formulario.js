import React, { useState } from 'react';

const Formulario = ({ agregarVehiculo }) => {
  const [nuevoAuto, setNuevoAuto] = useState({
    marca: '', modelo: '', precio: '', año: '', descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoAuto({ ...nuevoAuto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarVehiculo(nuevoAuto);
    alert(`¡Vehículo ${nuevoAuto.marca} ${nuevoAuto.modelo} agregado con éxito!`);
    setNuevoAuto({ marca: '', modelo: '', precio: '', año: '', descripcion: '' });
  };

  return (
    /* CLASE 1: Contenedor con sombra y bordes modernos de Tailwind */
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-purple-100 my-10">
      
      <h2 className="text-3xl font-extrabold text-purple-800 text-center mb-6">
        Ingresar Nuevo Vehículo
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <div>
          <label className="text-sm font-semibold text-purple-700 ml-1">Marca:</label>
          {/* CLASE 2: Inputs con bordes y efectos de foco de Tailwind */}
          <input 
            style={{ all: 'unset', display: 'block', width: '100%', boxSizing: 'border-box' }}
            className="mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900"
            type="text" name="marca" value={nuevoAuto.marca} onChange={handleChange} placeholder="Ej: Tesla" required 
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-purple-700 ml-1">Modelo:</label>
          <input 
            style={{ all: 'unset', display: 'block', width: '100%', boxSizing: 'border-box' }}
            className="mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900"
            type="text" name="modelo" value={nuevoAuto.modelo} onChange={handleChange} placeholder="Ej: Model S" required 
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-purple-700 ml-1">Precio ($):</label>
          <input 
            style={{ all: 'unset', display: 'block', width: '100%', boxSizing: 'border-box' }}
            className="mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900"
            type="number" name="precio" value={nuevoAuto.precio} onChange={handleChange} placeholder="Ej: 50000000" required 
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-purple-700 ml-1">Año:</label>
          <input 
            style={{ all: 'unset', display: 'block', width: '100%', boxSizing: 'border-box' }}
            className="mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900"
            type="number" name="año" value={nuevoAuto.año} onChange={handleChange} placeholder="Ej: 2024" required 
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-purple-700 ml-1">Descripción:</label>
          <textarea 
            style={{ all: 'unset', display: 'block', width: '100%', boxSizing: 'border-box', minHeight: '80px' }}
            className="mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900"
            name="descripcion" value={nuevoAuto.descripcion} onChange={handleChange} placeholder="Breve descripción..." required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-4 px-6 rounded-2xl transition duration-300 shadow-lg mt-2 transform hover:-translate-y-1 active:scale-95"
        >
          Guardar en Inventario
        </button>
      </form>
    </div>
  );
};

export default Formulario;