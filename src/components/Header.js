import React from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

//import link
import { Link } from 'react-router-dom';


const Header = () => {
  /*Tailwind CSS Classes Breakdown
    bg-pink-200 - sets the background color to light pink shade
    fixed - makes the header stay fixed at the top of the page when scrolling
    w-full sets the wdith of the head to 100% of the viewport width
    px-[30px] - applies a 30px horizontal padding on small screens
    lg:px-[100px] - on large screens, the padding increases to 100px
    z-30 - sets the z-index to 30 (This controlls the stacking order to make sure that the header is above all of the other elements on the page)
    h-[100px] - The height is 100px on small screens
    lg:h-[140px] - The height is 140px on small screens
    flex - enables flexbox- Allowing for easy alignment of child elements
    items-center - centers items vertically inside the header
    flex-col - On small screens, elements inside are stacked veritcally
    lg:flex-row - On large screens, elements switch to a horizontal row layout
    lg:items-center - on large screens, aligns the items vertically centered within the flex container
    justify-between - distributes child elements iwth maximum space between them, pushing them to opposite ends.

    hidden lg:flex - the nav is hidden by default
    <Link to={'/'}> - This is called a react router. This is how the page is able to navigate to different pages (the home page) without needing to reload the page
    hover:text-primary when the text is hovered over, the text will change to a primary theme color set by tailwind theme
  */
  return <header className= 'fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/* Logo */}
      <Link to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt=''></img>
      </Link>
      {/* nav -initially hidden - show on desktop mode*/}
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
        Home
        </Link>
        <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
        About
        </Link>
        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
        Portfolio
        </Link>
        <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
        Contact
        </Link>
      </nav>
    </div>
    {/* Socials */}
    <Socials />
    {/* mobile nav */}
    <MobileNav />
  </header>;
};

export default Header;

