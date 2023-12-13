import React from 'react';
import bg from '../../public/login-bg.png'
import axios from 'axios';
import toast from 'react-hot-toast';
import Useauth from '../Hooks/Useauth';
const Addblog = () => {

  const{user} = Useauth()
    const handleadd = e => {
        e.preventDefault()
        const title = e.target.title.value.toLowerCase()
        const image = e.target.image.value
        const category = e.target.category.value.toLowerCase()
        const short_description = e.target.short_description.value
        const long_description = e.target.long_description.value
        const users = e.target.users.value
        const userimg = user?.photoURL
        const owner = user?.displayName
        
    
        
        const productinfo = {
            title,image,category,short_description,long_description,users,userimg,owner
        }
        console.log(productinfo)
    
        axios.post('https://blogsph-server.vercel.app/addblog',productinfo,{withCredentials:true})
        .then(res => {console.log(res.data)
            if(res.data.insertedId){
              
                return toast.success('Blog Added Successfuly!')
            }
        e.target.reset()
          
        })
        e.target.reset
    }
    
    return (
        <div className='py-10' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
         <div data-aos="zoom-out" className="bg-[#007CFD]  dark:bg-black min-h-screen   lg:mx-20">
        <div className="text-center ">
          <h1 className="text-[#fff] text-[30px] font-bold">Add New Blog</h1>
          <p className="lg:px-28 px-5 py-4 font-medium text-[#fff]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a  page when looking at its layout.  The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleadd}>

         <div className="lg:md:flex mx-10 mb-5">

         <div className="form-control lg:w-1/2">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Title" name="title" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control lg:ml-5">
  <label className="label">
    <span className="label-text">User</span>
  </label>
  <label className="input-group">

    <input type="text" defaultValue={user?.email} placeholder="Enter Title" name="users" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control lg:w-1/2 lg:ml-4">
  <label className="label">
    <span className="label-text">Image url</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Image Url" name="image" className="input input-bordered w-full" />
  </label>
</div>

         </div>


         <div className="lg:md:flex mx-10 mb-5">

         <div className="form-control lg:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">

    {/* <input type="text" placeholder="Category"  className="input input-bordered w-full" /> */}
    <select name="category" className='input input-bordered w-full' id="">
        <option value="Technology">Technology</option>
        <option value="Travel">Travel</option>
        <option value="Health">Health </option>
        <option value="Food">Food </option>
        <option value="Personal ">Personal </option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Finance">Finance</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Crafts">Crafts</option>
        <option value="Environment ">Environment </option>
        
    </select>
  </label>
</div>

<div className="form-control lg:w-1/2 lg:ml-4">
  <label className="label">
    <span className="label-text">Short Description</span>
  </label>
  <label className="input-group">

    <textarea  placeholder="Short Description" className='input input-bordered w-full' name="short_description" id="" cols="15" rows="10"></textarea>
  </label>
</div>

         </div>

<div className="form-control w-full px-10">
<label className="label">
<span className="label-text">Long Description</span>
</label>
<label className="input-group">

<textarea placeholder="Long Description" name="long_description" className="input input-bordered w-full" id="" cols="30" rows="10"></textarea>
</label>
</div>

     <div className="px-10 pt-5">
     <input type="submit" value="Add Blog"  className=" w-full px-10 btn  btn-neutral my-5"/>
     </div>
        </form>
      </div>
        </div>
    );
};

export default Addblog;