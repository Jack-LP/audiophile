import React from 'react';
import Image from 'next/image';
import Logo from '../../public/img/logo.svg';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className='container z-10 fixed mx-auto left-0 right-0'>
      <nav className='border-b-gray-300 border-b-2 py-6 text-white'>
        <ul className='flex justify-between uppercase items-center'>
          <li>
            <a href='#' className=''>
              <Image alt='audiophile' src={Logo} />
            </a>
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
          <li>
            <ShoppingCartIcon className='w-6 h-6 text-white' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
