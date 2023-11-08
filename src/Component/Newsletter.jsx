import React from "react";
import bg from "../../public/blcard-bg.png";
import Lottie from "lottie-react";
import news from '../assets/news.json'
import toast from "react-hot-toast";
import { motion } from "framer-motion"

const Newsletter = () => {


     const handlefrom = (e) => {

        e.preventDefault()
          e.target.reset()
        const email = e.target.email.value
toast.success('Thank you for subscribing to our newsletter')
        console.log(email)
     }
  return (
    <div
      className=" "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
        <div className="text-center  py-10 ">
          <h1 className="font-bold lg:text-4xl text-2xl">N E W S L E T T E R</h1>
          <div className="flex justify-center">
          <p className="my-3 text-xl  w-[70%]">
            Clearly convey the main theme or focus of your newsletter in the
            title. Subscribers should instantly understand what the newsletter
            is about.
          </p>
          </div>
        </div>



          <div className="flex jus lg:flex-row flex-col justify-between gap-10 items-center">


       <motion.div animate={{ x: -20 ,scale:1}} initial={{scale:0}} transition={{delay:1}}>
  <Lottie animationData={news}  className="flex-1"></Lottie>
  
       </motion.div>

 <motion.div animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}>
 <form onSubmit={handlefrom} className="flex-1 mb-10">
        <div className="form-control w-[400px]">

            <h1 className="text-2xl text-center font-bold">Discover the Latest Innovations</h1>
          <label className="label">
          
          </label>
          <input type="email" placeholder="Email Adress" name="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
        <button className="btn btn-outline text-2xl fon-bold btn-secondary"><input type="button" value="Subcribe" /></button>
        </div>
      </form>
 </motion.div>

          </div>
      </div>
    </div>
  );
};

export default Newsletter;
