import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/login.json'
import bg from '../../public/login-bg.png'

const Register = () => {


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleregister = async e => {

        e.preventDefault()
        console.log(email,password)
    }

    return (
        <div className=''style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
           <div className="px-5 lg:px-0 lg:flex-row  flex-col-reverse min-h min-h-screen flex justify-center items-center">

       <div>
       <Lottie animationData={login} className='mr-10'></Lottie>
       </div>

        <div className="w-full my-10 max-w-sm p-4 bg-[#007CFD] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <form className="space-y-2"  onSubmit={handleregister}>
            <h5 className="text-[30px] font-bold text-black  dark:text-white text-center">
              Register your account
            </h5>

            <div>
              <label
                htmlFor="text"
                className="block mb-2    dark:text-white  text-[#fff] font-semibold text-[20px]"
              >
                 Your Number
              </label>
              <input
                type="text"
                name="name"
             
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block mb-2    dark:text-white  text-[#fff] font-semibold text-[20px]"
              >
                 Photo URL
              </label>
              <input
                type="text"
                name="photo"
             
                id="photo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
                required
              />
            </div>



            <div>
              <label
                htmlFor="email"
                className="block mb-2    dark:text-white  text-[#fff] font-semibold text-[20px]"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                onBlur={(e) => setEmail(e.target.value)}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2   text-[#fff] font-semibold text-[20px]dark:text-white "
              >
                Password
              </label>
              <input
                // type={showpass ? "text" : "password"}
                name="password"
                id="password"
                onBlur={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />

              {/* <div className="relati relative bott bottom-8 flex justify-end pr-5">
                <button onClick={() => setShowpass(!showpass)}>
                  {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
              </div> */}
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-black  dark:text-gray-300"
                >
                  check our trams and condetion
                </label>
              </div>
              
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            <div className=" text-[#fff] text-[16px] font-medium dark:text-gray-300">
              Dont’t Have An Account ?{" "}
              <Link to={"/login"}>
                <a
                  href="#"
                  className="text-black  hover:underline dark:text-blue-500"
                >
                  Login account
                </a>
              </Link>
            </div>

           
            {/* <Media></Media> */}
          </form>
        </div>
      </div>
        </div>
    );
};

export default Register;