import React, { Component } from 'react';
import Axios from 'axios';

import Header from './header/Header';
import Images from './images/Images';
import InfoOp from './infoOp/InfoOP';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: '',
      price: 0,
      category: '',
      images: []
    };
  }

  componentDidMount() {
    this.getMain();
  }

  getMain() {
    Axios.get(`http://localhost:8008/${this.state.id}`)
      .then(item => {
        const i = item.data[0];
        this.setState({
          id: i.id,
          name: i.name,
          price: i.price,
          category: i.category,
          images: i.images
        })
      })
      .catch('Error getting item from db');
  }

  render() {
    return (
      <div id='main'>
        <Header name={this.state.name} category={this.state.category}/>
        <div className='body'>
          <Images imgs={this.state.images}/>
          <InfoOp price={this.state.price}/>
        </div>
      </div>
    )
  }
}
    
export default App;