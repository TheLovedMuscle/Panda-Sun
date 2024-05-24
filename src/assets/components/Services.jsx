import React, { useEffect } from 'react';
import Logo from '../img/Logo.png';
import Solar from '../img/Serve1.png';
import SolarG from '../img/Serve2.png';
import SolarC from '../img/Serve3.png';
import ScrollReveal from 'scrollreveal';

const Services = () => {
  useEffect(() => {
    const elements = ['.service-item', '.overlay', '.contact'];
    elements.forEach((element) => {
      ScrollReveal().reveal(element, {
        reset: true,
        distance: '200px',
        duration: 2500,
        delay: 400,
        origin: 'bottom',
      });
    });
    ScrollReveal().reveal('.service-item-1', {
      reset: true,
      distance: '200px',
      duration: 2500,
      delay: 400,
      origin: 'left',
    });
    ScrollReveal().reveal('.service-item-2', {
      reset: true,
      distance: '200px',
      duration: 2500,
      delay: 400,
      origin: 'bottom',
    });
    ScrollReveal().reveal('.service-item-3', {
      reset: true,
      distance: '200px',
      duration: 2500,
      delay: 400,
      origin: 'right',
    });
  }, []);

  return (
    <div className="services-container text-white overflow-hidden">
      <header className="flex justify-center items-center py-4">
        <img src={Logo} alt="Go Solar Energy Logo" className="w-20" />
        <h1 className="text-2xl ml-2">Our Services</h1>
      </header>
      <h2 className="text-3xl text-center mb-10">Our Company Solutions</h2>

      <div className="services-grid flex flex-wrap justify-center items-center gap-6 px-4">
        <div className="service-item service-item-1 cursor-pointer relative p-6 w-full lg:w-[30%]">
          <img src={Solar} alt="Solar Solutions" className="w-full rounded-lg" />
          <h3 className="service-title text-2xl text-center mt-4">Solar Solutions</h3>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
            <div className="overlay-content text-center text-3xl">
              <h4>SafeGuard Your Home</h4>
              <p className="font-mono text-lg mt-2">With our full solar panel installations</p>
            </div>
          </div>
        </div>

        <div className="service-item service-item-2 cursor-pointer relative p-6 w-full lg:w-[30%]">
          <img src={SolarG} alt="Solar Geyser Installations" className="w-full rounded-lg" />
          <h3 className="service-title text-2xl text-center mt-4">Solar Geyser Installations</h3>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
            <div className="overlay-content text-center text-3xl">
              <h4>Heat Up Water</h4>
              <p className="font-mono text-lg mt-2">With Solar Powered Geysers</p>
            </div>
          </div>
        </div>

        <div className="service-item service-item-3 cursor-pointer relative p-6 w-full lg:w-[30%]">
          <img src={SolarC} alt="Solar Energy Consultation" className="w-full rounded-lg" />
          <h3 className="service-title text-2xl text-center mt-4">Solar Energy Consultation</h3>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
            <div className="overlay-content text-center text-3xl">
              <h4>Enhance Your Solar Knowledge</h4>
              <p className="font-mono text-lg mt-2">Get expert advice from our consultants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
