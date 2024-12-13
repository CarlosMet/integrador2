import React, { useRef, useState } from 'react'
import Select from './Select'
import MagicButton from './ui/MagicButton'

export default function Form({getProgress, getUserVehicle}) {

    const [type, setType] = useState(null)
    const [formSection, setFormSection] = useState(1)
    const [selectedCar, setSelectedCar] = useState({})

    const plateRef = useRef(null)
    const cityRef = useRef(null)
    
    const nextButtonHandler = ()=>{
        const plate = plateRef.current.value
        const city = cityRef.current.value

        if(plate !== "" && city !== ""){
            setFormSection(2)
            getProgress(1/3)
        }              
    }

    const getSelectedCar = (car)=>{
        getUserVehicle(car)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        getProgress(2/3)
    }

  return (
    <form onSubmit={submitHandler} action="" className=' flex flex-col md:flex-row md:justify-center mt-6 lg:mt-10 xl:mt-16 px-16 lg:px-0 rounded-xl w-11/12 mx-auto lg:w-10/12 xl:w-9/12 py-4 lg:py-16 bg-slate-900 bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg z-20 relative'>

        <div className='absolute bg-purple-400 w-72 h-64  rounded-full backdrop-blur-lg blur-3xl -z-20 top-0 '> </div>   
        <div className='absolute bg-pink-400 w-36 h-36 top-1/2 left-1/2 rounded-full backdrop-blur-lg blur-2xl opacity-50 -z-10 top-0 '> </div>    

        

        {formSection === 1 &&
            <>
            <div className='flex flex-col items-center md:items-start md:pr-8 xl:pr-11 2xl:pr-16'>
                <p className='text-xl font-semibold text-slate-400'>Empecemos por los</p>
                <p className='text-3xl font-bold text-slate-300 tracking-tighter'>Datos principales de tu vehículo</p>
                <img src="car-view.png" alt="" />
            </div>
            <div>
                <div>
                    <label className='text-slate-400' htmlFor="">Número de placa</label>
                    <input ref={plateRef} name="placa" className='border border-gray-600 rounded-lg py-2 w-full mb-2 bg-gray-400/10 focus:outline-none px-3' type="text"  id="" />
                </div>

                <div>
                    <label className='text-slate-400' htmlFor="">Ciudad de circulación</label>
                    <input ref={cityRef} name='ciudad' className='border border-gray-600 rounded-lg py-2 w-full mb-2 bg-gray-400/10 focus:outline-none px-3' type="text" id="" />
                </div>

                <p className='text-slate-400 font-semibold text-lg mb-3'>Que uso le das a tu vehículo</p>
                <div className='flex gap-4 w-full justify-center mb-4'>
                    <label className='text-slate-400' htmlFor="">Particular <input type="radio" name="uso" id="" /></label>
                    <label className='text-slate-400' htmlFor="">Público <input type="radio" name="uso" id="" /></label>
                </div>

                <p className='text-slate-400 mb-4'>Al continuar <span className='text-slate-200'>aceptas los <a className='font-semibold underline' href="#">términos y condiciones</a></span></p>
                <button onClick={nextButtonHandler} className='w-full' type='button' ><MagicButton title={"Siguiente"} size={"full"} /></button>
                
            </div>
            </>
        
        }

        {
            formSection === 2 &&
            <div>
                <div className='flex flex-col items-center md:items-start md:pr-8 xl:pr-11 2xl:pr-16'>
                    <p className='text-xl font-semibold text-slate-400'>Completemos los</p>
                    <p className='text-3xl font-bold text-slate-200 tracking-tighter mb-8'>Datos del tomador</p>
                    <img src="user-icon.png" alt="" />
                </div>
                <div>

                <div className='flex justify-between'>
                    <div className='w-5/12'>
                        <label className='text-gray-600' htmlFor="anio-vehiculo">Marca del vehículo</label>
                        <input 
                                name="anioVehiculo" 
                                className='border border-gray-600 bg-gray-400/10 rounded-lg py-2 w-full mb-2' 
                                type="" 
                                id="anio-vehiculo"                                 
                        />
                    </div>
                    <div className='w-[54%]'>
                            <p className='text-gray-600'>Vehículo</p>
                            <Select getSelectedCar={getSelectedCar} />
                    </div>
                </div>

                <div className="flex gap-2 w-full justify-between">
                        <div className='w-7/12'>
                            <label className='text-gray-600' htmlFor="nombre-tomador">Año del vehículo</label>
                            <input 
                            name="nombreTomador" 
                            className='border border-gray-600 bg-gray-400/10 rounded-lg py-2 w-full mb-2' 
                            type="text" 
                            id="nombre-tomador" 
                            
                            />
                        </div>

                        <div>
                            <label className='text-gray-600' htmlFor="apellidos-tomador">Ciudad de circulación</label>
                            <input 
                            name="apellidosTomador" 
                            className='border border-gray-600 bg-gray-400/10 rounded-lg py-2 w-full mb-2' 
                            type="text" 
                            id="apellidos-tomador" 
                            
                            />
                        </div>
                    </div>
                    

                    <div className="flex gap-2">
                        <div className='w-8/12'>
                        <label className='text-gray-600' htmlFor="documento-tomador">Kilometraje</label>
                        <input 
                            name="documentoTomador" 
                            className='border border-gray-600 bg-gray-400/10 rounded-lg py-2 w-full mb-2' 
                            type="text" 
                            id="documento-tomador"                          
                        />
                        </div>

                        <div>
                        <label className='text-gray-600' htmlFor="edad-tomador">Edad del tomador de la póliza</label>
                        <input 
                            name="edadTomador" 
                            className='border border-gray-600 rounded-lg py-2 w-full mb-2 bg-gray-400/10 text-slate-300' 
                            type="date" 
                            id="edad-tomador"                          
                        />
                        </div>
                    </div>

                    

                    <div>
                        <p className='text-gray-800 font-semibold text-lg mb-3'>Género del tomador</p>
                        <div className='flex gap-4 w-full justify-center mb-2'>
                            <label className='text-gray-600' htmlFor="masculino">
                            Masculino <input type="radio" name="generoTomador" id="masculino" value="masculino" />
                            </label>
                            <label className='text-gray-600' htmlFor="femenino">
                            Femenino <input type="radio" name="generoTomador" id="femenino" value="femenino" />
                            </label>
                        </div>
                    </div>              
             
                  
                    <button                                                
                        type='submit' 
                        className='w-full mb-4 z-30'>
                        <MagicButton size={"full"} title={"Cotizar"} />
                    </button>

                    
                </div>
            </div>
        }
        
    </form>
  )
}
