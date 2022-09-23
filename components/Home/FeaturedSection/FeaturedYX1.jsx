import React from 'react';
import Image from 'next/image';
import YX1Image from '../../../public/img/image-earphones-yx1.jpg';
import ProductBtn from '../../Common/ProductBtn';

const FeaturedYX1 = ({ productData }) => {
  return (
    <div className='flex gap-8'>
      <div className='rounded-lg flex-1'>
        <Image
          alt=''
          src={YX1Image}
          layout='responsive'
          className='rounded-lg'
        />
      </div>
      <div className='bg-stone-200 flex-1 rounded-lg'>
        <div className='flex flex-col gap-8 items-start justify-center pl-24 min-h-full'>
          <h2 className='text-4xl font-bold uppercase text-neutral-900'>
            YX1 Earphones
          </h2>
          <ProductBtn
            bg={'bg-transparent'}
            text={'text-neutral-900'}
            border={'border-neutral-900'}
            category={'earphones'}
            href={productData.earphones[0].id}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedYX1;
