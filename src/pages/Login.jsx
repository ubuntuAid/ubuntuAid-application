// // import { Link } from "react-router-dom";
// // import { useState } from "react";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [isCodeSent, setIsCodeSent] = useState(false);
// //   const [code, setCode] = useState("");
// //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();

// //   const handleEmailChange = (e) => setEmail(e.target.value);
// //   const handleCodeChange = (e) => setCode(e.target.value);
// //   const handlePasswordChange = (e) => setPassword(e.target.value);

// //   const handleSendCode = async () => {
// //     try {
// //       const response = await fetch("https://ubuntuaid-backend.onrender.com/auth/send-code", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email }),
// //       });
// //       if (response.ok) {
// //         setIsCodeSent(true);
// //         alert("4-digit code sent to your email.");
// //       } else {
// //         alert("Failed to send code.");
// //       }
// //     } catch (error) {
// //       console.error("Error sending code:", error);
// //     }
// //   };

// //   const handleLoginWithCode = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://ubuntuaid-backend.onrender.com/auth/login-with-code",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ email, code }),
// //         }
// //       );
// //       if (response.ok) {
// //         const data = await response.json();
// //         localStorage.setItem("token", data.jwt);
// //         navigate("/dashboard");
// //       } else {
// //         alert("Invalid code.");
// //       }
// //     } catch (error) {
// //       console.error("Error logging in with code:", error);
// //     }
// //   };

// //   const handleLoginWithPassword = async () => {
// //     try {
// //       const response = await fetch("https://ubuntuaid-backend.onrender.com/auth/local", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ identifier: email, password }),
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         localStorage.setItem("token", data.jwt);
// //         navigate("/dashboard");
// //       } else {
// //         alert("Invalid email or password.");
// //       }
// //     } catch (error) {
// //       console.error("Error logging in with password:", error);
// //     }
// //   };
// //   return (
// //     <div className="md:flex md:h-screen justify-between items-center">
// //       <div className="md:w-1/2 md:h-[100%] h-screen flex flex-col md:justify-around justify-evenly">
// //         <div className="flex justify-between items-center md:px-32 p-10">
// //           <Link to={"/"}>
// //             <img src="/ubuntuAid-logo.svg" alt="" />
// //           </Link>
// //           <div>
// //             <Link
// //               to={"/"}
// //               className="md:flex gap-2 font-bold hidden text-[rgb(10,114,186)]"
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth={1.5}
// //                 stroke="currentColor"
// //                 className="w-6 h-6"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
// //                 />
// //               </svg>
// //               Go Back
// //             </Link>
// //           </div>
// //         </div>
// //         <div className="md:px-32 px-10">
// //           <h1 className="md:text-4xl text-2xl font-bold mb-2">Sign in</h1>
// //           <form action="">
// //             <label htmlFor="email">
// //               Enter your email to receive a one-time passcode
// //             </label>
// //             <br />
// //             <input
// //               type="email"
// //               name="email"
// //               id="email"
// //               value={email}
// //               onChange={handleEmailChange}
// //               placeholder="Email Address"
// //               className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
// //             />
// //             <p className="flex items-center gap-2 py-1">
// //               <input type="checkbox" name="checkbox" id="checkbox" />
// //               <span className="text-sm">Remember me</span>
// //             </p>
// //             <button
// //               type="submit"
// //               onClick={handleSendCode}
// //               className="w-full bg-[#0a72ba] rounded p-2 my-2 text-center font-medium text-white"
// //             >
// //               Send 4-digit Code
// //             </button>

// //           </form>
// //           <div className="flex justify-between items-center my-2">
// //             <hr className="w-1/2" />
// //             <p className="px-4">or</p>
// //             <hr className="w-1/2" />
// //           </div>
// //            {isCodeSent && (
// //           <div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
// //                 Enter Code
// //               </label>
// //               <input
// //                 type="text"
// //                 id="code"
// //                 value={code}
// //                 onChange={handleCodeChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 placeholder="4-digit Code"
// //               />
// //             </div>
// //             <div className="flex items-center justify-between mb-6">
// //               <button
// //                 onClick={handleLoginWithCode}
// //                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Sign in with Code
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //         <hr className="my-4" />
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             placeholder="Password"
// //           />
// //         </div>
// //         <div className="flex items-center justify-between">
// //           <button
// //             onClick={handleLoginWithPassword}
// //             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //             type="button"
// //           >
// //             Sign in with Password
// //           </button>
// //         </div>
// //         </div>
// //         <p className="text-center">
// //           Need an account?{" "}
// //           <Link to={"/signup"} className="font-bold underline">
// //             Sign Up Here
// //           </Link>
// //         </p>
// //       </div>
// //       <div className="md:w-1/2 px-16 w-full md:flex hidden">
// //         <img src="/signChildren.png" alt="" />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import axios, { Axios } from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   // const [isCodeSent, setIsCodeSent] = useState(false);
//   // const [code, setCode] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   // const handleCodeChange = (e) => setCode(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   // const handleSendCode = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       "http://localhost:1337/api/auth/send-code",
//   //       {
//   //         method: "POST",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify({ 
//   //           identifier: email }),
//   //       }
//   //     );
//   //     if (response.ok) {
//   //       setIsCodeSent(true);
//   //       alert("4-digit code sent to your email.");
//   //     } else {
//   //       alert("Failed to send code.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error sending code:", error);
//   //   }
//   // };

//   // const handleLoginWithCode = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       "http://localhost:1337/api/auth/login-with-code",
//   //       {
//   //         method: "POST",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify({ 
//   //           identifier: email, 
//   //           code: code }),
//   //       }
//   //     );
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       localStorage.setItem("token", data.jwt);
//   //       navigate("/review");
//   //     } else {
//   //       alert("Invalid code.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error logging in with code:", error);
//   //   }
//   // };

//   const handleLoginWithPassword = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:1337/api/auth/local",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ 
//             identifier: email, 
//             password: password 
//         }),
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("isLogedIn", true)
//         localStorage.setItem("token", data.jwt);
//         navigate("/");
//       } else {
//         alert("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Error logging in with password:", error);
//     }
//   };


  

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center overlayImage ">
//       <form>

//        <div className="md:m-auto m-5">
//        <div className="py-10">
//         <Link to={"/"} >
//           <img src="/ubuntuAid-logo-white.svg" alt="" width={'250'} />
//         </Link>
//         </div>
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-center mb-2">Sign in</h1>
//           <p className="text-center">
//             Enter your email to receive a one-time passcode
//           </p>
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Email Address"
//           />
//         </div>
        
//         {/* <div className="flex items-center justify-between mb-6">
//           <button
//             onClick={handleSendCode}
//             className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Send 4-digit Code
//           </button>
//         </div>
//         {isCodeSent && (
//           <div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="code"
//               >
//                 Enter Code
//               </label>
//               <input
//                 type="text"
//                 id="code"
//                 value={code}
//                 onChange={handleCodeChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="4-digit Code"
//               />
//             </div>
//             <div className="flex items-center justify-between mb-6">
//               <button
//                 onClick={handleLoginWithCode}
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Sign in with Code
//               </button>
//             </div>
//           </div>
//         )} */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Password"
//           />
//         </div>
//         {/* <div className="flex items-center justify-between mb-4">
//           <label className="inline-flex items-center">
//             <input type="checkbox" className="form-checkbox" />
//             <span className="ml-2">Remember me</span>
//           </label>
//         </div>
//         <hr className="my-4" /> */}
//         <div className="flex items-center justify-between">
//           <button
//             onClick={handleLoginWithPassword}
//             className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Sign in with Password
//           </button>
//         </div>


//         <div className="text-center mt-4">
//           <p className="text-center text-blue-500 hover:text-blue-800">
//             Need an account?{" "}
//             <Link to={"/signup"} className="font-bold underline">
//               Sign Up Here
//             </Link>
//           </p>
         
//         </div>
//       </div>
//        </div>
//     </form>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginWithPassword = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.jwt);
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error logging in with password:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overlayImage">
      <div className="md:m-auto m-5">
        <div className="py-10">
          <Link to={"/"}>
            <img src="/ubuntuAid-logo-white.svg" alt="" width={"250"} />
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-center mb-2">Sign in</h1>
            <p className="text-center">
              Enter your email to receive a one-time passcode
            </p>
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
          <div className="flex items-center justify-between">
            <button
              onClick={handleLoginWithPassword}
              className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in with Password
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-center text-blue-500 hover:text-blue-800">
              Need an account?{" "}
              <Link to={"/signup"} className="font-bold underline">
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
