import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:1337/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.username);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <div className="md:h-48">
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
          <div className="md:flex justify-between py-4 items-center w-[70%] m-auto">
            <div>
              <Link to={"/"}>
                <img src="/ubuntuAid-logo.svg" alt="ubuntuAid Logo" />
              </Link>
            </div>
            <div className="md:flex gap-4">
              <button className="text-white bg-[#0072BC] p-2 my-3 rounded items-center gap-2 flex justify-center font-Roboto font-bold w-full">
                <span>
                  <i className="bx bx-heart"></i>
                </span>
                DONATE
              </button>
              <div className="relative my-3">
                {username ? (
                  <button
                    className="text-white bg-[#6AA84F] px-4 py-2 rounded items-center gap-2 flex justify-between w-full"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>
                      <i className="bx bxs-user"></i>
                    </span>
                    <span>{username}</span>
                    <span>
                      <i className="bx bx-chevron-down"></i>
                    </span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="text-white bg-[#6AA84F] px-4 py-2 rounded items-center gap-2 flex justify-between w-full"
                  >
                    <span>
                      <i className="bx bxs-user"></i>
                    </span>
                    <span>Sign In</span>
                  </Link>
                )}
                {isOpen && username && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2">
                    <p className="px-4 py-2 text-gray-700 hover:bg-green-100 flex justify-between items-center">
                      <span>Account Settings</span>{" "}
                      <span>
                        <i className="bx bx-chevron-right"></i>
                      </span>
                    </p>
                    <p className="px-4 py-2 text-gray-700 hover:bg-green-100 flex justify-between items-center">
                      <span>You have 0 new Notifications</span>{" "}
                      <span>
                        <i className="bx bx-chevron-right"></i>
                      </span>
                    </p>
                    <p className="px-4 py-2 text-gray-700 hover:bg-green-100 flex justify-between items-center">
                      <span>Just for you</span>{" "}
                      <span>
                        <i className="bx bx-chevron-right"></i>
                      </span>
                    </p>
                    <p className="px-4 py-2 text-gray-700 hover:bg-green-100 flex justify-between items-center">
                      <span>Saved</span>{" "}
                      <span>
                        <i className="bx bx-chevron-right"></i>
                      </span>
                    </p>
                    <p className="px-4 py-2 text-gray-700 hover:bg-green-100 flex justify-between items-center">
                      <span>Asked Questions</span>{" "}
                      <span>
                        <i className="bx bx-chevron-right"></i>
                      </span>
                    </p>
                    <p className="px-4 py-2 text-gray-700 hover:bg-green-100 flex justify-between items-center">
                      <span>Reviews</span>{" "}
                      <span>
                        <i className="bx bx-chevron-right"></i>
                      </span>
                    </p>
                    <div 
                    // onClick={() => setIsAuthenticated(false)}
                    >
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-white bg-[#6AA84F] border-none flex justify-between items-center"
                      >
                        <span>Sign Out</span>
                        <i className="bx bx-log-out"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Navigation Links */}
        <div className="bg-[#6AA84F] my-2 md:flex hidden">
          <ul className="flex item-center gap-16 mx-auto text-white py-3 w-[70%] font-Roboto font-bold">
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
          <div
            onClick={handleNav}
            className="flex justify-center items-center md:hidden m-auto w-full bg-[#6AA84F] text-white py-2"
          >
            {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
          </div>
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[50%] h-full bg-[#0072BC] ease-in-out duration-500"
                : "ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]"
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
    </>
  );
}

export default Header;