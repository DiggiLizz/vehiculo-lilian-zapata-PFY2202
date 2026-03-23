import React from 'react';

const Inventario = ({ vehiculos }) => {
  // 1. Definimos los autos "fijos" para que coincidan con el Home
  const autosPredefinidos = [
    { id: 1, marca: "DeLorean", modelo: "Cyber", precio: "45000000", año: "2026", descripcion: "Edición especial limitada." },
    { id: 2, marca: "Shelby", modelo: "GT500", precio: "85000000", año: "2024", descripcion: "Clásico moderno de alto rendimiento." },
    { id: 3, marca: "Tesla", modelo: "Model S", precio: "60000000", año: "2023", descripcion: "Totalmente eléctrico de alta gama." }
  ];

  // 2. Unimos los fijos con los que vienen por props (los del formulario)
  const inventarioCompleto = [...autosPredefinidos, ...vehiculos];

  return (
    <div className="p-8 pb-24 min-h-screen bg-purple-50">
      <h2 className="text-3xl font-extrabold text-purple-900 text-center mb-8">
        📋 Inventario de Vehículos Sekhmet
      </h2>
      
      {/* Contenedor de tabla responsivo con sombra de Tailwind */}
      <div className="max-w-6xl mx-auto overflow-x-auto shadow-2xl rounded-3xl border border-purple-100 bg-white">
        <table className="w-full text-left">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-4 uppercase text-xs font-bold tracking-wider">Marca</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider">Modelo</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider text-center">Año</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider text-right">Precio ($)</th>
              <th className="p-4 uppercase text-xs font-bold tracking-wider">Descripción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100">
            {inventarioCompleto.map((auto) => (
              <tr key={auto.id} className="hover:bg-purple-50 transition-colors duration-200">
                <td className="p-4 font-bold text-purple-800">{auto.marca}</td>
                <td className="p-4 text-gray-700">{auto.modelo}</td>
                <td className="p-4 text-center text-gray-600">{auto.año}</td>
                <td className="p-4 text-right font-black text-purple-900">
                   {/* Formateamos el precio para que se vea profesional */}
                  ${Number(auto.precio).toLocaleString('es-CL')}
                </td>
                <td className="p-4 text-gray-500 italic text-sm">{auto.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-purple-400 font-medium">
        Total de unidades en sistema: {inventarioCompleto.length}
      </p>
    </div>
  );
};

export default Inventario;