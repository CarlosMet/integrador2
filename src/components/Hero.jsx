import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className='w-screen overflow-hidden h-screen'>
        
    {/* grid from aceternity */}

        <div className="h-[50rem] w-full bg-black-100   bg-grid-white/[0.05]  absolute top-0 flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            
        </div>

        <div className='flex relative justify-center z-10'>
            <div className='z-10 text-white text-lg max-w-[90vw] md:max-w-[85vw] text-center lg:max-w-[75vw] flex flex-col justify-center h-screen  items-center pb-48'>
                <h2 className='text-lg tracking-widest text-blue-100'>DYNAMYC WEB MAGIC WITH REACT</h2>
                <TextGenerateEffect 
                    words="MAIN TITLE THAT APPEARS IN THE HERO AND HAS TWO LINES"
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
