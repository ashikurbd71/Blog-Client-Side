import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Useauth from '../Hooks/Useauth';


const Allblogscard = ({blog}) => {

  const {user} =Useauth()
    console.log(blog)

    const title = blog?.title
    const image = blog?.image
    const short_description = blog?.short_description
    const long_description = blog?.long_description
    const category = blog?.category
    const users = user?.email
    const blog_id = blog?._id



    const addData = {title,image,short_description,long_description,category,users,blog_id}

    const  handlelist = () => {

        axios.post('https://blogsph-server.vercel.app/addlist',addData)
        .then(res =>  {console.log(res.data)
       
           if(res.data.insertedId){
   
               return toast.success('Blog Added Wishlist!')
           }
       })
   
      }
    return (
        <div >
            <div className="card h-[500px] bg-base-100 shadow-xl">
  <figure><img src={blog?.image} className='w-full ' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {blog?.title}
      <div className="badge badge-secondary">{blog?.category}</div>
    </h2>
    <p>{blog?.short_description}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${blog?._id}`}><button className="btn btn-outline btn-secondary">Details</button> </Link>
      <button onClick={handlelist} className="btn btn-outline btn-secondary">wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Allblogscard;