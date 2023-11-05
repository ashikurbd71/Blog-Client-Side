import axios from 'axios';
import React from 'react';

const Blogcard = ({blog}) => {

    const title = blog?.title
    const image = blog?.image
    const short_description = blog?.short_description
    const long_description = blog?.long_description
    const category = blog?.category


    const addData = {title,image,short_description,long_description,category}


   const  handlelist = () => {

     axios.post('http://localhost:5000/addlist',addData)
     .then(res =>  console.log(res.data))

   }
     
    return (
        <div className=' '>
            <div className="card w-full h-[500px]  bg-base-100 shadow-xl">
  <figure><img src= {blog?.image} alt="Shoes" className='w-full h-[250px]' /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {blog?.title}
      <div className="badge badge-secondary">{blog?.category}</div>
    </h2>
    <p>{blog?.short_description}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-secondary">Details</button> 
      <button onClick={handlelist} className="btn btn-outline btn-secondary">wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogcard;