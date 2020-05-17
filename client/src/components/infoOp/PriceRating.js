import React from 'react';
import Price from './Price';
import Rating from './Rating';

const PriceRating = ({price, reviews}) => {
  return (
    <div className='priceAndRating'>
      <Price price={price}/>
      <div className='stats'>
        <Rating reviews={reviews}/>
        <span className='numQuestions'><a href='#qa-tab'>3 Questions</a></span>
      </div> 
    </div>
  )
}

export default PriceRating;