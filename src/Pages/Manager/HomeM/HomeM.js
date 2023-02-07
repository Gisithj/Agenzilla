import React, { useEffect, useState } from "react";
import { UserData } from "../../../features/Charts/data";
import { LineChart } from "../../../features/Charts/LineChart/LineChart";
import "./home.css";

function HomeM() {
  const[topSelling,setTopSeeling] = useState([]);
  const[topSalesRep,setTopSalesRep] = useState([]);
  const[totalSales,setTotalSales] = useState();
  const[totalOrders,setTotalOrders] = useState();

  const handleTopSelling = (value)=>{
    setTopSeeling(value)
  }
  useEffect(()=>{
    
  })


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'No of Order per Day',
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
        label: 'Orders',
        data: UserData.map((data)=>data.userGain),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="home-container">
      
      <div className="left-elements">
      <div className="home-header">
        <h1>Dashboard</h1>
      </div>
        <div class="top-elements">
          <div className="summary">
            <div className="summary-content">
              <div class="summary-sales">
                <h3>Total Sales</h3>
                <p>Rs.100,000.00</p>
              </div>
              <div class="summary-quantity">
                <h3>Total Orders</h3>
                <p>1000</p>
              </div>
            </div>
          </div>
          <div className="top-sellings">
            <div class="top-sellings-header">
              <h3>Top Selling Products</h3>
            </div>
            <div className="top-selling-content">
              <p>Sprite</p>
              <p>800</p>
            </div>
            <div className="top-selling-content">
              <p>Sprite</p>
              <p>800</p>
            </div>
          </div>
        </div>
        <div className="top-salesreps-container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>No of Orders</th>
                <th>Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Nipun</td>
                <td>1000</td>
                <td>Piliyandala</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Nipun</td>
                <td>1000</td>
                <td>Piliyandala</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Nipun</td>
                <td>1000</td>
                <td>Piliyandala</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Nipun</td>
                <td>1000</td>
                <td>Piliyandala</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Nipun</td>
                <td>1000</td>
                <td>Piliyandala</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
      <div className="right-elements">
        
        <div className="order-chart">
        <LineChart 
        options={options}
        data={data}
        height={200}
        
    />
        </div>
      </div>
    </div>
  );
}

export default HomeM;
