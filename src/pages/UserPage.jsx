import React from 'react'
import MagicButton from '../components/ui/MagicButton'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FaCar } from 'react-icons/fa'

export default function UserPage() {

    //usar localstorage para cargar el usuario logeado

  return (
    <section className='bg-slate-950 text-white w-full h-screen'>
        <Navbar />
        <div className='mt-16 flex flex-col items-center'>
            you've succesfully logged in
            <Link to={"/agregar"}>
                <MagicButton title={"Añadir vehículo"} icon={<FaCar />} />
            </Link>
        </div>
    </section>
  )
}
