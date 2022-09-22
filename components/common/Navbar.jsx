import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo.svg';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const navRoutes = ['home', 'headphones', 'speakers', 'earphones'];

const Navbar = () => {
  const router = useRouter();
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
            {navRoutes.map((route) => (
              <NavLink
                key={route}
                href={`/categories/${route}`}
                text={route}
                router={router}
              />
            ))}
          </div>
          <li>
            <ShoppingCartIcon className='w-6 h-6 text-white' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

const NavLink = ({ href, text, router }) => {
  const isActive = router.asPath === (href === '/categories/home' ? '/' : href);
  return (
    <li>
      <Link href={href === '/categories/home' ? '/' : href} passHref>
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
