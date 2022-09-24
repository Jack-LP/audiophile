import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import productData from '../../data.json';
import ProductLayout from '../../components/Layout/ProductLayout';
import ProductDisplay from '../../components/Common/ProductDisplay';
import Features from '../../components/Product/Features';
import InTheBox from '../../components/Product/InTheBox';

const HeadphoneProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const pageId = Number(id);

  const [pageData, setPageData] = useState();

  useEffect(() => {
    Object.values(productData).forEach((item) => {
      if (item.find((obj) => obj.id === pageId) !== undefined) {
        setPageData(item.find((obj) => obj.id === pageId));
      }
    });
  }, [pageId]);

  if (!pageData) {
    return <div className='min-h-screen'></div>;
  }

  return (
    <ProductLayout>
      <Head>
        <title>{`Audiophile > ${pageData.title}`}</title>
      </Head>
      <div className='container mx-auto'>
        <ProductDisplay
          img={pageData.img}
          title={pageData.title}
          description={pageData.description}
          newProduct={pageData.new}
          price={pageData.price}
          purchasePage={true}
        />
        <Features />
        <InTheBox />
      </div>
    </ProductLayout>
  );
};

export default HeadphoneProductPage;
