import React from 'react';

const InTheBox = ({ boxContents }) => {
  return (
    <div className='flex flex-col gap-8 flex-1'>
      <h2 className='font-bold text-3xl uppercase'>In the box</h2>
      <div className='flex flex-col gap-2'>
        {Object.entries(boxContents).map((item) => (
          <div className='flex gap-4' key={item[0]}>
            <span className='font-bold text-pale-orange'>{`${item[1]}x`}</span>
            <spam className='text-neutral-500'>{item[0]}</spam>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InTheBox;
