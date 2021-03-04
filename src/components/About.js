// About

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import headshot from '../images/social-media/headshot.png';
// react-reveal for animations!
import Reveal from 'react-reveal/Reveal';

const About = () => (
	<Fragment>
		<Helmet>
			<title>About &#x007C; Mina Bui &#x2013; Front End Web Developer &#x26; Designer in Vancouver</title>
			<meta name="description"
				content="Mina Bui is a front end developer and web designer in Vancouver, BC. She builds responsive user interfaces, interactive web applications, and minimalist site designs. Interested in working with Mina? Click here to find out more." />
			<meta name="keywords"
				content="Front end web developer, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>
		<main>
			<Reveal>
				<section className="about-wrapper">
					<div className="about-me">
						<div className="page-info">
							<h2>Hi, I'm Mina. </h2>
						</div>
						<div className="page-text">
							<p>
								I'm a front end web developer and designer from Vancouver, BC. I build responsive user interfaces, interactive web applications, and minimalist site designs.
               	 			</p>
							<p>
								I was previously a student in BCIT's Front End Developer program, where I developed a wide range of websites from scratch, from high-end clothing stores to tourism sites.
                			</p>
							<p>
								Growing up surrounded by BC's landscape sparked an interest in sustainability, so I went to study  Geography &#x26; GIS at SFU, where I built reports and maps using spatial data. (I think this is what led me to web design).
                			</p>
							<p>
								Today, I'm available for new challenges.<br /> Shoot me an email at <a href="mailto:hello@minabui.com" title="mailto:hello@minabui.com" target="_blank" rel="noreferrer" >hello@minabui.com </a> and let's talk. Cheers! ✌️
                			</p>
							<br />
							<div className="about-resume">
								<a href="https://www.canva.com/design/DAEXM23cN_Q/Yc985lB_HZoyMtpB2YhhnA/view?utm_content=DAEXM23cN_Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
									className="hidden-on-mobile"
									title="Mina Bui's Resume"
									target="_blank"
									rel="noreferrer">
									<button className="about-resume-button">View Resume </button>
								</a>
							</div>
						</div>
					</div>

					<div className="about-headshot">
						<div className="headshot-wrapper">
							<img src={headshot} alt="Mina Bui's headshot" className="headshot" />
						</div>

					</div>
					<div className="about-fun-facts">
						<h4>💻 Specialties</h4>
						<ul>
							<li>JavaScript</li>
							<li>React.js</li>
							<li>Responsive Design</li>
							<li>WordPress Development</li>
						</ul>
						<h4>💡 Fun Facts</h4>
						<ul>
							<li>I'm a hamster &#x26; plant mom</li>
							<li>I'm currently learning digital art</li>
							<li>I love to go thrifting</li>
						</ul>
					</div>

				</section>
			</Reveal>
		</main>
	</Fragment>
);

export default About;