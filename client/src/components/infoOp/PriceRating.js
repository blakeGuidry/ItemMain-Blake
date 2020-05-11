import React from 'react';
import Price from './Price';
import Rating from './Rating';

const PriceRating = ({price}) => {
  return (
    <div className='priceAndRating'>
      <Price price={price}/>
      <div className='stats'>
        <Rating />
        <span className='numQuestions'><a href='#qa-tab'>3 Questions</a></span>
      </div> 
    </div>
  )
}

export default PriceRating;