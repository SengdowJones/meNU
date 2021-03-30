import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black border-b-4 border-purple-900 relative shadow-sm font-sans'
      role='navigation'
    >
      <Link to='/' className='font-semibold pl-8'>
        meNU
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='p-4'>
          Home
        </Link>
        <Link to='/menu' className='p-4'>
          Menu
        </Link>
        <Link to='/profile' className='p-4'>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
