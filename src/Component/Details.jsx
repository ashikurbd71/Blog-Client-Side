
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../public/login-bg.png'
import Useauth from '../Hooks/Useauth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Commentscard from './Commentscard';
const Details = () => {
  const{user}=Useauth()
    const details = useLoaderData()

    console.log(details)
   const handlecomment = (e) => {

    e.preventDefault()
    const comment = e.target.comment.value
    const username = user?.displayName
    const userimg = user?.photoURL
   
    const commentss = {comment,username,userimg}
    console.log(commentss)

    axios.post('http://localhost:5000/comments',commentss)
    .then(res => {console.log(res.data)
    if(res.data.insertedId){

      toast.success('Thank For Your Comment!')
    }
    })
   }

   const {data,isLoading,isFetching,refetch} = useQuery({

    queryKey: ["commnet"],
    queryFn: async () => {

        const data = await fetch('http://localhost:5000/comments')
        return await data.json()
    }
 })

 console.log(data)

 if(isLoading){

  return <span className="loading loading-dots loading-lg"></span>
 }

    return (

        <>

        <div className='h-full pt-20 pb-10 px-5' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

     
        <div className="max-w-[1200px]  mx-auto  card px-5 lg:px-0 lg:card-side bg-base-100 shadow-xl">
       

       <div className='flex lg:flex-row flex-col justify-between'>
      
       
        <div className='flex-1'>

        <figure><img src={details?.image} className='w-full h-full p-10 ' alt="Movie"/></figure>
        </div>

         <div className='flex-1'>

         <div className="card-body ">
          <h2 className="card-title">{details?.title}</h2>
          <div className="badge text-xl font-samibold p-3 badge-secondary">{details?.category}</div>
          <h2 className='text-lg font-semibold'>{details?.short_description}</h2>
          <p>{details?.long_description}</p>

          <div className="rating mt-5">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
          <div className="card-actions justify-end">

         
         {
          user?.email == details.users ?  <Link to={`/update/${details?._id}`}><button className="btn btn-outline btn-secondary">Update</button></Link>: ''
         }
          <Link to={'/'}><button className="btn btn-outline btn-secondary">Back</button></Link>
          </div>
        </div>
         </div>


       </div>

    
     
     
      </div>
    
      {
          user?.email == details?.users ?  '' : <div className='max-w-[1200px] mx-auto my-10'>
          <form onSubmit={handlecomment} className='flex flex-col'>
          <textarea className="textarea textarea-info w-[400px]" name='comment' placeholder="type here"></textarea>
         
          <button type="submit" className="btn btn-outline btn-secondary mt-5 w-[400px]"> Comment </button>
          </form>
        </div>  
         }
    
     



  <>

     <div>
       <h1 className='lg:text-3xl mt-20 text-2xl font-bold text-center'>Comments : {data?.length}</h1>
       <hr className=''/>
     </div>
   <div className='grid grid-cols-1  mt-10 gap-2 px-5 lg:px-0'>

     {
      data?.map(data =>    
        
        <Commentscard data={data} key={data._id}></Commentscard>
        
        
        )
     }
   </div>
   </>
     
     
      </div>
     
      </>  
    );
};

export default Details;