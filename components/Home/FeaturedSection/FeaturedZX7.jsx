import React from 'react';
import ProductBtn from '../../Common/ProductBtn';

const FeaturedZX7 = ({ productData }) => {
  return (
    <div className='bg-zx7Banner bg-right-top bg-no-repeat bg-cover rounded-lg py-24 pl-24'>
      <div className='flex flex-col gap-8 items-start'>
        <h2 className='text-neutral-900 font-bold text-4xl uppercase'>
          ZX7 Speaker
        </h2>
        <ProductBtn
          bg={'bg-transparent'}
          text={'text-neutral-900'}
          border={'border-neutral-900'}
          category={'speakers'}
          href={productData.speakers[1].id}
        />
      </div>
    </div>
  );
};

export default FeaturedZX7;
