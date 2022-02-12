import React from 'react';
import rightArrow from './right.png';
import './RightNavigationButton.css';

const RightNavigationButton = () => {
  return (
    <button className='right-navigation-button'>
      <img src={ rightArrow }
           alt='navigation button'
           className='right-navigation-arrow'/>
    </button>
  )
};

export default RightNavigationButton;