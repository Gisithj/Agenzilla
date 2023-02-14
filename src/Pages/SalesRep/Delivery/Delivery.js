import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import React, { useEffect, useState } from 'react'
import ordersApi from '../../../Api/ordersApi';
import './delivery.css'

function Delivery() {

  const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        ordersApi
          .orders()
          .fetchAll()
          .then((response) => {
            setOrderList(response.data);
          })
          .catch((err) => console.log(err));

        
      }, []);

  const handleDeliveryDone =()=>{
    
  }

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
                <tr>
              <td>order.orderID</td>
              <td>order.storeID</td>
              <td>order.itemID</td>
              <td colSpan={order.deliveryStaus === "delivered" && 2}>Pending</td>
              <td>{order.deliveyStaus !== "delivered" && <IconButton><TaskAltIcon/></IconButton>}</td>
            </tr>
              ]
            })
          }
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
              <td>Pending</td>
              <td><IconButton onClick={()=>handleDeliveryDone}><TaskAltIcon/></IconButton></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sprite</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Delivery