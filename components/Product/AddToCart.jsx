import React, { useState, useContext } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import AppContext from '../../context/AppContext';
import PreviousMap from 'postcss/lib/previous-map';

const CountButton = ({ count, setCount, type }) => {
  return (
    <button
      className={`p-3 ${
        type === 'minus'
          ? count === 1 && 'cursor-not-allowed hover:bg-neutral-300'
          : count === 10 && 'cursor-not-allowed hover:bg-neutral-300'
      } hover:bg-neutral-400 transition ease-out`}
      onClick={() =>
        type === 'minus'
          ? count !== 1 && setCount(count - 1)
          : count !== 10 && setCount(count + 1)
      }
    >
      {type === 'minus' ? (
        <MinusIcon
          className={`w-4 h-4 text-black ${count === 1 && 'text-neutral-600'}`}
        />
      ) : (
        <PlusIcon
          className={`w-4 h-4 text-black ${count === 10 && 'text-neutral-600'}`}
        />
      )}
    </button>
  );
};

const AddToCart = ({ title, price, productId }) => {
  const [productCount, setProductCount] = useState(1);

  const { cartItems, setCartItems } = useContext(AppContext);

  return (
    <div className='flex gap-4 items-center'>
      <div>
        <div className='flex items-center bg-neutral-300 px-2'>
          <CountButton
            count={productCount}
            setCount={setProductCount}
            type={'minus'}
          />
          <span className='p-3 font-mono'>{productCount}</span>
          <CountButton
            count={productCount}
            setCount={setProductCount}
            type={'plus'}
          />
        </div>
      </div>
      <button
        className='bg-pale-orange text-white uppercase font-bold py-3 px-10 text-sm'
        onClick={() =>
          setCartItems((curr) => {
            if (curr.find((item) => item.id === productId) == null) {
              return [
                ...curr,
                {
                  item: title,
                  id: productId,
                  price: price,
                  count: productCount,
                },
              ];
            } else {
              return curr.map((item) => {
                if (item.id === productId) {
                  return { ...item, count: item.count + productCount };
                }
              });
            }
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
