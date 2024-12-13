import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import ProgressBar from '../components/ProgressBar'
import Headers from '../components/Headers'
import OpcionesSeguro from '../components/OpcionesSeguro'

export default function page() {
    const [barProgress, setBarProgress] = useState(0)
    const [activeSection, setActiveSection] = useState(0)
    const [selectedCar, setSelectedCar] = useState({})

    const getProgress = (prog)=>{
        setBarProgress(prog)
    }

    const getSelectedCar = (car)=>{
        setSelectedCar(car)
      }

    useEffect(()=>{
        console.log(barProgress === 0)
    }, [barProgress])

  return (
    <div className='bg-slate-950 h-screen w-full flex items-center flex-col justify-center lg:gap-12'>
        
        <ProgressBar progress={barProgress} /> 
        {
            (barProgress === 0 || barProgress === 1/3) &&
            <Form  getProgress={getProgress} getUserVehicle={getSelectedCar}/>
        }
        {
            barProgress === 2/3 &&
            <OpcionesSeguro 
            vehicle={selectedCar} 
            aditionalInfo={{
                age: 31,
                year: 2012,
                sex: "male"
            }} />

        
        }
    </div>
  )
}
