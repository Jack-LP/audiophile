import React from 'react';

const ProductBtn = ({ bg, text, border }) => {
  return (
    <button
      className={`${bg} ${text} ${border} ${
        border ? 'border-2' : 'border-none'
      } uppercase font-bold py-3 px-10 text-sm`}
    >
      See Product
    </button>
  );
};

export default ProductBtn;
