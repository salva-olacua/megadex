import React from 'react';
import rightArrow from './right.png';
import './RightNavigationButton.css';

const RightNavigationButton = ({ action }) => {
  return (
    <button onClick={ action } className='right-navigation-button'>
    </button>
  )
};

export default RightNavigationButton;