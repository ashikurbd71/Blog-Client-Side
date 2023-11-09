import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const Loading = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 px-5 lg:px-0 gap-5 max-w-[1200px] mx-auto py-10'>
            <div className="card  w-full h-[400px] bg-[#202020] shadow-xl">
    <div className='h-[400px] px-2'><Skeleton height={200}/></div>
  <div className="card-body">
     <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>

<div className="card  w-full h-[400px] bg-[#202020] shadow-xl">
    <div className='h-[400px] px-3'><Skeleton height={200} /></div>
  <div className="card-body">
     <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>

<div className="card  w-full h-[400px] bg-[#202020] shadow-xl">
    <div className='h-[400px] px-3'><Skeleton height={200} /></div>
  <div className="card-body">
     <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>


<div className="card  w-full h-[400px] bg-[#202020] shadow-xl">
    <div className='h-[400px] px-3'><Skeleton height={200}/></div>
  <div className="card-body">
     <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>



            <div className="card  w-full h-[400px] bg-[#202020] shadow-xl">
    <div className='h-[400px] px-3'><Skeleton height={200}/></div>
  <div className="card-body">
     <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      
    </h2>
    <Skeleton />
    <div className="card-actions justify-end">
    <Skeleton />
    </div>
  </div>
</div>

<div className="card  w-full h-[400px] bg-[#202020] shadow-xl">
    <div className='h-[400px] px-3'><Skeleton height={200}/></div>
  <div className="card-body">
     <Skeleton />
    <h2 className="card-title">
     <Skeleton />
      
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