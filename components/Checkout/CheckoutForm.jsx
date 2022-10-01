import React from 'react';

const CustomInput = ({ label, type, name, minLength, maxLength }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='font-bold text-sm'>
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        className='border-2 rounded-md p-3 border-neutral-300 outline-none'
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

const CheckoutForm = () => {
  return (
    <div className='col-span-2 flex flex-col gap-6 bg-white p-10 rounded-2xl'>
      <h1 className='font-bold text-4xl uppercase'>Checkout</h1>
      <form
        action=''
        className='flex flex-col gap-10'
        id='checkout-form'
        method='post'
      >
        <div className='flex flex-col gap-4'>
          <strong className='uppercase text-pale-orange'>
            Billing Details
          </strong>
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <CustomInput
              type={'text'}
              name={'name'}
              label={'Name'}
              minLength={1}
            />
            <CustomInput type={'email'} name={'email'} label={'Email'} />
            <CustomInput
              type={'tel'}
              name={'phone'}
              label={'Phone Number'}
              minLength={11}
              maxLength={11}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <strong className='uppercase text-pale-orange'>Shipping Info</strong>
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <CustomInput type={'text'} name={'address'} label={'Address'} />
            <CustomInput
              type={'text'}
              name={'post'}
              label={'Postal Code'}
              minLength={6}
              maxLength={6}
            />
            <CustomInput type={'text'} name={'city'} label={'City'} />
            <CustomInput type={'text'} name={'country'} label={'Country'} />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <strong className='uppercase text-pale-orange'>
            Payment Details
          </strong>
          <span className='font-bold'>Payment Method</span>{' '}
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <div className='flex border-2 border-pale-orange/50 p-3 gap-4 items-center font-bold rounded-lg'>
              <input
                type='radio'
                name='payment'
                className='accent-pale-orange'
                required
              />
              <label htmlFor='payment'>e-Money</label>
            </div>
            <div className='flex border-2 border-pale-orange/50 p-3 gap-4 items-center font-bold rounded-lg'>
              <input
                type='radio'
                name='payment'
                className='accent-pale-orange'
                required
              />
              <label htmlFor='payment'>Cash on Delivery</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
