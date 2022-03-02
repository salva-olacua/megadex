import React from 'react';
import './Button.css';
import rightArrow from './right.png';

const Button = () => (
  <a href='#megadex'> <button className='main-button'>
      <span >See Megas</span>
      <img src={ rightArrow } 
           alt='right arrow to see megas'
           className='right-arrow'/>
    </button> </a>
);

export default Button;
