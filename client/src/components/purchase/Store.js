import React from 'react';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const add = new CustomEvent('addToCart');
    document.dispatchEvent(add);
  }

  render() {
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
            <button className='pick-it-up-button' onClick={this.addToCart}>Pick it up</button>
          </div>
        </div>
        <div className='order-pickup'>
          <span>Ready tomorrow</span> with Order Pickup
        </div>
      </div>
    )
  }
}

export default Store;