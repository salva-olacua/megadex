import { useEffect } from 'react';

const useSlider = (view, images) => {
  let slideCounter = 0;

  useEffect(() => startSlider());

  const startSlider = () => {
    view.current.style.height = '100vh';
    view.current.style.backgroundImage = `url(${images[0]})`;
    view.current.style.backgroundPosition = 'center';
    view.current.style.backgroundSize = 'cover';
    view.current.style.backgroundAttachment = 'fixed';
  }

  const handleSlide = slide => {
    view.current.style.backgroundImage = `url(${images[slide - 1]})`;
    animateSlide(view);
  }

  const animateSlide = animatedSlide => {
    // animatedSlide.current.classList.add('fadeIn');
    // setTimeout(() => {
    //   animatedSlide.current.classList.remove('fadeIn');
    // }, 700);
  }

  const goToPreviousSlide = () => {
    if(slideCounter === 0) {
      handleSlide(images.length);
      slideCounter = images.length;
      animateSlide(view);
    }

    handleSlide(slideCounter);
    slideCounter--;
  }

  const goToNextSlide = () => {
    if(slideCounter === images.length - 1) {
      startSlider();
      slideCounter = -1;
      animateSlide(view);
    }

    view.current.style.backgroundImage = `url(${images[slideCounter + 1]})`;
    slideCounter++;
    animateSlide(view);
  }
  
  return { goToPreviousSlide, goToNextSlide };
}

export default useSlider;