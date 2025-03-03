import React from 'react';
// import images
import arianaImg from '../img/home/arianahome.jpg'
import arianaImgCrop from '../img/home/arianahomecrop.png'
// import link
import { Link } from 'react-router-dom'
// import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions'

const Home = () => {
  return (
  <>
    <motion.section 
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}
      transition={ transition1 }
      className='section grid place-items-center min-h-screen'
    >
      <div className='container mx-auto'>
        {/* text & image wrapper */}
        <div className='container mx-auto flex flex-col lg:flex-row items-center h-full'>
          {/* text */}
          <motion.div 
              initial={{ opacity:0, y:'-50%' }}
              animate={{ opacity:1, y: 0 }}
              exit={{ opacity: 0, y: '-50%' }}
              transition={ transition1 }
              className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-center text-center lg:text-center p-6 lg:p-12'>
            <h1 className='h1'>
              Hello, 
              <br />I'm Ariana 
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>-Photographer <br /> -Video thing</p>
          </motion.div>
          {/* image */}
          <div className='w-full lg:w-1/2 flex justify-center relative'>
            <div className='border-4 border-black p-2 rounded-lg w-[80%] lg:w-[90%] max-w-[500px] lg:max-w-[700px] shadow-lg'>
              <motion.img 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                src={ arianaImg } 
                alt='' 
                className='w-full h-auto object-cover rounded-md' />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className=' border-4 border-black p-2 rounded-lg shadow-lg absolute z-0 w-[80%] lg:w-[90%] max-w-[500px] lg:max-w-[700px]'
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={arianaImgCrop}
                alt='' 
                className='w-full h-auto object-cover rounded-md'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>

    {/* New Section to Test Scrolling */}
    <section className="bg-gray-200 py-20 w-full">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">More Content Here</h2>
        <p className="text-lg mt-4">This section ensures scrolling is enabled.</p>
      </div>
    </section>
  </>
  );
};

export default Home;
