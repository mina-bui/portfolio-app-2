// Footer

import { makeYear } from '../utilities/dateMaker';
import { Link } from 'react-router-dom';
// importing social media icon images
import email from '../images/social-media/email-icon.png';
import github from '../images/social-media/github-icon.png';
import codepen from '../images/social-media/codepen-icon.png';
import linkedin from '../images/social-media/linkedin-icon.png';
import twitter from '../images/social-media/twitter-icon.png';


const Footer = () => (

    <footer className="header">
        <div className="footer-column">
            <Link to={'/'}><b>Mina Bui</b></Link> &#x2014; Copyright &copy; {makeYear()}
        </div>
        <div className="footer-column">
            <div className="social-media-column">
                <span>
                    <a href="mailto:hello@minabui.com">
                        <img src={email}
                            alt="Email"
                            title="mailto:hello@minabui.com"
                            target="_blank"
                            rel="noreferrer" />
                    </a>
                </span>
                <span>
                    <a href="https://www.github.com/mina-bui">
                        <img src={github}
                            alt="Github"
                            title="Github: mina-bui"
                            target="_blank"
                            rel="noreferrer" />
                    </a>
                </span>
                <span>
                    <a href="https://codepen.io/mina-bui">
                        <img src={codepen}
                            alt="Codepen"
                            title="Codepen: mina-bui"
                            target="_blank"
                            rel="noreferrer" />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/mina-bui/">
                        <img src={linkedin}
                            alt="Linkedin"
                            title="Linkedin: mina-bui"
                            target="_blank"
                            rel="noreferrer" />
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/webdevmina">
                        <img src={twitter}
                            alt="Twitter"
                            title="Twitter: webdevmina"
                            className="twitter-icon"
                            target="_blank"
                            rel="noreferrer" />
                    </a>
                </span>
            </div>
        </div>
    </footer>

);

export default Footer;