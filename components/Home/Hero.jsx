import React from 'react';
import ProductBtn from '../Common/ProductBtn';

const Hero = () => {
  return (
    <div className='bg-no-repeat bg-cover bg-center bg-hero min-h-screen relative'>
      <div className='container mx-auto absolute top-1/2 -translate-y-1/2 left-0 right-0'>
        <div className='flex flex-col gap-6 items-start max-w-sm'>
          <h2 className='uppercase tracking-[.55em] text-gray-400'>
            New Product
          </h2>
          <h1 className='uppercase font-bold text-white text-7xl'>
            XX99 Mark II Headphones
          </h1>
          <p className='text-neutral-500 max-w-[23em] leading-6'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <ProductBtn bg={'bg-pale-orange'} text={'text-white'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
