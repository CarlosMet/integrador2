import React from 'react'
import MagicButton from './ui/MagicButton'
import { useTransform, motion } from 'framer-motion'

export default function CheckList({progress}) {
    
  return (
    <div className='text-white font-medium rounded-xl bg-gray-700 w-10/12 md:w-9/12 lg:w-4/12 xl:w-3/12 px-3 py-5 mt-12 lg:px-5 lg:py-6 mx-auto'>

       
       
        <div className='flex justify-between px-3 mb-[3px] items-center'>
            <p>Daños contra terceros.</p>
            <div className='w-4 h-4  grid place-items-center relative'><CheckListSvg progress={progress} /></div>
        </div>

        <div className='flex justify-between px-3 mb-[3px] items-center'>
            <p>Perdidas parciales.</p>
            <div className='w-4 h-4 grid place-items-center relative'><CheckListSvg progress={progress} /></div>
        </div>

        <div className='flex justify-between px-3 mb-[3px] items-center'>
            <p>Perdidas totales.</p>
            <span></span>
        </div>

        <div className='flex justify-between px-3 mb-[3px] items-center'>
            <p>Pequeños accesorios.</p>
            <div className='w-4 h-4 grid place-items-center relative'><CheckListSvg progress={progress} /></div>
        </div>

        <div className='flex justify-between px-3 mb-[3px] items-center'>
            <p>Asistencia en carretera</p>
            <span></span>
        </div>

        <div className='flex justify-between px-3 mb-3 items-center'>
            <p>Vehículo de reemplazo</p>
            <div className='w-4 h-4 grid place-items-center relative'><CheckListSvg progress={progress} /></div>
        </div>

        <MagicButton title={"Continuar..."} size={"full"} />

    </div>
  )
}

const CheckListSvg =({progress})=>{
        const pathMotion = useTransform(progress, [0.4, 0.5], [0, 1])
    return(                  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle absolute -top-2 -left-1" width="29" height="29">
                    <motion.path
                        d="M5 12l6 6 9 -9"
                        className="check-path"
                        stroke="#9b4dca"  // Mover el color del trazo aquí
                        fill="none"      // Mover el "fill" al SVG o path si es necesario
                        initial={{
                            pathLength: 0,
                        }}
                        style={{
                            pathLength: pathMotion
                        }}
                        transition={{
                            duration :0,
                            ease: "linear"
                        }}
                    />
                </svg>         
        
    )
}
