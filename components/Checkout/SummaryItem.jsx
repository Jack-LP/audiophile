import React from 'react';
import formatCurrency from '../../utilities/formatCurrency';

const SummaryItem = ({ img, title, price, count }) => {
  return (
    <div className='flex items-center gap-4'>
      <img src={img} alt={title} className='w-16 rounded-md' />
      <div className='flex flex-col gap-1'>
        <span className='font-bold'>{title}</span>
        <span className='text-neutral-500 font-mono'>{`£ ${formatCurrency(
          price
        )}`}</span>
      </div>
      <span className='text-neutral-500 ml-auto'>{`x${count}`}</span>
    </div>
  );
};

export default SummaryItem;
