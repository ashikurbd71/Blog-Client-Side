import React from 'react';
import Useauth from '../Hooks/Useauth';
import loading from '../assets/loading.json'
import Lottie from 'lottie-react';
import { Navigate, useLocation } from 'react-router-dom';

const Privteroute = ({children}) => {

    const location = useLocation()
    const{user,isloading}=Useauth()

      if(isloading){

        return <div className='min-h-screen mx-auto mt-36 w-[500px] '>

   <Lottie animationData={loading}></Lottie>
  
        </div>
      }


      if(user){

        return children
      } else{ 

        return  <Navigate state={location.pathname} to={'/login'}></Navigate>
        }
};

export default Privteroute;