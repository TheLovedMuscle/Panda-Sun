import React, { useEffect } from "react";
import About from "../img/About.jpg";
import Logo from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "scrollreveal";

const AboutUs = () => {
  useEffect(() => {
    const elements = [".text-section", ".contact-info"];
    elements.forEach((element) => {
      ScrollReveal().reveal(element, {
        reset: true,
        distance: "200px",
        duration: 2500,
        delay: 400,
        origin: "bottom",
      });
    });
    ScrollReveal().reveal(".image-section", {
      reset: true,
      distance: "200px",
      duration: 2500,
      delay: 400,
      origin: "left",
    });
  }, []);

  return (
    <div className="about-us-container overflow-hidden">
      <header className="flex justify-center items-center py-4">
        <img src={Logo} alt="Go Solar Energy Logo" className="w-20" />
        <h1 className="text-2xl ml-2">About Us</h1>
      </header>
      
      <main className="main-content p-10 flex flex-wrap justify-center items-start">
        <div className="image-section w-full lg:w-1/2 p-4">
          <h1 className=" text-6xl text-orange-600 m-10">About Us</h1>
          <img src={About} alt="About Go Solar Energy" className="w-full" />
        </div>

        <div className="text-section w-full lg:w-1/2 p-4 ">
          <h2 className="text-6xl mb-4">
            Go <span className="text-orange-600">Solar</span> Energy
          </h2>
          <p className="text-2xl mb-6">
            At Go Solar Energy, we are committed to providing innovative solar solutions that help power a sustainable future. Our mission is to offer reliable and efficient solar energy systems that cater to the needs of both residential and commercial clients.
          </p>
          <ul className="features-list mb-6">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
              Complete Solar Systems for Reliable Power During Load Shedding
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
              Solar Geyser Installation and Consultation
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
              Maintenance and Upgrades of Existing Systems
            </li>
          </ul>
          <div className="contact-info">
            <h3 className="text-2xl mb-4">
              The <span className="text-green-600">Future</span> of Solar Energy
            </h3>
            <div className="flex items-center text-2xl mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-green-600 text-4xl mr-2" />
              <span>+27 69 118 4049</span><FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-4xl ml-2" /> <span> gosolarco@gmail.com </span>
            </div>
            <button className="call-us-button bg-green-600 w-48 h-12 rounded-full text-white text-lg">
              Talk To Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
