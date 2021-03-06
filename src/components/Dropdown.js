import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-white text-center items-center bg-purple-900'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/menu' className='p-4'>
        Menu
      </Link>
      <Link to='/about' className='p-4'>
        About
      </Link>
    </div>
  );
};

export default Dropdown;
