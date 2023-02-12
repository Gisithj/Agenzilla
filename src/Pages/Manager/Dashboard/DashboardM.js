import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../../components/NavBar/NavBar'

function DashboardM(props) {
  return (
    <div className='dashboard'>
      <NavBar user={props.user}/>
      <Outlet/>
    </div>
  )
}

export default DashboardM