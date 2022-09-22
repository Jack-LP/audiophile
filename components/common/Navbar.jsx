import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo.svg';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className='bg-charcoal'>
      <nav className='border-b-neutral-600 border-b-2 p-6 text-white container mx-auto'>
        <ul className='flex justify-between uppercase items-center tracking-wider'>
          <li>
            <Link href='/'>
              <Image alt='audiophile' src={Logo} className='cursor-pointer' />
            </Link>
          </li>
          <div className='flex gap-10'>
            <li>
              <Link href='/categories/headphones'>Headphones</Link>
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
