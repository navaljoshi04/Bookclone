import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import About from '../About'

function Abouts() {
  return (
    <div>
      <Navbar/> 
         <div className='min-h-screen'>
             <About/>
         </div>
      <Footer/> 
    </div>
  )
}

export default Abouts
