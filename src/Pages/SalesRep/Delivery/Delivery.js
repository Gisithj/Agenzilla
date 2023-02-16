import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import React, { useEffect, useState } from 'react'
import { orderDelivered, orders } from '../../../Api/ordersApi';
import './delivery.css'

function Delivery() {

  const [orderList, setOrderList] = useState([]);

  const handleDeliveryDone = (id) => {
    console.log(id);
    setOrderList(orderList.filter((a) => a.id !== id));
    orderDelivered().create(id).catch((err=>console.log(err)))
  };

    useEffect(() => {
          orders()
          .fetchAll()
          .then((response) => {
            setOrderList(response.data);
          })
          .catch((err) => console.log(err));

        
      }, []);



  return (
    <div className="delivery-container">
    <div><h1>Deliveries</h1></div>
    <div className="delivery-table-container">
      <div className="detail-group">
        <table className="delivery-table">
          <thead>
            <tr>
              <th>OrderId</th>
              <th>Store name</th>
              <th>Address</th>
              <th colSpan={2}>delivery status</th>
            </tr>     
            
          </thead>
          <tbody>
          {
            orderList.map((order)=>{
              return[
                <tr key={order.orderID}>
              <td>{order.orderID}</td>
              <td>{order.storeID}</td>
              <td>{order.itemID}</td>
              <td colSpan={order.isDelivered ==="false" ? 2:undefined}>Pending</td>
              <td>{order.isDelivered === "false" && <IconButton onClick={()=>handleDeliveryDone(order.orderID)}><TaskAltIcon/></IconButton>}</td>
            </tr>
              ]
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Delivery