import React from 'react';
import CategorySection from '../Common/CategorySection/CategorySection';
import AboutSection from '../Common/AboutSection';

const CategoryLayout = ({ children }) => {
  return (
    <div className='flex flex-col gap-[14rem] pb-[14rem]'>
      {children}
      <CategorySection />
      <AboutSection />
    </div>
  );
};

export default CategoryLayout;
