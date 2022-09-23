import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import productData from '../../data.json';
import ProductLayout from '../../components/Layout/ProductLayout';
import ProductDisplay from '../../components/Categories/ProductDisplay';

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
      <div className='container mx-auto'>
        <ProductDisplay
          img={pageData.img}
          title={pageData.title}
          description={pageData.description}
        />
      </div>
    </ProductLayout>
  );
};

export default HeadphoneProductPage;
