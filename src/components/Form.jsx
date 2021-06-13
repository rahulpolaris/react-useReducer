import React, { useEffect, useState, useReducer } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css";
import Login from "./../utils/login";
import produce from 'immer'


const initialState = {
    username: "",
    password: "",
    isLoading: false,
    loginInfo: { loginmsg: "", login: false },
  };
  
function loginReducer(state, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isLoading: true,
        loginInfo: { loginmsg: "", login: false },
      };
    }
    case "success": {
      return {
        ...state,
        loginInfo: action.loginmsgvalue,username:"",password:""
      };
    }
    case "failure":{
        return {...state,loginInfo:action.loginmsgerr}
    }
    case "field":{
        //  if(action.field==='username'){
        //      return {...state,username:action.value}
        //  }else if(action.field==='password'){
        //      return { ...state, password:action.value
        //      }
        //  }
        
        return {
          ...state,[action.field]:action.value
        }
        // return produce(state,(draft)=> {return {...draft,[action.field]:action.value}})
         
    }
    default: {
        return state
    }
  }
}


const Form = ({}) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  
//   const [username, setUsername] = useState("");
  
//   const [password, setPassword] = useState("");
  
//   const [isLoading, setIsLoading] = useState(false);
  
//   const [loginInfo, setloginInfo] = useState({ loginmsg: "", login: false });
const {username,password,isLoading,loginInfo}= state
  useEffect(() => {
    document.title = "Form";
  });
  useEffect(() => {console.log(`%c ${state.loginInfo.loginmsg}`,'color:green;font-size:1.8rem;')}, [state.loginInfo.loginmsg]);
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login" });
    console.log("%c button clicked", "font-size:2rem;color:yellow");
    try {
      const loginmsg = await Login({ username, password });
      dispatch({ type: "success",loginmsgvalue:loginmsg });
    //   setloginInfo(loginmsg);
      if (loginmsg.loginmsg.length >= 0) {
        // setIsLoading(true);
        // setUsername("");
        // setPassword("");
      }
    } catch (err) {

    //   setloginInfo(err);
      if (err) {
        // setIsLoading(true);
        dispatch({ type: "failure",loginmsgerr:err });
// 
      }
    }
  }
  return (
    <div className="form">
      <form action="/" method="post">
        <h3 style={{ color: loginInfo.login ? "green" : "red" }}>
          {loginInfo.loginmsg}
        </h3>
        <Input
          type={"text"}
          label={"username"}
          val={state.username}
        //   changeVal={setUsername}
          disptchContent = {e=>dispatch({type:"field",field:"username",value:e.currentTarget.value})}
        />
        <Input
          type={"password"}
          label={"password"}
          val={state.password}
        //   changeVal={setPassword}
          disptchContent = {e=>dispatch({type:"field",field:"password",value:e.currentTarget.value})}

        />
        <Button
          type={"submit"}
          name={"Login"}
          handleSubmit={handleSubmit}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};
export default Form;
