// import React from 'react'

function NavBar() {
  return (
    <div>
      {/* Search & Language */}
      <div>
        <div>
          <span><i className='bx bx-search' ></i></span>
          <button>English</button>
        </div>
      </div>
      {/* Logo and the two buttons */}
      <div>
        <div>
          <img src="/src/assets/ubuntuAid-logo.svg" alt="ubuntuAid Logo" />
        </div>
        <div>
          <button><span><i className='bx bx-heart'></i></span>Donate</button>
          <button><span><i className='bx bx-info-circle' ></i></span>Get Help</button>
        </div>
      </div>
      {/* Navigation Links */}
      <div>
        <ul className="flex">
          <li>About UbuntuAid</li>
          <li>What We Do</li>
          <li>UbuntuAiders</li>
          <li>UbuntuAid Resource</li>
          <li>Get Involved</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
