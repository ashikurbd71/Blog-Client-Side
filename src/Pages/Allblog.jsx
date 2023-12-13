import { useQuery } from '@tanstack/react-query';
import bg from '../../public/cover-all.jpg'
import Allblogscard from '../Component/Allblogscard';
import {  useEffect, useState } from 'react';
import bg1 from '../../public/blcard-bg.png'
import Swal from 'sweetalert2';

import Loading from '../Component/loading';

const Allblog = () => {


  
    const [blogpost,setBlogpost]=useState()
    console.log(blogpost)
    useEffect(() => {

         fetch('https://blogsph-server.vercel.app/allblogs',{credentials:'include'})
         .then(res => res.json())
         .then(data => setBlogpost(data))

    },[])

     const [searchQuery, setSearchQuery] = useState('');
  
    const [searchtitle,setSearchtitle]=useState('')

    const handletitle = () => {

        const searchResults = blogpost?.filter((post) =>
        post.title.toLowerCase().includes(searchtitle.toLowerCase())
      );
    
      if(searchResults?.length === 0){
    
        return (
    
    
        Swal.fire('Blogs Not foud'))
        
       }
    
       setBlogpost(searchResults)
    }

      const handlechngs = () => {

    const searchResults = blogpost?.filter((post) =>
    post.category.toLowerCase() == searchQuery.toLowerCase()
  );

  if(searchResults?.length === 0){

    return (


    Swal.fire('Blogs Not foud!'))
    
   }

   setBlogpost(searchResults)
      }

        
     console.log(blogpost)


    return (

        <>
        <div className='h-[600px] bg-fixed '  style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
         
       
       <div className='lg:pt-28 pt-8'>

       <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='flex justify-center'>
       <p className='lg:text-2xl text-xl text-center font-samibold w-[60%] text-white'>Welcome to our one-stop shop, where versatility meets variety! Explore
          a world of endless choices at SQUARESPACE. Discover the perfect blend of quality,
          style, and affordability as you navigate through our diverse product
          range. Whatever you seek, find it here at SQUARESPACE. Your
          go-to destination for all things exceptional.</p>
       </div>



       <div className='max-w-[1200px]   py-6'>

    <div className='flex justify-center mb-10'>
    
    <div>
<select name="category" placeholder='serch by category' onChange={(e) => setSearchQuery(e.target.value)}  value={searchQuery} className='input input-bordered rounded-none' id="">
         <option value="Foods"></option>
        <option value="Food">Food</option>
        <option value="Technology">Technology</option>
        <option value="Travel">Travel</option>
        <option value="Health">Health </option>
        <option value="Personal ">Personal </option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Finance">Finance</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Crafts">Crafts</option>
        <option value="Environment ">Environment </option>
        
    </select>

       
        <button onClick={handlechngs}  className="btn rounded-r-none btn-primary absolute bg-[#E2136E] border-none rounded-l-none">Filter</button>
        </div>
   
    </div>

    
    <div className='flex justify-center  lg:mb-0 px-5 lg:px-0'>
        <div>
        <input type="text" value={searchtitle}
     onChange={(e) => setSearchtitle(e.target.value)}
     placeholder="Search by title"
   
     className="input input-bordered rounded-none lg:w-[400px] lg:pr-16 p-5" /> 
  <button onClick={handletitle}  className="btn btn-primary rounded-r-none  absolute bg-[#E2136E] border-none rounded-l-none">Search</button>
        </div>
        </div>
 </div>

       </div>


        </div>

         <div className='  ' style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

            {
              blogpost?.length > 0 ?
         

        <div  data-aos="fade-up"
        data-aos-duration="3000" className='grid lg:grid-cols-3 grid-cols-1 px-5 lg:px-0 gap-5 max-w-[1200px] mx-auto py-10'>
        {
            blogpost?.map(blog => <Allblogscard  blog={blog} key={blog?._id}></Allblogscard>) 

          }
   
      
        </div>
       
       : <Loading/>
       
      }
       </div>
        </>
       
    );
};

export default Allblog;