import React from 'react';
import GetBy from './GetBy';

class Delivery extends React.Component {
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
              <span className='status'>Deliver to </span>
              <span className='atStore'>The North</span>
              <div className='editStore'>
                <span>Edit region</span>
              </div>
            </div>
          </div>
          <div className='pick-it-up'>
            <button className='pick-it-up-button' onClick={this.addToCart}>Ship it</button>
          </div>
        </div>
        <GetBy />
      </div>
    )
  }
}

export default Delivery;