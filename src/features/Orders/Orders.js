import React, { useEffect, useState } from "react";
import "./orders.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ordersApi from "../../Api/ordersApi";

function Orders(props) {

  const [orderList, setOrderList] = useState([]);
  const user=props.user;
  
  useEffect(() => {
    ordersApi
      .orders()
      .fetchAll()
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-container">
      <div className='orders-header'>
        <div><h1>Orders</h1></div>
        <div className='button'> 
                    <Link to={`/${user}/order-placement`}>
                        <Button
                            sx={[{
                                backgroundColor:"#FFAF36",
                                width:'15em',
                                height:'3em',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                            }]}
                            variant="contained">
                               Place a Order
                        </Button>
                    </Link>
        </div>
    </div>
      <div className="orders-table-container">
        <div className="detail-group">
          <table className="orders-table">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Store name</th>
                <th>Date</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order)=>{
                return[<tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{order.storeName}</td>
                <td>{order.date}</td>
                <td>{order.date}</td>
                <td>{order.date}</td>
              </tr>]
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders
