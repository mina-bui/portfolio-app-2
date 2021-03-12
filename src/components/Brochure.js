// Brochure

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// Import images for Design and Planning
import BrochurePalette from '../images/brochure-desktop/brochure-adobe-color.jpeg';
import BrochureContentPlan from '../images/brochure-desktop/brochure-content-plan.png';
// Mockups
import BrochureAboutMockup from '../images/brochure-desktop/brochure-about-desktop-mockup.png';
import BrochureContactMockup from '../images/brochure-desktop/brochure-contact-desktop-mockup.png';
import BrochureHomeMockup from '../images/brochure-desktop/brochure-home-desktop-mockup.png';
// Wireframes
import BrochureProcessWireframe from '../images/brochure-desktop/brochure-process-desktop-wireframe.png';
import BrochureAboutWireframe from '../images/brochure-desktop/brochure-about-desktop-wireframe.png';
import BrochureAboutWireframeMob from '../images/brochure-desktop/brochure-about-mobile-wireframe.png';

// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Import screenshots of website
import HomeImage from '../images/brochure-desktop/brochure-home-ss.png';
import ProcessImage from '../images/brochure-desktop/brochure-process-ss.png';
import AboutImage from '../images/brochure-desktop/brochure-about-ss.png';
import ContactImage from '../images/brochure-desktop/brochure-contact-ss.png';
// Import ReactPlayer to show video of site walkthrough
import ReactPlayer from 'react-player/youtube';
import PopupMessage from '../images/popup-message.png';
// react-reveal for animations! 
// (note: it's only animating what the user can see in the browser to prevent slowing down the site)
import Reveal from 'react-reveal/Reveal';
// Get images for project site previews
import brochureLaptop from '../images/brochure-home-laptop.png';

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

const Brochure = () => (
	<Fragment>
		<Helmet>
			<title>Business Site Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui collaborated remotely in a team to produce Keep It Cheesy, a fictional gourmet cheese store. It enables users to send inquiries and orders using a contact form and it was created with JavaScript, Sass, HTML, and GitHub." />
			<meta name="keywords"
				content="JavaScript developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>

		<main>
			<section>
				<Reveal>
					<div className="page-info">
						<div className="project-laptop-wrapper">
							<img src={brochureLaptop} alt="Keep It Cheesy homepage on laptop" className="project-laptop-banner" />
						</div>
						<br /><br />
						<h2 className="project-detail-title">Keep It Cheesy &#x2014; <br className="mobile" /> Business Site</h2>
						<h2 className="project-detail-subtitle">Exploring CSS grids and flexboxes.</h2>
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
								In November 2020, I collaborated remotely in a team of three to produce Keep It Cheesy, a fictional gourmet cheese store, showcasing their production process and product selection. It enables users to send inquiries and custom orders using a contact form. The website was created using JavaScript, Sass, HTML, and GitHub with team members <a href="https://github.com/v-nguyen6" title="Github: v-nguyen6" target="_blank" rel="noreferrer" >Vinson Nguyen</a> and <a href="https://github.com/omcdanielfeilden" title="Github: omcdanielfeilden" target="_blank" rel="noreferrer" >Olivia Feilden</a>. My role was to build the HTML and develop the styling, particularly on the Contact page.
						</p>
							<ul className="project-technologies">
								<li>HTML5</li>
								<li>Sass</li>
								<li>JavaScript</li>
								<li>GitHub</li>
								<li>Photoshop</li>
							</ul>
						</div>
					</Reveal>
					<div className="project-detail">
						<h3 className="project-detail-title">Walkthrough</h3>
						<div className="project-detail-video">
							<ReactPlayer url='https://youtu.be/2Mp7sUeoqnw' className='react-player' />
						</div>
					</div>

					{/* Design and Planning */}
					<div className="project-detail">
						<h3 className="project-detail-title">Design and Planning</h3>

						{/* Color Palette */}
						<div className="project-design-planning-gallery">

							<SRLWrapper options={options}>
								<a href={BrochurePalette}>
									<img src={BrochurePalette}
										alt="The chosen website color palette, that has been tested with Adobe colors to confirm that it is color blind safe."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
						<p>
							We brainstormed on a color scheme together. I used the Adobe Extract Theme option on Adobe Color, from some product images, to help decide on a color palette. We soon settled on a neutral color palette that would pair with a minimalist white background. This was also confirmed beforehand to ensure that it was color blind safe. This would allow for greater accessibility.
						</p>

						{/* Contact Us Content Plan */}
						<div className="project-design-planning-gallery">
							<SRLWrapper options={options}>
								<a href={BrochureContentPlan}>
									<img src={BrochureContentPlan}
										alt="The content plan for my part of the project. We later added more options, including radio and checkbox options."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
						<p>
							We also worked together to create a content plan. I decided to keep it simple with a contact form that was informative but easy to read for curious customers. We started off with including mainly text inputs, but later added in a wider variety of radio and checkboxes. This allowed for customers to further customize their order.
						</p>

					</div>

					{/* Mockups */}
					<div className="project-detail-gallery-brochure">
						<SRLWrapper options={options}>
							<a href={BrochureHomeMockup}>
								<img src={BrochureHomeMockup}
									alt="A wireframe of the Home page."
									title="Click to view full screen" />
							</a>
						</SRLWrapper>
						<SRLWrapper options={options}>
							<a href={BrochureAboutMockup}>
								<img src={BrochureAboutMockup}
									alt="A high fidelity mockup of the About page."
									title="Click to view full screen" />
							</a>
						</SRLWrapper>
						<SRLWrapper options={options}>
							<a href={BrochureContactMockup}>
								<img src={BrochureContactMockup}
									alt="A high fidelity mockup of the Contact page."
									title="Click to view full screen" />

							</a>
						</SRLWrapper>
					</div>
					<p>
						We made some preliminary high fidelity mockups in Adobe Photoshop. We're glad we went with a minimalist white color scheme, as it keeps the products as the "star" of the site. We continued with this theme by having a banner and a CTA that brings users to the Process page.
					</p>

					{/* Wireframes */}
					<div className="project-detail-gallery">
						<div className="project-detail-wireframe-brochure">
							<SRLWrapper options={options}>
								<a href={BrochureAboutWireframe}>
									<img src={BrochureAboutWireframe}
										alt="A wireframe of the About page."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={BrochureAboutWireframeMob}>
									<img src={BrochureAboutWireframeMob}
										alt="A wireframe of the About page in mobile."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
							<SRLWrapper options={options}>
								<a href={BrochureProcessWireframe}>
									<img src={BrochureProcessWireframe}
										alt="A wireframe of the Process page."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
					</div>
					<p>
						The wireframes were created in Adobe XD. We decided to rely heavily on CSS grids and flexboxes to showcase our product. We decided this would be best, especially in showcasing the cheese making process.
					</p>

					{/* Screenshots */}
					<div className="project-detail">
						<h3 className="project-detail-title">Site Screenshots</h3>
						<div className="project-detail-gallery">
							<SRLWrapper options={options}>
								<a href={HomeImage}>
									<img src={HomeImage}
										alt="The Home page, which features an opening banner and a Call to Action."
										title="Click to view full screen" />
								</a>
								<a href={ProcessImage}>
									<img src={ProcessImage}
										alt="The Cheese Production page, which showcases the process through CSS grids and flexboxes."
										title="Click to view full screen" />
								</a>
								<a href={AboutImage}>
									<img src={AboutImage}
										alt="The About Us page, which tells customers about the client's missions and values."
										title="Click to view full screen" />
								</a>
								<a href={ContactImage}>
									<img src={ContactImage}
										alt="The Contact Us page, which allows users to send questions, messages, and orders. These custom orders include options such as delivery, pickup, and more."
										title="Click to view full screen" />
								</a>
							</SRLWrapper>
						</div>
					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Biggest Challenges</h3>
						<p>
							As this project was completed early in the program, in November 2020, the biggest focus was to ensure that all parts of the site were responsive, as well as matching the fictional client requirements, as stated in the development plan. Developing a good mobile layout was important, and so we debugged together as a team by inspecting the site and troubleshooting in this fashion.
						</p>
						<p>
							<iframe height="500" scrolling="no" title="Keep It Cheesy - Media Queries" src="https://codepen.io/mina-bui/embed/GRNxBXy?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
								See the Pen <a href='https://codepen.io/mina-bui/pen/GRNxBXy'>Keep It Cheesy - Media Queries</a> by Mina Bui (<a href='https://codepen.io/mina-bui'>@mina-bui</a>) on <a href='https://codepen.io'>CodePen</a>.
							</iframe>
						</p>
						<p>
							Writing the code for the inquiry form was one of my first encounters with using media queries. Looking back, if I were to recreate this contact form using only HTML and CSS / Sass on a similarly lightweight page, I would add in more constraint validation, beyond adding validation attributes such as <code>required</code>.
						</p>
						<p>
							For instance, I would change the telephone input to <code>&#x3c;input type="tel" id="phone" name="phone"
							pattern="[0-9]&#x007B;3&#x007D;-[0-9]&#x007B;3&#x007D;-[0-9]&#x007B;4&#x007D;" placeholder="(000)-000-0000" required&#x3e;</code>. This allows for lightweight code validation on the front end, but with better results.
						</p>
					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Links</h3>
						<div className="project-detail-links">
							<a href="https://mbui.bcitwebdeveloper.ca/brochure/index.html" title="https://mbui.bcitwebdeveloper.ca/brochure/index.html" target="_blank" rel="noreferrer" >
								<button className="round-btn">Live Site </button>
							</a>
							<a href="https://github.com/v-nguyen6/HTML_CSS_P03_Business_Brochure" title="https://github.com/v-nguyen6/HTML_CSS_P03_Business_Brochure" target="_blank" rel="noreferrer" >
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

export default Brochure;