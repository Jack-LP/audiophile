import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import productData from '../../data.json';
import ProductLayout from '../../components/Layout/ProductLayout';
import ProductDisplay from '../../components/Common/ProductDisplay';
import Features from '../../components/Product/Features';
import InTheBox from '../../components/Product/InTheBox';
import Gallery from '../../components/Product/Gallery';
import Recommendations from '../../components/Product/Recommendations';

const EearphoneProductPage = () => {
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
      <div className='container mx-auto flex flex-col gap-[14rem] pb-[14rem]'>
        <ProductDisplay
          img={pageData.img}
          title={pageData.title}
          description={pageData.description}
          newProduct={pageData.new}
          price={pageData.price}
          productId={pageData.id}
          purchasePage={true}
        />
        <div className='grid grid-cols-4 gap-16'>
          <Features text={pageData.features} />
          <InTheBox boxContents={pageData.box} />
        </div>
        <Gallery imgs={pageData.gallery} />
        <Recommendations productData={productData} />
      </div>
    </ProductLayout>
  );
};

export default EearphoneProductPage;
