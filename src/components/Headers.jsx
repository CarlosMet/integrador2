import { Link } from "react-router-dom";
import"../components/diseñoHeader.css";

const Headers = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Vehiculos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Registros" className="nav-link">
              Registros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};  
export default Headers;
