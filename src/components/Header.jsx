import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // console.log("Component renders");
  const [menuBtn, setMenuBtn] = useState(false);
  const [userActiveStatus, setUserActiveStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-4 bg-slate-400 shadow-lg shadow-slate-700 text-white">
      <div className="py-3  ">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="w-28" />
        </Link>
      </div>
      <nav>
        <ul className="hidden md:flex md:gap-x-6 lg:gap-x-12 gap-y-6 md:text-xl lg:text-2xl">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
                userActiveStatus === "Login"
                  ? setUserActiveStatus("Logout")
                  : setUserActiveStatus("Login");
              }}
            >
              {userActiveStatus}
            </button>
          </li>
        </ul>
        <button
          className="text-4xl block md:hidden"
          onClick={() => {
            // console.log("menu toggle click")
            setMenuBtn(true);
          }}
        >
          ☰
        </button>
      </nav>
    </div>
  );
};

export default Header;
