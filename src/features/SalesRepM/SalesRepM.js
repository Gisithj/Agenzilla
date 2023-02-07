import { Button, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import "./salesRepM.css";
import salesRepApi from '../../Api/salesRepApi';
import { Link } from 'react-router-dom';


function SalesRepM() {

  const [salesRepData, setSalesRepData] = useState([]);
  const dataFetchedRef = useRef(false);


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
    <div className="salesRepM-container">

        <div className="salesRepM-header">
        <h1>Manage Sales Representatives </h1>
        <div className='button'> 
                    <Link to={"/manager/addSalesRep"}>
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
                  <th>NIC</th>
                </tr>
              </thead>
              <tbody>
                {/* {salesRepData.map((item) => {
                  return [
                    <tr key={item.id}>
                      <td>{item.beverageName}</td>
                      <td>{item.beverageName}</td>
                      <td className="lastColumnWithDeleteIcon">
                        <div>{item.quantity}</div>
                        <div>
                          <IconButton variant="outlined" onClick={()=>handleDeleteUser(item.id)} >
                            <DeleteIcon className="deleteOrderListItem"/>
                          </IconButton>
                        </div>
                      </td>
                    </tr>,
                  ];
                })} */}
                <tr>
                  <td>gg</td>
                  <td>gg</td>
                  <td>gg</td>
                  <td>gg</td>
                  <td>gg</td>
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
  )
}

export default SalesRepM

