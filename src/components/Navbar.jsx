import React, { useState } from 'react'
import { FaAccessibleIcon } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MagicButton from './ui/MagicButton'

export default function Navbar({user = false}) {

    const PATHS = [
      {
        item: "About",
        icon: <FaAccessibleIcon color='gray' size={22}/>
      },
      {
        item: "Services",
        icon: <FaAccessibleIcon color='gray' size={22}/>
      },
      {
        item: "Option",
        icon: <FaAccessibleIcon color='gray' size={22}/>
      }
    ]

    const [loggedUser, setLoggedUser] = useState(()=>{
      const localUser = window.localStorage.getItem("user")
      return localUser ? JSON.parse(localUser) : ""
    })
  
  return (
    <nav className='sticky top-4  z-30 bg-slate-900 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto px-6 md:px-9 lg:px-12 py-2 lg:py-3 rounded-xl flex justify-around'>
      
      {
        PATHS.map((path, index)=>{
          return(
            <div key={index} className='flex gap-2 items-center'>
              <Link to={`/${path.item}`} className='text-slate-300 font-bold'>{path.item}</Link>
              {path.icon}
            </div>
          )
        })
      }

      <div className='flex items-center gap-3'>
        {user ? <>
        <Link to={"/"} className='text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold'>Log out</Link>
          <div className='w-10 h-10 rounded-full grid place-items-center bg-white/25'>

          </div>
          </>
          : loggedUser !== "" ?
            <Link to={"/user"} className='text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold'>Log in</Link>
            :<Link to={"/login"} className='text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold'>Log in</Link>
          
        }
      </div>

      
      

    </nav>
  )
}
