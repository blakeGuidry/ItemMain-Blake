import React from 'react';
import PriceRating from './PriceRating';
import Quantity from './Quantity';

const InfoOp = ({price, reviews}) => {
  return (
    <div className='infoOp'>
      <PriceRating price={price} reviews={reviews}/>
      <Quantity />
    </div>
  )
}

export default InfoOp;