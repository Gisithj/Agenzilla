import React, { useState } from "react";
import "./addSalesRep.css";
import FormField from "../../components/formField/FormField";
import SuggestComboBox from "../../components/suggest-combo-box/suggestComboBox";
import { Button } from "@mui/material";
import { salesRepRegistration } from "../../Api/registerUserApi";
import { useNavigate } from "react-router-dom";

function AddSalesRep(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [userName, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
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

  const navigate = useNavigate();
  const handleAddSalesRep = ()=>{
    const saleRep = {
      "area":area,
      "userName": userName,
      "fName": fName,
      "lname": lName,
      "address": address,
      "phoneNo": contactNO,
      "nic": nic,
      "email": email,      
      "password":password
    }

    salesRepRegistration()
    .create(saleRep)
    .then((response)=>{
      console.log(response);
    })
    .catch((err) => console.log(err));

    navigate(`/${props.user}/manageSalesRep`);
  }



  return (
    <div className="salesRepAdd-container">
      <div className="salesRepAdd-header">
        <h1>Add Sales Representatives </h1>
      </div>
      <div className="salesRepAdd-form-container">
        <form>
          <div className="salesRepAdd-form">
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
              
            <SuggestComboBox
              name="Area"
              handleChange={handleArea}
              storeList={["piliyandala"]}
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
             <div className="salesRepAddBtn">
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
              Add Sales Rep
            </Button>
          </div>
        
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSalesRep;
