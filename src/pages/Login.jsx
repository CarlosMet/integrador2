import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MagicButton from '../components/ui/MagicButton'


const Login = () => {

  const [users, setUsers] = useState([{}])

  const navigate = useNavigate()

  const submitHandler = (e)=>{
    e.preventDefault()
    const userInput = e.target.user.value
    const passwordInput = e.target.password.value

    const userToCompare = users.filter((user)=>{
      return user.nombre === userInput
    })

    if(userToCompare[0]){
      if(userToCompare[0].password === passwordInput){
        console.log("succesfully logged")
        window.localStorage.setItem("user", JSON.stringify(userToCompare[0]))
        navigate("/user")
      }else{
        console.log("credentials error")
      }
    }else{
      console.log("credentials error")
    }
  }

  useEffect(()=>{
    const fetchUsers = async()=>{
      const users = await fetch("http://localhost:8080/usuarios")
      const users_data = await users.json()      
      setUsers(users_data)
    }

    fetchUsers()
  }, [])
  
    return (
    <form onSubmit={submitHandler} action="" className="bg-slate-950 h-screen w-full flex items-center justify-center">
    
      <div>
        <input type="text" className="border py-1 px-3 rounded-lg focus:outline-none border-gray-700 bg-transparent text-white" name="user" /> <br />
        <input type="text" className="border py-1 px-3 rounded-lg focus:outline-none border-gray-700 bg-transparent text-white" name="password" /> <br />
        <button className="text-white text-center" type="submit">Iniciar sesión</button>
        <div className="text-white flex gap-2">
          <p className="text-white">No tienes cuenta?</p>
          <Link to={"/registro"}>Registrarse</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;