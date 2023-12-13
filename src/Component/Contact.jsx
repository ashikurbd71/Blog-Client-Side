import bg from '../../public/blcard-bg.png'
import bg1 from '../../public/contact-us.jpg'
import about from '../../public/contact.png'
import { motion } from "framer-motion"
const Contact = () => {
    return (
        <>
        <div
          className="w-full bg-fixed h-[500px]"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl text-black font-bold text-center flex justify-center pt-44">
            {" "}
        
          </h1>
        </div>
  
        <div
          className="flex  lg:flex-row flex-col px-10 justify-between items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
  
          <div  className="flex-1">
            <h1 data-aos="zoom-out-right" className="lg:text-3xl mt-10 text-center text-xl font-bold ">
            Warm and welcoming, encouraging a friendly greeting
            </h1>
  
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='overflow-x-hidden'>
  <form className="card-body">
        <div className="form-control">
          <label className="label">
         
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <textarea name="" placeholder='message' id="" cols="30" rows="10"></textarea>
        <div className="form-control mt-6">
        <button className="btn btn-outline btn-secondary">Send</button>
        </div>
      </form>
  </div>
           
          </div>

          <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="flex-1 overflow-x-hidden">
            <img src={about} alt="" className="w-[600px]" />
          </div>
        </div>
      </>
    );
};

export default Contact;