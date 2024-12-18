import { useState } from "react";
import Navbar from "../components/Navbar";
  // Mantén este archivo si estás utilizando estilos adicionales personalizados
import MagicButton from "../components/ui/MagicButton";

const Registros = () => {
  // Estados para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  // Manejar el registro
  const manejarRegistro = async (e) => {
    e.preventDefault();
    

    const nombre = e.target.nombre.value
    const correo = e.target.correo.value
    const password = e.target.correo.value
    const cedula = e.target.correo.value

    // Validar los campos
    if (!nombre || !correo || !contraseña) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      // Enviar los datos al endpoint de registro
      const respuesta = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({cedula, nombre, correo, password}),
      });

      if (respuesta.ok) {
        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        // Redirigir al login (asegúrate de tener configurado React Router)
        window.location.href = "/login";
      } else {
        alert("Error en el registro. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Ocurrió un error. Por favor, verifica tu conexión.");
    }
  };

  return (
    <div className="flex flex-col justify-start text-black items-center min-h-screen bg-slate-950 bg-gradient-to-r from-white/10 via-transparent to-transparent bg-grid-40px  font-sans py-4">
      {/* Navbar */}
      <Navbar />

      {/* Formulario de registro */}
      <form className="bg-slate-950 text-white max-w-md mx-auto p-6 rounded-lg shadow-lg border-2 border-white mt-24" onSubmit={manejarRegistro}>
        <h2 className="text-3xl font-bold text-center mb-6">Crear Cuenta</h2>

        <div className="mb-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            className=" text-black w-full p-3 border border-gray-700 rounded-lg outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className=" text-black w-full p-3 border border-gray-700 rounded-lg outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            
            onChange={(e) => setCorreo(e.target.value)}
            name="correo"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            className="text-black w-full p-3 border border-gray-700 rounded-lg outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            
            onChange={(e) => setContraseña(e.target.value)}
            name="password"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Cedula"
            className="text-black w-full p-3 border border-gray-700 rounded-lg outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            
            
            name="cedula"
          />
        </div>

        

        <div className="text-center">
         <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer transition-all hover:bg-indigo-700">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default Registros;
