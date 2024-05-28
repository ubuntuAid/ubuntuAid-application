// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="md:h-[208px]">
      {/* Search & Language */}
      <div className="flex justify-end w-[70%] m-auto border-b-2">
        <div className="flex justify-between w-auto">
          <span>
            <i className="bx bx-search w-10 text-center text-xl py-1 mx-5 text-[#6AA84F] font-Roboto font-medium"></i>
          </span>
          <button className="text-center px-10 py-1 bg-[#F4F4F4] w-[12rem] text-[#6AA84F] font-Roboto font-medium">
            English
          </button>
        </div>
      </div>
      {/* Logo and the two buttons */}
      <div>
        <div className="md:flex md:justify-between py-4 items-center w-[70%] m-auto">
          <div>
            <Link to={"/"}>
              <img src="/ubuntuAid-logo.svg" alt="ubuntuAid Logo" />
            </Link>
          </div>
          <div className="md:flex gap-4">
            <div className="py-5 md:py-0">
              <Link
                to={""}
                className="text-white bg-[#0072BC] px-2 py-1 rounded items-center gap-2 flex justify-center font-Roboto font-bold"
              >
                <span>
                  <i className="bx bx-heart"></i>
                </span>
                DONATE
              </Link>
            </div>
            <div>
              <Link
                to={"/login"}
                className="text-white bg-[#6AA84F] px-4 py-1 rounded items-center gap-2 flex justify-center font-Roboto font-bold"
              >
                <span>
                  <i className="bx bxs-user-plus"></i>
                </span>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Navigation Links */}
      <div className="bg-[#6AA84F] my-2 md:flex hidden">
        <ul className="flex item-center gap-16 mx-auto text-white py-4 w-[70%] font-Roboto font-bold">
          <Link to={"/about"}>
            <li>About UbuntuAid</li>
          </Link>
          <li>What We Do</li>
          <Link to={"/ubuntuaiders"}>
            <li>UbuntuAiders</li>
          </Link>
          <li>UbuntuAid Resource</li>
          <li>Get Involved</li>
        </ul>
      </div>
      {/* Mobile Navigation Links */}

      <div id="nav-text">
        <div onClick={handleNav} className="flex justify-center items-center md:hidden m-auto w-full bg-[#6AA84F] text-white py-2">
          {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
        </div>
        <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[50%] h-full bg-[#0072BC] ease-in-out duration-500'
            : 'ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
        >
          <Link to={"/about"}>
            <li>About UbuntuAid</li>
          </Link>
          <li>What We Do</li>
          <Link to={"/ubuntuaiders"}>
            <li>UbuntuAiders</li>
          </Link>
          <li>UbuntuAid Resource</li>
          <li>Get Involved</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
