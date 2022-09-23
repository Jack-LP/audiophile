import React from 'react';
import CategorySection from '../Common/CategorySection/CategorySection';
import AboutSection from '../Common/AboutSection';

const ProductLayout = ({ children }) => {
  return (
    <div className='flex flex-col gap-[14rem] py-[14rem]'>
      {children}
      <CategorySection />
      <AboutSection />
    </div>
  );
};

export default ProductLayout;
