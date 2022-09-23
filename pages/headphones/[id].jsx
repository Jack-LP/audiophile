import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import productData from '../../data.json';

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

  return <div className='container mx-auto  py-24'>{pageId}</div>;
};

export default HeadphoneProductPage;
