import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Head from 'next/head';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';

const Checkout = () => {
  const router = useRouter();
  const { cartItems } = useContext(AppContext);

  useEffect(() => {
    if (!cartItems.length) {
      router.back();
    }
  }, []);

  return cartItems.length ? (
    <div className='bg-neutral-100'>
      <Head>
        <title>Audiophile &gt; Checkout</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto py-20 flex flex-col gap-10'>
        <button onClick={() => router.back()} className='self-start'>
          Go Back
        </button>
        <div className='grid grid-cols-3 gap-10'>
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
    </div>
  ) : (
    <div className='bg-neutral-100 w-screen h-screen flex justify-center items-center'>
      <div className='flex gap-4'>
        <ShoppingCartIcon className='w-10 h-10 text-black' />
        <h1 className='text-3xl'>Cart is empty</h1>
      </div>
    </div>
  );
};

export default Checkout;
