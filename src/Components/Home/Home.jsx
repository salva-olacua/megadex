import './Home.css';
import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import Message from '../Message/Message';
import Button from '../Button/Button';
import {messageProps, titleProps} from './homeProps';

const Home = () => (
  <section className='home' id='home'>
    <Banner >
      <Title { ...titleProps } />
      <Message { ...messageProps }/>
      <Button/>
    </Banner>
  </section>
);

export default Home;