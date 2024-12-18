import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Jobs from '../components/Jobs';

const Home = () => {
    
    return (
        <div className='w-[80%] mx-auto'>
           <div>
            <Jobs></Jobs>
           </div>
        </div>
    );
};

export default Home;