import React from 'react';

const Path = ({category}) => {
  return (
    <div className='path'>
      <span><a href='#'>Target</a></span>
      <span className='slash'>/</span>
      <span><a href='#'>{category}</a></span>
    </div>
  )
}

export default Path;