import React from 'react';
import Head from 'next/head';
import CategoryHeader from '../../components/Categories/CategoryHeader';
import ProductDisplay from '../../components/Categories/ProductDisplay';
import CategorySection from '../../components/Common/CategorySection/CategorySection';
import AboutSection from '../../components/Common/AboutSection';
import XX99M1Img from '../../public/img/image-xx99-mark-one.jpg';
import XX99M2Img from '../../public/img/image-xx99-mark-two.jpg';
import XX59Img from '../../public/img/image-xx59.jpg';

const headphonesData = [
  {
    title: 'XX99 Mark II Headphones',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    img: XX99M2Img,
  },
  {
    title: 'XX99 Mark I Headphones',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    img: XX99M1Img,
  },
  {
    title: 'XX59 Headphones',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    img: XX59Img,
  },
];

const headphones = () => {
  return (
    <>
      <Head>
        <title>Audiophile &gt; Headphones</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryHeader title={'headphones'} />
      <ProductDisplay
        img={headphonesData[0].img}
        title={headphonesData[0].title}
        description={headphonesData[0].description}
        newProduct={true}
      />
      <ProductDisplay
        img={headphonesData[1].img}
        title={headphonesData[1].title}
        description={headphonesData[1].description}
        flip={true}
      />
      <ProductDisplay
        img={headphonesData[2].img}
        title={headphonesData[2].title}
        description={headphonesData[2].description}
      />
      <CategorySection />
      <AboutSection />
    </>
  );
};

export default headphones;
