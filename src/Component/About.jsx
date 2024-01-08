import React from "react";
import bg from "../../public/about.jpg";
import about from "../../public/about-img.png";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="text-center  py-10 " data-aos="zoom-out-right">
          <h1 className="font-bold text-[#17ADF8] lg:text-4xl text-2xl">A B O U T U S</h1>
          <div className="flex justify-center">
          <p className="my-3 lg:text-xl text-black  lg:w-[70%]">
          Uncover the essence of NOVANOTES. Passionate about innovation and empowerment since 2021, we craft excellence. Join us on a journey of impact and inspiration.
          </p>
          </div>
        </div>
      <div
        className="flex  lg:flex-row flex-col px-10 justify-between items-center"
        style={{
          backgroundColor:'#EBECEE'
        }}
      >
        <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex-1 overflow-x-hidden">
          <img src={about} alt="" className="w-[600px]" />
        </div>

        <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="flex-1  overflow-x-hidden ">
          <h1 className="lg:text-3xl text-xl font-bold ">
            Simple and straightforward indicating <br /> an introduction to your
            identit
          </h1>

          <p className="text-lg font-normal my-3">
            Start with a welcoming introduction to your blog. Briefly explain
            its purpose and what inspired you to create it. Connect with your
            audience by sharing your enthusiasm and commitment.Share your
            personal or brand story. Explain the journey that led you to start
            the blog. Highlight your motivations, experiences, or expertise in
            the niche you're covering,read more.....
          </p>

          <div className="flex justify-center items-center text-[#17ADF8] gap-4 pt-5 text-4xl">

           <CiFacebook/>
           <CiInstagram/>
           <FaWhatsapp/>
           <FaTwitter/>
           </div>

        </div>

           
      </div>
    </>
  );
};

export default About;
