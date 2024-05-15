/* eslint-disable react/no-unescaped-entities */
import CarouselCard from "../components/carouselCard/CarouselCard";
import NavBar from "../components/navBar/NavBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      {/* This is the Hero Section of the Landing Page */}
      <section id="bg_image" className="flex justify-evenly items-center">
        <div className="md:w-[70%]">
          <div className="md:flex-1 md:w-1/2 ">
            <h1 className="lg:text-7xl text-3xl font-black text-white mb-5 md:leading-[1.15]">
              Restoring Hope, Building Futures
            </h1>
            <p className="text-xl mb-5 text-white">
              At UbuntuAid, we empower refugees by democratizing access to
              justice, placing the law's power directly into their hands.
            </p>
            <div className="flex gap-5">
              <button className="text-white bg-[#0072BC] px-2 py-1 rounded font-bold w-52">
                GET HELP
              </button>
              <button className="text-white bg-[#6AA84F] px-2 py-2 rounded font-bold w-52">
                OFFER AID
              </button>
            </div>
          </div>
          <div className="md:flex-none md:w-1/4">
            {/* <h1>Just for styling</h1> */}
          </div>
        </div>
      </section>
      <section className="my-40">
        <h1 className="text-center text-[3rem] mb-10 font-bold text-[#6AA84D]">
          UbuntuAiders ready to support you!
        </h1>
        <CarouselCard />
      </section>
    </div>
  );
}

export default HomePage;