import React from 'react';
import Footer from '../Component/Footer';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import Useauth from '../Hooks/Useauth';

const Mylayout = ({children}) => {

  const{user,logout} = Useauth()

  const handlelogout = () => {

      try{
        logout()
      }
      catch(err){

        console.log(err)
      }
  }

    return (
        <div>
          <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full px-[10px] navbar bg-[#000000] text-[#fff]">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1  px-2 mx-2">

   <img src={logo} alt="" className='w-8' />
   <Link to={'/'}><h1 className='lg:text-2xl text-lg font-bold'>SQUARESPACE</h1></Link>

      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-5">
          {/* Navbar menu content here */}
         <li className='text-[14px] font-bold'>
         <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg bg-white text-black" : ""
  }
>
  HOME
</NavLink>


         </li>

         <li className='text-[14px] font-bold'>
         <NavLink
  to="/allblog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  ALLBLOG
</NavLink>


         </li>

         <li className='text-[14px] font-bold'>
         <NavLink
  to="/addblog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  ADDBLOG
</NavLink>


         </li>

         <li className='text-[14px] font-bold'>
         <NavLink
  to="/feature"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  FEATURED
</NavLink>


         </li>
         <li className='text-[14px] font-bold'>
         <NavLink
  to="/wishlist"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  WISHLIST
</NavLink>


         </li>


 

        </ul>

      </div>

      <div className='ml-5 '>

      {

user ?  <div className="dropdown dropdown-end mr-3">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</label>
<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#007CFD] rounded-box w-52">
  
  <li className="text-xl font-semibold"><h1>{user?.displayName}</h1></li>
  <li className="text-xl font-semibold"><h1>{user?.email}</h1></li>
 
   

</ul>
</div> : ''
   
}
        
   {
    user ? <button onClick={handlelogout} className="btn btn-sm btn-outline btn-info mr-3">LOGOUT</button>:

    <div className='flex gap-3 items-center'>
       <Link to={"/login"}><button className="btn btn-sm btn-outline btn-info mr-2">LOGIN</button></Link>
    <Link to={'/register'}> <button className="btn btn-sm mr btn-outline btn-success">REGISTER</button></Link>
    </div>
    
   }

 </div>
    </div>
    {/* Page content here */}
     {children}

     <Footer/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li className='text-[14px] font-bold'>
         <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg bg-white text-black" : ""
  }
>
  HOME
</NavLink>


         </li>

         <li className='text-[14px] font-bold'>
         <NavLink
  to="/allblog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  ALLBLOG
</NavLink>


         </li>

         <li className='text-[14px] font-bold'>
         <NavLink
  to="/addblog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  ADDBLOG
</NavLink>


         </li>

         <li className='text-[14px] font-bold'>
         <NavLink
  to="/feature"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  FEATURED
</NavLink>


         </li>
         <li className='text-[14px] font-bold'>
         <NavLink
  to="/wishlist"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-white text-black" : " "
  }
>
  WISHLIST
</NavLink>


         </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Mylayout;