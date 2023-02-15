import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./salesRepM.css";
import  { salesRep, salesRepDelete } from '../../Api/salesRepApi';
import { Link} from 'react-router-dom';
import { Delete } from '@mui/icons-material';


function SalesRepM(props) {
  const [salesRepData, setSalesRepData] = useState([]);

  useEffect(() => {
    salesRep()
      .fetchAll()
      .then((response) => {
        setSalesRepData(response.data);
      })
      .catch((err) => console.log(err));
  });

  
  const user=props.user;

  const handleDeleteSalesRep = (id)=>{
    setSalesRepData((prevData) => prevData.filter((salesRep) => salesRep.salesRepID !== id));
    salesRepDelete().delete(id).catch(err=>console.log(err));
  }
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
                {salesRepData.map((rep) => {
                  console.log(rep)
                  return [                      
                    <tr key={rep.salesRepID}>
                      <td>{rep.fName}</td>
                      <td>{rep.address}</td>
                      <td>{rep.phoneNo}</td>
                      <td>{rep.nic}</td>
                      <td><IconButton onClick={()=>handleDeleteSalesRep(rep.salesRepID)}><Delete className='deleteSalesRep'/></IconButton></td>
                    </tr>,
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>
  </div>

  );
}

export default SalesRepM;


