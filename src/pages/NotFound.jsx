import React from 'react'
import { Link } from 'react-router-dom'
import MagicButton from '../components/ui/MagicButton'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className='bg-slate-950 h-screen w-screen grid place-items-center'>
      <div className='flex flex-col items-center gap-8'>
        <p className='text-white text-center'><span className='text-purple-400 font-bold tracking-tight text-2xl'>Lo sentimos 😥</span> <br /> La página que buscas no está disponible</p>
        <Link to={'/'}>
          <MagicButton title={"Volver al inicio"} icon={<FaHome />} />
        </Link>
      </div>
    </div>
  )
}
