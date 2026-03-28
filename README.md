🏎️ Proyecto Automotora Sekhmet - Semana 3
Este proyecto es una aplicación desarrollada con React y Tailwind CSS para la gestión de inventario y selección de vehículos. Implementa conceptos avanzados de React como el levantamiento de estado (Lifting State Up) y persistencia de datos.

🛠️ Guía de Comandos y Pasos Técnicos
Paso 1: Instalación de Dependencias
Lo primero es descargar las librerías necesarias para que el proyecto funcione en cualquier computador.
 * npm install
    - ¿Qué hace?: Lee el archivo package.json y descarga todas las librerías (React, Tailwind, React Router) en la carpeta node_modules.

Paso 2: Ejecución en Modo Desarrollo
Para ver los cambios en tiempo real mientras programas.
 * npm start
    - ¿Qué hace?: Levanta un servidor local (normalmente en localhost:3000) para visualizar la app en el navegador.

Paso 3: Instalación de React Router (Navegación)
Si estás configurando el proyecto desde cero, este comando es vital.
 * npm install react-router-dom
    - ¿Qué hace?: Permite que la aplicación tenga múltiples páginas (Home, Inventario, Carrito) sin que la página se recargue por completo.

📁 Estructura del Proyecto
* src/components/Home.js: Catálogo principal con filtros.

* src/components/Inventario.js: Panel administrativo de gestión.

* src/components/Carrito.js: Pantalla de "Posible Compra" y confirmación.

* src/components/Formulario.js: Ingreso de nuevos vehículos.

* src/App.js: Cerebro de la aplicación y manejo de rutas.

🔍 Bitácora de Lógica y Flujo de Datos
--------------------------------------
El sistema opera bajo los siguientes pilares técnicos:

1. El "Cerebro" Centralizado (App.js)
En lugar de que cada página tenga su propia lista, todo nace en App.js.

Comando Conceptual: const [vehiculos, setVehiculos] = useState([...])

Qué hace: Al centralizar los datos en el padre (Lifting State Up), garantizamos que si un vehículo cambia de estado en el Carrito, el Home y el Inventario se enteren al mismo tiempo.

2. Filtro Multidimensional en Tiempo Real
El catálogo no solo busca palabras, sino que cruza categorías técnicas.

Comando Conceptual: autos.filter(a => a.marca === filtro.marca && a.precio <= filtro.max)

Qué hace: Cruza 4 variables (Marca, Modelo, Año, Precio). Lo más importante: No modifica el arreglo original, lo que cumple con el criterio de "no perder datos originales" de la rúbrica.

3. Sistema de Exclusión Dinámica (Requerimiento Crítico)
Esta es la regla de oro de la Semana 3: Un auto no puede estar en dos lugares a la vez.

Paso A (Compra): Al marcar "Comprar", el ID del auto entra al arreglo carrito.

Paso B (Filtro de Vista): El Home hace un chequeo: if (auto.id esta en carrito) { NO MOSTRAR }.

Paso C (Retorno): Al "Desmarcar" en el carrito, el ID sale del arreglo y el auto reaparece en el Home automáticamente sin recargar la página.

4. Blindaje de Datos (Persistencia Local)
Para evitar que el trabajo se pierda al refrescar el navegador (F5).

Comando Conceptual: localStorage.setItem("datos", JSON.stringify(estado))

Qué hace: Guarda una copia de seguridad en el navegador. Al iniciar (useEffect), la app pregunta: "¿Hay algo guardado?". Si sí, lo carga. Esto asegura la "Actualización dinámica del estado" que pide la pauta.
