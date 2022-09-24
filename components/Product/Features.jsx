import React from 'react';

const Features = ({ text }) => {
  return (
    <div className='flex flex-col gap-8 flex-1 col-span-3 pr-[20rem]'>
      <h2 className='font-bold text-3xl uppercase'>Features</h2>
      <p className='text-neutral-500'>{text}</p>
    </div>
  );
};

export default Features;
