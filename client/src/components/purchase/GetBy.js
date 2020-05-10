import React from 'react';

const GetBy = (props) => {
  const today = new Date();
  let getBy = new Date(today);
  getBy.setDate(getBy.getDate() + 2);
  getBy = getBy.toString().split(' ').slice(0, 3);
  getBy[2] = getBy[2][0] === '0' ? getBy[2].slice(1) : getBy[2];
  getBy = `${getBy[0]}, ${getBy[1]} ${getBy[2]}`;

  return (
    <div className='order-pickup'>
      <span>Get it by {getBy}</span> with free 2-day Raven or Dragon Mail
    </div>
  )
}

export default GetBy;