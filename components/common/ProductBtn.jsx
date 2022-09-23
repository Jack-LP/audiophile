import React from 'react';
import Link from 'next/link';

const ProductBtn = ({ bg, text, border, category, href }) => {
  return (
    <Link href={`/${category}/${href}`}>
      <button
        className={`${bg} ${text} ${border} ${
          border ? 'border-2' : 'border-none'
        } uppercase font-bold py-3 px-10 text-sm`}
      >
        See Product
      </button>
    </Link>
  );
};

export default ProductBtn;
