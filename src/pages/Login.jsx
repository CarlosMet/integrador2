import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MagicButton from "../components/ui/MagicButton";
import "./diseño-pages.css";
import Navbar from "../components/Navbar"
import { div } from "framer-motion/client";

const Login = () => {
  const [users, setUsers] = useState([{}]);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const userInput = e.target.user.value;
    const passwordInput = e.target.password.value;

    const userToCompare = users.filter((user) => {
      return user.nombre === userInput;
    });

    if (userToCompare[0]) {
      if (userToCompare[0].password === passwordInput) {
        console.log("succesfully logged");
        navigate("/user");
      } else {
        console.log("credentials error");
      }
    } else {
      console.log("credentials error");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetch("http://localhost:8080/usuarios");
      const users_data = await users.json();
      setUsers(users_data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="login-container">
      {/* Aquí se coloca el Navbar */}
      <Navbar />

      {/* Formulario de login */}
      <form onSubmit={submitHandler} className="login-form">
        <h1 className="login-title">Login</h1>

        <div className="form-group">
          <label htmlFor="user" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            id="user"
            name="user"
            className="form-input"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <div className="text-center">
          <MagicButton title={"Iniciar sesión"} className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default Login;