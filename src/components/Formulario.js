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
    // Agregamos un ID único usando el tiempo actual para evitar el error de las "keys"
    agregarVehiculo({ ...nuevoAuto, id: Date.now() }); 
    alert(`¡Vehículo ${nuevoAuto.marca} ${nuevoAuto.modelo} agregado con éxito!`);
    setNuevoAuto({ marca: '', modelo: '', precio: '', año: '', descripcion: '' });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-purple-100 my-10">
      
      <h2 className="text-3xl font-extrabold text-purple-800 text-center mb-6">
        Ingresar Nuevo Vehículo
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        {/* Usamos un pequeño componente interno para no repetir código, 
            esto es muy eficiente (Pensamiento Reflexivo) */}
        {[
          { label: 'Marca', name: 'marca', type: 'text', ph: 'Ej: Tesla' },
          { label: 'Modelo', name: 'modelo', type: 'text', ph: 'Ej: Model S' },
          { label: 'Precio ($)', name: 'precio', type: 'number', ph: 'Ej: 50000000' },
          { label: 'Año', name: 'año', type: 'number', ph: 'Ej: 2024' },
        ].map((campo) => (
          <div key={campo.name}>
            <label className="text-sm font-semibold text-purple-700 ml-1">{campo.label}:</label>
            <input 
              className="w-full mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900 placeholder-purple-300"
              type={campo.type} 
              name={campo.name} 
              value={nuevoAuto[campo.name]} 
              onChange={handleChange} 
              placeholder={campo.ph} 
              required 
            />
          </div>
        ))}

        <div>
          <label className="text-sm font-semibold text-purple-700 ml-1">Descripción:</label>
          <textarea 
            className="w-full mt-1 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-900 placeholder-purple-300 min-h-[100px]"
            name="descripcion" 
            value={nuevoAuto.descripcion} 
            onChange={handleChange} 
            placeholder="Breve descripción..." 
            required 
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