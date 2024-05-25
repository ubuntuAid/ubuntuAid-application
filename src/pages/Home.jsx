/* eslint-disable react/no-unescaped-entities */
import Header from "../components/navBar/LoggedNav"
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import CarouselCard from "../components/carouselCard/CarouselCard";
// import LawyerCarousel from "../components/carouselCard/LawyerCarousel";


function HomePage() {
  return (
    <div>
      <Header />
      {/* This is the Hero Section of the Landing Page */}
      <section id="bg_image" className="flex justify-evenly items-center">
        <div className="md:w-[70%] p-8">
          <div className="md:flex-1 md:w-1/2 ">
            <h1 className="lg:text-7xl text-3xl font-black text-white mb-5 md:leading-[1.15]">
              Restoring Hope, Building Futures
            </h1>
            <p className="text-xl mb-5 text-white">
              At UbuntuAid, we empower refugees by democratizing access to
              justice, placing the law's power directly into their hands.
            </p>
            <div className="md:flex md:gap-5">
             <div className="py-5 md:py-0">
             <Link to={'/login'} className="text-white bg-[#0072BC] px-2 py-2 rounded font-bold md:w-52 flex justify-center items-center">
                GET HELP
              </Link>
             </div>
              <div>
              <Link to={'/login'} className="text-white bg-[#6AA84F] px-2 py-2 rounded font-bold md:w-52 flex justify-center items-center">
                OFFER AID
              </Link>
              </div>
            </div>
          </div>
          <div className="md:flex-none md:w-1/4">
            {/* <h1>Just for styling</h1> */}
          </div>
        </div>
      </section>
      <section className="md:p-20 p-14 bg-[#0A72BA]">
            <div className="md:max-w-[70%]] m-auto">
            <h1 className="text-center md:text-6xl font-bold text-4xl"><span className="text-[#2e2e2e]">Ubuntu-Aid:</span> <span className="text-white">u·boon·too - Aid</span></h1>
            <p className="text-center text-white md:px-56 md:py-8 py-5">Ubuntu; pronounced as u.boon.too simply means “Humanity to others”. UbuntuAid was coined to mean Aid to Humans specifically to the People who are displaced and seeking asylum. We are bringing the Ubuntu Spirit to the World of Refugees and Asylum Seekers</p>
            </div>
        </section>
      <section className="md:my-40 my-14">
        <h1 className="text-center md:text-[3rem] text-3xl mb-10 md:px-0 px-10 font-bold text-[#6AA84D]">
          UbuntuAiders ready to support you!
        </h1>
        <CarouselCard />
        {/* <LawyerCarousel /> */}
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;