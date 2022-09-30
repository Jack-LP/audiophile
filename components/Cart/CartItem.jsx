import React from 'react';
import formatCurrency from '../../utilities/formatCurrency';
import ItemCountChange from './ItemCountChange';

const CartItem = ({ title, price, count, productId, img }) => {
  return (
    <div className='flex justify-between items-center gap-10'>
      <div className='flex gap-4 items-center'>
        <img src={img} alt={title} className='w-16 rounded-md' />
        <div className='flex flex-col'>
          <span className='font-bold'>{title}</span>
          <span>{`£ ${formatCurrency(price)}`}</span>
        </div>
      </div>
      <ItemCountChange count={count} productId={productId} />
    </div>
  );
};

export default CartItem;
