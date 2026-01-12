import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/ContactUs";
import Footer from "../components/Sections/Footer"
import InfoBar from "../components/Sections/InfoBar";
import HeroCarousel from "../components/Sections/HeroCarousel";
import WhatsAppFloat from "../components/Sections/WhatsAppFloat";

export default function Landing() {
  return (
    <>
      <InfoBar />
      <TopNavbar />
      <Header />
      <HeroCarousel />
      <Services />
      <Projects />
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />
      <WhatsAppFloat/>
      <Footer />
    </>
  );
}


