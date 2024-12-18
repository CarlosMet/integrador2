import React, { useState } from 'react'
import { FaCar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MagicButton from './ui/MagicButton'
import { IoEye, IoEyeOff, IoSettingsOutline } from "react-icons/io5"
import { TbBusinessplan } from "react-icons/tb"
import { FaCarCrash } from "react-icons/fa"
import { AiOutlineRise } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa6"

export default function UserProfile({loggedUser}) {
    const [user, setUser] = useState(loggedUser)
    const [showPassword, setShowPassword] = useState(false)
    const handleChange = (e)=>{
        
        const objectKey = e.target.name
        console.log(objectKey)
        if(objectKey === "nombre"){
            const newUser = {...user, nombre: e.target.value}
        setUser(newUser)
        }
        if(objectKey === "correo"){
            const newUser = {...user, correo: e.target.value}
            setUser(newUser)
        }
        if(objectKey === "correo"){
            const newUser = {...user, correo: e.target.value}
            setUser(newUser)
        }if(objectKey === "password"){
            const newUser = {...user, password: e.target.value}
            setUser(newUser)
        }       

    }

    const updateUser = async()=>{
        const response = await fetch(`http://localhost:8080/usuarios/${loggedUser.idUsuario}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',  // El tipo de contenido que se está enviando (JSON en este caso)
              },
            body: JSON.stringify(user)
        })
        window.localStorage.setItem("user", JSON.stringify(user))
        console.log(JSON.stringify(user))
    }
  return (
    <div className='flex h-full'>
        <aside className='w-3/12 xl:w-[20%] h-full px-10 py-12 xl:py-20'>

            <div className='flex items-center gap-2'>
                <div className='w-9 h-9 rounded-full bg-white overflow-hidden border border-gray-700'>
                    <img className='bg-transparent' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="" />
                </div>  
                <div className='leading-3   '>
                    <p className='text-slate-200 font-bold'>
                        {loggedUser.nombre}
                    </p>
                    <p className='text-sm text-slate-400'>
                        Cuenta personal
                    </p>
                </div>
                <button className='ml-3'>
                    <FaAngleDown color='#909eb2' />
                </button>
            </div>


            <div className='flex items-center gap-2 text-slate-100 mt-11 mb-2'>
                <IoSettingsOutline size={22} color='#c084fc' />
                <button >General</button>
            </div>

            <div className='flex items-center gap-2 text-slate-400 mb-2'>
                <TbBusinessplan size={22} color='#909eb2' />
                <button >Planes</button>
            </div>

            <div className='flex items-center gap-2 text-slate-400 mb-2'>
                <FaCarCrash size={22} color='#909eb2' />
                <button >Pólizas</button>
            </div>

            <div className='flex items-center gap-2 text-slate-400 mb-11'>
                <AiOutlineRise size={22} color='#909eb2' />
                <button >Beneficios</button>
            </div>

            

            <Link to={"/agregar"}>
                <MagicButton title={"Añadir vehículo"} icon={<FaCar />} />
            </Link>
        </aside>

        <div className=' w-9/12 xl:w-[80%] p-12 xl:p-20  border-l border-gray-700'>
            
            <div className=' w-full h-24 border-b border-gray-700'>
                <p className='font-semibold text-3xl tracking-tight'>Bienvenido, {loggedUser.nombre}.</p>
            </div>

            <div className='border-b border-gray-700 py-12'>
                <form action="">
                    <p className='text-xl'>Información de la cuenta</p>

                    <div className='flex items-center w-full mt-8 xl:mt-12 justify-between'>
                        <div className='w-[49%]'>
                            <label className='text-slate-200' htmlFor="">Nombre</label> <br />
                            <input name='nombre' onChange={handleChange} value={user.nombre} className='border border-gray-700 rounded-lg py-1 px-2 bg-transparent w-full focus:outline-none' type="text" />
                        </div>

                        <div className='w-[49%]'>
                            <label className='text-slate-200' htmlFor="">Correo</label> <br />
                            <input name='correo' value={user.correo} onChange={handleChange} className='border border-gray-700 rounded-lg py-1 px-2 bg-transparent w-full focus:outline-none' type="text" />
                        </div>
                    </div>

                    <div className='w-[47%] mt-4 mb-4'>
                            <label className='text-slate-200' htmlFor="">Contraseña</label> <br />
                            <div className="flex w-full items-center gap-4">
                                <input name='password' value={user.password} onChange={handleChange} className='border border-gray-700 rounded-lg py-1 px-2 bg-transparent w-full focus:outline-none' type={showPassword ? "text" : "password"} />
                                <button type='button' onClick={()=> setShowPassword(!showPassword)}>
                                    {showPassword ? <IoEyeOff size={23} /> : <IoEye size={23} />}
                                </button>
                            </div>
                    </div>

                    <div onClick={updateUser}>
                        <MagicButton title={"Actualizar perfil"} />
                    </div>
                </form>
            </div>

            <div className='py-12'>
                <p className='mb-4 text-xl'>Tus vehículos</p>
                <div className='mb-4'>
                    {loggedUser.vehiculos.map((vehiculo, index)=>{
                        return(
                            <div className='flex justify-between p-2 border border-gray-700 rounded-lg mb-1' key={index}>
                                <p>{index + 1}</p>
                                <p className='w-2/12'>{vehiculo.marca}</p>
                                <p className='w-2/12'>{vehiculo.modelo}</p>
                                <p className='w-2/12'>{vehiculo.placa}</p>
                                <div className='flex gap-3'>
                                    <button className='text-purple-400 font-semibold'>Mejorar plan</button>
                                    <MagicButton title={"Inhabilitar poliza"} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Link to={"/agregar"}>
                    <MagicButton title={"Añadir vehículo"} icon={<FaCar />} />
                </Link>
            </div>
            
        </div>
        
        
    </div>
  )
}
