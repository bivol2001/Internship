import React, { useState } from "react";
import "../Style/FormStyle.css";
import { login } from "../api/request";
import { useNavigate } from "react-router-dom";

export interface userLoginInterface {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [password, setInputPassword] = useState<string>("");
  const [username, setInputUsername] = useState<string>("");
  const navigate = useNavigate();

  const login1 = async () => {
    try {
      const res = await login({ username, password });
      if (res.token) {
        localStorage.setItem("accessToken", res.token);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error", error);
    }    
  };


  return (
    <div>
      <div className="register-board-container">
        <div className="register-board-form-container">
          <div className="register-board-form-title">
            <span>
              <p>Login</p>
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
                setInputUsername(e.target.value);
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
                setInputPassword(e.target.value);
              }}
            />
          </div>
          <div className="register-form-div-forgout">
            <span className="register-form-forgout">
              <p
                className="register-form-forgout"
                onClick={() => {
                  navigate("/forgout");
                }}
              >
                Forgout password?
              </p>
            </span>
          </div>
          <div className="register-form-div-btn">
            <div
              className="register-form-btn"
              onClick={() => {
                login1();
              }} 
            >
              Login
            </div>
            <div
              className="register-form-div-btn-create"
              onClick={() => {
                navigate("/register");
              }}
            >
              Create a account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
