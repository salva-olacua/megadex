import React, { useRef } from 'react';
import Slider from '../Slider/Slider';
import images from '../../images/images';
import './MegadexView.css';

const MegadexView = () =>{
  const view = useRef(null);
  
  return (
    <section className='megadexView' id='megadex' ref={ view }>
      <Slider images={ images } view={ view }/>
    </section>
  );
};

export default MegadexView;