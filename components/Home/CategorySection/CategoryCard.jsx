import React from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const CategoryCard = ({ image, title, top }) => {
  return (
    <div className='flex flex-col flex-1 gap-2 items-center bg-stone-200 rounded-lg pb-6 pt-[8rem] relative my-[14rem]'>
      <div className={`w-[15rem] absolute -top-${top}`}>
        <Image alt={title} src={image} />
      </div>
      <h2 className='text-xl font-bold uppercase'>{title}</h2>
      <a
        className='flex items-center uppercase text-gray-400 font-bold group'
        href='#'
      >
        <span className='group-hover:-translate-x-1 transition ease-out'>
          Shop
        </span>
        <ChevronRightIcon className='w-6 h-6 text-pale-orange group-hover:translate-x-1 transition ease-out' />
      </a>
    </div>
  );
};

export default CategoryCard;
