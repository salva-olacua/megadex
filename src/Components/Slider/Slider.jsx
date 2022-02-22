import React from 'react';
import useSlider from '../../hooks/useSlider';
import LeftNavigationButton from '../LeftNavigationButton/LeftNavigationButton';
import RightNavigationButton from '../RightNavigationButton/RightNavigationButton';
import './Slider.css';

const Slider = ({ images, view }) => {
  const { goToPreviousSlide, goToNextSlide } = useSlider( view, images );

  return (
    <article className='slider' >
      <LeftNavigationButton action={ goToPreviousSlide }/>
      <RightNavigationButton action={ goToNextSlide }/>
    </article>
  );
};

export default Slider;