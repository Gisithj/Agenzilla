import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./managerM.css";
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { manager, managerDelete } from '../../../Api/managerApi';


function ManagerM() {

  const [managerData, setManagerData] = useState([]);


  const managerDataHandle = async (data)=>{
    data.map((manager)=>{
      return setManagerData((managerData) => [...managerData, manager]);
    })}


    const handleDeleteManager = (id) => {
      setManagerData((prevData) => prevData.filter((manager) => manager.managerID !== id));
      managerDelete().delete(id).catch(err=>console.log(err));
      console.log(managerData);
    }
 

  useEffect(() => {
      manager().fetchAll().then(response=>{
        console.log(response);
        setManagerData(response.data)
    }).catch(err=>console.log(err))
  });

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
                {managerData.map((manager) => {
                  return [
                    <tr key={manager.managerID}>
                      <td>{manager.managerID}</td>
                      <td>{manager.fName}</td>
                      <td>{manager.address}</td>
                      <td>{manager.phoneNo}</td>
                      <td>{manager.nic}</td>
                      <td><IconButton onClick={()=>handleDeleteManager(manager.managerID)}><Delete className='deleteManager'/></IconButton></td>
                    </tr>,
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default ManagerM;

