// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Caption from "../components/Caption";

// function SignUp() {

//   return (
//     <div className="h-screen">
//       {/* This the header section */}
//       <section>
//         <div className="h-1/4">
//           <div className="flex justify-between items-center max-w-[70%] m-auto py-10">
//             <Link to={"/"}>
//               <img src="/ubuntuAid-logo.svg" alt="" />
//             </Link>
//             <div >
//               <Link to={'/'}
//               className="md:flex gap-2 font-bold hidden text-[#0a72BA]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
//                 />
//               </svg>
//               <p>Go Back</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* This the body section */}
//       <section>
//         <div className="h-3/4">
//           <div className="flex justify-between items-center md:max-w-[70%] m-auto gap-32 py-10">
//             <div className="md:w-1/2 md:h-[100%] h-screen flex flex-col md:justify-around justify-evenly">
//               <h1 className="md:text-4xl text-2xl font-bold mb-2">Sign in</h1>
//               <form action="">
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Fullname"
//                   className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email Address"
//                   className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Confirm Password"
//                   className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-[#0a72ba] rounded p-2 my-2 text-center font-medium text-white"
//                 >
//                   Sign Up
//                 </button>
//               </form>
//               <div className="flex justify-between items-center my-5">
//                 <hr className="w-1/2" />
//                 <p className="px-4">or</p>
//                 <hr className="w-1/2" />
//               </div>
//               <button className="w-full bg-[red] rounded p-2 my-2 text-center font-medium text-white">
//                 Sign in with Google
//               </button>
//               <button className="w-full bg-[blue] rounded p-2 my-2 text-center font-medium text-white">
//                 Sign in with Facebook
//               </button>
//               <div className="my-5">
//                 <p className="text-center">We won’t auto-post to your account</p>
//                 <p className="text-center w-96 mx-auto my-5">
//                   By signing up, you agree to our
//                   <Link to={"/"} className="underline">
//                     Terms of Use,
//                   </Link>
//                   <Link to={"/"} className="underline">
//                     Community Guidelines
//                   </Link>{" "}
//                   and
//                   <Link to={"/"} className="underline">
//                     Privacy Policy.
//                   </Link>
//                 </p>
//               </div>
//               <p className="text-center">
//                 Already have an account?{" "}
//                 <Link to={"/login"} className="font-bold underline">
//                   Sign In Here
//                 </Link>
//               </p>
//             </div>
//             <div className="md:w-1/2 w-full md:flex flex-col hidden">
//               {/* <Slider {...settings}> */}
//                 <Caption />
//               {/* </Slider> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SignUp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

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
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: fullname, email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.jwt);
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
    <div className="min-h-screen flex gap-20 items-center justify-center bg-gray-50">
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
        <div className="flex md:flex-row flex-col gap-5 items-center mb-4">
          <button className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2">
            Sign in with Google
          </button>
          <button className="bg-blue-700 text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign in with Facebook
          </button>
        </div>
        <div className="text-center mt-4">
        <p className="text-center text-blue-500 hover:text-blue-800">
            Need an account?{" "}
            <Link to={"/login"} className="font-bold underline">
              Sign Up Here
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
          worldwide. As a lawyer with UbuntuAid, you'll play a crucial role in
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
