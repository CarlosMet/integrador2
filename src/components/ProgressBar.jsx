import React, { useState } from 'react'

export default function ProgressBar({progress}) {

    const [barStyles, setBarStyles] = useState(`absolute top-0 h-2 bg-[#2BCFF3]`)
  return (
    <div className='w-full justify-center hidden md:flex'>
      <div className='w-7/12 h-2 bg-gray-300 relative'>
        <div className="absolute justify-between flex w-full top-1 -translate-y-1/2 z-20">
          <div className='rounded-full w-8 h-8 bg-gray-300 grid place-items-center'><div className='w-6 h-6 bg-white rounded-full'></div></div>
          <div className='rounded-full w-8 h-8 bg-gray-300 grid place-items-center'><div className='w-6 h-6 bg-white rounded-full'></div></div>
          <div className='rounded-full w-8 h-8 bg-gray-300 grid place-items-center'><div className='w-6 h-6 bg-white rounded-full'></div></div>
          <div className='rounded-full w-8 h-8 bg-gray-300 grid place-items-center'><div className='w-6 h-6 bg-white rounded-full'></div></div>
        </div>


        <div 
          style={{
            width:`${progress*100}%`
          }}
          className={barStyles}>
        </div>

      </div>
      
    </div>
  )
}
