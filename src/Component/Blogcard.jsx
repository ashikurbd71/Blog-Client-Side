import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Useauth from '../Hooks/Useauth';
// // import PhotoView from 'react-photo-view';
// import 'react-photo-view/style.css';
const Blogcard = ({blog}) => {

  const {user} = Useauth()
 
    const title = blog?.title
    const image = blog?.image
    const short_description = blog?.short_description
    const long_description = blog?.long_description
    const category = blog?.category
    const blog_id = blog?._id
    const users = user?.email
    


    const addData = {title,image,short_description,long_description,category,blog_id,users}


   const  handlelist = () => {

     axios.post('https://blogsph-server.vercel.app/addlist',addData)
     .then(res =>  {console.log(res.data)
    
        if(res.data.insertedId){
          
            return toast.success('Blog Added Wishlist!')
        }
    })

  

   }
     
    return (

      <div data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
        <div  className=' overflow-x-hidden '>
            <div className="card w-full h-[500px]  bg-base-100 shadow-xl">
  <figure><img src= {blog?.image} alt="Shoes" className='w-full h-[250px]' /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {blog?.title || <Skeleton count={10}/>}
      <div className="badge text-xl font-samibold p-3 badge-secondary">{blog?.category}</div>
    </h2>
    <p>{blog?.short_description}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${blog?._id}`}><button className="btn btn-outline btn-secondary">Details</button> </Link>
    <button onClick={handlelist} className="btn btn-outline btn-secondary">wishlist</button>
    </div>
  </div>
</div>
        </div>

        </div>
    );
};

export default Blogcard;