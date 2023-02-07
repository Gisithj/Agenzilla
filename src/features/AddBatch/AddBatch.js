import { Button } from '@mui/material'
import React from 'react'
import FormField from '../../components/formField/FormField'
import SuggestComboBox from '../../components/suggest-combo-box/suggestComboBox'
import "./AddBatch.css"

function AddBatch() {
  return (
    <div className="AddBatch-container">
      <div className="AddBatch-header">
        <h1>Add a Batch </h1>
      </div>
      <div className="AddBatch-form-container">
        <form>
          <div className="AddBatch-form">
            <div className="field-combined">              
              <FormField
                type="text"
                placeHolder ="Company name"
                width = {300}
              />
              <FormField
                type="date"
                placeHolder =""
                width = {300}
              />
            </div>
           
            
           
             <div className="orderPlacementBtn">
            <Button
              sx={[
                {
                  backgroundColor: "#FFAF36",
                  width: "15em",
                  height: "3em",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                },
              ]}
              variant="contained"
            >
              Place Order
            </Button>
          </div>
        
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBatch