import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utilities/formatCurrency';
import productData from '../../data.json';

const CartItem = ({ title, price, count, productId }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-4'>
        <img src='' alt='' />
        <div className='flex flex-col'>
          <span>{title}</span>
          <span>{`£ ${formatCurrency(price)}`}</span>
        </div>
      </div>

      <span>{count}</span>
    </div>
  );
};

export default CartItem;
