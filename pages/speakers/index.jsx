import React from 'react';
import CategoryLayout from '../../components/Layout/CategoryLayout';
import productData from '../../data.json';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import ProductDisplay from '../../components/Common/ProductDisplay';

const speakersData = productData.speakers;

const productDisplays = speakersData.map((item, i) => (
  <ProductDisplay
    key={item.title}
    img={item.img}
    title={item.title}
    description={item.description}
    category={'speakers'}
    href={item.id}
    newProduct={item.new}
    flip={i % 2 === 1 ? true : false}
  />
));

const speakers = () => {
  return (
    <CategoryLayout>
      <Head>
        <title>Audiophile &gt; Speakers</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryHeader title={'speakers'} />
      <div className='flex flex-col gap-[10rem]'>{productDisplays}</div>
    </CategoryLayout>
  );
};

export default speakers;
