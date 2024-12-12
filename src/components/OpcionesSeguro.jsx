import React, { useEffect, useState } from 'react'
import OpcionCard from './OpcionCard'

export default function OpcionesSeguro({vehicle, aditionalInfo}) {

    // Costo póliza = (V.FV) + (A*FA) + (E*FE) + (FG) MÓDELO PARA ESTIMAR EL VALOR DE LA POLIZA

    const [insurancePrice, setInsurancePrice] = useState(0)
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [showCovers, setShowCovers] = useState(false)

    const handleCovers = ()=>{
        setShowCovers(!showCovers)
    }

    const adjust = 1200

    useEffect(()=>{
        console.log("effect")
        const insuranceVariables = {
            V: vehicle.price,
            A: 2025 - aditionalInfo.year,
            E: aditionalInfo.age,
            FG: aditionalInfo.sex === "male" ? 150 * adjust : 0,
            FV: 0.03,
            FA: (2025 - aditionalInfo.year) * (7 * adjust),
            FE: aditionalInfo.age < 30 || aditionalInfo.age >=41 ? aditionalInfo.age * adjust : 0
        }
    
        const calculatedInsurance = (insuranceVariables.V * insuranceVariables.FV) + (insuranceVariables.A * insuranceVariables.FA) +(insuranceVariables.FE) + (insuranceVariables.FG)
        
       const formatoManual = `$${(calculatedInsurance/12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
       setMonthlyPayment(formatoManual)
        
        setInsurancePrice(calculatedInsurance)
    }, [vehicle])


  return (
    <section className='w-full flex flex-col items-center'>

        <img className='w-32 mx-auto my-5' src="https://www.sura.co/documents/43501/0/Logo-SURA-nuevo-azul.svg/6116f642-444a-6516-b331-69cd4e0ddc5e?version=1.0&t=1704406134738" alt="" />

        <div className="flex justify-center flex-wrap gap-3">
            <OpcionCard vehicle={vehicle} monthlyPayment={monthlyPayment} />

            <OpcionCard vehicle={vehicle} monthlyPayment={monthlyPayment} />

            <OpcionCard  vehicle={vehicle} monthlyPayment={monthlyPayment} />
        </div>

        <img src="https://d3t4b9u1ejiabn.cloudfront.net/assets/2024/insurer/logo-mapfre.webp" alt="" />

        <div className="flex justify-center flex-wrap gap-3">
            <OpcionCard vehicle={vehicle} monthlyPayment={monthlyPayment} />

            <OpcionCard vehicle={vehicle} monthlyPayment={monthlyPayment} />

            <OpcionCard  vehicle={vehicle} monthlyPayment={monthlyPayment} />
        </div>

        <img className='my-4' src="https://www.axacolpatria.co/image/layout_set_logo?img_id=44248865&t=1731815538158" alt="" />

        <div className="flex justify-center flex-wrap gap-3">
            <OpcionCard vehicle={vehicle} monthlyPayment={monthlyPayment} />

            <OpcionCard vehicle={vehicle} monthlyPayment={monthlyPayment} />

            <OpcionCard  vehicle={vehicle} monthlyPayment={monthlyPayment} />
        </div>


        
    </section>
  )
}
