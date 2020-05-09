import React from 'react';
import PriceRating from './PriceRating';

const InfoOp = ({price}) => {
  return (
    <div className='infoOp'>
      <PriceRating price={price}/>
    </div>
  )
}

export default InfoOp;