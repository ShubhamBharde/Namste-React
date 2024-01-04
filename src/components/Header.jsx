import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaAtom, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuToggleBtn, setMenuToggleBtn] = useState(false);
  const [userActiveStatus, setUserActiveStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-4 bg-slate-400 shadow-lg shadow-slate-700 text-white">
      <div className="py-3  ">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="w-28" />
        </Link>
      </div>
      <nav>
        <ul
          className={
            menuToggleBtn
              ? "flex flex-col gap-y-12 absolute top-0 w-full h-full py-16 left-0 bg-black text-red-500 bg-opacity-75 font-bold  text-center text-2xl z-10 sm:hidde "
              : "hidden sm:flex gap-x-4 md:gap-x-6 lg:gap-x-12 gap-y-6 md:text-xl lg:text-2xl"
          }
        >
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
          <button
            onClick={() => setMenuToggleBtn(!menuToggleBtn)}
            className={
              menuToggleBtn
                ? " block   mx-auto text-center  absolute right-4 top-6  "
                : "hidden"
            }
          >
            <FaTimes className="text-4xl rounded-full" />
          </button>
        </ul>
        <button
          className={menuToggleBtn ? "hidden" : "text-4xl  sm:hidden"}
          onClick={() => {
            setMenuToggleBtn(!menuToggleBtn);
          }}
        >
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Header;
