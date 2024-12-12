import React, { useEffect, useState } from 'react'
// import { vehiclesInfo } from '../utils/tempDB'
import { vehiclesInfo } from '../../utils/tempDB'

export default function Select({getSelectedCar}) {

    const setSelectedCar = (e)=>{        
        const target = e.target.value
        const selectedCar = vehiclesInfo.filter((car)=>{
            return car.model === target
        })
        getSelectedCar(selectedCar[0])
    }

  return (    
        <select className='w-full border border-gray-600 px-2 py-[10px] rounded-lg' onChange={setSelectedCar} name="" id="">
            {vehiclesInfo.sort((a, b) => a.model.localeCompare(b.model))            
            .map((vehicle)=>{
                return(
                    <option value={vehicle.model} key={vehicle.id}>{vehicle.model}</option>
                )
            })}
        </select>   
  )
}
