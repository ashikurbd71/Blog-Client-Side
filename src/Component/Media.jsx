import React from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import Useauth from '../Hooks/Useauth';
import { useLocation, useNavigate } from 'react-router-dom';
const Media = () => {

    const{googlesignin} = Useauth()

    const location = useLocation()
    const navigate =useNavigate()
    const handleprovider = media => {

        googlesignin(media)
        .then(result => {
          // Signed up 
          const user = result.user;
          console.log(user)
   
          toast.success("Successfully login")
        
          navigate(location?.state ? location?.state : "/")
        
          // ...
        })
        .catch((error) => {
         
          console.log(error)
          return toast.error(error.message);
        
      
          // ..
        });


     }
    return (
        <div>
             <div>
            <div>
      <div className="mt- flex justify-center gap-4">
        <button
          onClick={() => handleprovider(googlesignin)}
          className="btn text-xl bg-[#fff] btn-outline w-full"
        >
          <FaGoogle></FaGoogle>
          
        </button>

        {/* <button
          onClick={() => handleprovider(Gitsigin)}
          className="btn bg-[#fff] btn-outline "
        >
          <FaGithub></FaGithub>
          <span> Github</span>
        </button> */}
      </div>
    </div>
        </div>
        </div>
    );
};

export default Media;