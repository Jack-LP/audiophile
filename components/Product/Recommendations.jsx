import React from 'react';
import RecommendCard from './RecommendCard';

const Recommendations = ({ productData }) => {
  const productsArray = [].concat.apply([], Object.values(productData));

  return (
    <div>
      {getRecommendations(productsArray, 3).map((item) => (
        <RecommendCard
          key={item.id}
          img={item.img}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  );
};

const getRecommendations = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export default Recommendations;
