
import React from 'react'


import Hero from '../components/Hero'
import { FloatingNav } from '../components/ui/FloatingNav'
import GridCards from '../components/GridCards'
import Footer from '../components/Footer'


import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import Navbar from '../components/Navbar'


const Home = () => {
  return (

    <div className='bg-slate-950 relative'>
      <Navbar />
      <Hero />
      <GridCards />
      <Footer />

   
    </div>
  );
};

export default Home;
