import React from 'react';
import CategoryLayout from '../../components/Layout/CategoryLayout';
import productData from '../../data.json';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import ProductDisplay from '../../components/Categories/ProductDisplay';

const earphonesData = productData.earphones;

const productDisplays = earphonesData.map((item, i) => (
  <ProductDisplay
    key={item.title}
    img={item.img}
    title={item.title}
    description={item.description}
    category={'earphones'}
    id={item.id}
    newProduct={i === 0 ? true : false}
    flip={i % 2 === 1 ? true : false}
  />
));

const earphones = () => {
  return (
    <CategoryLayout>
      <Head>
        <title>Audiophile &gt; Earphones</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryHeader title={'Earphones'} />
      {productDisplays}
    </CategoryLayout>
  );
};

export default earphones;