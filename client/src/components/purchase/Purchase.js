import React from 'react';
import Store from './Store';
import Delivery from './Delivery';

const Purchase = (props) => {
  return (
    <div className='purchase'>
      <div className='buyOptions'>
        <Store />
        <Delivery />
      </div>
    </div>
  )
}

export default Purchase;