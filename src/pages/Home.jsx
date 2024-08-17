import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
     return (
          <div className='bg-green-500 text-white min-h-screen flex flex-col'>
               Home
               <div className='w-full flex-grow bg-red-600'>
                    <h1>want to visit sohith Bandreddi's portfolio </h1>
                    <Link to='/home'><button>click me</button></Link>
               </div>
          </div>
     );
}

export default Home;
