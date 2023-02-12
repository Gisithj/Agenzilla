import React, { useEffect, useState } from "react";
import "./shops.css";
import storeApi from "../../Api/storeApi";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Shops(props) {
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

  
  const user=props.user;
  return (
    <div className="shops-container">
    <div className='shops-header'>
        <div><h1>Stores</h1></div>
        <div className='button'> 
                    <Link to={`/${user}/addStore`}>
                        {user!=="salesRep" && <Button
                            sx={[{
                                backgroundColor:"#FFAF36",
                                width:'15em',
                                height:'3em',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                            }]}
                            variant="contained">
                               Add a Store
                        </Button>}
                    </Link>
        </div>
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
                    <td>{store.phoneNo}</td>
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
