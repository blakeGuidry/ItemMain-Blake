import React from 'react';
import PriceRating from './PriceRating';
import Quantity from './Quantity';

const InfoOp = ({price, reviews, questions}) => {
  return (
    <div className='infoOp'>
      <PriceRating price={price} reviews={reviews} questions={questions}/>
      <Quantity />
    </div>
  )
}

export default InfoOp;