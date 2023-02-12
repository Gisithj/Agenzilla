import React from "react";
import TextField from "@mui/material/TextField";
import "./FormField.css";

function FormField(props) {

  const handleInputChange = (inputValue) =>{
    console.log(inputValue);
    props.handleChange(inputValue);
  }
  
  return (
    <div>
      <TextField
        sx={[
          {
            "& .MuiOutlinedInput-root:hover": {
              color: "#4979D1",
              "& > fieldset": {
                color: "#4979D1",
                borderColor: "#4979D1",
              },
            },
            
          },
          {width:props.width},
        ]}
        id={props.type ? "outlined-password-input" : "outlined-input"}
        label={props.placeHolder}
        type={props.type ? props.type : ""}
        autoComplete="current-password"
        className="FormField"
        onChange={(e)=>{handleInputChange(e.target.value)}}
        required = {props.required?props.required:""}
      />
    </div>
  );
}

export default FormField;
