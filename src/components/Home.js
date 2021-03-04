// Home

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// react-reveal for animations!
// (note: it's only animating what the user can see in the browser to prevent slowing down the site)
import Reveal from 'react-reveal/Reveal';

const Home = (props) => {

    return (
        <Fragment>
            <Helmet>
                <title>Home &#x007C; Mina Bui &#x2013; Front End Web Developer &#x26; Designer in Vancouver</title>
                <meta name="description"
                    content="Mina Bui is a front end developer and web designer in Vancouver, BC. She builds responsive user interfaces, interactive web applications, and minimalist site designs. Click here to see her online web design portfolio." />
                <meta name="keywords"
                    content="Front end web developer, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
            </Helmet>
            <main>
                <Reveal>
                    <section>
                        <div className="home-introduction">
                            <div className="page-info">
                                <h2 id="text">Hey, Mina here.</h2>

                                <h4>
                                    Front end web developer &#x26; designer in Vancouver. <br />
                                    Focused on building simple, responsive user interfaces.
                                </h4>

                                <div className="contact-btn-wrapper">
                                    <Link to={'/about'}>
                                        <button className="contact-btn">Read More</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="home-project-list-heading">My Latest Works</h4>
                        <div className="home-project-list">
                            <div className="capstone-card">
                                <p>
                                    🛍️ <b>Etoile</b> &#x2014; Building a minimalist apparel store with Wordpress and PHP to improve the e-shopping experience.
                            </p>
                            </div>
                            <div className="capstone-live-link">
                                <Link to={'/capstone'}>
                                    <button className="round-btn">See Details</button>
                                </Link>
                            </div>

                            <div className="movieapp-card">
                                <p>
                                    🎥 <b>Filmdex</b> &#x2014; Combining React and a web API to create an movie search web application for film buffs.
                            </p>
                            </div>
                            <div className="movieapp-live-link">
                                <Link to={'/movieapp'}>
                                    <button className="round-btn">See Details</button>
                                </Link>
                            </div>

                            <div className="portfolio-card">
                                <p>
                                    🖥️ <b>Portfolio</b> &#x2014; Developing my portfolio site with React and Sass to showcase my projects and experience.
                            </p>
                            </div>
                            <div className="portfolio-live-link">
                                <Link to={'/portfolio'}>
                                    <button className="round-btn">See Details</button>
                                </Link>
                            </div>

                            <div className="brochure-card">
                                <p>
                                    🧀 <b>Keep It Cheesy</b> &#x2014; Working with JavaScript and Sass to design a business site for gourmet cheese.
                            </p>
                            </div>
                            <div className="brochure-live-link">
                                <Link to={'/brochure'}>
                                    <button className="round-btn">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </Reveal>

            </main>
        </Fragment>
    );
}


export default Home;