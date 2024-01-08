import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import bg from '../../public/blcard-bg.png'
import bg1 from '../../public/contact-us.jpg'
import about from '../../public/contact.png'
import { motion } from "framer-motion"
const Contact = () => {
    return (
        <>
       
       <div className="text-center  py-10 " data-aos="zoom-out-right">
          <h1 className="font-bold text-[#17ADF8] lg:text-4xl text-2xl">C O N T A C T U S</h1>
          <div className="flex justify-center">
          <p className="my-3 lg:text-xl text-black  lg:w-[70%]">
          Connect with ease! Whether you have questions, feedback, or need assistance, our team at NOVANOTES is ready to help. Reach out for prompt and friendly support today
          </p>
          </div>
        </div>
  
        <div
          className="flex  lg:flex-row flex-col px-10 justify-between items-center"
          style={{
            
            backgroundColor:'#EBECEE'
          }}
        >
        
  
          <div  className="flex-1">
            <h1 data-aos="zoom-out-right" className="lg:text-2xl mt-10 text-center text-xl font-bold ">NOVANOTES</h1>
  
      <div className='flex justify-center mt-3'>
        <div>
        <div className='flex items-center gap-2'>
            <FaLocationArrow className='text-[#17ADF8]'/> 
            <span className=' text-gray-500 font-medium '>Mirpur,Dhaka,Bangladesh</span>
          </div>

          <div className='flex items-center gap-2'>
            <FaPhone className='text-[#17ADF8] font-medium '/>
            <span className=' text-gray-500 '>+880-1581782193</span>
          </div>

          <div className='flex items-center gap-2'>
            <CgMail className='text-[#17ADF8] text-xl font-medium '/> 
            <span className=' text-gray-500 '>novanotes@gmail.com</span>
          </div>
        </div>
      </div>
          
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className='overflow-x-hidden'>
  <form className="card-body">
        <div className="form-control">
          <label className="label">
         
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <textarea name="" placeholder='message' id="" cols="30" rows="10"></textarea>
        <div className="form-control mt-3">
        <button className="btn btn-[12px] btn-outline btn-info text-lg">Send</button>
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