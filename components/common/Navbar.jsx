import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo.svg';
import CartModal from '../Cart/CartModal';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const navRoutes = ['home', 'headphones', 'speakers', 'earphones'];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  return (
    <div className='bg-charcoal'>
      <nav className='border-b-neutral-600 border-b-2 p-6 text-white container mx-auto relative'>
        <ul className='flex justify-between uppercase items-center tracking-wider relative'>
          <li>
            <Link href='/'>
              <Image alt='audiophile' src={Logo} className='cursor-pointer' />
            </Link>
          </li>
          <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            {navRoutes.map((route) => (
              <NavLink
                key={route}
                href={`/${route}`}
                text={route}
                router={router}
              />
            ))}
          </div>
          <li>
            <button onClick={() => setShowModal(!showModal)}>
              <ShoppingCartIcon className='w-6 h-6 text-white' />
            </button>
          </li>
        </ul>
        <CartModal showModal={showModal} />
      </nav>
    </div>
  );
};

const NavLink = ({ href, text, router }) => {
  const isActive = router.asPath === (href === '/home' ? '/' : href);
  return (
    <li>
      <Link href={href === '/home' ? '/' : href} passHref>
        <a
          className={`uppercase font-bold text-sm hover:text-pale-orange transition-colors ease-out ${
            isActive && 'text-pale-orange'
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default Navbar;
