import React from 'react';
import LeftNavigationButton from '../LeftNavigationButton/LeftNavigationButton';
import RightNavigationButton from '../RightNavigationButton/RightNavigationButton';
import './NavigationButtons.css';

const NavigationButtons = () => {
  return (
    <article className='navigation-buttons'>
      <LeftNavigationButton/>
      <RightNavigationButton/>
    </article>
  )
};

export default NavigationButtons;
