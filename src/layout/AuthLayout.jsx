import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='bg-base-100'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
