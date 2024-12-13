import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { forgot } from "../api/request";

export interface forgoutPasswordInterface {
  username: string;
  password: string;
    password2?: string;
}

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setIsEmail] = useState("");
  const [password, setIsPassword1] = useState("");
  const [password2, setIsPassword2] = useState("");

  const forgot1 = async () => {
    if (password !== password2) {
      alert("The passwords dont match!");
      return;
    }

    try {
      const response = await forgot({ username, password });
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      alert("Error")
    }
  };

  return (

    <div>
      <Navbar />
      <div className="register-board-container">
        <div className="register-board-form-container">
          <div className="register-board-form-title">
            <span>
              <p>Reset Password</p>
            </span>
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">Email:</p>
            </span>
            <input
              type="text"
              className="register-board-input"
              value={username}
              onChange={(e) => {
                setIsEmail(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">Password:</p>
            </span>
            <input
              type="password"
              className="register-board-input"
              value={password}
              onChange={(e) => {
                setIsPassword1(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text"> Repeat your Password:</p>
            </span>
            <input
              type="password"
              className="register-board-input"
              value={password2}
              onChange={(e) => {
                setIsPassword2(e.target.value);
              }}
            />
          </div>
          <div className="register-form-div-btn">
            <div className="register-form-btn" onClick={() => {forgot1()}}>
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
