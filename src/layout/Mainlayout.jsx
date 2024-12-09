import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Mainlayout() {
   useEffect(() => {
    AOS.init()
  })
  return (
    <div className='bg-base-100'>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}
