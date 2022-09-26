import React, { useContext } from 'react';
import CartItem from './CartItem';
import AppContext from '../../context/AppContext';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const CartModal = ({ showModal }) => {
  const { cartItems, clearCart, totalItems, totalPrice } =
    useContext(AppContext);

  return showModal ? (
    <div className='p-6 z-10 bg-white rounded-lg absolute top-14 right-0 flex flex-col text-charcoal'>
      <div className='flex justify-between'>
        <h2 className='font-bold'>Cart ({totalItems})</h2>
        <button
          className='underline text-neutral-500'
          onClick={() => clearCart()}
        >
          Remove All
        </button>
      </div>
      <div className='flex flex-col gap-2'></div>
      <div className='flex justify-between items-center'>
        <span className='uppercase text-neutral-500'>Total:</span>
        <span className='font-bold text-lg'>
          £ {numberWithCommas(totalPrice)}
        </span>
      </div>
    </div>
  ) : null;
};

export default CartModal;
