import React from 'react';

const CategoryHeader = ({ title }) => {
  return (
    <div className='flex items-center justify-center uppercase bg-charcoal py-24'>
      <h1 className='text-3xl text-white font-bold'>{title}</h1>
    </div>
  );
};

export default CategoryHeader;
