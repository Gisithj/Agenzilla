import React, { useState } from "react";
import FormField from "../../components/formField/FormField";
import Button from "@mui/material/Button";
import "./Login.css";
import logo from "../../assests/img/logo.png";
import { useNavigate } from "react-router-dom";
import {
  useAuthState,
  useAuthDispatch,
  doLoginAdmin,
} from "../../Auth/AuthContext";

function Login() {
  let navigate = useNavigate();
  const { user: loggedUser } = useAuthState();
  const dispatch = useAuthDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleAdminLogin = async (e) => {
    const user = {
      userName: username,
      password: password,
    };

    await doLoginAdmin(dispatch, user);
    if (loggedUser) {
      if (loggedUser.adminID) {
        return navigate("/admin/dashboard");
      }
      console.log(loggedUser);
    }
  };

  const handleUsernameInput = (value) => {
    setUsername(value);
  };
  const handlePasswordInput = (value) => {
    setPassword(value);
  };

  return (
    <div className="login_bg">
      <div className="login_container">
        <div className="login_logo_container">
          <img src={logo} alt="Agenzilla logo" className="login_logo" />
        </div>
        <form className="form_container">
          <FormField
            placeHolder="Username"
            color="blue"
            handleChange={handleUsernameInput}
          />
          <FormField
            placeHolder="Password"
            type="password"
            handleChange={handlePasswordInput}
          />
          <Button
            sx={[
              {
                backgroundColor: "#1976d2",
                width: "15em",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              },
            ]}
            variant="contained"
            onClick={handleAdminLogin}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
