import React from 'react';
// import images
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
// import link
import { Link } from 'react-router-dom'

const Portfolio = () => {
  /*
  container – A utility from Tailwind CSS that centers the content and provides a max-width based on the screen size.

  flex – Applies Flexbox, making the child elements flexible and alignable.  mx-auto – Centers the element horizontally by setting margin-left: auto; margin-right: auto;.
  h-full – Ensures the element takes up the full height of its parent.
  relative – Sets the positioning of the element to relative, allowing absolute-positioned child elements to be positioned relative to this container.
  flex-col – Sets the flex direction to column, stacking child elements vertically.
  lg:flex-row – On large (lg) screens (≥1024px), changes the flex direction to row, displaying elements horizontally instead of vertically.
  h-full – Ensures the inner <div> takes up the full height of its parent.
  items-center – Aligns items vertically centered within the flex container.
  justify-center – Centers child elements horizontally within the flex container.
  */
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */}
        <div className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1> 
          <p className='mb-12 max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* image grid */}
        <div className='grid grid-cols-2 lg:gap-2'>
          {/* image */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt='' />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Portfolio;
