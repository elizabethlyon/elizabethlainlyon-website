import React from 'react';
// import PropTypes from 'prop-types';

export default function TopNav() {
    return (
        <div>
            <nav className="topnav">
                <ul>
                    <li>
                        <a href="/#" title="home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" title="about">
                            About
                        </a>
                    </li>
                    {/* <a href="#">
                        <li>Resume</li>
                    </a> */}
                    <li>
                        <a href="#contact" title="contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
