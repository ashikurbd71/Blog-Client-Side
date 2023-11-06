import { useQuery } from '@tanstack/react-query';
import bg from '../../public/cover-all.jpg'
import Allblogscard from '../Component/Allblogscard';
import {  useEffect, useState } from 'react';
import bg1 from '../../public/blcard-bg.png'
import Swal from 'sweetalert2';
const Allblog = () => {


    
    // const {data,isLoading,isFetching,refetch} = useQuery({

    //     queryKey: ["news"],
    //     queryFn: async () => {
    
    //         const data = await fetch('http://localhost:5000/allblogs')
    //         return await data.json()
    //     }
    //  })

    useEffect(() => {

         fetch('http://localhost:5000/allblogs')
         .then(res => res.json())
         .then(data => setBlogpost(data))

    },[])

     const [searchQuery, setSearchQuery] = useState('');
    const [blogpost,setBlogpost]=useState()
    const [searchtitle,setSearchtitle]=useState('')

    const handletitle = () => {

        const searchResults = blogpost?.filter((post) =>
        post.title.toLowerCase().includes(searchtitle.toLowerCase())
      );
    
      if(searchResults.length === 0){
    
        return (
    
    
        Swal.fire('Search Again!'))
        
       }
    
       setBlogpost(searchResults)
    }

      const handlechngs = () => {

    const searchResults = blogpost?.filter((post) =>
    post.category.toLowerCase() == searchQuery.toLowerCase()
  );

  if(searchResults.length === 0){

    return (


    Swal.fire('Search Again!'))
    
   }

   setBlogpost(searchResults)
      }

        
     console.log(blogpost)


    return (

        <>
        <div className='h-[600px] bg-fixed'  style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
         
       
       <div className='pt-28'>

       <div className='flex justify-center'>
       <p className='lg:text-2xl text-xl text-center font-samibold w-[60%] text-white'>Welcome to our one-stop shop, where versatility meets variety! Explore
          a world of endless choices at SQUARESPACE. Discover the perfect blend of quality,
          style, and affordability as you navigate through our diverse product
          range. Whatever you seek, find it here at SQUARESPACE. Your
          go-to destination for all things exceptional.</p>
       </div>



       <div className='max-w-[1200px]   py-6'>

    <div className='flex justify-center mb-5'>
    
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

       
        <button onClick={handlechngs}  className="btn btn-primary absolute bg-[#E2136E] border-none rounded-l-none">Search</button>
        </div>
   
    </div>

    
    <div className='flex justify-center'>
        <div>
        <input type="text" value={searchtitle}
     onChange={(e) => setSearchtitle(e.target.value)}
     placeholder="Search by title"
   
     className="input input-bordered rounded-none lg:w-[400px] pr-16" /> 
  <button onClick={handletitle}  className="btn btn-primary absolute bg-[#E2136E] border-none rounded-l-none">Search</button>
        </div>
        </div>
 </div>

       </div>


        </div>

         <div style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

        <div className='grid lg:grid-cols-3 grid-cols-1 px-5 lg:px-0 gap-5 max-w-[1200px] mx-auto py-10'>
        {
            blogpost?.map(blog => <Allblogscard  blog={blog} key={blog?._id}></Allblogscard>)
        }
        </div>
        </div>
        </>
       
    );
};

export default Allblog;