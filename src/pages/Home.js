import React from 'react';
// import images
import WomanImg from '../img/home/arianahome.jpg'
// import link
import { Link } from 'react-router-dom'

const Home = () => {
  return <section className='section mt-[100px] lg:mt-[140px]'>
    <div className='container mx-auto'>
      {/* text & image wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>
            photographer <br /> & film maker
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Houston, TX</p>
        </div>
        {/* image */}
        <div className='flex justify-end max-h-max lg:max-h-max'>
          <div className='relative lg:-right-40 overflow-hidden w-48 lg:w-72'>
            <img src={ WomanImg } alt='' />
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Home;
