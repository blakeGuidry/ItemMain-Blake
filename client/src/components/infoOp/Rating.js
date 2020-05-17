import React from 'react';
import StarRating from 'react-star-ratings';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4.5,
      reviews: 313
    }
  }

  render() {
    return (
      <a className='ratings' href='#reviews'>
        <div className='stars'>
          <StarRating 
            totalStars={5} 
            rating={this.state.rating} 
            starRatedColor={'gold'}
            starSpacing={'0px'}
            starDimension={'20px'}
          />
        </div>
        <span className='reviews'>{this.props.reviews}</span>
      </a>
    )
  }
}

export default Rating;