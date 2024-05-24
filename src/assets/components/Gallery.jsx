import React from "react";
import Img1 from "..//img/1.jpeg";
import Img2 from "..//img/2.jpeg";
import Img3 from "..//img/3.jpeg";
import Img4 from "..//img/4.jpeg";
import Img5 from "..//img/5.jpeg";
import Img6 from "..//img/6.jpeg";
import Img7 from "..//img/7.jpeg";
import Img8 from "..//img/8.jpeg";
import Img9 from "..//img/9.jpeg";
import Logo from "../img/Logo.png";
import Img14 from "..//img/14.jpeg";
import Img15 from "..//img/15.jpeg";
import Img16 from "..//img/16.jpeg";


const Gallery = () => {
  return (
    <div className="B bg-light-50 w-full overflow-hidden">
      <header className="flex justify-center items-center py-4 ">
        <img src={Logo} alt="Go Solar Energy Logo" className="w-20" />
        <h1 className="text-2xl ml-2 text-white">Gallery</h1>
      </header>
      <div className="text-center text-white">
        <h1 className="text-4xl">Take A Stroll Through Our Gallery</h1>
        <p>And see how we how we can help you</p>
      </div>

      <div className="Container w-[100%] min-h-[100vh] flex items-center justify-center">
      <div className="gallery overflow-hidden">
  <img src={Img1} className="IMG" />
  <img src={Img2} className="IMG" />
  <img src={Img3} className="IMG" />
  <img src={Img4} className="IMG" />
  <img src={Img5} className="IMG" />
  <img src={Img6} className="IMG" />
  <img src={Img7} className="IMG" />
  <img src={Img8} className="IMG" />
  <img src={Img9} className="IMG" />
  <img src={Img14} className="IMG" />
  <img src={Img15} className="IMG" />
  <img src={Img16} className="IMG" />
</div>

      </div>
    </div>
  );
};

export default Gallery;
