import React from 'react'
import './delivery.css'
import { Button } from '@mui/material';
import { useAuthDispatch, useAuthState,doLogout } from '../../../Auth/AuthContext';
import { LineChart } from '../../../features/Charts/LineChart/LineChart';
import { UserData } from '../../../features/Charts/data';

function Home() {

  const dispatch = useAuthDispatch();
  const handleLogOut = ()=>{
    doLogout(dispatch)
  }


   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js ine Chart',
      },
    },
  };
  
  const labels = UserData.map((data)=>data.year)
  const dataSet = UserData.map((data)=>data.userGain)
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: UserData.map((data)=>data.userGain),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    
    <div className=''>
    <LineChart 
        options={options}
        data={data}
    />
    <Button onClick={handleLogOut}>Log out</Button>
  </div>
  )
}

export default Home