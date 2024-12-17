import React from 'react'
import MagicButton from '../components/ui/MagicButton'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FaCar } from 'react-icons/fa'
import { useState } from 'react'
import { CiLogin } from "react-icons/ci"
import UserProfile from '../components/UserProfile'

export default function UserPage() {

  const [loggedUser, setLoggedUser] = useState(()=>{
        const localUser = window.localStorage.getItem("user")
        console.log(JSON.parse(localUser))
        return localUser ? JSON.parse(localUser) : ""
      })

    //usar localstorage para cargar el usuario logeado

  return (
    <section className='bg-[#13111C] text-white w-full'>
        
        {loggedUser !== "" ? <UserProfile loggedUser={loggedUser} />
        : <div className='flex flex-col justify-center items-center gap-4 h-[90vh]'>
          <p>Aún no has iniciado sesión 🙍‍♀️</p>
          <Link to={"/login"}>
             <MagicButton title={"Ingresar"} icon={<CiLogin size={25} />} />
          </Link>
        </div>  
      }
    </section>
  )
}
