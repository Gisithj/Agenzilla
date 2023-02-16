import React, { useState } from 'react'
import FormField from '../../components/formField/FormField';
import logo from '../../assests/img/logo.png';
import { useNavigate} from 'react-router-dom';
import { useAuthState,useAuthDispatch, doLoginSalesRep, doLoginManager } from '../../Auth/AuthContext';
import { Button } from '@mui/material';
import './commonLogin.css'


function CommonLogin() {
    const [isSalesRepActive, setIsSalesRepActive] = useState(true);
    const [isManagerActive, setIsManagerActive] = useState(false);

    const handleClick = (value) => {
        switch (value) {
          case "isSalesRepActive":
            setIsSalesRepActive(true);
            setIsManagerActive(false);
            break;
          case "isManagerActive":
            setIsSalesRepActive(false);
            setIsManagerActive(true);
            break;
          default:
            break;
        }
      };


      let navigate = useNavigate();
    const { user: loggedUser } = useAuthState();
    const dispatch = useAuthDispatch();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("")
    const  handleSalesRepLogin = async(e) => {
      const user = {
        userName:username,
        password:password
      }
      
      await doLoginSalesRep(dispatch, user);
        if(loggedUser){
            console.log(loggedUser);
            return navigate("/salesRep/stocks");
          
      }   
    };
    const handleManagerLogin = async (e) => {
      const user = {
        userName:username,
        password:password
      }
      
      await doLoginManager(dispatch, user);
      if(loggedUser){
        if(loggedUser.managerID){
            return navigate("/manager/dashboard");
        }
        console.log(loggedUser);
        
      }
      
    };

    

    const handleUsernameInput = (value)=>{
        setUsername(value)
    }
    const handlePasswordInput = (value)=>{
        setPassword(value)
    }

  return (
    <div className="commonlogin-container">
      
      <div className="login-tab-cards">
        <div className={`tab ${isManagerActive ? "activeTab" : ""}`} onClick={() => handleClick("isManagerActive")}>
          <div>Manager</div>
        </div>
        <div className={`tab ${isSalesRepActive ? "activeTab" : ""}`} onClick={() => handleClick("isSalesRepActive")}>
          <div>Sales Rep</div>
        </div>
      </div>
      <div className='login-tabs'>
        <div className={`tab-content ${isManagerActive ? "tabContentActive" : ""}`}>
        <div className='Common_login_container'>
            <div className='login_logo_container'>
                <img src={logo} alt='Agenzilla logo' className='login_logo'/>
            </div>
            <form className='form_container'>
                <FormField 
                placeHolder="Username"
                color="blue"
                handleChange={handleUsernameInput}
                />
                <FormField placeHolder="Password" type="password"
                    handleChange={handlePasswordInput}
                 />
                    <Button
                        sx={[{
                            backgroundColor:"#1976d2",
                            width:'15em',
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                        }]}
                        variant="contained"
                        onClick={handleManagerLogin}
                        >
                            Login
                    </Button>
            </form>
        </div>
        </div>
        <div className={`tab-content ${isSalesRepActive ? "tabContentActive" : ""}`}>
        <div className='Common_login_container'>
            <div className='login_logo_container'>
                <img src={logo} alt='Agenzilla logo' className='login_logo'/>
            </div>
            <form className='form_container'>
                <FormField 
                placeHolder="Username"
                color="blue"
                handleChange={handleUsernameInput}
                />
                <FormField placeHolder="Password" type="password"
                    handleChange={handlePasswordInput}
                 />
                    <Button
                        sx={[{
                            backgroundColor:"#1976d2",
                            width:'15em',
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                        }]}
                        variant="contained"
                        onClick={handleSalesRepLogin}
                        >
                            Login
                    </Button>
            </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CommonLogin