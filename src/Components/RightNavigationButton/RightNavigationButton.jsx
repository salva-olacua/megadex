import React from 'react';
import './RightNavigationButton.css';

const RightNavigationButton = ({ action }) => {
  return (
    <button onClick={ action } className='right-navigation-button'/>
  )
};

export default RightNavigationButton;