import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Wishlistcard from '../Component/Wishlistcard';
import Lottie from 'lottie-react';
import loading from "../assets/loading.json";
import bg from '../../public/blcard-bg.png'
import not from '../assets/not-found.json'
import Useauth from '../Hooks/Useauth';
const Wishlist = () => {
  const {user} = Useauth()
    const {data,isLoading,isFetching,refetch} = useQuery({



        queryKey: ["news"],
        queryFn: async () => {
    
            const data = await fetch('https://blogsph-server.vercel.app/addlist',{credentials:'include'})
            return await data.json()
        }
     })

    //  const {datas} = useQuery({

    //     queryKey: ["newsid"],
    //     queryFn: async () => {
    
    //         const datas = await fetch('http://localhost:5000/allblogs')
    //         return await datas.json()
    //     }
    //  })
     

    const carddata = data?.filter((datas) => datas?.users == user?.email)
     if(isLoading){

        <div className="min-h-screen mx-auto mt-36 w-[500px] ">
        <Lottie animationData={loading}></Lottie>
      </div>
     }

    return (
        <>
         <div className='bg-fixed h-full'style={{
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}>
         <div className="text-center py-10 space-y-3 ">
        <h1 className="lg:text-4xl text-3xl  font-bold text-[#007CFD]">Y O U R B L O G S</h1>
         <div className="flex justify-center">
         <p className="text-xl w-[70%] ">
          Ensure that the short description accurately represents the content of
          the blog post. Misleading descriptions can lead to user
          dissatisfaction
        </p>
         </div>
      </div>

    
         <div className='max-w-[1200px] gap-6 mx-auto py-8 px-5 lg:px-0 grid grid-cols-1'>
          {


carddata?.length > 0 ? carddata?.map(wishcard => <Wishlistcard refetch={refetch} wishcard={wishcard} key={wishcard._id}></Wishlistcard>) :

          <div>
            <Lottie animationData={not}></Lottie>
          </div>
        
          }

         
        </div>
         </div>
        </>
    );
};

export default Wishlist;