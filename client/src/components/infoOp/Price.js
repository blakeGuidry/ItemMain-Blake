import React from 'react';

const Price = ({price}) => {
  return (
    <div className='price'>
      <img src='./assets/coin.png'/>
      <span>{price}</span>
    </div>
  )
}

export default Price;