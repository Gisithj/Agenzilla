import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../../components/NavBar/NavBar'

function DashboardM() {
  return (
    <div className='dashboard'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardM