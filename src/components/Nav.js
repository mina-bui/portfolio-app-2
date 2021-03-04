// Nav

import { NavLink } from 'react-router-dom';

const Nav = ({ hideNav }) => (

    <nav onClick={hideNav}>
        <NavLink to={'/about'}>About</NavLink>
    </nav>

);

export default Nav;