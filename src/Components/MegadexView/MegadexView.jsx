import React, { useRef } from 'react';
import Slider from '../Slider/Slider';
import images from '../../images/images';
import './MegadexView.css';

console.log('IMAGENES: ', images);

const MegadexView = () =>{
  const view = useRef(null);
  
  return (
    <section className='MegadexView' id='section-2' ref={ view }>
      <Slider images={ images } view={ view }/>
    </section>
  );
};

export default MegadexView;