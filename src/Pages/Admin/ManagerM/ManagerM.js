import { Button, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import "./managerM.css";
import salesRepApi from '../../../Api/salesRepApi';
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';


function ManagerM() {

  const [managerData, setManagerData] = useState([]);
  const dataFetchedRef = useRef(false);


  const managerDataHandle = async (data)=>{
    data.map((salesRep)=>{
      return setManagerData(salesRepData => [...salesRepData, salesRep.name]);
    })}


  const handleDeleteUser = (id)=>{
      /*call salerep delte api*/
  }
  const handleAddUser= (id)=>{
    salesRepApi.user().create().then(response=>{
      managerDataHandle(response.data)
  }).catch(err=>console.log(err))
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      salesRepApi.user().fetchAll().then(response=>{
        managerDataHandle(response.data)
    }).catch(err=>console.log(err))
  },[]
  );

  return (
    <div className="managerM-container">

        <div className="managerM-header">
        <h1>Manage Managers </h1>
        <div className='button'> 
                    <Link to={"/admin/addManager"}>
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
          <div className="managerM-table-container">
            <table className="managerM-table">
              <thead>
                <tr>
                  <th>manager_Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact No</th>
                  <th colSpan={2}>NIC</th>
                </tr>
              </thead>
              <tbody>
                {/* {managerData.map((manager) => {
                  return [
                    <tr key={manager.id}>
                      <td>{manager.id}</td>
                      <td>{manager.name}</td>
                      <td>{manager.address}</td>
                      <td>{manager.phoneNo}</td>
                      <td>{manager.NIC}</td>
                      <td><IconButton><Delete className='deleteManager'/></IconButton></td>
                    </tr>,
                  ];
                })} */}
                <tr>
                  <td>gg</td>
                  <td>gg</td>
                  <td>gg</td>
                  <td>gg</td>
                  <td>gg</td>
                  <td><IconButton><Delete className='deleteManager'/></IconButton></td>
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

export default ManagerM;

