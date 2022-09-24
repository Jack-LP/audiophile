import React from 'react';
import CartItem from './CartItem';

const CartModal = ({ showModal }) => {
  return showModal ? (
    <div className='p-6 z-10 bg-white rounded-lg absolute top-14 right-0 flex flex-col text-charcoal'>
      <div className='flex justify-between'>
        <h2 className='font-bold'>Cart (3)</h2>
        <button className='underline text-neutral-500'>Remove All</button>
      </div>
      <div className='flex justify-between items-center'>
        <span className='uppercase text-neutral-500'>Total:</span>
        <span className='font-bold text-lg'>£2,352</span>
      </div>
    </div>
  ) : null;
};

export default CartModal;
