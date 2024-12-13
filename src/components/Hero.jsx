import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className='w-screen overflow-hidden h-screen relative'>

        <div class="absolute h-[140vh] w-full bg-slate-950 overflow-hidden">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f66_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f66_1px,transparent_1px)] bg-[size:42px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>     
        


        <div className='flex relative justify-center z-10'>
            <div className='z-10 text-white text-lg max-w-[90vw] md:max-w-[85vw] text-center lg:max-w-[75vw] flex flex-col justify-center h-screen  items-center pb-48'>
                <h2 className='text-lg tracking-wideST text-blue-100'>DYNAMYC WEB MAGIC WITH REACT</h2>
                <TextGenerateEffect 
                    words="PROTEGE TU VEHÍCULO CON CONFIANZA EN SAFEWHEELS"
                    className="text-center text-3xl md:text-4xl lg:md:text-6xl 2xl:text-7xl text-white tracking-tighter mb-4 md:mb-7 lg:mb-9"
                />
                <MagicButton 
                    title="Get Started" 
                    icon={<FaLocationArrow />}    
                    position="right"
                />
            </div>
        </div>


    </section>
  )
}
