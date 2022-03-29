import { useEffect } from 'react';

const useSlider = (view, images) => {

  let slideCounter = 0;

  useEffect( () => handleSlide(0) );

  const handleSlide = slide => {
    view.current.style.backgroundImage = `url(${images[slide]})`;
  }

  const goToPreviousSlide = () => {
    slideCounter = slideCounter === 0 ? images.length - 1 : slideCounter - 1;
    handleSlide(slideCounter)
  }

  const goToNextSlide = () => {
    slideCounter = slideCounter === images.length - 1 ? 0 : slideCounter + 1;
    handleSlide(slideCounter)
  }

  return { goToPreviousSlide, goToNextSlide };

}

export default useSlider;