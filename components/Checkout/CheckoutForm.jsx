import React from 'react';

const CustomInput = ({ label, type, name }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='font-bold text-sm'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className='border-2 rounded-md p-3 border-neutral-300 outline-none'
      />
    </div>
  );
};

const CheckoutForm = () => {
  return (
    <div className='col-span-2 flex flex-col gap-6 border-2'>
      <h1 className='font-bold text-4xl uppercase'>Checkout</h1>
      <form action='' className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <strong className='uppercase text-pale-orange'>
            Billing Details
          </strong>
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <CustomInput type={'text'} name={'name'} label={'Name'} />
            <CustomInput type={'email'} name={'email'} label={'Email'} />
            <CustomInput type={'tel'} name={'phone'} label={'Phone Number'} />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <strong className='uppercase text-pale-orange'>Shipping Info</strong>
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <CustomInput type={'text'} name={'address'} label={'Address'} />
            <CustomInput type={'text'} name={'post'} label={'Postal Code'} />
            <CustomInput type={'text'} name={'city'} label={'City'} />
            <CustomInput type={'text'} name={'country'} label={'Country'} />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <strong className='uppercase text-pale-orange'>
            Payment Details
          </strong>
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <CustomInput type={'text'} name={'address'} label={'Address'} />
            <CustomInput type={'text'} name={'post'} label={'Postal Code'} />
            <CustomInput type={'text'} name={'city'} label={'City'} />
            <CustomInput type={'text'} name={'country'} label={'Country'} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
