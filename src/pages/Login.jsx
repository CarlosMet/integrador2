import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <form onSubmit={submitHandler} action="" className="bg-slate-950">
    
      <input type="text" className="border border-black" name="user" />
      <input type="text" className="border border-black" name="password" />
      <MagicButton title={"Iniciar sesión"} />
    </form>
  );
};

export default Login;