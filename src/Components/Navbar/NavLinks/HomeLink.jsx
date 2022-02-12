import NavLink from "../NavLink/NavLink";

const homeProps = {
  href: '#section-1',
  text: 'Home'
}

const HomeLink = () => <NavLink { ...homeProps } />

export default HomeLink;
