import React from 'react';
import Image from 'next/image';
import AboutSectionImage from '../../public/img/image-best-gear.jpg';

const AboutSection = () => {
  return (
    <div className='container mx-auto flex gap-8 mt-[14rem]'>
      <div className='flex flex-col gap-8 flex-1 justify-center'>
        <h1 className='uppercase font-bold text-6xl text-neutral-900'>
          Bringing you the <br /> <span className='text-pale-orange'>best</span>{' '}
          audio gear
        </h1>
        <p className='text-neutral-500 pr-[16rem] leading-7'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className='rounded-lg flex-1'>
        <Image
          alt=''
          src={AboutSectionImage}
          className='rounded-lg'
          layout='responsive'
        />
      </div>
    </div>
  );
};

export default AboutSection;
