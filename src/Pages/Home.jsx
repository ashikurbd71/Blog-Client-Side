import React from 'react';
import Banner from '../Component/Banner';
import Blogsection from '../Component/Blogsection';

const Home = () => {
    return (
        <div>
          <div>
            <Banner/>
          </div>
          <div>
            <Blogsection/>
          </div>
        </div>
    );
};

export default Home;