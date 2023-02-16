import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./BatchM.css";
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { Batch } from '../../Api/stocksApi';
// import { manager, managerDelete } from '../../../Api/managerApi';


function BatchM(props) {

  const [batchData, setBatchData] = useState([]);


  const batchDataHandle = async (data)=>{
    data.map((batch)=>{
      return setBatchData((batchData) => [...batchData, batch]);
    })}


    // const handleDeleteBatch = (id) => {
    //   setBatchData((prevData) => prevData.filter((batch) => batch.batchID !== id));
     
    //     orderDelete()
    //       .delete(orderID)
    //       .catch((err) => console.log(err));
    //   }
    // }
 

  useEffect(() => {
      Batch().fetchAll().then(response=>{
        console.log(response);
        setBatchData(response.data)
    }).catch(err=>console.log(err))
  });

  return (
    <div className="managerM-container">

        <div className="managerM-header">
        <h1>Manage Batches </h1>
        <div className='button'> 
                    <Link to={`/${props.user}/addBatch`}>
                        <Button
                            sx={[{
                                backgroundColor:"#FFAF36",
                                width:'15em',
                                height:'3em',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                            }]}
                            variant="contained">
                               Add Batch
                        </Button>
                    </Link>
        </div>
      </div>
          <div className="managerM-table-container">
            <table className="managerM-table">
              <thead>
                <tr>
                  <th>Batch_ID</th>
                  <th>Company name</th>
                  <th>Manager_ID</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {batchData.map((batch) => {
                  return [
                    <tr key={batch.batchID}>
                      <td>{batch.batchID}</td>
                      <td>{batch.company}</td>
                      <td>{batch.managerID}</td>
                      <td>{batch.date}</td>
                      {/* <td><IconButton onClick={()=>handleDeleteBatch(batch.managerID)}><Delete className='deleteManager'/></IconButton></td> */}
                    </tr>,
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default BatchM;

