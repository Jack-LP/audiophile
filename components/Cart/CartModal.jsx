import React, { useContext } from 'react';
import Link from 'next/link';
import CartItem from './CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utilities/formatCurrency';

const CartModal = ({ showModal, setShowModal }) => {
  const { cartItems, clearCart, totalItems, totalPrice } =
    useContext(AppContext);

  return showModal ? (
    <div
      className='h-screen w-screen absolute top-0 left-0 z-10 '
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        className='p-6 z-10 min-w-[20rem] min-h-[10rem] bg-white rounded-lg absolute top-[7rem] right-[12rem] flex flex-col text-charcoal gap-6 border-2 border-neutral-400'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {totalItems === 0 ? (
          <h2 className='font-bold self-center'>Cart is empty</h2>
        ) : (
          <>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Cart ({totalItems})</h2>
              <button
                className='underline text-neutral-500'
                onClick={() => clearCart()}
              >
                Remove All
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              {cartItems.map((product) => (
                <CartItem
                  title={product.item}
                  key={product.id}
                  price={product.price}
                  count={product.count}
                  productId={product.id}
                  img={product.img}
                />
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <span className='uppercase text-neutral-500'>Total:</span>
              <span className='font-bold text-lg'>
                £ {formatCurrency(totalPrice)}
              </span>
            </div>
            <Link href='/checkout' onClick={() => setShowModal(false)}>
              <button
                className='bg-pale-orange text-white 
        uppercase font-bold py-3 px-10 text-sm w-full'
              >
                Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default CartModal;
