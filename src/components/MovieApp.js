// Projects

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Mockups
import HomeMockup from '../images/filmdex-desktop/filmdex-home-desktop-mockup.jpg';
import SingleMockup from '../images/filmdex-desktop/filmdex-singlemovie-desktop-mockup.jpg';
import FavouritesMockup from '../images/filmdex-desktop/filmdex-favourites-desktop-mockup.png';
import AboutMockup from '../images/filmdex-desktop/filmdex-about-desktop-mockup.jpg';
// Mobile Mockups
import HomeMockupMob from '../images/filmdex-desktop/filmdex-home-mobile-mockup-2.png';
import SingleMockupMob from '../images/filmdex-desktop/filmdex-singlemovie-mobile-mockup.png';
import AboutMockupMob from '../images/filmdex-desktop/filmdex-about-mobile-mockup.png';
import FavouritesMockupMob from '../images/filmdex-desktop/filmdex-favourites-mobile-mockup.png';

// Import screenshots of website
import SingleImage from '../images/filmdex-desktop/filmdex-singlemovie-desktop.png';
import FavouritesImage from '../images/filmdex-desktop/filmdex-favourites-desktop.png';
import SearchImage from '../images/filmdex-desktop/filmdex-search-desktop.png';
import AboutImage from '../images/filmdex-desktop/filmdex-about-desktop.png';
// Import ReactPlayer to show video of site walkthrough
import ReactPlayer from 'react-player/youtube';
import PopupMessage from '../images/popup-message.png';
// react-reveal for animations!
// (note: it's only animating what the user can see in the browser to prevent slowing down the site)
import Reveal from 'react-reveal/Reveal';

// Get images for project site previews
import movieLaptop from '../images/filmdex-home-laptop.png';



const options = {
	settings: {
		autoplaySpeed: 3000,
		boxShadow: 'none',
		disableKeyboardControls: false,
		disablePanzoom: false,
		disableWheelControls: false,
		hideControlsAfter: 3000,
		lightboxTransitionSpeed: 0.3,
		lightboxTransitionTimingFunction: 'linear',
		overlayColor: 'rgba(30, 30, 30, 0.9)',
		slideAnimationType: 'fade',
		slideSpringValues: [300, 50],
		slideTransitionSpeed: 0.6,
		slideTransitionTimingFunction: 'linear',
		usingPreact: false
	},
	buttons: {
		backgroundColor: 'rgba(30,30,36,0.8)',
		iconColor: 'rgba(255, 255, 255, 0.8)',
		iconPadding: '10px',
		showAutoplayButton: false,
		showCloseButton: true,
		showDownloadButton: false,
		showFullscreenButton: false,
		showNextButton: true,
		showPrevButton: true,
		showThumbnailsButton: false,
		size: '40px'
	},
	caption: {
		captionAlignment: 'start',
		captionColor: '#FFFFFF',
		captionContainerPadding: '0px 50px',
		captionFontFamily: 'inherit',
		captionFontSize: 'inherit',
		captionFontStyle: 'inherit',
		captionFontWeight: 'inherit',
		captionTextTransform: 'inherit',
		showCaption: true
	}
}

const Projects = () => (
	<Fragment>
		<Helmet>
			<title>React Movie App Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui collaborated remotely in a team to produce Filmdex, a movie web application that showcases a list of movies in a database. It enables users to favourite, search and sort through movies. It was created with JavaScript, React.JS, Sass, HTML, and GitHub." />
			<meta name="keywords"
				content="JavaScript developer, React developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>

		<main>
			<section>
				<Reveal>
					<div className="page-info">
						<div className="project-laptop-wrapper">
							<img src={movieLaptop} alt="Filmdex homepage on laptop" className="project-laptop-banner" />
						</div>
						<br /><br />
						<h2 className="project-detail-title">Filmdex &#x2014; <br className="mobile" /> React Movie App</h2>
						<h2 className="project-detail-subtitle">A film database using the TMDb API.</h2>
					</div>
					<div className="hidden-on-mobile">
						<div className="next-wrapper">
							<a href="#next">
								<button className="next-btn">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" /></svg>
								</button>
							</a>
						</div>
					</div>
				</Reveal>

				<div className="page-text">
					<Reveal>
						<div className="project-detail">
							<h3 className="project-detail-title" id="next">Project Overview</h3>
							<p>
								In January 2021, I collaborated remotely with <a href="https://github.com/v-nguyen6" title="Github: v-nguyen6" target="_blank" rel="noreferrer" >Vinson Nguyen</a> to produce Filmdex, a movie database web application that allows users to view, sort, and search for movies in a database. (Yes, the name is a play on words with Pokédex). There are two key features that we added to improve the user experience. First, we built a search bar, that shows live search results. Secondly, we created a Favorites List that allows users to add their favorite films without logging in.
						</p>
							<p>
								The web application was created using ReactJS by first installing NPM, node,js, and <code>create-react-app</code>, and then pulling data from the The Movie Database (TMDb) API. My role was focused on responsive design and on Sass styling. Specifically, my focus was to create the individual components, being the homepage grid, the single movie layout, as well as the footer.
						</p>
							<ul className="project-technologies">
								<li>JavaScript</li>
								<li>ReactJS</li>
								<li>Sass</li>
								<li>HTML5</li>
								<li>GitHub</li>
								<li>Photoshop</li>
							</ul>
						</div>

						<div className="project-detail">
							<h3 className="project-detail-title">How It Works</h3>
							<div className="project-detail-video">
								<ReactPlayer url='https://youtu.be/ou_ezRP-iX8' />
							</div>
						</div>
					</Reveal>
					<div className="project-detail">
						<h3 className="project-detail-title">Design and Planning</h3>
						{/* Desktop Mockup */}
						<div className="project-detail-gallery-movie">
							<SRLWrapper options={options}>
								<a href={HomeMockup}>
									<img src={HomeMockup}
										alt="A mockup of Filmdex's home page made in Adobe Photoshop, which would include a CSS grid of movies, a side navigation bar, and a row of sorting buttons on top. We later moved the navigation bar to the top to make it more intuitive for the user, as we wanted to give more focus to the search functionality."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={SingleMockup}>
									<img src={SingleMockup}
										alt="A mockup of the Single Movie page, which would prominently display the poster as well as the movie's overview, rating, and a favorite button to add to the interactivity of the site. We later decided to change the format, but our first iteration of the single movie page has a special spot in our heart."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={FavouritesMockup}>
									<img src={FavouritesMockup}
										alt="The favorite movie page when it has no movies added. It would display instructions on how to add and remove a movie. When movies are added, it would display similarly to the home page (in a CSS grid)."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={AboutMockup}>
									<img src={AboutMockup}
										alt="The About page, which has information on what Filmdex is and on the development team. We later added the TMDb logo, as per their requirements for using their public API."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
						<div className="project-detail-gallery-brochure">

						</div>
						<p>
							We began by designing our high fidelity mockups through Adobe Photoshop. Users would be able to sort movies by Most Popular, Top Rated, Now Playing, and Upcoming. They would also be able to click on an individual movie for more information. There would also be a favorites button.
						</p>
						{/* Mobile Mockup */}
						<div className="project-detail-gallery">
							<div className="project-detail-wireframe-brochure">
								<SRLWrapper options={options}>
									<a href={HomeMockupMob}>
										<img src={HomeMockupMob}
											alt="The mobile version of the home page. We later changed this to display two movies at a time on mobile, and three movies for those with massive modern phones."
											title="Click to view full screen" />
									</a>
								</SRLWrapper>
								<SRLWrapper options={options}>
									<a href={SingleMockupMob}>
										<img src={SingleMockupMob}
											alt="The single movie page in mobile, which display the CSS grid as blocks."
											title="Click to view full screen" />
									</a>
								</SRLWrapper>
								<SRLWrapper options={options}>
									<a href={FavouritesMockupMob}>
										<img src={FavouritesMockupMob}
											alt="The favourites page in mobile, which is identical to the desktop version, except slightly smaller."
											title="Click to view full screen" />
									</a>
								</SRLWrapper>
								<SRLWrapper options={options}>
									<a href={AboutMockupMob}>
										<img src={AboutMockupMob}
											alt="The About page in mobile, which is also similar to the desktop version."
											title="Click to view full screen"
											className="hidden-on-mobile" />
									</a>
								</SRLWrapper>
							</div>
						</div>
						<p>
							We also wanted the mobile version of our web application to be as easy to read and intuitive as possible. We initially decided on a one column grid, but later switched to include two movies per row. We initially decided on a touch scrollable section for the sorting buttons, but decided to scrap this idea in favor for a better UI design.
						</p>
					</div>
					{/* Site Screenshots */}
					<div className="project-detail">
						<h3 className="project-detail-title">Site Screenshots</h3>
						<div className="project-detail-gallery">
							<SRLWrapper options={options}>
								<a href={SearchImage}>
									<img src={SearchImage}
										alt="The Home page, where users can sort by Most Popular, Top Rated, Upcoming, and Now Playing. Users can scroll infinitely thanks to a 'Load More' button. This includes the search functionality, where users can search for movies and have instantaneous live search results."
										title="Click to view full screen" />
								</a>

								<a href={SingleImage}>
									<img src={SingleImage}
										alt="The Single Movie page, where users can view the movie poster, directors, IMDB rating, and actors. Users can also favorite movies by clicking on the Star button."
										title="Click to view full screen" />
								</a>

								<a href={FavouritesImage}>
									<img src={FavouritesImage}
										alt="The Favourites page (featuring my personal favorites), where users can see which movies they have favourited (which are stored in localStorage). By clicking on the movies on this page, they can click the Star button again to unfavourite a movie."
										title="Click to view full screen" />
								</a>

								<a href={AboutImage}>
									<img src={AboutImage}
										alt="The About page, which talks about the web application, the API used, and the development team."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>

					</div>

					<div className="project-detail">
						<h3 className="project-detail-title">Biggest Challenges</h3>
						<p>
							One of our biggest obstacles was not only learning React functional components and React hooks, but why they are superior to React class components. As a team, we knew that we wanted to implement many additional features, such as a "Load More" button and a search bar.
						</p>
						<p>
							As a challenge, we compared implementing these features using both methods. We quickly found that not only are React functional components easier to read, write, maintain and debug, but using hooks allowed us to reuse components in a smarter, more efficient way.
						</p>
						{/* Codepen */}
						<iframe height="400" scrolling="no" title="JjbZjao" src="https://codepen.io/mina-bui/embed/JjbZjao?height=511&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
							See the Pen <a href='https://codepen.io/mina-bui/pen/JjbZjao'>Calling a movie API with class components!</a> by Mina Bui (<a href='https://codepen.io/mina-bui'>@mina-bui</a>) on <a href='https://codepen.io'>CodePen</a>.
						</iframe>
						<p>
							Here is our simplified version of our homepage. Here, we call the TMDb API using class components by using <code>componentDidMount()</code>. Note the mass amount of code needed. Yikes!
						</p>
						<iframe height="400" scrolling="no" title="Calling a movie API with functional components!" src="https://codepen.io/mina-bui/embed/PobaoxK?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
							See the Pen <a href='https://codepen.io/mina-bui/pen/PobaoxK'>Calling a movie API with functional components!</a> by Mina Bui (<a href='https://codepen.io/mina-bui'>@mina-bui</a>) on <a href='https://codepen.io'>CodePen</a>.
						</iframe>
						<p>
							Now, see this excerpt of our homepage using functional components and <code>useEffect()</code>. It's much more readable and thus, more easily debugged. As a team, we preferred this method.
						</p>
					</div>

					<div className="project-detail">
						<h3 className="project-detail-title">Links</h3>
						<div className="project-detail-links">
							<a href="https://mbui.bcitwebdeveloper.ca/twd-movie-app/"
								title="https://mbui.bcitwebdeveloper.ca/twd-movie-app/" target="_blank" rel="noreferrer" >
								<button className="round-btn">View Live </button>
							</a>

							<a href="https://www.github.com/mina-bui/twd-movie-app-final-version"
								title="https://www.github.com/mina-bui/twd-movie-app-final-version" target="_blank" rel="noreferrer" >
								<button className="round-btn">Github </button>
							</a>
						</div>
					</div>
					<div className="project-contact-me">
						<p className="mobile">
							📬 Questions about the process? <a href="mailto:hello@minabui.com" title="mailto:hello@minabui.com" target="_blank" rel="noreferrer" ><br className="mobile" />Let's talk.</a>
						</p>
						<a href="mailto:hello@minabui.com" title="mailto:hello@minabui.com" target="_blank" rel="noreferrer" className="hidden-on-mobile" >
							<img src={PopupMessage} alt="Popup computer message" className="popup-message-container" />
						</a>
					</div>
				</div>
			</section>
		</main>
	</Fragment>
);

export default Projects;