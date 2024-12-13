import { div } from "framer-motion/client";
import Headers from "../components/Headers";
import Navbar from "../components/Navbar";
import "./diseño-pages.css";
import MagicButton from "../components/ui/MagicButton";


const Registros = () => {
  return (
    
    <div className="page-container">
      {      }
      <Navbar/>
      
      <form className="form-container">
        <h2 className="form-title">Crear Cuenta</h2>
        <div className="form-section">
          <input
            type="text"
            placeholder="Nombre completo"
            className="form-input"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-input"
          />
          <div className="text-center">
        <MagicButton 
          title={"Register"} 
          className="submit-button"/>
      </div>
        </div>
      </form>
    </div>
  );
};
export default Registros;