import Banner from '../Banner/Banner';
import Message from '../Message/Message';
import Title from '../Title/Title';
import './MegaEvolution.css';
import {messageProps, titleProps} from './megaEvolutionProps';

const MegaEvolution = () => (
  <section className='MegaEvolution' id='megaEvolution'>
    <Banner >
      <Title { ...titleProps } />
      <Message { ...messageProps }/>
    </Banner>
  </section>
)

export default MegaEvolution;