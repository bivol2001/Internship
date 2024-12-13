import React, { useState } from "react";
import "../Style/FormStyle.css";
import { newUser } from "../api/request";
import {useNavigate } from "react-router-dom";

export interface userInterface{
  email: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  password:string
}

const RegisterPage = () => {
  const navigate = useNavigate()
  const [email, setInputEmail] = useState<string>("");
  const [firstName, setInputFirstName] = useState<string>("");
  const [lastName, setInputLastName] = useState<string>("");
  const [phoneNumber, setInputPhone] = useState<string>("");
  const [password, setInputPassword] = useState<string>("");

const register: () => Promise<void> = async () => {
  try {
    await newUser({ email, password });
    navigate("/login")
    console.log("Registration successful");
  } catch (error) {
    console.error("Registration error", error);
  }
};

  return (
    <div>
      <div className="register-board-container">
        <div className="register-board-form-container">
          <div className="register-board-form-title">
            <span>
              <p>Register Form</p>
            </span>
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">Email:</p>
            </span>
            <input
              type="text"
              className="register-board-input"
              value={email}
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">First Name:</p>
            </span>
            <input
              type="text"
              className="register-board-input"
              value={firstName}
              onChange={(e) => {
                setInputFirstName(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text"> Last Name:</p>
            </span>
            <input
              type="text"
              className="register-board-input"
              value={lastName}
              onChange={(e) => {
                setInputLastName(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">Phone Number:</p>
            </span>
            <input
              type="text"
              className="register-board-input"
              value={phoneNumber}
              onChange={(e) => {
                setInputPhone(e.target.value);
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
          <div className="register-form-div-forgout"></div>
          <div className="register-form-div-btn">
            <div className="register-form-btn" onClick={() => { register()}}>
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
