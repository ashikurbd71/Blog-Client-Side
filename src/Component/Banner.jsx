import React from "react";
import cover from '../../public/banner.jpg'
import Typed from 'react-typed';
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
      < div  className="py-20 w-full max-w-[1200px] lg:px-0 px-10 justify-center flex lg:flex-row flex-col items-center  mx-auto">
        <div className="sp space-y-5 lg:mt-28 mt-24">
          <h1 className="lg:text-6xl text-5xl pb-3 font-bold  text-center text-white">
          
          <Typed
                strings={[
                    'Create a Blog.',
                   
               ]}
                    typeSpeed={40}
                    backSpeed={50}
                 
                    loop >
                 
                </Typed>
          
          </h1>
          
          <div className=" flex justify-center">
          <p className="text-black pb-5 fon font-semibold text-lg lg:text-xl lg:w-[70%] text-center">
            Share your story with the world. Stand out with a
            professionally-designed blog website that can be customized to fit
            your brand. Build, manage, and promote your blog with Squarespace’s
            built-in suite of design and marketing tools.
          </p>
          </div>

         <div className="flex justify-center">
         <Link to={'/allblog'} className="t"> <button className=" bg-[#17ADF8]   font-semibold rounded-md btn-success px-12 py-3 text-black ">GET STARTED</button></Link>
         </div>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
