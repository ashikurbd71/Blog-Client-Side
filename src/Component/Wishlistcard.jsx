import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Wishlistcard = ({wishcard,refetch}) => {
    console.log(wishcard)

    const hanledelete = (_id) => {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/addlist/${_id}`)
                .then(res => {console.log(res.data)
                
                if(res.data.deletedCount > 0){

                  
                    Swal.fire(
                        'Deleted!',
                        'Your Blog has been deleted.',
                        'success')
                }
                refetch()
                })
             
          
            }
      

    })

}
    return (
        <div>
            <div className="card flex lg:flex-row flex-col justify-between bg-base-100  shadow-xl">
  <div className='flex-1'>
  <figure><img src= {wishcard?.image} className='w-full h-full' alt="Album"/></figure>
  </div>
  <div className="card-body flex-1">
    <h2 className="card-title">{wishcard?.title}</h2>

    <div className="badge text-xl font-samibold p-3 badge-secondary">{wishcard?.category}</div>
    <p>{wishcard?.short_description}</p>
    <div className="card-actions justify-end">
   <Link to={`/wishdetails/${wishcard?._id}`}> <button className="btn btn-outline btn-secondary">Details</button> </Link>
      <button onClick={() => hanledelete(wishcard?._id)} className="btn btn-outline btn-secondary">Remove</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Wishlistcard