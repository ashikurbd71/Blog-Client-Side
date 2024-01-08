import React, { useEffect, useState } from 'react';





const Testimonial = () => {

  




  const [feedback,setFeedback] = useState()

  useEffect(() => {

    fetch("Feedback.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setFeedback(data)
    });

  },[])

    return (

 



        <div className='max-w-[1200px] mx-auto px-5 lg:px-0'>
            <>

            <div className="text-center  py-10 " data-aos="zoom-out-right">
          <h1 className="font-bold text-[#17ADF8] lg:text-4xl text-2xl">T E S T M O N I A L</h1>
          <div className="flex justify-center">
          <p className="my-3 lg:text-xl text-black  lg:w-[70%]">
          Explore the impact of NOVANOTES through heartfelt testimonials. Real stories from satisfied clients showcase our commitment to excellence and customer satisfaction. 
          </p>
          </div>

        </div>
        

       

<div className="flex justify-center lg:flex-row gap-4 flex-col" >
{
  feedback?.map(feed => 


    <div className="card  h-[350px] bg-[#FFFFFF] shadow-xl"key={feed?.name} >
   
    <figure className="p-4 ">
      <img src={feed?.img} alt="Shoes" className=" w-[150px] h-[150px] rounded-full" />
     
    </figure>
    <div className='flex justify-center'>
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
  
    </div>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{feed?.name}</h2>
      <p>{feed?.feedback}</p>
      
    </div>
  </div>

  )
}
  </div>

        
            </>
        </div>
    );
};

export default Testimonial;