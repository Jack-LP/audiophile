import React from 'react';

const Navbar = () => {
  return (
    <div className='container z-10 fixed mx-auto left-0 right-0'>
      <nav className='border-b-gray-300 border-b-2 py-8'>
        <ul className='flex justify-between'>
          <li>
            <a href='#'>audiophile</a>
          </li>
          <div className='flex gap-10'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Headphones</a>
            </li>
            <li>
              <a href='#'>Speakers</a>
            </li>
            <li>
              <a href='#'>Earphones</a>
            </li>
          </div>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
