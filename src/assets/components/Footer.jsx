import React from 'react'
import {
    faTwitter,
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='bg-[#060612] text-white overflow-hidden'>
        <div className='text-black   mt-14'>
    <div>
   <div className='text-white  flex justify-evenly'>
<div className='mt-10'>
   <h1 className='text-3xl'> <span className='text-orange-600'>Help </span>Us <span>Help</span> You <br />Keep The <span className='text-orange-600'> Water Hot</span><br />Keep The<span className='text-orange-600'> Lights On</span> <br /><span>And You <span className='text-orange-600'>Happy</span></span></h1>
</div>
<div className='mt-10'>
    <h1 className='text-1xl font-bold mt-2 text-orange-600'>Address</h1>
<p className=''>South Africa <br />870 Street ,Office 759 <br /> Cape Town,8100</p>
</div>

<div className='mt-10'>
   <h1 className='font-bold text-1xl mt-2 text-orange-600'>Drop Us A Message</h1>
   <p>gosolarco@gmail.com <br />+1840 841 25 79</p>
</div>
</div>
</div>
<div className="media-icons mt-[100px] flex justify-center text-orange-600">
     <a
       href="#"
       className="icon text-black text-2em m-60px mr-20 text-2xl "
     >
       <FontAwesomeIcon icon={faFacebook} className='text-orange-600' />
     </a>
     <a href="#" className="icon mr-20 text-2xl ">
       <FontAwesomeIcon icon={faInstagram} />
     </a>
   </div>
</div></div>
  )
}

export default Footer