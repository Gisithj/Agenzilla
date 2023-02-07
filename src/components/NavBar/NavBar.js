import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className='nav-bar'>
        
        <Link to={`dashboard`}><div className='nav-bar-item'><HomeIcon fontSize='large'/></div></Link>
        <Link to={`delivery`}><div className='nav-bar-item'><LocalShippingIcon fontSize='large'/></div></Link>
        <Link to={`shops`}><div className='nav-bar-item'><StoreIcon fontSize='large'/></div></Link>
        <Link to={`orders`}><div className='nav-bar-item'><AssignmentIcon fontSize='large'/></div></Link>
        <Link to={`stocks`}><div className='nav-bar-item'><BarChartIcon fontSize='large'/></div></Link>
        <Link to={`profile`}><div className='nav-bar-item'><PersonIcon fontSize='large'/></div></Link> 
    </div>
  )
}

export default NavBar