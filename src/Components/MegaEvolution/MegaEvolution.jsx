import Banner from '../Banner/Banner';
import Message from '../Message/Message';
import Title from '../Title/Title';
import './MegaEvolution.css';

const titleProps = {
  text: 'MEGA EVOLUTION'
}

const messageProps = {
  text: 'The mega evolution occurs when a pokemon is exposed with the mega stone'
}

const MegaEvolution = () => (
  <section className='MegaEvolution' id='section-3'>
    <Banner >
      <Title { ...titleProps } />
      <Message { ...messageProps }/>
    </Banner>
  </section>
)

export default MegaEvolution;