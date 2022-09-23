import React from 'react';
import FeaturedZX9 from './FeaturedZX9';
import FeaturedZX7 from './FeaturedZX7';
import FeaturedYX1 from './FeaturedYX1';

const FeaturedSection = ({ productData }) => {
  return (
    <div className='container mx-auto flex flex-col gap-20'>
      <FeaturedZX9 productData={productData} />
      <FeaturedZX7 productData={productData} />
      <FeaturedYX1 productData={productData} />
    </div>
  );
};

export default FeaturedSection;
