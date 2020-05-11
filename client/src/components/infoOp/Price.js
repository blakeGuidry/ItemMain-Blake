import React from 'react';

const Price = ({price}) => {
  return (
    <div className='price'>
      <img src='https://fec-targaryen.s3.us-east-2.amazonaws.com/coin.png'/>
      <span>{price}</span>
    </div>
  )
}

export default Price;