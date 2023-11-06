
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../public/login-bg.png'
import Useauth from '../Hooks/Useauth';
const Details = () => {
  const{user}=Useauth()
    const details = useLoaderData()

    console.log(details)
    return (

        <>

        <div className='h-full pt-20 pb-10 px-5' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

     
        <div className="max-w-[1200px]  mx-auto  card px-5 lg:px-0 lg:card-side bg-base-100 shadow-xl">
        <figure><img src={details?.image} className='w-full h-[300px]' alt="Movie"/></figure>
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
     
      </>  
    );
};

export default Details;