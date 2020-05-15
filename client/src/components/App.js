import React, { Component } from 'react';
import Axios from 'axios';

import Header from './header/Header';
import Images from './images/Images';
import InfoOp from './infoOp/InfoOP';
import Purchase from './purchase/Purchase';

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
    this.getMain(1);

    const search = document.getElementById('searchInputForm');
    if (search) {
      search.addEventListener('submit', () => {
        this.getMain(search.name);
      })
    }
  }

  getMain(id) {
    Axios.get(`http://localhost:8008/${id}`)
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
          <Purchase />
        </div>
      </div>
    )
  }
}
    
export default App;