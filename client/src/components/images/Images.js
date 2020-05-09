import React from 'react';
import Selector from './Selector';
import MainImg from './MainImg';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
    this.selection = this.selection.bind(this);
  }

  selection(i) {
    this.setState({selected: i});
  }

  render() {
    return (
      <div className='images'>
        <div className='imgSelect'>
          {this.props.imgs.map((img, i) => {
            return <Selector img={img} key={i} selection={() => this.selection(i)}/>
          })}
        </div>
        <MainImg img={this.props.imgs[this.state.selected]}/>
      </div>
    )
  }
}

export default Images;