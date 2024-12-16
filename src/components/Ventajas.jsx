import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import MagicButton from './ui/MagicButton'
import { SiBmcsoftware } from "react-icons/si"

export default function Ventajas() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start", "end start"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
        console.log(latest)
    })

    const barHeight = useTransform(scrollYProgress, [0,1], ['2vh','90vh'])
    const firstTitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.1])
    const secondTitleOpacity = useTransform(scrollYProgress, [0.1, 0.24, 0.35], [0.2, 1, 0])
    const thirdTitleOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.62], [0.2, 1, 0])
  return (
    <div ref={ref} className='text-slate-200 h-[400vh] relative flex px-3 md:px-5 lg:px-11 xl:px-16 2xl:px-48'>
        
            <div className='sticky h-[75vh] top-28 w-[7px] bg-gray-500'>
                <motion.div 
                    className='w-full bg-purple-400'
                    style={{height:barHeight}}
                    >

                </motion.div>
            </div>
            <div className='w-7/12 pl-5 lg:pl-12'>
                <motion.div
                    style={{opacity:firstTitleOpacity}}
                >
                    <p className='text-lg tracking-wider text-pink-200 font-semibold mb-1'>Rápidez</p>
                    <h3 className='mb-[100vh] text-3xl text-white font-black tracking-tighter md:text-4xl lg:text-5xl'>Proceso ágil y <span className='text-pink-400'>Eficiente.</span></h3>
                </motion.div>
                <motion.div
                    style={{opacity:secondTitleOpacity}}
                >
                    <p className='text-lg tracking-wider text-purple-200 font-semibold mb-1'>Disponibilidad</p>
                    <h3 className='mb-[100vh] text-3xl text-white font-black tracking-tighter md:text-4xl lg:text-5xl'>Atención las <span className='text-purple-400'>24 Horas.</span></h3>
                </motion.div>
                <motion.div
                    style={{opacity:thirdTitleOpacity}}
                >
                    <p className='text-lg tracking-wider text-green-200 font-semibold mb-1'>Exclusividad</p>
                    <h3 className='mb-[100vh] text-3xl text-white font-black tracking-tighter md:text-4xl lg:text-5xl'>Acceso a nuestra red de <span className='text-green-400'>talleres.</span></h3>
                </motion.div>
            </div>
            <div className='sticky overflow-hidden h-80 lg:h-96 xl:h-[450px] ml-1 lg:ml-2 w-full top-40 bg-gradient-to-bl from-black via-[#1f262d]  to-slate-950 rounded-lg border border-gray-400 border-opacity-35 p-2 lg:p-4 xl:p-6'>
                <div className='w-full relative h-full'>
                    <div className='w-full md:w-10/12 mx-auto lg:mx-0 lg:w-5/12 text-center lg:text-left'>
                        <h4 className='text-2xl font-bold tracking-tight '>Obtén tu poliza sin salir de casa</h4>
                        <p className='mt-4 font-medium lg:mt-6 text-sm xl:text-base'> -Tramita tu solicitud desde la APP.</p>
                        <p className='font-medium text-sm xl:text-base'> -Diligencia tus datos personales.</p>
                        <p className='font-medium text-sm xl:text-base'> -Envía las fotos de tu vehículo.</p>
                        <p className='font-medium text-sm xl:text-base'> -Agenda una visita con nuestro asesor.</p>
                        <p className='font-medium mb-2 md:mb-12 xl:mb-16 2xl:mb-20 text-sm xl:text-base'> -Empieza a disfrutar tu poliza !.</p>
                        <MagicButton title={"Descarga la app"} size={"full"} icon={<SiBmcsoftware />} />
                    </div>
                    <img src="phone2.png" className='w-1/2 hidden lg:block  absolute right-8 top-full -translate-y-2/3' alt="" />
                </div>
            </div>
        
    </div>
  )
}
