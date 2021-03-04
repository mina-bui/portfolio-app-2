// Page Not Found

import { Link } from 'react-router-dom';

const PageNotFound = () => (

	<main>
		<section>
			<div className="page-info">
				<h3>404 - Page Not Found</h3>
			</div>
			<div className="page-text">
				<br /><br />
				<p>
					Whoops. We can't seem to find the page you're looking for.
				</p>
				<br /><br />
				<Link to={'/'}>
					<button className="round-btn">Back to Home</button>
				</Link>
			</div>
		</section>
	</main>

);

export default PageNotFound;