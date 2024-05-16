// import React from 'react'

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="h-48">
      {/* Search & Language */}
      <div className="flex justify-end w-[70%] m-auto border-b-2">
        <div className="flex justify-between w-auto">
          <span>
            <i className="bx bx-search w-10 text-center text-xl py-1 mx-5 text-[#6AA84F] font-Roboto font-medium"></i>
          </span>
          <button className="text-center px-10 py-1 bg-[#F4F4F4] w-[12rem] text-[#6AA84F] font-Roboto font-medium">English</button>
        </div>
      </div>
      {/* Logo and the two buttons */}
      <div>
        <div className="flex justify-between py-4 items-center w-[70%] m-auto">
          <div>
            <Link to={'/'}>
              <img src="/src/assets/ubuntuAid-logo.svg" alt="ubuntuAid Logo" />
            </Link>
          </div>
          <div className="flex gap-4">
            <button className="text-white bg-[#0072BC] px-2 py-1 rounded items-center gap-2 flex font-Roboto font-bold">
              <span>
                <i className="bx bx-heart"></i>
              </span>
              DONATE
            </button>
            <button className="text-white bg-[#6AA84F] px-2 py-1 rounded items-center gap-2 flex font-Roboto font-bold">
              <span>
                <i className="bx bx-info-circle"></i>
              </span>
              Get Help
            </button>
          </div>
        </div>
      </div>
      {/* Navigation Links */}
      <div className="bg-[#6AA84F] my-3">
        <ul className="flex item-center gap-16 mx-auto text-white py-3 w-[70%] font-Roboto font-bold">
          <Link to={'/about'}>
            <li>About UbuntuAid</li>
          </Link>
            <li>What We Do</li>
          <Link to={'/ubuntuaiders'}>
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
