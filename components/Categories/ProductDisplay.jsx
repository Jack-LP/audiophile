import React from 'react';
import ProductBtn from '../Common/ProductBtn';
import Image from 'next/image';

const ProductDisplay = ({
  img,
  title,
  description,
  newProduct,
  flip,
  category,
  id,
}) => {
  return (
    <div className='grid grid-cols-2 container mx-auto'>
      <div
        className={`flex items-center ${
          flip ? 'order-2 justify-end' : 'order-0'
        }`}
      >
        <Image
          alt={title}
          src={`/img/${img}.jpg`}
          width='600px'
          height='600px'
        />
      </div>
      <div className='flex flex-col gap-6 justify-center items-start'>
        <p
          className={`text-pale-orange uppercase tracking-[.55em] ${
            newProduct ? 'block' : 'hidden'
          }`}
        >
          New Product
        </p>
        <h2 className='text-6xl font-bold uppercase'>{title}</h2>
        <p className='text-neutral-500 pr-[10rem]'>{description}</p>
        <ProductBtn
          bg={'bg-pale-orange'}
          text={'text-white'}
          category={category}
          href={id}
        />
      </div>
    </div>
  );
};

export default ProductDisplay;
