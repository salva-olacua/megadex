import './Home.css';
import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import Message from '../Message/Message';
import Button from '../Button/Button';

const titleProps = {
  text: 'The Megadex'
}

const messageProps = {
  text: 'The megadex is a combination of megas and pokedex. Explore Mega Evolutions !'
}

const Hero = () => (
  <section className='home' id='section-1'>
    <Banner >
      <Title { ...titleProps } />
      <Message { ...messageProps }/>
      <Button/>
    </Banner>

    {/* <Banner { ...BannerProps }/> */}

  </section>
);

export default Hero;