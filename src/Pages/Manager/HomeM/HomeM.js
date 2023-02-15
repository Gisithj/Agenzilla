import React, { useEffect, useState } from "react";
import { BarChart } from "../../../features/Charts/BarChaart";
import { UserData } from "../../../features/Charts/data";
import { DoughnutChart } from "../../../features/Charts/DoughnutChart";
import { LineChart } from "../../../features/Charts/LineChart/LineChart";
import { PieChart } from "../../../features/Charts/PieChart/PieChart";
import "./home.css";

function HomeM() {
  // const[topSelling,setTopSeeling] = useState([]);
  // const[topSalesRep,setTopSalesRep] = useState([]);
  // const[totalSales,setTotalSales] = useState();
  // const[totalOrders,setTotalOrders] = useState();

  // const handleTopSelling = (value)=>{
  //   setTopSeeling(value)
  // }
  // useEffect(()=>{

  // })

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "No of Order per Day",
      },
    },
  };

  const labels = UserData.map((data) => data.year);
  const dataSet = UserData.map((data) => data.userGain);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Orders",
        data: UserData.map((data) => data.userGain),
        borderColor: "#FFAF36",
        backgroundColor: "rgb(255,175,54,0.5)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Blue", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

   const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const barLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
 const barData = {
  labels:barLabels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
  };
  

  // const pieData = {
  //   labels: ["Coke", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="left-elements">
          <div className="top-elements">
            <div className="orders-summary">
            <div className="orders-summary-content">
                  <h3>Total Sales</h3>
                </div>
              <div className="orders-summary-content">
                
                  <DoughnutChart
                    data={doughnutData}
                    options={{ maintainAspectRatio: false }}
                  />
              </div>
            </div>
            <div className="top-sellings">
              <div className="top-sellings-header">
                <h3>Top Selling Products</h3>
              </div>
              <div className="top-selling-content-header">
                <p>Beverage name</p>
                <p>Qty</p>
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
            <div class="sales-summary">
            
              <div class="sales-summary-content">
                <h3>Daily Summary</h3>
              </div>
              <div class="sales-summary-content">
                <h6>Total Sales</h6>
                <p>Rs.100,000.00</p>
              </div>
              <div class="sales-summary-content">
                <h6>Total Orders</h6>
                <p>1000</p>
              </div>
            </div>
          </div>
          <div className="top-salesreps-container">
            <table className="top-salesreps-table">
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
              </tbody>
            </table>
          </div>
        </div>
        <div className="right-elements">
          <div className="order-chart">
            <LineChart options={options} data={data} />
          </div>
          {/* <div className="orderCompletion-chart">
            <DoughnutChart
              data={doughnutData}
              height={100}
              options={{ maintainAspectRatio: false }}
            />
          </div> */}
          <div className="orderCompletion-chart">
            <BarChart data={barData} options={BarOptions}/>
            {/* <PieChart data={pieData} options={{ maintainAspectRatio: false }}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeM;
