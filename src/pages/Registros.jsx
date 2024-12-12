import Headers from "../components/Headers";

const Registros = () => {
  return ( 
    <form className="registro-container">
      <div>
      <Headers/>
      </div>
      <div className="sec-img">
        <img src="" alt="" />
      </div>
      <h2 className="registro-title">Crear Cuenta</h2>
      <div className="registro-seccion">
        <input type="text" placeholder="Nombre completo" className="registro-input" />
        <input type="email" placeholder="Correo electrónico" className="registro-input" />
        <input type="password" placeholder="Contraseña" className="registro-input" />
        <button type="submit" className="registro-button">Registrar</button>
      </div>
    </form>
    );
  };  
export default Registros;
