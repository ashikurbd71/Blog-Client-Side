import React from 'react';
import Banner from '../Component/Banner';
import Blogsection from '../Component/Blogsection';
import Newsletter from '../Component/Newsletter';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from '../Component/loading';


const Home = () => {
    return (
        <div className='overflow-x-hidden'>
             {/* <div>
 <Loading></Loading>
      </div> */}
          <div>
            <Banner/>
          </div>
          <div>
            <Blogsection/>
          </div>
           <div>
            <Newsletter></Newsletter>
           </div>
           <div>
            <About/>
           </div>
           <div>
           <Contact/>
           </div>
        
        </div>
    );
};

export default Home;