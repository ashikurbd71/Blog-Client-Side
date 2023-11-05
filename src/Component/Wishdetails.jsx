import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../public/login-bg.png'

const Wishdetails = () => {

    // 

    // const {data,isLoading,isFetching,refetch} = useQuery({

    //     queryKey: ["news"],
    //     queryFn: async () => {
    
    //         const data = await fetch('http://localhost:500/addlist')
    //         return await data.json()
    //     }
    //  })
    
    const data = useLoaderData()
    console.log(data)
    
      

    return (
        <div className=' min-h-screen py-28' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="max-w-[1200px] mx-auto card px-5 lg:px-0 lg:card-side bg-base-100 shadow-xl">
  <figure><img src={data?.image} className='w-full h-[300px]' alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data?.title}</h2>
    <div className="badge text-xl font-samibold p-3 badge-secondary">{data?.category}</div>
    <p>{data?.long_description}</p>
    <div className="card-actions justify-end">
    <Link to={'/wishlist'}><button className="btn btn-outline btn-secondary">Back</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Wishdetails;