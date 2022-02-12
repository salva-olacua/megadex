import './NavLink.css';

const NavLink = ({ text, href }) =>
  <a className= 'nav__link' href={href} >{ text }</a>

export default NavLink;