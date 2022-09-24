import React from 'react';
import RecommendCard from './RecommendCard';

const Recommendations = ({ productData }) => {
  const productsArray = [].concat.apply([], Object.values(productData));

  return (
    <div className='flex flex-col gap-12'>
      <h2 className='uppercase font-bold text-4xl self-center'>
        You may also like
      </h2>
      <div className='flex gap-12 justify-between'>
        {getRecommendations(productsArray, 3).map((item) => (
          <RecommendCard
            key={item.id}
            img={item.img}
            title={item.title}
            type={item.type}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

const getRecommendations = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export default Recommendations;
