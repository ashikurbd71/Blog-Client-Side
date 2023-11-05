import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Wishlistcard from '../Component/Wishlistcard';
import Lottie from 'lottie-react';
import loading from "../assets/loading.json";
import bg from '../../public/blcard-bg.png'
const Wishlist = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({

        queryKey: ["news"],
        queryFn: async () => {
    
            const data = await fetch('http://localhost:5000/addlist')
            return await data.json()
        }
     })

     if(isLoading){

        <div className="min-h-screen mx-auto mt-36 w-[500px] ">
        <Lottie animationData={loading}></Lottie>
      </div>
     }

     
    return (
        <>
         <div className='bg-fixed h-full'style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
         <div className="text-center py-10 space-y-3 ">
        <h1 className="lg:text-4xl text-3xl  font-bold">YOUR PRODUCTS</h1>
         <div className="flex justify-center">
         <p className="text-xl w-[70%] ">
          Ensure that the short description accurately represents the content of
          the blog post. Misleading descriptions can lead to user
          dissatisfaction
        </p>
         </div>
      </div>
         <div className='max-w-[1200px] max-auto py-5 px-5 lg:px-0 grid grid-cols-1'>
          {
             data?.map(wishcard => <Wishlistcard wishcard={wishcard} key={wishcard._id}></Wishlistcard>)
          }
        </div>
         </div>
        </>
    );
};

export default Wishlist;