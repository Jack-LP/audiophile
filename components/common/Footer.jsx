import React from 'react';
import Image from 'next/image';
import Logo from '../../public/img/logo.svg';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      className='bg-neutral-900 text-white py-16 mt-[14rem] relative after:content-[""] after:bg-pale-orange after:w-[6rem] 
    after:h-1 after:absolute after:top-0 after:left-[12rem]'
    >
      <div className='container mx-auto flex flex-col gap-10'>
        <div className='flex justify-between align-center'>
          <div>
            <Image alt='audiophile' src={Logo} />
          </div>
          <ul className='flex gap-12 text-neutral-200 uppercase tracking-wider'>
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
          </ul>
        </div>
        <div className='flex justify-between'>
          <p className='flex-1 text-neutral-500'>
            Audiophile is an all in one stop to fullfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className='flex gap-4 flex-1 justify-end items-end'>
            <FaFacebookSquare size={22} />
            <FaTwitter size={22} />
            <FaInstagram size={22} />
          </div>
        </div>
        <p className='text-neutral-400 text-sm'>
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
