import React from 'react';
import './LeftNavigationButton.css';

const LeftNavigationButton = ({ action }) => {
  return (
    <button onClick={ action } className='left-navigation-button'/>
  )
};

export default LeftNavigationButton;