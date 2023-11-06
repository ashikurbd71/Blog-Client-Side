import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Allblogscard = ({blog}) => {

    console.log(blog)

    const title = blog?.title
    const image = blog?.image
    const short_description = blog?.short_description
    const long_description = blog?.long_description
    const category = blog?.category


    const addData = {title,image,short_description,long_description,category}

    const  handlelist = () => {

        axios.post('http://localhost:5000/addlist',addData)
        .then(res =>  {console.log(res.data)
       
           if(res.data.insertedId){
   
               return toast.success('Blog Added Wishlist!')
           }
       })
   
      }
    return (
        <div >
            <div className="card h-[500px] bg-base-100 shadow-xl">
  <figure><img src={blog?.image} alt="Shoes" /></figure>
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