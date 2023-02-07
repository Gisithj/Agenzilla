import React from 'react'
import './delivery.css'

function Delivery() {
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
              <th>delivery status</th>
            </tr>     
            
          </thead>
          <tbody>
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