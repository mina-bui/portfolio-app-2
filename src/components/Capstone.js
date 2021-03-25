// Capstone

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Import screenshots of website
// IA
import CapIA from '../images/capstone-desktop/capstone-ia.png';
// Mockup
import CapHomeMockup from '../images/capstone-mockup/capstone-home-mockup.png';
// Desktop
import CapAboutImage from '../images/capstone-desktop/capstone-about-desktop.png';
import CapContactImage from '../images/capstone-desktop/capstone-contact-desktop.png';
import CapInfoImage from '../images/capstone-desktop/capstone-info-desktop.png';
import CapProductImage from '../images/capstone-desktop/capstone-product-desktop.png';
import CapShopImage from '../images/capstone-desktop/capstone-shop-desktop.png';
// Mobile
import CapAboutImageMob from '../images/capstone-mobile/capstone-about-mobile.png';
import CapContactImageMob from '../images/capstone-mobile/capstone-contact-mobile.png';
import CapProductImageMob from '../images/capstone-mobile/capstone-product-mobile.png';
import CapShopImageMob from '../images/capstone-mobile/capstone-shop-mobile.png';
import ReactPlayer from 'react-player/youtube';
import PopupMessage from '../images/popup-message.png';
// Import updated screenshots of website
// Desktop
import UpdatedEtoileAbout from '../images/updated-etoile-screenshots/etoile-about.png';
import UpdatedEtoileContact from '../images/updated-etoile-screenshots/etoile-contact.png';
import UpdatedEtoileHome from '../images/updated-etoile-screenshots/etoile-home.png';
import UpdatedEtoileHomeCont from '../images/etoile-home-cont.png';
import UpdatedEtoileShop from '../images/updated-etoile-screenshots/etoile-shop.png';
// Mobile
import UpdatedEtoileFooterMob from '../images/updated-etoile-screenshots/etoile-footer-mobile.png';
import UpdatedEtoileSingleMob from '../images/updated-etoile-screenshots/etoile-single-product-mobile.png';


// react-reveal for animations!
// (note: it's only animating what the user can see in the browser to prevent slowing down the site)
import Reveal from 'react-reveal/Reveal';
// Get images for project site previews
import etoileLaptop from '../images/updated-etoile-laptop.png';

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

const Capstone = () => (
	<Fragment>
		<Helmet>
			<title>Ecommerce Site Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui collaborated remotely in a team to produce ETOILE, a fictional apparel e-commerce store with minimalist but high quality designs. Customers customize their designer pieces. It was created with WordPress, PHP, JavaScript, Sass, and GitHub." />
			<meta name="keywords"
				content="Wordpress developer, PHP developer, JavaScript developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>
		<main>
			<section>
				<Reveal>
					<div className="page-info">
						<div className="project-laptop-wrapper">
							<img src={etoileLaptop} alt="Etoile homepage on laptop" className="project-laptop-banner" />
						</div>
						<br /><br />
						<h2 className="project-detail-title">Etoile &#x2014; <br className="mobile" /> Ecommerce Site</h2>
						<h2 className="project-detail-subtitle">Building a dynamic WordPress store.</h2>
					</div>
					<div className="hidden-on-mobile">
						<div className="next-wrapper">
							<a href="#next">
								<svg className="next-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" /></svg>
							</a>
						</div>
					</div>
				</Reveal>
				<div className="page-text">
					<Reveal>
						<div className="project-detail">
							<h3 className="project-detail-title" id="next">Project Overview</h3>
							<p>
								In February 2021, I collaborated remotely in a team of three to produce ETOILE, a fictional apparel e-commerce store, whose mission is to combine minimalist designs with high quality fabrics. It enables users to purchase from various designer collections, as well as adding customizations, such as uploading their own images and adding embroidery.
						</p>
							<p>
								The website was created using WordPress, PHP, JavaScript, Sass and GitHub with team members <a href="https://github.com/janice-lin" title="Github: janice-lin" target="_blank" rel="noreferrer" >Janice Lin</a> and <a href="https://github.com/v-nguyen6" title="Github: v-nguyen6" target="_blank" rel="noreferrer" >Vinson Nguyen</a>. My role was to build an attractive UI design for the client's Wordpress interface, as well as for customers visiting the site.
						</p>
							<ul className="project-technologies">

								<li>WordPress</li>
								<li>WooCommerce</li>
								<li>PHP</li>
								<li>Sass</li>
								<li>JavaScript</li>
								<li>GitHub</li>
							</ul>
						</div>

						<div className="project-detail">
							<h3 className="project-detail-title">How It Works</h3>
							<div className="project-detail-video">
								<ReactPlayer url='https://youtu.be/d-fnHKUwIQU' />
							</div>
						</div>
					</Reveal>
					<div className="project-detail">
						<h3 className="project-detail-title">Design and Planning</h3>
						<div className="project-design-planning-gallery">
							<SRLWrapper options={options}>
								<a href={CapIA}>
									<img src={CapIA}
										alt="High fidelity home page mockup."
										id="etoile-ia-background"
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
						<p>
							One of the most important steps in the planning process was to create an information architecture map to ensure we were creating the correct PHP files. Given the nature of our products, we decided to keep the product categories simple. We later decided to add gift cards, however.
							</p>
						<div className="project-detail-gallery">
							<div className="project-detail-gallery-capstone">
								<SRLWrapper options={options}>
									{/* Mockup */}
									<a href={CapHomeMockup}>
										<img src={CapHomeMockup}
											alt="High fidelity home page mockup."
											title="Click to view full screen" />
									</a>

									<a href={CapShopImage}>
										<img src={CapShopImage}
											alt="High fidelity all products shop page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>
									<a href={CapShopImageMob}>
										<img src={CapShopImageMob}
											alt="High fidelity all products shop page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>

									<a href={CapProductImage}>
										<img src={CapProductImage}
											alt="High fidelity single product page wireframe."
											title="Click to view full screen" />
									</a>
									<a href={CapProductImageMob}>
										<img src={CapProductImageMob}
											alt="High fidelity single product page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>

									<a href={CapAboutImage}>
										<img src={CapAboutImage}
											alt="High fidelity about us page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>
									<a href={CapAboutImageMob}>
										<img src={CapAboutImageMob}
											alt="High fidelity about us page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>

									<a href={CapContactImage}>
										<img src={CapContactImage}
											alt="High fidelity contact us page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>
									<a href={CapContactImageMob}>
										<img src={CapContactImageMob}
											alt="High fidelity contact us page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>
									<a href={CapInfoImage}>
										<img src={CapInfoImage}
											alt="High fidelity customer service page wireframe."
											className="hidden-on-mobile"
											title="Click to view full screen" />
									</a>
								</SRLWrapper>
							</div>
						</div>
						<p>
							We worked together as a team to remotely design high fidelity wireframes and mockups using Figma and Zoom. This turned out to be an excellent decision, as it allowed us to discuss our desired changes and additions in live time. We also included the plugins we desired, such as an Instagram feed and a product carousel.
						</p>
					</div>

					{/* Site Screenshots */}
					<div className="project-detail">
						<h3 className="project-detail-title">Site Screenshots</h3>

						<div className="project-detail-wireframe-brochure">
							<SRLWrapper options={options}>
								<a href={UpdatedEtoileSingleMob}>
									<img src={UpdatedEtoileSingleMob}
										alt="The mobile view of a product page, which users can zoom in on an image and see more about the product details, as well as customize their products with color, size, custom designs and custom design methods."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={UpdatedEtoileFooterMob}>
									<img src={UpdatedEtoileFooterMob}
										alt="The mobile view of the footer, which features nested CSS grids, social media buttons, links around the site, as well as payment methods that are accepted."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>

						<div className="project-detail-gallery">
							<SRLWrapper options={options}>
								<a href={UpdatedEtoileHome}>
									<img src={UpdatedEtoileHome}
										alt="The Home page, where users can see the latest collections dropped with banners and CTAs, using JavaScript product carousels, Instagram feeds and more."
										title="Click to view full screen" />
								</a>

								<a href={UpdatedEtoileShop}>
									<img src={UpdatedEtoileShop}
										alt="The All Products page, where customers can see the different selections available in a minimal and easy to read format using CSS grids and flexboxes."
										title="Click to view full screen" />
								</a>

								<a href={UpdatedEtoileAbout}>
									<img src={UpdatedEtoileAbout}
										alt="The About page, where customers can find out more about the owner, founder and designer, as well as see some of the designer's collections in an interactive lightbox gallery."
										title="Click to view full screen" />
								</a>

								<a href={UpdatedEtoileContact}>
									<img src={UpdatedEtoileContact}
										alt="The Contact page, where customers can contact the customer service team for any additional questions."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>

					</div>

					<div className="project-detail">
						<h3 className="project-detail-title">Biggest Challenges</h3>
						<p>
							The challenges in this project were not so technically based. Our main focus as a team was not only to write code that was clean and readable for one another, but to create a WordPress interface that would be easy to use for the fictional client and customer base. This required a lot of communication and reflection, and we scheduled frequent meetings to discuss what kinds of Advanced Custom Fields would be created and why.
						</p>
						<p>
							One thing that all WordPress developers know is how many PHP files are required to create a WordPress site. Relying on Github to monitor changes was important in the development process. This is where creating the development plan was so important; we relied heavily on our detailed information architecture map and high-fidelity wireframes.
						</p>
					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Links</h3>
						<div className="project-detail-links">
							<a href="https://etoile.minabui.com/"
								title="https://etoile.minabui.com/" target="_blank" rel="noreferrer" >
								<button className="round-btn">View Live </button>
							</a>

							<a href="https://www.github.com/htpwebdesign/etoile"
								title="https://www.github.com/htpwebdesign/etoile" target="_blank" rel="noreferrer" >
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

export default Capstone;