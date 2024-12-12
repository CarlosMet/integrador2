import React, { useState } from 'react'

export default function OpcionCard({vehicle, monthlyPayment, brand}) {
    const [showCovers, setShowCovers] = useState(false)

    const handleCovers = ()=>{
        setShowCovers(!showCovers)
    }
  return (
    <div className=''>
            


            <div className='border border-gray-600 rounded-xl p-4'>
                <h4 className=' font-extrabold text-xl text-gray-800 tracking-tight'>Sura cobertura completa</h4>
                <p className='text-gray-600'>
                    {vehicle.model}
                </p>
                <img className='w-60 mx-auto transition-all duration-700 my-5' src={vehicle.imgUrl} alt="" />
                <div className='flex gap-2'>
                    <p className='text-gray-800 font-bold text-lg'>Coberturas</p>
                    <img onClick={handleCovers} className='w-5' src={showCovers ? "https://www.svgrepo.com/show/510303/up-chevron.svg" : "https://www.svgrepo.com/show/520696/down-arrow-5.svg"} alt="" />
                </div>
                {
                    showCovers && 
                    <p className='pl-2 text-gray-600 mb-3'>
                    -Daños a terceros <br />
                    -Pérdida total <br />
                    -Pérdida parcial
                    </p>
                }
                <p className='flex justify-between text-gray-600 mb-4'>Valor asegurable: <span className='text-gray-800 font-semibold'>${vehicle.price}</span></p>
                
                <div className='flex flex-col items-center' style={{
                    background: "#D1D5DB",
                    borderRadius: "14px",
                    padding: "1px",
                    
                }}>
                    <p className='text-gray-800' style={{
                        fontWeight : "700"
                    }}>Desde</p>
                    <p>{monthlyPayment} / mes</p>
                </div>
                <button className='bg-[#D2FF72] w-full py-3 rounded-xl text-lg mt-2 text-gray-800 font-bold hover:brightness-110 hover:scale-110'>Elegir Seguro</button>
            </div>

    </div>
  )
}
