import React from 'react';
import PriceRating from './PriceRating';
import Quantity from './Quantity';

const InfoOp = ({price}) => {
  return (
    <div className='infoOp'>
      <PriceRating price={price}/>
      <Quantity />
    </div>
  )
}

export default InfoOp;