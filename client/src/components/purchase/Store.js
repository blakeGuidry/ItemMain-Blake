import React from 'react';

const Store = (props) => {
  return (
    <div className='store'>
      <div className='pickup'>
        <div className='storeInfo'>
          <div className='purchaseStore'>
            <span className='status'>Pick up tomorrow </span>
            <span>at </span>
            <span className='atStore'>Braavos</span>
            <div className='editStore'>
              <span>Edit store</span>
            </div>
          </div>
          <div className='stock'>
            <span>Only 3 left</span>
          </div>
        </div>
        <div className='pick-it-up'>
          <button className='pick-it-up-button'>Pick it up</button>
        </div>
      </div>
      <div className='order-pickup'>
        <span>Ready tomorrow</span> with Order Pickup
      </div>
    </div>
  )
}

export default Store;