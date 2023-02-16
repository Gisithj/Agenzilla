import React from "react";
import { adminLogin, managerLogin, salesRepLogin } from "../Api/loginUserApi";
// import history from "./history";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function reducer(currentState, newState) {
  return { ...currentState, ...newState };
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");

  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

  return context;
}

const initialState = {
  status: "idle",
  user: null,
  error: null
};

function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

async function doLoginSalesRep(dispatch, user) {
  try {
    
    dispatch({ status: "pending" });
    var result = await (await salesRepLogin().create(user)).data;
    dispatch({
      status: "resolved",
      user: result.user,
      error: null
    });
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
}
async function doLoginManager(dispatch, user) {
  try {
    
    dispatch({ status: "pending" });
    var result = await (await managerLogin().create(user)).data;
    
    console.log("here");
    dispatch({
      status: "resolved",
      user: result.user,
      error: null
    });
    
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
}

async function doLoginAdmin(dispatch, user) {
  console.log("called");
  try {
    
    dispatch({ status: "pending" });
    var result = await (await adminLogin().create(user)).data;
    console.log(result.user);
    dispatch({
      status: "resolved",
      user: result.user,
      error: null
    });
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
}

function doLogout(dispatch) {
  dispatch(initialState);
//   history.push("/");
}

export { AuthProvider, useAuthState, useAuthDispatch, doLoginManager, doLoginSalesRep,doLoginAdmin, doLogout };
