import React, { useEffect } from 'react'
import './dashboard.css'
import {Outlet, useNavigate} from "react-router-dom";
import { useAuthDispatch, useAuthState,doLogout } from '../../../Auth/AuthContext';
import { Button } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';



function Dashboard() {
  const { user: loggedUser} = useAuthState();
  const dispatch = useAuthDispatch();

  let navigate = useNavigate();


  useEffect(()=>{
    if(!loggedUser){
      console.log(loggedUser);
      console.log("not logged in");
      return navigate("/login");
  
    }
  },[])

  return (
   
    <div className='dashboard'>
      <NavBar user ="salesRep"/>
      <Outlet/>
    </div>
  )
}





export default Dashboard