import React from 'react';
import error from '../../public/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='min-h-screen my-28 flex justify-center mx-auto max-w-[1200px]'>
           <div>
           <img src={error} alt="" className='w-[500px]' />

<Link to={'/'}><button className="btn btn-outline px-20 btn-secondary">Home</button></Link>
           </div>
              
        </div>
    );
};

export default Error;