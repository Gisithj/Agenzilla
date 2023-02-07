import React, { useState } from 'react'
import FormField from '../../components/formField/FormField'
import Button from "@mui/material/Button";
import './Login.css';
import logo from '../../assests/img/logo.png';
import { useNavigate} from 'react-router-dom';
import { useAuthState,useAuthDispatch,doLogin } from '../../Auth/AuthContext';

function Login() {
    let navigate = useNavigate();
    const { user: loggedUser, status, error } = useAuthState();
    const dispatch = useAuthDispatch();
  
    const [user, setUser] = React.useState("");
    // const inputRef = React.useRef(null);

    const[username,setUsername] = useState("");
    // const[password,setPassword] = useState("")
  
    // React.useEffect(() => {
    //   if (inputRef.current) {
    //     inputRef.current.focus();
    //   }
    // }, []);
  
    if (loggedUser) {
        console.log(loggedUser);
        return navigate("/salesRep");
        
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      doLogin(dispatch, username);
      setUser("");
    };

    

    const handleUsernameInput = (value)=>{
        setUsername(value)
    }

  return (
    <div className='login_bg'>
        <div className='login_container'>
            <div className='login_logo_container'>
                <img src={logo} alt='Agenzilla logo' className='login_logo'/>
            </div>
            <form className='form_container'>
                <FormField 
                placeHolder="Username"
                color="blue"
                handleChange={handleUsernameInput}
                />
                <FormField placeHolder="Password" type="password" />
                    <Button
                        sx={[{
                            backgroundColor:"#1976d2",
                            width:'15em',
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                        }]}
                        variant="contained"
                        onClick={handleSubmit}
                        >
                            Login
                    </Button>
            </form>
        </div>
    </div>
  )
}

export default Login