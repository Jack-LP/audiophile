import React from 'react';
import ProductBtn from '../Common/ProductBtn';

const RecommendCard = ({ img, title, type, id }) => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <img className='w-[24rem] rounded-lg' src={img} alt={title} />
      <h2 className='font-bold uppercase text-2xl'>{title}</h2>
      <ProductBtn
        bg={'bg-pale-orange'}
        text={'text-white'}
        category={type}
        href={id}
      />
    </div>
  );
};

export default RecommendCard;
