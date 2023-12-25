import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // console.log("Component renders");
  const [userActiveStatus, setUserActiveStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="navItems">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/about">About</Link>
          </li>
          <li className="navItem">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navItem">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="navItem">
            <button
              className="navBtn"
              onClick={() => {
                // setUserActiveStatus(
                //   userActiveStatus === "Login" ? "Logout" : "Login"
                // );

                userActiveStatus === "Login"
                  ? setUserActiveStatus("Logout")
                  : setUserActiveStatus("Login");
              }}
            >
              {userActiveStatus}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
