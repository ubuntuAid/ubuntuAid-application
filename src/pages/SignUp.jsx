import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caption from "../components/Caption";

function SignUp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  return (
    <div className="h-screen">
      {/* This the header section */}
      <section>
        <div className="h-1/4">
          <div className="flex justify-between items-center max-w-[70%] m-auto py-10">
            <Link to={"/"}>
              <img src="/ubuntuAid-logo.svg" alt="" />
            </Link>
            <div className="md:flex gap-2 font-bold hidden text-[#0a72BA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <p>Go Back</p>
            </div>
          </div>
        </div>
      </section>
      {/* This the body section */}
      <section>
        <div className="h-3/4">
          <div className="flex justify-between items-center md:max-w-[70%] m-auto gap-32 py-10">
            <div className="md:w-1/2 md:h-[100%] h-screen flex flex-col md:justify-around justify-evenly">
              <h1 className="md:text-4xl text-2xl font-bold mb-2">Sign in</h1>
              <form action="">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Fullname"
                  className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm Password"
                  className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0a72ba] rounded p-2 my-2 text-center font-medium text-white"
                >
                  Sign Up
                </button>
              </form>
              <div className="flex justify-between items-center my-5">
                <hr className="w-1/2" />
                <p className="px-4">or</p>
                <hr className="w-1/2" />
              </div>
              <button className="w-full bg-[red] rounded p-2 my-2 text-center font-medium text-white">
                Sign in with Google
              </button>
              <button className="w-full bg-[blue] rounded p-2 my-2 text-center font-medium text-white">
                Sign in with Facebook
              </button>
              <div className="my-5">
                <p className="text-center">We won’t auto-post to your account</p>
                <p className="text-center w-96 mx-auto my-5">
                  By signing up, you agree to our
                  <Link to={"/"} className="underline">
                    Terms of Use,
                  </Link>
                  <Link to={"/"} className="underline">
                    Community Guidelines
                  </Link>{" "}
                  and
                  <Link to={"/"} className="underline">
                    Privacy Policy.
                  </Link>
                </p>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="font-bold underline">
                  Sign In Here
                </Link>
              </p>
            </div>
            <div className="md:w-1/2 w-full md:flex flex-col hidden">
              {/* <Slider {...settings}> */}
                <Caption />
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
