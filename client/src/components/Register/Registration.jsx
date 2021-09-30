import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
const Registration = () => {
  const { addUser } = useContext(authContext);
  const [inpEmail, setInpEmail] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  function handleClick() {
    let newUser = {
      email: inpEmail,
      password: inpPassword,
    };
    addUser(newUser);
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
              Sign Up
            </button>
          </div>
          <div className="tipBlock">
            <span className="tip">
              <NavLink to="/">Go Home</NavLink>
            </span>
            <span className="tip">
              <NavLink to="/login">Already have an account?</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
