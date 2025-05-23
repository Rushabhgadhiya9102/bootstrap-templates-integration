import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import './App.css'
import Herosection from "./components/Herosection";
import Header from "./components/Header";
import About from "./components/About";
import Stats from "./components/Stats";
import AboutAlt from "./components/AboutAlt";
import Client from "./components/Client";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Herosection />
        <About />
        <Stats />
        <AboutAlt />
        <Client />
        <Testimonial />
        <Services />
        <CallToAction />
        <Portfolio />
        <Team />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />

        <a href="“https://themewagon.com">{/* Scroll Top */}</a>
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
    </>
  );
};

export default App;
