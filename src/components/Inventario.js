import React from 'react';

const Inventario = ({ vehiculos, onEditar, onEliminar, carrito = [] }) => {
  
  // logica para la administracion del stcok
  const idsEnCarrito = carrito.map(item => item.id);
  
  // filtro para esconder los que estan vendidos
  const vehiculosVisibles = vehiculos.filter(auto => 
    !idsEnCarrito.includes(auto.id) && auto.estado !== "vendido"
  );

  // funcion para arrglar el precio de los autps
  const manejarEdicion = (auto) => {
    const nuevoPrecio = prompt(`Editando ${auto.marca}: Ingrese nuevo precio`, auto.precio);
    // validacion si no se ha comprado
    if (nuevoPrecio !== null && nuevoPrecio !== "") {
      onEditar(auto.id, { precio: nuevoPrecio });
    }
  };

  return (
    <div className="p-8 pb-24 min-h-screen bg-purple-50">
      <h2 className="text-3xl font-extrabold text-purple-900 text-center mb-8">
        📋 Panel Administrativo Sekhmet
      </h2>
      
      {/* control de como se ve el panel */}
      <div className="max-w-7xl mx-auto overflow-x-auto shadow-2xl rounded-3xl border border-purple-100 bg-white">
        <table className="w-full text-left">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="p-4 uppercase text-xs font-bold tracking-wider">Vehículo</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider text-center">Estado</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider text-right">Precio</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider text-center">Última Modif.</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100">
            {vehiculosVisibles.length > 0 ? (
              vehiculosVisibles.map((auto) => (
                <tr key={auto.id} className="hover:bg-purple-50 transition-colors duration-200">
                  <td className="p-4">
                    <div className="font-bold text-purple-800">{auto.marca}</div>
                    <div className="text-gray-500 text-sm">{auto.modelo} ({auto.año})</div>
                  </td>

                  <td className="p-4 text-center">
                    {/* se filtra los vendidos */}
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-green-100 text-green-600 shadow-sm">
                      {auto.estado}
                    </span>
                  </td>

                  <td className="p-4 text-right font-black text-purple-900">
                    ${Number(auto.precio).toLocaleString('es-CL')}
                  </td>

                  <td className="p-4 text-center text-xs text-gray-400 italic">
                    {auto.modificadoPor || "Sistema"}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button 
                        onClick={() => manejarEdicion(auto)}
                        className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-all shadow-sm"
                        title="Editar precio"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => {
                          if(window.confirm("¿Eliminar este registro permanentemente?")) onEliminar(auto.id)
                        }}
                        className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-lg transition-all shadow-sm"
                        title="Eliminar vehículo"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-16 text-center text-gray-400 italic">
                  <div className="text-4xl mb-2">🔭</div>
                  No hay vehículos disponibles para gestionar en este momento.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-purple-400 font-medium">
        Unidades en inventario general: {vehiculosVisibles.length}
      </p>
    </div>
  );
};

export default Inventario;