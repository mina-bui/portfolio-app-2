// Portfolio

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Wireframes
// Mobile
import PortfolioHomeMob from '../images/portfolio/home-mobile.png';
import PortfolioAboutMob from '../images/portfolio/about-mobile.png';
import PortfolioSingleProjectMob from '../images/portfolio/single-project-mobile.png';
// Others
import PortfolioMoodBoard from '../images/portfolio/portfolio-mood-board.png';
import PortfolioSiteMap from '../images/portfolio/portfolio-site-map-1.png';
import PopupMessage from '../images/popup-message.png';
// react-reveal for animations!
// (note: it's only animating what the user can see in the browser to prevent slowing down the site)
import Reveal from 'react-reveal/Reveal';
// Get images for project site previews
import portfolioLaptop from '../images/portfolio-home-laptop.png';

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

const Portfolio = () => (
	<Fragment>
		<Helmet>
			<title>React Portfolio Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui designed and developed a portfolio site to showcase the websites she built during the BCIT Front End Developer program. It was created using ReactJS, NPM, node.js, HTML, Sass, and Github." />
			<meta name="keywords"
				content="JavaScript developer, React developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>
		<main>
			<section>
				<Reveal>
					<div className="page-info">
						<div className="project-laptop-wrapper">
							<img src={portfolioLaptop} alt="Portfolio homepage on laptop" className="project-laptop-banner" />
						</div>
						<br /><br />
						<h2 className="project-detail-title">React Portfolio</h2>
						<h2 className="project-detail-subtitle">Showcasing my BCIT projects.</h2>
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
								In February 2021, I worked alone to produce my portfolio site, whose main goal is to showcase the projects I've designed and developed during my time in the BCIT Front End Developer program. The website was created using ReactJS by first installing NPM, node,js, and <code>create-react-app</code>, and then adding in the HTML, Sass, and JS files. I wanted to create an enjoyable, seamless user experience where I could show my love for design and coding.
						</p>
							<ul className="project-technologies">
								<li>JavaScript</li>
								<li>ReactJS</li>
								<li>Sass</li>
								<li>HTML5</li>
								<li>GitHub</li>
							</ul>
						</div>
					</Reveal>

					<div className="project-detail">
						<h3 className="project-detail-title">Design and Planning</h3>

						{/* Mood Board */}
						<div className="project-design-planning-gallery">
							<SRLWrapper options={options}>
								<a href={PortfolioMoodBoard}>
									<img src={PortfolioMoodBoard}
										alt="The mood board, which features a variety of modern but bright images that I wanted my portfolio site to envoke."
										id="etoile-ia-background"
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
						{/* Content Plan */}
						<div className="project-design-planning-gallery">
							<SRLWrapper options={options}>
								<a href={PortfolioSiteMap}>
									<img src={PortfolioSiteMap}
										alt="The information architecture site map that I settled on."
										id="etoile-ia-background"
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
						<p>
							I started off with creating a mood board for inspiration. I knew I wanted to go with my favorite color, orange. I later added purple to the colors. But the issue with having vibrant colors in a site is that it may quickly become too busy and difficult to read. Thus, I decided that my other colors would be monochromatic.
						</p>
						<p>
							Going with the vibrant, but minimalist theme, I decided to keep my portfolio site map simple. Everything would be accessible at anyone stumbling upon the home page of my site, and those who wanted to know more about me could navigate to the About me page.
						</p>
					</div>

					{/* Wireframes */}
					<div className="project-detail-gallery">
						<div className="project-detail-wireframe-brochure">
							<SRLWrapper options={options}>
								<a href={PortfolioHomeMob}>
									<img src={PortfolioHomeMob}
										alt="A wireframe of the Home mobile page, starting with a welcoming banner, an introduction of who I am, and a button to see the About Me section. Below is a list of projects I completed at BCIT."
										title="Click to view full screen"
										className="hidden-on-mobile" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={PortfolioAboutMob}>
									<img src={PortfolioAboutMob}
										alt="A wireframe of the About mobile page. It would begin with a headshot of me and below, a short description of who I am and what I do."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={PortfolioSingleProjectMob}>
									<img src={PortfolioSingleProjectMob}
										alt="A wireframe of the Project Description mobile page. This would begin with an image or video of the project, a quick project overview, and then screenshots of the design and development process."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
					</div>
					<p>
						In my first iteration of my wireframe, I was playing with the colors. I ultimately decided to go with an inversion of colors. I also decided against adding a hamburger menu, to simplify the user experience.
					</p>

					<div className="project-detail">
						<h3 className="project-detail-title">Biggest Challenges</h3>
						<p>
							The biggest challenge was figuring out which parts in each project I wanted to showcase. For instance, upon dozens and dozens of pages of code, which small code snippets stuck out to me? How would I show this in an informative, entertaining but digestable format? I decided ultimately to focus on providing more visual elements, such as code snippets, screenshots, and videos, to accompany snippets of text.
						</p>
						<p>
							In the future, alongside adding more projects to my portfolio, I hope to add more interactive elements to my site, such a small JavaScript game and more animations.
						</p>

						<p>
							Another issue was how to make my React portfolio site SEO friendly. Since the DOM, styles and behavior only runs when the JavaScript file is loaded and executed. Since search engines turn off JavaScript to index your site, this means that only the title is indexed in React sites.
						</p>
						<iframe height="500" scrolling="no" title="Helping SEO with React Helmet" src="https://codepen.io/mina-bui/embed/BaQVNvj?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
							See the Pen <a href='https://codepen.io/mina-bui/pen/BaQVNvj'>Helping SEO with React Helmet</a> by Mina Bui (<a href='https://codepen.io/mina-bui'>@mina-bui</a>) on <a href='https://codepen.io'>CodePen</a>.
						</iframe>
						<p>
							To get around this, I decided to combine React Router with React Helmet to insert unique <code>title</code> and <code>meta</code> tags for each page on my site. This was as simple as doing an NPM install and importing them. of course, to return multiple elements without an actual enclsoing element, I imported and wrapped the Helmet in Fragments.
						</p>
						<p>
							Another perk of using React Helmet is that it pairs well with static site generators like Gatsby. In the future, I will be rebuilding my portfolio using Gatsby or Next.JS so that my pages are pre-rendered and users can see my static HTML files.
						</p>

					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Links</h3>
						<div className="project-detail-links">
							<a href="https://www.minabui.com"
								title="https://www.minabui.com" target="_blank" rel="noreferrer" >
								<button className="round-btn">View Live </button>
							</a>
							<a href="https://www.github.com/mina-bui/portfolio"
								title="https://www.github.com/mina-bui/portfolio" target="_blank" rel="noreferrer" >
								<button className="round-btn">Github </button>
							</a>
						</div>
					</div>
					<div className="project-contact-me">
						<p className="mobile">
							📬 Questions about the process? <a href="mailto:hello@minabui.com" title="mailto:hello@minabui.com" target="_blank" rel="noreferrer" ><br className="mobile" />Let's talk. </a>
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

export default Portfolio;