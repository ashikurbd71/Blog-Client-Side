import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../assets/login.json'
import Lottie from 'lottie-react';
import bg from '../../public/login-bg.png'
import Useauth from '../Hooks/Useauth';
import toast from 'react-hot-toast';
import Media from '../Component/Media';
const Login = () => {

    const {loginuser,user}=Useauth()
    const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 const location = useLocation()
 const navigate = useNavigate()

 console.log(user)
 const handlelogin = async e => {
 
    e.preventDefault()

    
  
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return toast.error("provide right email!");
      }
  
      if (password.length < 6) {
        return toast.error("password must be 6 chracter!");
      }
    
    console.log(email,password)
   const userid =  toast.loading('Login...')

    try{
  await loginuser(email,password)

  toast.success('login successfuly!',{id : userid})

  navigate(location?.state? location?.state : '/')
    }
    catch(err){

        console.log(err)
        toast.error(err.message,{id : userid})
    }
}

    return (
        <div className=''style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="px-5 pt-10 lg:px-0 lg:mx-20 lg:flex-row flex-col-reverse items-center min-h min-h-screen flex justify-center ">
       

       <div>
       <Lottie animationData={login} className='mr-10'></Lottie>
       </div>

       <div className="w-full max-w-sm p-4 bg-[#007CFD] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <form className="space-y-6" action="#" onSubmit={handlelogin}>
            <h5 className="text-[30px] font-bold text-black  dark:text-white text-center">
              Login your account
            </h5>

            <div>
              <label
                htmlFor="email"
                className="block mb-2    dark:text-white  text-[#fff] font-semibold text-[18px]"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                id="email"
                onBlur={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2   text-[#fff] font-semibold text-[18px] dark:text-white "
              >
                Password
              </label>
              <input
                type= "password" 
                name="password"
                id="password"
                placeholder="Enter your password"
                onBlur={(e) => setPassword(e.target.value)}
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
                  Remember me
                </label>
              </div>
              <button className="ml-auto text-sm hover:underline dark:text-blue-500 text-black  ">
                Lost Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className=" text-[#fff] text-[16px] font-medium dark:text-gray-300">
              Dont’t Have An Account ?{" "}
              <Link to={"/register"}>
                <a
                  href="#"
                  className="text-black  hover:underline dark:text-blue-500"
                >
                  Register account
                </a>
              </Link>
            </div>
       <Media/>
          </form>
        </div>


      </div>
        </div>
    );
};

export default Login;