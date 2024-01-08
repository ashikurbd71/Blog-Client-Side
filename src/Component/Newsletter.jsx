import React from "react";
import bg from "../../public/blcard-bg.png";
import Lottie from "lottie-react";
import news from '../../public/banner-img.png'
import toast from "react-hot-toast";


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
      
      style={{
        backgroundColor:'#EBECEE'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-0" >
        <div className="text-center  py-10 " data-aos="zoom-out-right">
          <h1 className="font-bold text-[#17ADF8] lg:text-4xl text-2xl">N E W S L E T T E R</h1>
          <div className="flex justify-center">
          <p className="my-3 lg:text-xl text-black lg:w-[70%]">
            Clearly convey the main theme or focus of your newsletter in the
            title. Subscribers should instantly understand what the newsletter
            is about.
          </p>
          </div>
        </div>



          <div className="flex jus lg:flex-row flex-col justify-between gap-10 items-center">


       < div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <img src={news} alt="" />
  
       </div>

 <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
 <form onSubmit={handlefrom} className="flex-1 mb-10">
        <div className="form-control w-[400px]">

            <h1 className="text-2xl text-center font-bold">Discover the Latest Innovations</h1>
          <label className="label">
          
          </label>
          <input type="email" placeholder="Email Adress" name="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
        <button className="btn btn-[12px] btn-outline btn-info text-lg"><input type="button" value="Subcribe" /></button>
        </div>
      </form>
 </div>

          </div>
      </div>
    </div>
  );
};

export default Newsletter;
