import React from 'react';
import Banner from '../Component/Banner';
import Blogsection from '../Component/Blogsection';
import Newsletter from '../Component/Newsletter';
import About from '../Component/About';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;