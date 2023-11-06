import React from "react";
import cover from "../assets/background-blog.jpg";
import banner from '../assets/banner.png'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className=" h-[700px] bg-fixed w-full  mx-auto "
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-20 w-full max-w-[1200px] lg:px-0 px-10 justify-center flex lg:flex-row flex-col items-center  mx-auto">
        <div className="sp space-y-4">
          <h1 className="lg:text-6xl text-4xl font-bold text-[#FFFFFF]">Create a Blog.</h1>
          <p className="text-[#F5F5F5] pb-5 font-bold text-lg">
            Share your story with the world. Stand out with a
            professionally-designed blog website that can be customized to fit
            your brand. Build, manage, and promote your blog with Squarespace’s
            built-in suite of design and marketing tools.
          </p>

         <Link to={'/allblog'} className="t"> <button className="btn btn-outline rounded-none px-10 border-[#FFFFFF] bg-[#FFFFFF]">Get Started</button></Link>
        </div>
        <div>
            <img src={banner} alt="" className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
