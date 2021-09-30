import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
const Login = () => {
  const { loginUser } = useContext(authContext);
  const [inpEmail, setInpEmail] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  function handleClick() {
    let enterUser = {
      email: inpEmail,
      password: inpPassword,
    };
    loginUser(enterUser);
    setInpEmail('');
    setInpPassword('');
  }

  return (
    <div className="bgc login">
      <div className="homeWrapper login">
        <div className="inputContainer">
          <div className="inputs">
            <TextField
              required
              value={inpEmail}
              onChange={(e) => setInpEmail(e.target.value)}
              className="textField"
              id="outlined-required"
              label="Email"
              color="secondary"
            />
            <TextField
              required
              value={inpPassword}
              onChange={(e) => setInpPassword(e.target.value)}
              className="textField"
              id="outlined-required"
              label="Password"
              color="secondary"
            />
            <button onClick={handleClick} type="submit" className="sendButton">
              Sign In
            </button>
          </div>
          <div className="tipBlock">
            <span className="tip">
              <NavLink to="/">Go Home</NavLink>
            </span>
            <span className="tip">
              <NavLink to="/registration">Don't have an account yet?</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
