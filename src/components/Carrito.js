import React from 'react';

// recibe imtem el carrito y funciones para modificar el esatdo
const Carrito = ({ items, setCarrito, onFinalizar }) => {
  
  // permite que el auto "vuelva" al inventario
  const desmarcarVehiculo = (id) => {
    // sefiltra el arreglo para dejar fuera el id que se eligio
    const nuevoCarrito = items.filter(item => item.id !== id);
    // se actualiza el carrito
    setCarrito(nuevoCarrito);
  };

  // suma de todos los autos que se han elegido
  const total = items.reduce((acc, item) => acc + Number(item.precio), 0);

  return (
    <div className="p-8 min-h-screen bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-purple-900 mb-8 text-center">
        🛒 Vehículos Seleccionados
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100">
        {items.length > 0 ? (
          <>
            <table className="w-full text-left">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="p-4 uppercase text-xs font-bold tracking-wider">Vehículo</th>
                  <th className="p-4 uppercase text-xs font-bold tracking-wider text-right">Precio</th>
                  <th className="p-4 uppercase text-xs font-bold tracking-wider text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50">
                {items.map((auto) => (
                  <tr key={auto.id} className="hover:bg-purple-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-gray-800">{auto.marca} {auto.modelo}</div>
                      <div className="text-xs text-gray-400 font-mono">ID: {auto.id}</div>
                    </td>
                    <td className="p-4 text-right font-bold text-purple-700 text-lg">
                      ${Number(auto.precio).toLocaleString('es-CL')}
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => desmarcarVehiculo(auto.id)}
                        className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm"
                      >
                        ✕ Desmarcar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-8 bg-purple-50 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-purple-100">
              <div className="text-center md:text-left">
                <p className="text-gray-500 font-medium">Total de la Compra:</p>
                <p className="text-4xl font-black text-purple-900">${total.toLocaleString('es-CL')}</p>
              </div>
              
              <div className="flex gap-4 w-full md:w-auto">
                <button 
                  onClick={() => { if(window.confirm("¿Deseas vaciar toda la selección?")) setCarrito([]) }}
                  className="flex-1 md:flex-none border-2 border-red-200 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-2xl transition-all"
                >
                  Vaciar Todo
                </button>
                <button 
                  onClick={onFinalizar}
                  className="flex-1 md:flex-none bg-green-500 hover:bg-green-600 text-white font-black py-4 px-10 rounded-2xl shadow-lg transition-all transform active:scale-95 text-lg"
                >
                  FINALIZAR COMPRA 🏁
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="p-20 text-center">
            <div className="text-7xl mb-6">🏜️</div>
            <p className="text-2xl text-gray-400 mb-8 font-semibold italic">Tu lista de compra está vacía</p>
            <a href="/" className="inline-block bg-purple-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-purple-800 transition-all shadow-xl hover:-translate-y-1">
              Ir al Catálogo
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;