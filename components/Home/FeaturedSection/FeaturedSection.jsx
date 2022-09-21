import React from 'react';
import FeaturedZX9 from './FeaturedZX9';
import FeaturedZX7 from './FeaturedZX7';
import FeaturedYX1 from './FeaturedYX1';

const FeaturedSection = () => {
  return (
    <div className='container mx-auto flex flex-col gap-20'>
      <FeaturedZX9 />
      <FeaturedZX7 />
      <FeaturedYX1 />
    </div>
  );
};

export default FeaturedSection;
