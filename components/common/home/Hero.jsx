import React from 'react';
import HeroImg from '../../../public/img/image-hero.jpg';

const Hero = () => {
  return (
    <div className='bg-no-repeat bg-cover bg-center bg-fixed bg-hero min-h-screen relative'>
      <div className='container mx-auto absolute top-1/2 -translate-y-1/2 left-0 right-0'>
        <div className='flex flex-col gap-6 items-start max-w-sm'>
          <h2 className='uppercase tracking-[.55em] text-gray-400'>
            New Product
          </h2>
          <h1 className='uppercase font-bold text-white text-7xl'>
            XX99 Mark II Headphones
          </h1>
          <p className='text-gray-300 max-w-[23em] leading-6'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <button className='bg-orange-400 text-white uppercase font-bold py-3 px-6'>
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
