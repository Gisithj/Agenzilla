import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthState } from '../../../Auth/AuthContext';
import NavBar from '../../../components/NavBar/NavBar'

function DashboardM(props) {

  const { user: loggedUser} = useAuthState();

  let navigate = useNavigate();


  useEffect(()=>{
    if(!loggedUser){
      console.log(loggedUser);
      console.log("not logged in");
      return navigate("/login");
  
    }else if(loggedUser.managerID){
      return navigate(`/${props.userS}/dashboard`);
    }
  },[])

  return (
    <div className='dashboard'>
      <NavBar user={props.user}/>
      <Outlet/>
    </div>
  )
}

export default DashboardM