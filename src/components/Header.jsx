import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // console.log("Component renders");
  const [userActiveStatus, setUserActiveStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <nav>
        <ul className="navItems">
          <li className="navItem">Home</li>
          <li className="navItem">About</li>
          <li className="navItem">Contact</li>
          <li className="navItem">Cart</li>
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
