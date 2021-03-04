// Header

import Nav from './Nav';
import { Link } from 'react-router-dom';
// Scroll to top that appears after some time
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../images/backtotop.svg";

const Header = () => {

	return (

		<header>
			<div className="header-row header-row-01">
				<h1 id="top"><Link to={'/'}>Mina Bui</Link></h1>

			</div>
			<div className="header-row header-row-02">
				<Nav />
			</div>
			<ScrollToTop smooth component={<MySVG />} className="back-to-top" />
		</header>

	);

}

export default Header;