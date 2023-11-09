import React from 'react';
import error from '../../public/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='min-h-screen lg:my-0 my-28  mx-auto max-w-[1200px]'>
           <div>
           <img src={error} alt="" className='' />


           </div>

           <div className='flex justify-center mb-10'>
           <Link to={'/'}><button className="btn btn-outline bg-black text-white px-20 ">Home</button></Link>
           </div>
           
        </div>
    );
};

export default Error;