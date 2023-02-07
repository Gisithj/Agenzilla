import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SuggestComboBox(props) {
  
  const options = props.storeList;
  const options1 = ['The Godfather', 'Mountain-Dew','Pulp Fiction','Inception','Fight','Knight','304F87'];

  const handleOnChange = (value)=>{
    props.handleChange(value);
  }
 

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.name} />}      
      onChange={(e,newValue)=>{handleOnChange(newValue)}}
    />
  );
}


export default SuggestComboBox;