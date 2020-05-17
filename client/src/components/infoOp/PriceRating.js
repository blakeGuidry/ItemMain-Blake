import React from 'react';
import Price from './Price';
import Rating from './Rating';

const PriceRating = ({price, reviews, questions}) => {
  return (
    <div className='priceAndRating'>
      <Price price={price}/>
      <div className='stats'>
        <Rating reviews={reviews}/>
        <span className='numQuestions'><a href='#qa-tab'>{questions} Questions</a></span>
      </div> 
    </div>
  )
}

export default PriceRating;