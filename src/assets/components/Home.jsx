import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import image1 from "../img/Image1.jpg";
import image2 from "../img/Image2.jpg";
import image3 from "../img/Image3.jpg";
import Logo from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Services from "./Services";
import About_Us from "./About_Us";
import Gallery from "./Gallery";
import Contact_Us from "./Contact_Us";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const images = [image1, image2, image3];
  const headers = [
    "Solar Power for a Brighter Tomorrow",
    "Discover the Power of Solar Technology",
    "Keep The Lights On Always",
  ];
  const paragraphs = [
    "At Go Solar Energy, we empower homes and businesses with innovative solar solutions for a sustainable future.",
    "Transform your energy consumption with Go Solar Energy's tailored solar solutions.",
    "Shape the future of energy with Go Solar Energy's state-of-the-art solutions.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentHeaderIndex((prevIndex) =>
        prevIndex === headers.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentParagraphIndex((prevIndex) =>
        prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length, headers.length, paragraphs.length]);

  // const toggleOverlay = () => {
  //   setIsOverlayVisible(!isOverlayVisible);
  // };

  return (
    <div>
      <div className="relative h-screen Home overflow-hidden">
        <nav className="navbar-container absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
          <img src={Logo} alt="Go Solar Energy Logo" className="w-[200px]" />
          <div className="hidden Readjust_Half_Screen xl:flex">
            <ul className="Tabs text-white text-2xl space-x-4">
              <li>
                <Link
                  to="Home"
                  smooth={true}
                  duration={3000}
                  className="Hover tag cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  smooth={true}
                  duration={3000}
                  className="Hover tag cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="Services"
                  smooth={true}
                  duration={3000}
                  className="Hover tag cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="Gallery"
                  smooth={true}
                  duration={3000}
                  className="Hover tag cursor-pointer"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  smooth={true}
                  duration={3000}
                  className="Hover tag cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center text-white">
            <div className="">
              <a
                href="#"
                className="icon text-black text-2em m-60px mr-20 text-2xl"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-orange-600 text-4xl"
                />
              </a>
              <a href="#" className="icon mr-20 text-orange-600 text-4xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[40px] cursor-pointer hidden Readjust_Half_Screen_Menu"
              onClick={() => setIsOverlayVisible(true)}
            />
            <div
              className={`${
                isOverlayVisible ? "translate-x-0" : "translate-x-full"
              } w-[400px] h-screen bg-black bg-opacity-75 absolute top-0 right-0 transition-transform duration-300`}
            >
              <header className="flex justify-center items-center py-4 border-2 mt-[200px]">
                <img src={Logo} alt="Go Solar Energy Logo" className="w-20" />
                <h1 className="text-2xl">
                  Go Solar <span className="text-orange-600">ENERGY</span>
                </h1>
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-[40px] cursor-pointer absolute top-[96px] right-4"
                  onClick={() => setIsOverlayVisible(false)}
                />
              </header>
              <ul className="text-white block text-center mt-[80px] text-2xl space-x-4">
                <li className="mb-14">
                  <Link
                    to="Home"
                    smooth={true}
                    duration={3000}
                    className="Hover tag cursor-pointer m-10"
                    onClick={() => setIsOverlayVisible(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-14">
                  <Link
                    to="About"
                    smooth={true}
                    duration={3000}
                    className="Hover tag cursor-pointer"
                    onClick={() => setIsOverlayVisible(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-14">
                  <Link
                    to="Services"
                    smooth={true}
                    duration={3000}
                    className="Hover tag cursor-pointer"
                    onClick={() => setIsOverlayVisible(false)}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-14">
                  <Link
                    to="Gallery"
                    smooth={true}
                    duration={3000}
                    className="Hover tag cursor-pointer"
                    onClick={() => setIsOverlayVisible(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="mb-14">
                  <Link
                    to="Contact"
                    smooth={true}
                    duration={3000}
                    className="Hover tag cursor-pointer"
                    onClick={() => setIsOverlayVisible(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Image Carousel */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>

        {/* Headers and Paragraphs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-7xl text-orange-500 transition-opacity duration-1000 opacity-100">
            {headers[currentHeaderIndex]}
          </h1>
          <p className="ParaFont text-[25px] transition-opacity duration-1000 opacity-100">
            {paragraphs[currentParagraphIndex]}
          </p>
          <button className="h-[60px] rounded-[50px] text-[20px] font-bold bg-orange-500">
          <Link
                  to="About"
                  smooth={true}
                  duration={3000}
                  className=" cursor-pointer transition-opacity 3s ease-in-out"
                >
                 The Better Option
                </Link>
            
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 right-0 m-10 flex justify-center items-center text-2xl text-white mt-2 font-mono font-bold text-[50px]">
          {images.map((_, index) => (
            <div
              key={index}
              className={`mr-2 ${
                currentImageIndex === index ? "text-orange-500" : ""
              }`}
            >
              {index + 1}
              {index < images.length - 1 && (
                <span className="text-white">-</span>
              )}
            </div>
          ))}
        </div>
      </div> 
      
       <Element name="About">
        <About_Us />
      </Element>

      <Element name="Services">
        <Services />
      </Element>

    

      <Element name="Gallery">
        <Gallery />
      </Element>

      <Element name="Contact">
        <Contact_Us />
      </Element>
    </div>
  );
};

export default Carousel;
