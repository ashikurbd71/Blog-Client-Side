
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../public/login-bg.png'
import Useauth from '../Hooks/Useauth';
const Details = () => {
  const{user}=Useauth()
    const details = useLoaderData()

    console.log(details)
   const handlecomment = (e) => {

    e.preventDefault()
    const comment = e.target.comment.value
    const username = user?.displayName
    const userimg = user?.photoURL
    console.log(comment,username,userimg)
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
          <div className="card-actions justify-end">
         {
          user?.email == details.user ? <Link to={`/update/${details?._id}`}><button className="btn btn-outline btn-secondary">Update</button></Link> : ''
         }
          <Link to={'/'}><button className="btn btn-outline btn-secondary">Back</button></Link>
          </div>
        </div>
         </div>


       </div>

    
     
     
      </div>
      <div className='max-w-[1200px] mx-auto my-10'>
        <form onSubmit={handlecomment} className='flex flex-col'>
        <textarea className="textarea textarea-info w-[400px]" name='comment' placeholder="type here"></textarea>
       
        <button type="submit" className="btn btn-outline btn-secondary mt-5 w-[400px]"> Comment </button>
        </form>
      </div>


        <div className='max-w-[1200px] mx-auto'>
          <div className='p-5  rounded-lg  lg:w-[500px]'>
          
          <div className='flex gap-3'>
          <div className="avatar">
  <div className="w-10 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>

 <h2 className='text-lg font-medium text-[#F000B8]'>User</h2>
          </div>

<p className='text-xl p-3 font-medium'>hhhhh</p>
          </div>

           
        </div>
      </div>
     
      </>  
    );
};

export default Details;