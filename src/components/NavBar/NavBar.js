import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import { NavLink} from "react-router-dom";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function NavBar(props) {
  return (
    <div className='nav-bar'>
        
        {props.user !=="salesRep" && <NavLink to={`dashboard`} 
                    className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
                    <div className='nav-bar-item'><HomeIcon fontSize='large'/></div>
        </NavLink>}
        
        {props.user ==="admin" && <NavLink to={`managers`}><div className='nav-bar-item'><ManageAccountsIcon fontSize='large'/></div></NavLink>}
        {props.user !=="salesRep" && <NavLink to={`batches`}><div className='nav-bar-item'><CorporateFareIcon fontSize='large'/></div></NavLink>}
        {props.user !=="salesRep" && <NavLink to={`manageSalesRep`}><div className='nav-bar-item'><GroupsIcon fontSize='large'/></div></NavLink>}
        {/* {props.user !=="salesRep" && <NavLink to={`manageSales`}><div className='nav-bar-item'><InsightsIcon fontSize='large'/></div></NavLink>} */}
        <NavLink to={`stocks`}><div className='nav-bar-item'><BarChartIcon fontSize='large'/></div></NavLink> 
        {props.user ==="salesRep" && <NavLink to={`delivery`}><div className='nav-bar-item'><LocalShippingIcon fontSize='large'/></div></NavLink>}              
        <NavLink to={`shops`}><div className='nav-bar-item'><StoreIcon fontSize='large'/></div></NavLink>
        <NavLink to={`orders`}><div className='nav-bar-item'><AssignmentIcon fontSize='large'/></div></NavLink>        
        <NavLink to={`profile`}><div className='nav-bar-item'><PersonIcon fontSize='large'/></div></NavLink> 


        {/* <NavLink to={`dashboard`} 
                    className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
                    <HomeIcon fontSize='large'/>
        </NavLink>
        {props.user !=="salesRep" && 
            <NavLink to={`manageSalesRep`}
                className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }
            >
                <div className='nav-bar-item'><GroupsIcon fontSize='large'/></div>
            </NavLink>}

        {props.user ==="manager" && 
            <NavLink to={`manageSales`}
              className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
                <div className='nav-bar-item'><InsightsIcon fontSize='large'/></div>
            </NavLink>}
            
        {props.user ==="salesRep" && 
            <NavLink to={`delivery`}
                className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
                <div className='nav-bar-item'><LocalShippingIcon fontSize='large'/></div>
            </NavLink>}

        <NavLink to={`shops`}
            className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
            <div className='nav-bar-item'><StoreIcon fontSize='large'/></div>
        </NavLink>

        <NavLink to={`orders`}
            className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
            <div className='nav-bar-item'><AssignmentIcon fontSize='large'/></div>
        </NavLink>

        <NavLink to={`stocks`}
            className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
            <div className='nav-bar-item'><BarChartIcon fontSize='large'/></div>
        </NavLink>

        <NavLink to={`profile`}
            className={({ isActive, isPending }) =>
                      isActive? "activeNavItem": isPending? "pending": ""
                    }>
            <div className='nav-bar-item'><PersonIcon fontSize='large'/></div>
        </NavLink>  */}




    </div>
  )
}

export default NavBar