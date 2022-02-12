import React from 'react';
import leftArrow from './left.png';
import './LeftNavigationButton.css';

const LeftNavigationButton = () => {
  return (
    <button className='left-navigation-button'>
      <img src={ leftArrow }
           alt='navigation button'
           className='left-navigation-arrow'/>
    </button>
  )
};

export default LeftNavigationButton;