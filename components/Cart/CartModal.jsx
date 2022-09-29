import React, { useContext } from 'react';
import CartItem from './CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utilities/formatCurrency';

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
      <div className='flex flex-col gap-2'>
        {cartItems.map((product) => (
          <CartItem
            title={product.item}
            key={product.id}
            price={product.price}
            count={product.count}
            productId={product.id}
          />
        ))}
      </div>
      <div className='flex justify-between items-center'>
        <span className='uppercase text-neutral-500'>Total:</span>
        <span className='font-bold text-lg'>
          £ {formatCurrency(totalPrice)}
        </span>
      </div>
      <button
        className='bg-pale-orange text-white 
        uppercase font-bold py-3 px-10 text-sm w-full'
      >
        Checkout
      </button>
    </div>
  ) : null;
};

export default CartModal;
