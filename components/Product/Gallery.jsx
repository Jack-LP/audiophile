import React from 'react';

const Gallery = ({ imgs }) => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-10'>
      <div>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={imgs[0]}
          alt=''
        />
      </div>
      <div className='row-span-2'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={imgs[2]}
          alt=''
        />
      </div>
      <div>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={imgs[1]}
          alt=''
        />
      </div>
    </div>
  );
};

export default Gallery;
