import React from 'react';
import Image from 'next/image';
import ProductBtn from '../../Common/ProductBtn';
import ZX9Image from '../../../public/img/image-speaker-zx9.png';

const FeaturedZX9 = () => {
  return (
    <div className='bg-pale-orange rounded-lg flex px-[15rem] py-24 justify-between items-center overflow-hidden bg-ripplePattern bg-no-repeat bg-[top_left_-2rem]'>
      <div className='w-[25rem] -mb-[7rem]'>
        <Image alt='' src={ZX9Image} />
      </div>
      <div className='flex flex-col gap-8 items-start max-w-[22rem]'>
        <h1 className='text-white font-bold text-7xl uppercase'>
          ZX9
          <br />
          Speaker
        </h1>
        <p className='text-gray-100 text-md leading-6'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <ProductBtn bg={'bg-neutral-900'} text={'text-white'} />
      </div>
    </div>
  );
};

export default FeaturedZX9;
