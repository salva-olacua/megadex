import './Banner.css';

// const Banner = ({ titleProps, messageProps }) {
const Banner = ({ children }) => (
  <article className='home-banner'>
    {children}
  </article>

// {/* <Title { ...titleProps } />
//     <Message { ...messageProps }/>
//     <Button/> */}
);

export default Banner;