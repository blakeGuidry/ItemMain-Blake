import React from 'react';
import Price from './Price';
import Rating from './Rating';

const PriceRating = ({price}) => {
  return (
    <div className='priceAndRating'>
      <Price price={price}/>
      <div className='stats'>
        <Rating />
        <span className='numQuestions' href='#'>3 Questions</span>
      </div> 
    </div>
  )
}

export default PriceRating;