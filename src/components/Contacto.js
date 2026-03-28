import React, { useState } from 'react';

// componente para el contacto y validacion
const Contacto = () => {
  // caputar la informacion que se ingresa por teclado
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const manejarEnvio = () => {
    // validacion del formato real
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // validacion del nombre
    if (!nombre.trim()) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    // alerta de error en formato
    if (!regexEmail.test(email)) {
      alert("⚠️ El formato del correo electrónico no es válido.");
      return;
    }
    
    // mensaje de alerta que se envio el mensaje
    alert(`¡Gracias "${nombre}"! Tu mensaje fue enviado, pronto te contactaremos.`);
  };

  return (
    <div className="p-8 mb-20 min-h-screen bg-purple-50">
      <h1 className="text-4xl font-extrabold text-purple-900 text-center mb-10">
        📧 Contáctanos
      </h1>
      
      {/* contenedor principal con flexbox para que sea responsivo en moviles y pc */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
        
        {/* columna con la info en el formulario */}
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-1 ml-1">Tu nombre:</label>
              <input 
                type="text" 
                placeholder="Nombre y Apellido" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-3 bg-purple-50 border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              />
            </div>

            {/* campo para el email con vinculacion al estado email */}
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-1 ml-1">Tu correo:</label>
              <input 
                type="email" 
                placeholder="contacto@sekhmet.cl" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-purple-50 border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              />
            </div>

            {/* mensaje por el auto de interes */}
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-1 ml-1">Mensaje:</label>
              <textarea 
                placeholder="¿En qué vehículo estás interesado?" 
                className="w-full p-3 bg-purple-50 border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all h-32 resize-none"
              ></textarea>
            </div>

            {/* boton para enviar el formulario */}
            <button 
              type="button" 
              onClick={manejarEnvio} 
              className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all active:scale-95"
            >
              Enviar Consulta
            </button>
          </form>
        </div>

        {/* columna de la foto */}
        <div className="w-full max-w-lg text-center flex flex-col items-center">
          <div className="relative group">
            <img 
              src="/assets/imagenes/yoContacto.png"
              alt="Lilian Zapata - Soporte Automotora Sekhmet" 
              className="rounded-3xl shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-3xl bg-purple-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
          <p className="mt-4 text-purple-600 italic font-medium text-lg">
            Tu ejecutiva de confianza
          </p>
          <div className="mt-2 h-1 w-20 bg-pink-500 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default Contacto;