import React from 'react';
import CategoryLayout from '../../components/Layout/CategoryLayout';
import productData from '../../data.json';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import ProductDisplay from '../../components/Categories/ProductDisplay';

const headphonesData = productData.headphones;

const productDisplays = headphonesData.map((item, i) => (
  <ProductDisplay
    key={item.title}
    img={item.img}
    title={item.title}
    description={item.description}
    category={'headphones'}
    id={item.id}
    newProduct={i === 0 ? true : false}
    flip={i % 2 === 1 ? true : false}
  />
));

const headphones = () => {
  return (
    <CategoryLayout>
      <Head>
        <title>Audiophile &gt; Headphones</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryHeader title={'headphones'} />
      <div className='flex flex-col gap-[10rem]'>{productDisplays}</div>
    </CategoryLayout>
  );
};

export default headphones;
