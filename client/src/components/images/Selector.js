import React from 'react';

const Selector = ({img, selection}) => {
  return (
    <div className='selectSize' onClick={selection}>
      <img src={`${img}`}/>
    </div>
  )
}

export default Selector;