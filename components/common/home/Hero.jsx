import React from 'react';
import Image from 'next/image';
import HeroImg from '../../../public/img/image-hero.jpg';

const Hero = () => {
  return (
    <>
      <Image
        alt=''
        src={HeroImg}
        layout='responsive'
        objectFit='cover'
        quality={100}
      />
      <div className='flex flex-col gap-4'>
        <h2>New Product</h2>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
      </div>
    </>
  );
};

export default Hero;
