import React from 'react';

const Commentscard = ({data}) => {
    return (
        <div>
               <div className='max-w-[1200px] mx-auto'>
          <div className='rounded-lg  '>
          
          <div className='flex  gap-3 items-center'>
          <div className="avatar">
  <div className="w-10 rounded-full">
    <img src={data?.userimg} />
  </div>
</div>

<div>
<h2 className='text-lg font-medium '>{data?.username}</h2>
<div className='py-1 text-lg  '>Blog Id : <span className=' '>{data?._id}</span></div>
</div>

 
          </div>
 
<p className='text-xl ml-12 py-2 font-semibold'>{data?.comment}</p>
          </div>

           
       
        </div>
     
        </div>
    );
};

export default Commentscard;