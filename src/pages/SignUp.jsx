import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleFullnameChange = (e) => setFullname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        "https://ubuntuaid-backend.onrender.com/api/auth/local/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: username, email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("username", data.user.username);
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen flex gap-20 items-center justify-center bg-emerald-300">
      <div></div>
      <div></div>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-2">Sign up</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullname"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullname"
          >
            Fullname
          </label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={handleFullnameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Fullname"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm Password"
          />
          <small>min. 6 characters</small>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleSignup}
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
        <hr className="my-4" />
        {/* <div className="flex md:flex-row flex-col gap-5 items-center mb-4">
          <button className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2">
            Sign in with Google
          </button>
          <button className="bg-blue-700 text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign in with Facebook
          </button>
        </div> */}
        <div className="text-center mt-4">
        <p className="text-center text-blue-500 hover:text-blue-800">
        Already have an account?{" "}
            <Link to={"/login"} className="font-bold underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className=" mt-8 max-w-lg md:flex md:flex-col hidden">
        <div className="py-10">
        <Link to={"/"} >
          <img src="/ubuntuAid-logo.svg" alt="" />
        </Link>
        </div>
        <div>
        <h2 className="text-4xl leading-10 font-bold">
          Empower Justice, Join UbuntuAid Today!
        </h2>
        <p className="mt-4">
          Join UbuntuAid in our vital mission to champion justice for refugees
          worldwide. As a lawyer with UbuntuAid, you will play a crucial role in
          defending the rights of displaced individuals, providing legal
          assistance to asylum seekers, and advocating for policies that uphold
          humanitarian principles and protect the most vulnerable.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
