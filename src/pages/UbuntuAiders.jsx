import AiderHero from "../components/AiderHero"
import Aiders from "../components/Aiders/Aiders"
import NavBar from "../components/navBar/NavBar"
import Footer from "../components/footer/Footer"

function UbuntuAiders() {
  return (
    <div>
      <NavBar />
      <AiderHero />
      <section>
        <div className="max-w-[70%] m-auto flex justify-between gap-8">
          <Aiders />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default UbuntuAiders