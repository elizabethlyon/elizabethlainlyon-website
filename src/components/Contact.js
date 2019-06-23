import React from 'react';
import emailIcon from '../images/20170909_mail3.png';
import twitterIcon from '../images/20170909_twitter_3.png';
import githubIcon from '../images/20170909_github_2.png';
import linkedinIcon from '../images/20170909_linkedin_4.png';

export default function Contact() {
    return (
        <div id="contact" className="contact-wrapper">
            <h2>Let&rsquo;s Connect</h2>
            <div className="contact-section">
                <a href="https://twitter.com/Lyon_Elizabeth" target="_blank" rel="noopener noreferrer" title="Twitter account">
                    <div className="contact-box contact-twitter">
                        <img src={twitterIcon} alt="twitter icon" />
                    </div>
                </a>
                <a href="https://github.com/elizabethlyon" target="_blank" rel="noopener noreferrer" title="Github repositories">
                    <div className="contact-box contact-github">
                        <img src={githubIcon} alt="octocat icon" />
                    </div>
                </a>
                <a href="mailto:elizabethlainlyon@gmail.com?subject=Let%27s%20Connect%21">
                    <div className="contact-box contact-email">
                        <img src={emailIcon} alt="envelope icon" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/elizabeth-lyon-b770541a/" target="_blank" rel="noopener noreferrer" title="LinkedIn profile">
                    <div className="contact-box contact-linkedin">
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </div>
                </a>
            </div>
        </div>
    );
}
