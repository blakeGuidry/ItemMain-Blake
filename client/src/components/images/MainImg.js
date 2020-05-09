import React from 'react';

const MainImg = ({img}) => {
  return (
    <div className='mainImg'>
      <img src={`${img}`}/>
    </div>
  )
}

export default MainImg;