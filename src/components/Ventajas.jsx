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
  return (
    <div ref={ref} className='text-slate-200 h-[400vh] relative flex px-3 md:px-5 lg:px-11 xl:px-16 2xl:px-48'>
        
            <div className='sticky h-[75vh] top-28 w-1 bg-gray-500'>
                <motion.div 
                    className='w-full bg-purple-400'
                    style={{height:barHeight}}
                    >

                </motion.div>
            </div>
            <div className='w-4/12 pl-5 lg:pl-12'>
                <div>
                    <h3 className='mb-[100vh] text-3xl text-white font-black tracking-tighter md:text-4xl lg:text-5xl'>Muchos titulos</h3>
                </div>
                <h3 className='mb-96'>Muchos titulos</h3>
                <h3 className='mb-96'>Muchos titulos</h3>
            </div>
            <div className='sticky h-56 w-full top-40 bg-gray-500'>
                
            </div>
        
    </div>
  )
}
