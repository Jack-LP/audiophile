import React from 'react';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import ProductDisplay from '../../components/Categories/ProductDisplay';
import YX1Img from '../../public/img/image-yx1-earphones.jpg';

const earphonesData = [
  {
    title: 'YX1 Wireless Earphones',
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    img: YX1Img,
  },
];

const earphones = () => {
  return (
    <>
      <Head>
        <title>Audiophile &gt; Earphones</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryHeader title={'Earphones'} />
      <ProductDisplay
        img={earphonesData[0].img}
        title={earphonesData[0].title}
        description={earphonesData[0].description}
        newProduct={true}
      />
    </>
  );
};

export default earphones;
