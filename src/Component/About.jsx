import React from "react";
import bg from "../../public/about.jpg";
import about from "../../public/about-img.png";
import bg1 from "../../public/blcard-bg.png";
import { motion } from "framer-motion"
const About = () => {
  return (
    <>
      <div
        className="w-full bg-fixed h-[500px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl text-black font-bold text-center flex justify-center pt-44">
          {" "}
          ABOUT
        </h1>
      </div>

      <div
        className="flex  lg:flex-row flex-col px-10 justify-between items-center"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div  animate={{ x: -20 ,scale:1}} initial={{scale:0}} transition={{delay:1}} className="flex-1 overflow-x-hidden">
          <img src={about} alt="" className="w-[600px]" />
        </motion.div>

        <motion.div animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }} className="flex-1  overflow-x-hidden ">
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
            the niche you're covering.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
