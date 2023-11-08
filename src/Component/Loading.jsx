import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const Loading = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[1200px] mx-auto'>
            <div className="card  w-full h-[400px] bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>

<div className="card w-full h-[500px]  bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>

<div className="card w-full h-[400px]  bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>



<div className="card w-full h-[400px]  bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>



<div className="card w-full h-[400px]  bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>


<div className="card w-full h-[400px]  bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>

  </div>


</div>
<div className="card w-full h-[400px]  bg-base-100 shadow-xl">
    <div className='w-[400px] h-[400px]'><Skeleton /></div>
  <div className="card-body">
  <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      <div className="badge text-xl font-samibold p-3 badge-secondary"><Skeleton /> </div>
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>
        </div>
    );
};

export default Loading;