import React from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';

const checkout = () => {
  return (
    <div className='container mx-auto grid grid-cols-3'>
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
};

export default checkout;
