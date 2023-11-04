import React from 'react';
import Footer from '../Component/Footer';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Mylayout = ({children}) => {
    return (
        <div>
          <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full px-[20px] navbar bg-[#000000] text-[#fff]">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1  px-2 mx-2">

   <img src={logo} alt="" className='w-10' />
   <Link to={'/'}><h1 className='lg:text-2xl text-xl font-bold'>SQUARESPACE</h1></Link>

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
  FEATURE
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

      <div className='ml-20 '>
 <Link to={"/login"}><button className="btn btn-sm btn-outline btn-info mr-3">LOGIN</button></Link>
<Link to={'/register'}> <button className="btn btn-sm mr-3 btn-outline btn-success">REGISTER</button></Link>

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
  FEATURE
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