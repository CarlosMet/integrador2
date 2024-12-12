
import React from 'react'


import Hero from '../components/Hero'
import { FloatingNav } from '../components/ui/FloatingNav'
import GridCards from '../components/GridCards'
import Footer from '../components/Footer'


import { Link } from "react-router-dom";
import Headers from "../components/Headers";


const Home = () => {
  return (

    <div className='bg-black-100'>
      <FloatingNav navItems={[{name: "about", link: "agregar", icon: ""}]} />      
      <Hero />
      <GridCards />
      <Footer />

   
    </div>
  );
};

export default Home;
