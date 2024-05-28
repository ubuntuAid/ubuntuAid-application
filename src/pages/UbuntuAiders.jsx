import AiderHero from "../components/AiderHero";
import Aiders from "../components/Aiders/Aiders";
import Header from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { AuthProvider } from "../contexts/AuthContext"; // Ensure correct import path

function UbuntuAiders() {
  return (
    <AuthProvider>
      <Header />
      <AiderHero />
      <Aiders />
      <Footer />
    </AuthProvider>
  );
}

export default UbuntuAiders;
