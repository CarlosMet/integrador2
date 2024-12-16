import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

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
            <div className='sticky h-56 w-full top-40 bg-gray-500'>
                
            </div>
        
    </div>
  )
}
