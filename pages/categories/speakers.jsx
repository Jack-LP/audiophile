import React from 'react';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import ProductDisplay from '../../components/Categories/ProductDisplay';
import CategorySection from '../../components/Common/CategorySection/CategorySection';
import AboutSection from '../../components/Common/AboutSection';
import ZX9Img from '../../public/img/image-zx9.jpg';
import ZX7Img from '../../public/img/image-zx7.jpg';

const speakersData = [
  {
    title: 'ZX9 Speaker',
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    img: ZX9Img,
  },
  {
    title: 'ZX7 Speaker',
    description:
      'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    img: ZX7Img,
  },
];

const speakers = () => {
  return (
    <>
      <Head>
        <title>Audiophile &gt; Speakers</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryHeader title={'speakers'} />
      <ProductDisplay
        img={speakersData[0].img}
        title={speakersData[0].title}
        description={speakersData[0].description}
        newProduct={true}
      />
      <ProductDisplay
        img={speakersData[1].img}
        title={speakersData[1].title}
        description={speakersData[1].description}
        flip={true}
      />
      <CategorySection />
      <AboutSection />
    </>
  );
};

export default speakers;
