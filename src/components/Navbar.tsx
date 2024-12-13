import React, { useState } from "react";
import "../Style/HomePage.css";
import logo from "../images/Black and White Simple Market Logo.png";
import { useNavigate } from "react-router-dom";
import BasketPopover from "./BasketPopover";

const Navbar = () => {
  const [isPopover, setIsPopover] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src={logo}
            alt=""
            className="navbar-logo-img"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="navbar-menu">
          <span className="navbar-menu-contains">Home</span>
          <span className="navbar-menu-contains">Menu</span>
          <span className="navbar-menu-contains">Products</span>
          <span
            className="navbar-menu-contains"
            onClick={() => {
              setIsPopover(!isPopover);
            }}
          >
            Basket
          </span>
        </div>
        <div className="Search"></div>
        <div className="container-navbar-log-sign">
          <div
            className="navbar-log-sign"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign-in
          </div>
          <div
            className="navbar-log-sign"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </div>
          <div
            className="navbar-log-sign"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </div>
        </div>
      </div>
      {isPopover && <BasketPopover isPopover={isPopover} setIsPopover={setIsPopover} />}
    </div>
  );
};

export default Navbar;
