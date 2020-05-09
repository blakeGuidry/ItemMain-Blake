import React from 'react';
import Path from './Path';
import Name from './Name';
import ShopBrand from './ShopBrand';

const Header = ({name, category}) => {
  return (
    <div className='mainHeader'>
      <Path category={category}/>
      <Name name={name}/>
      <ShopBrand category={category}/>
    </div>
  )
}

export default Header;