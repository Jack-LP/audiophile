import React, { useContext } from 'react';
import formatCurrency from '../../utilities/formatCurrency';
import AppContext from '../../context/AppContext';
import SummaryItem from './SummaryItem';

const CheckoutSummary = () => {
  const shipping = 7.99;
  const { cartItems, totalPrice } = useContext(AppContext);

  return (
    <div className='flex flex-col bg-white rounded-2xl p-10 gap-8'>
      <h2 className='text-xl font-bold uppercase'>Summary</h2>
      <div className='flex flex-col gap-4'>
        {cartItems.map((item) => (
          <SummaryItem
            key={item.title}
            img={item.img}
            title={item.item}
            price={item.price}
            count={item.count}
          />
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <span className='uppercase text-neutral-500'>Total</span>
          <span className='uppercase font-bold'>{`£ ${formatCurrency(
            totalPrice
          )}`}</span>
        </div>
        <div className='flex justify-between'>
          <span className='uppercase text-neutral-500'>Shipping</span>
          <span className='uppercase font-bold'>{`£ ${formatCurrency(
            shipping
          )}`}</span>
        </div>
        <div className='flex justify-between'>
          <span className='uppercase text-neutral-500'>{`VAT (Included)`}</span>
          <span className='uppercase font-bold'>{`£ ${formatCurrency(
            (totalPrice / 100) * 20
          )}`}</span>
        </div>
        <div className='flex justify-between mt-4'>
          <span className='uppercase text-neutral-500'>Grand Total</span>
          <span className='uppercase font-bold text-pale-orange'>{`£ ${formatCurrency(
            totalPrice + shipping
          )}`}</span>
        </div>
      </div>
      <button
        form='checkout-form'
        type='submit'
        className='w-full bg-pale-orange text-white uppercase p-3 text-sm'
        onSubmit={(e) => e.preventDefault()}
      >
        Continue & Pay
      </button>
    </div>
  );
};

export default CheckoutSummary;
