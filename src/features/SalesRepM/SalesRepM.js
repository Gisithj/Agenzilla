import { Button, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import "./salesRepM.css";
import salesRepApi from '../../Api/salesRepApi';
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';


function SalesRepM(props) {

  const [salesRepData, setSalesRepData] = useState([]);
  const dataFetchedRef = useRef(false);
  const user = props.user

  const salesRepDataHandle = async (data)=>{
    data.map((salesRep)=>{
      return setSalesRepData(salesRepData => [...salesRepData, salesRep.name]);
    })}


  const handleDeleteUser = (id)=>{
      /*call salerep delte api*/
  }
  const handleAddUser= (id)=>{
    salesRepApi.user().create().then(response=>{
      salesRepDataHandle(response.data)
  }).catch(err=>console.log(err))
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      salesRepApi.user().fetchAll().then(response=>{
        salesRepDataHandle(response.data)
    }).catch(err=>console.log(err))
  },[]
  );

  return (
    <div>
      <div className="salesRepM-container">
          <div className="salesRepM-header">
          <h1>Manage Sales Representatives </h1>
          <div className='button'>
                      <Link to={`/${user}/addSalesRep`}>
                          <Button
                              sx={[{
                                  backgroundColor:"#FFAF36",
                                  width:'15em',
                                  height:'3em',
                                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                              }]}
                              variant="contained">
                                 Add SalesRep
                          </Button>
                      </Link>
          </div>
        </div>
            <div className="salesRepM-table-container">
              <table className="salesRepM-table">
                <thead>
                  <tr>
                    <th>SalesRep_Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact No</th>
                    <th colSpan={2}>NIC</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {salesRepData.map((item) => {
                    return [
                      <tr key={item.id}>
                        <td>{item.beverageName}</td>
                        <td>{item.address}</td>
                        <td{item.phoneNo}</td>
                        <td{item.NIC}</td>
                        <td><IconButton><Delete className='deleteSalesRep'/></IconButton></td>
                      </tr>,
                    ];
                  })} */}
                  <tr>
                    <td>gg</td>
                    <td>gg</td>
                    <td>gg</td>
                    <td>gg</td>
                    <td>gg</td>
                    <td><IconButton><Delete className='deleteSalesRep'/></IconButton></td>
                  </tr>
                  <tr>
                    <td>gg</td>
                    <td>gg</td>
                    <td>gg</td>
                    <td>gg</td>
                    <td>gg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    </div>
  )
}

export default SalesRepM

