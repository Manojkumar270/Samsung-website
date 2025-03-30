import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cart from "../images/4408741-200.png";
import profile from "../images/download.png";
import menu from "../images/menu.png";

const Navbar = () => {
  const [nav, setNav] = useState("");
  return (
    <>
      <div class="navbar">
        <div class="logo">
          <Link to="/">
            <h1 onClick={() => setNav("")}>SAMSUNG</h1>
          </Link>
        </div>
        <div class="navigaters">
          <div class="drop-mobile">
            <Link to="/mobile">
              <h6
                onClick={() => setNav("mobile")}
                className={nav == "mobile" ? "active" : ""}
              >
                MOBILE
              </h6>
            </Link>
          </div>

          <Link to="/laptop">
            <h6
              onClick={() => setNav("laptop")}
              className={nav == "laptop" ? "active" : ""}
            >
              LAPTOPS
            </h6>
          </Link>
          <Link to="/monitor">
            <h6
              onClick={() => setNav("monitor")}
              className={nav == "monitor" ? "active" : ""}
            >
              MONITORS
            </h6>
          </Link>

          <h6>APPLIANCES</h6>

          <h6>ACCESSORIES</h6>
          <h6>AI</h6>
        </div>
        <div class="tail">
          <input type="text" placeholder="🔍 Search" />
          <Link to="/cart">
            <img src={cart} alt="icon2" />
          </Link>
          <div class="user">
            <img src={profile} alt="icon" />
            <div class="popup">
              <Link to="/upload">
              <p>Admin</p>
              </Link>
              <Link to="/form">
              <p>User</p>
              </Link>
             
            </div>
          </div>

          <img class="menu" src={menu} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
