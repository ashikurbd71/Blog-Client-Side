import Lottie from "lottie-react";
import Query from "../Hooks/Query";
import loading from "../assets/loading.json";
import Blogcard from "./Blogcard";
import bg from '../../public/blcard-bg.png'
import Loading from "./loading";

const Blogsection = () => {
  const { data, isLoading } = Query();

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen mx-auto mt-36 w-[500px] ">
  //       <Lottie animationData={loading}></Lottie>
  //     </div>
  //   );
  // }

  // if(isLoading){

  //   return
  // }

  console.log(data);

  return (
    <>
      <div className="py-10  bg-fixed" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="text-center space-y-3 ">
        <h1 className="lg:text-4xl text-3xl  font-bold">R E C E N T   B L O G S</h1>
         <div className="flex justify-center">
         <p className="text-xl w-[70%] ">
          Ensure that the short description accurately represents the content of
          the blog post. Misleading descriptions can lead to user
          dissatisfaction
        </p>
         </div>
      </div>
      {
              data?.length > 0 ?
         

        <div className='grid lg:grid-cols-3 grid-cols-1 px-5 lg:px-0 gap-5 max-w-[1200px] mx-auto py-10'>
        {
            data?.map(blog => <Blogcard  blog={blog} key={blog?._id}></Blogcard>) 

          }
   
      
        </div>
       
       : <Loading/>
       
      }
      </div>
    </>
  );
};

export default Blogsection;