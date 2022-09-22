import React from 'react';
import CategoryCard from './CategoryCard';
import HeadphonesImage from '../../../public/img/image-headphones.png';
import SpeakersImage from '../../../public/img/image-speakers.png';
import EarphonesImage from '../../../public/img/image-earphones.png';

const CategorySection = () => {
  return (
    <div className='container flex gap-10 justify-between mx-auto flex-wrap'>
      <CategoryCard
        image={HeadphonesImage}
        title={'Headphones'}
        href={'headphones'}
      />
      <CategoryCard
        image={SpeakersImage}
        title={'Speakers'}
        href={'speakers'}
      />
      <CategoryCard
        image={EarphonesImage}
        title={'Earphones'}
        href={'earphones'}
      />
    </div>
  );
};

export default CategorySection;
