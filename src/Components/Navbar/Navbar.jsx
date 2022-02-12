import './Navbar.css';
import NavLinks from './NavLinks/NavLinks';

const Navbar = () => {
  return <nav className='main-nav'>
    <div className='main-nav__section--width-40'> <h3>MegadeX</h3> </div>
    <div className='main-nav__section--width-60'> <NavLinks/> </div> 
  </nav>
};

export default Navbar;