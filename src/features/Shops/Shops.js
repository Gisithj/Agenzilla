import React, { useEffect, useState } from "react";
import "./shops.css";
import storeApi from "../../Api/storeApi";
import axios from "axios";

function Shops() {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    storeApi
      .store()
      .fetchAll()
      .then((response) => {
        setStoreList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shops-container">
      <div>
        <h1>Store Details</h1>
      </div>
      <div className="shops-table-container">
        <div className="detail-group">
          <table className="shops-table">
            <thead>
              <tr>
                <th>StoreId</th>
                <th>Store name</th>
                <th>Owner name</th>
                <th>Address</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {storeList.map((store) => {
                return [
                  <tr key={store.storeID}>
                    <td>{store.storeID}</td>
                    <td>{store.name}</td>
                    <td>{store.ownerName}</td>
                    <td>{store.address}</td>
                  </tr>
                ];
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Shops;
