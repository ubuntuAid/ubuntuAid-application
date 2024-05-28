// import React from 'react'
import Hero from "../components/aboutSections/Hero"
import Section1 from "../components/aboutSections/Section1"
import Footer from "../components/footer/Footer"
import NavBar from "../components/navBar/NavBar"
import { AuthProvider } from "../contexts/AuthContext"; // Ensure correct import path

function About() {
  return (
    <AuthProvider>
        <NavBar />
        <Hero/>
        <Section1/>
        <section className="p-20">
            <div className="max-w-[1100px] m-auto">
            <h1 className="text-center md:text-6xl font-bold 4xl"><span className="text-[#0A72BA]">Ubuntu-Aid:</span> <span className="text-[#6AA84F]">u·boon·too - Aid</span></h1>
            <p className="text-center text-[#6AA84F] px-10 py-8">Ubuntu; pronounced as u.boon.too simply means “Humanity to others”. UbuntuAid was coined to mean Aid to Humans specifically to the People who are displaced and seeking asylum. We are bringing the Ubuntu Spirit to the World of Refugees and Asylum Seekers</p>
            </div>
        </section>
        <Footer/>
    </AuthProvider>
  )
}

export default About