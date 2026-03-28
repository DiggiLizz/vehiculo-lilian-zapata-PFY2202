import React from 'react';

const Nosotros = () => {
  return (
    <div className="p-10 text-center mb-20 min-h-screen bg-purple-50">
      <h1 className="text-4xl font-extrabold text-purple-900 mb-8">🏢 Nuestra Historia</h1>
      
      {/* IMAGEN CENTRADA CON TAILWIND */}
      <div className="my-8 flex flex-col items-center justify-center">
        <img 
          src="/assets/imagenes/yoAutomotora.png" 
          alt="Lilian Zapata" 
          className="w-48 h-48 object-cover rounded-full border-8 border-white shadow-2xl" 
        />
        <p className="italic text-gray-500 mt-4">
          Lilian Zapata - Fundadora y Experta en Tecnología Automotriz
        </p>
      </div>

      <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
        En <strong className="text-purple-700">Automotora Sekhmet</strong>, combinamos la pasión por la ingeniería 
        y la seguridad digital para ofrecerte los vehículos más confiables del mercado.
      </p>
      
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-xl mx-auto border border-purple-100">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">✅ Nuestra Misión</h3>
        <p className="text-gray-600">
          Garantizar que cada cliente encuentre el auto de sus sueños con transparencia, 
          respaldo tecnológico y una experiencia de compra segura y personalizada.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;