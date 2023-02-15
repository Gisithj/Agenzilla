import React, { useState } from "react";
import "./addManger.css";
import { Button } from "@mui/material";

import FormField from "../../../components/formField/FormField";
import { managerRegistration } from "../../../Api/registerUserApi";
import { useNavigate } from "react-router-dom";
function AddManger() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [userName, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contactNO, setContactNO] = useState("");
  const [email, setEmail] = useState("");

  
  const handleFname = (value) => {
    setFName(value);
  };
  const handleLname = (value) => {
    setLName(value);
  };
  const handleUsername = (value) => {
    setUsername(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };
  const handleNic = (value) => {
    setNic(value);
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
  const navigate = useNavigate();

  const handleAddSalesRep = ()=>{
    const saleRep = {
      "userName": userName,
      "fName": fName,
      "lname": lName,
      "address": address,
      "phoneNo": contactNO,
      "nic": nic,
      "email": email,
      "password":password
    }
    managerRegistration().create(saleRep).catch((err) => console.log(err));
    navigate("/admin/managers");
  }

  console.log(userName,password,nic);


  return (
    <div className="addManager-container">
      <div className="addManager-header">
        <h1>Add Manger </h1>
      </div>
      <div className="addManager-form-container">
        <form>
          <div className="addManager-form">
            <div className="field-combined">              
              <FormField
                type="text"
                placeHolder ="First name"
                width = {300}
                handleChange={handleFname}
              />
              <FormField
                type="text"
                placeHolder ="Last name"
                width = {300}
                handleChange={handleLname}
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
              />
          </div>
            <div className="field-combined">
              <FormField
                type="text"
                placeHolder ="NIC no"
                width = {300}
                handleChange={handleNic}
              />
              
            </div>
            <FormField 
              type="text" 
              placeHolder ="Address"
              width = {640}       
              handleChange={handleAddress}       
            />
            <div className="field-combined">
            <FormField
                  type="text"
                  placeHolder ="Username"
                  width = {300}
                  handleChange={handleUsername}
              />
               <FormField
                  type="text"
                  placeHolder ="Password"
                  id={"outlined-password-input"}
                  width = {300}
                  handleChange={handlePassword}
              />

            </div>
             <div className="addManagerBtn">
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
              onClick={() => handleAddSalesRep()}
            >
              Add Manager
            </Button>
          </div>
        
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddManger;
