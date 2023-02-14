import React, { useState } from "react";
import "./addStore.css";
import FormField from "../../components/formField/FormField";
import SuggestComboBox from "../../components/suggest-combo-box/suggestComboBox";
import { Button } from "@mui/material";
import {store} from "../../Api/storeApi";
import { redirect, useNavigate } from "react-router-dom";



function AddStore() {

  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerNIC, setOwnerNIC] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [contactNO, setContactNO] = useState("");
  const [email, setEmail] = useState("");
  const [businessRegNo, setBusinessRegNo] = useState("");

  
  const handleStoreName = (value) => {
    setStoreName(value);
  };
  const handleOwnerName = (value) => {
    setOwnerName(value);
  };
  const handleArea = (value) => {
    setArea(value);
  };
  const handleAddress = (value) => {
    setAddress(value);
  };
  const handleContactNO = (value) => {
    setContactNO(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleBusinessRegNo = (value) => {
    setBusinessRegNo(value);
  };
  const handleOwnerNIC = (value) => {
    setOwnerNIC(value);
  };

  const navigate = useNavigate();

  const handleAddStore = ()=>{
    const storeN = {
      "name": storeName,
      "phoneNo": contactNO,
      "ownerName": ownerName,
      "address": address,
      "bRegNo": businessRegNo
    }
    
    store()
    .create(storeN)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
    
    navigate("/manager/shops");
  }


  return (
    <div className="storeM-container">
      <div className="storeM-header">
        <h1>Add a Store </h1>
      </div>
      <div className="storeM-form-container">
        <form>
          <div className="storeM-form">
            <div className="field-combined">              
              <FormField
                type="text"
                placeHolder ="Store name"
                width = {300}
                handleChange={handleStoreName}
              />
              <FormField
                type="text"
                placeHolder ="Owner name"
                width = {300}
                handleChange={handleOwnerName}
              />
            </div>
            
          <div className="field-combined">
          <FormField
                type="text"
                placeHolder ="Contact no"
                width = {300}
                handleChange={handleContactNO}
              />
            
            <FormField
                  type="email"
                  placeHolder ="email"
                  width = {300}
                  handleChange={handleEmail}
                  required ="true"
              />
          </div>
            <div className="field-combined">
              <FormField
                type="text"
                placeHolder ="Owner's NIC"
                width = {300}
                handleChange={handleOwnerNIC}
              />
              <FormField
                  type="text"
                  placeHolder ="Business Reg-No"
                  width = {300}
                  handleChange={handleBusinessRegNo}
              />      
                         
            </div>
            <FormField 
              type="text" 
              placeHolder ="Address"
              width = {640}       
              handleChange={handleAddress}       
            />
            <div className="field-combined">
            
              <SuggestComboBox
              name="Area"
              handleChange={handleArea}
              storeList={["piliyandala"]}
            />

            </div>
             <div className="addStoreBtn">
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
              onClick={() => handleAddStore()}
            >
              Add a Store
            </Button>
          </div>
        
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStore;
