import Lottie from "lottie-react";
import Query from "../Hooks/Query";
import loading from "../assets/loading.json";
import Blogcard from "./Blogcard";
import bg from '../../public/blcard-bg.png'

const Blogsection = () => {
  const { data, isLoading } = Query();

  if (isLoading) {
    return (
      <div className="min-h-screen mx-auto mt-36 w-[500px] ">
        <Lottie animationData={loading}></Lottie>
      </div>
    );
  }

  console.log(data);

  return (
    <>
      <div className="py-10  bg-fixed" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="text-center space-y-3 ">
        <h1 className="lg:text-4xl text-3xl  font-bold">BLOG SECTION</h1>
         <div className="flex justify-center">
         <p className="text-xl w-[70%] ">
          Ensure that the short description accurately represents the content of
          the blog post. Misleading descriptions can lead to user
          dissatisfaction
        </p>
         </div>
      </div>
      <div className="grid lg:grid-cols-3 my-10 grid-cols-1 px-5 gap-10 max-w-[1200px] mx-auto lg:px-0">
        {data?.map((blog) => (
          <Blogcard blog={blog} key={blog?.title}></Blogcard>
        ))}
      </div>
      </div>
    </>
  );
};

export default Blogsection;
