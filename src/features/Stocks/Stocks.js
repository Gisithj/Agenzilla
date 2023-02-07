import React, { useEffect, useState } from 'react'
import './stocks.css'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import stocksApi from '../../Api/stocksApi';

function Stocks() {

    const [stocksList, setstocksList] = useState([]);
    const user='salesRep';

    useEffect(() => {
        stocksApi
          .item()
          .fetchAll()
          .then((response) => {
            setstocksList(response.data);
          })
          .catch((err) => console.log(err));

        
      }, []);

  return (
    <div className='stocks-container'>
    <div className='stocks-header'>
        <div><h1>Remaining Stocks</h1></div>
        <div className='button'> <Link to={`/${user}/order-placement`}>
                        <Button
                            sx={[{
                                backgroundColor:"#FFAF36",
                                width:'15em',
                                height:'3em',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                            }]}
                            variant="contained">
                               Place a Order
                        </Button>
                    </Link></div>
    </div>
    <div className='stocks-table-container'>

        <div className='detail-group'>
            <table className='stocks-table'>
                <thead>
                    <tr>
                        <th>Batch No</th>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {stocksList.map((item)=>{
                        return[
                        <tr key={item.itemID}>
                            <td>{item.batchID}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                        </tr>
                        ]
                    })}

                    
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
    <div className='stock-cards-container'>
        <div className='stock-cards db'>
            <h3>Most available beverage</h3>
            <h2>Pepsi</h2>
        </div>
        <div className='stock-cards lb'>
            <h3>Least available beverage</h3>
            <h2>Pepsi</h2>
        </div>
        <div className='stock-cards w'>
            <h3>Last dispatched store</h3>
            <h2>Pepsi</h2>
        </div>
    </div>
</div>
  )
}

export default Stocks