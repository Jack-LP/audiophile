import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
const ItemCountChange = ({ count, productId }) => {
  const { setCartItems } = useContext(AppContext);

  return (
    <div className='flex bg-neutral-300 gap-4 items-center p-1 font-mono'>
      <button
        className='hover:bg-neutral-400 transition ease-out p-2'
        onClick={() => {
          setCartItems((curr) => {
            if (curr.find((item) => item.id === productId).count !== 0) {
              return curr.map((item) => {
                if (item.id === productId) {
                  return { ...item, count: item.count - 1 };
                } else {
                  return item;
                }
              });
            } else {
              return curr.filter((item) => item.id !== productId);
            }
          });
        }}
      >
        <MinusIcon className='w-4 h-4 text-black' />
      </button>
      <span>{count}</span>
      <button
        className='hover:bg-neutral-400 transition ease-out p-2'
        onClick={() => {
          setCartItems((curr) => {
            return curr.map((item) => {
              if (item.id === productId) {
                return { ...item, count: item.count + 1 };
              } else {
                return item;
              }
            });
          });
        }}
      >
        <PlusIcon className='w-4 h-4 text-black' />
      </button>
    </div>
  );
};

export default ItemCountChange;
