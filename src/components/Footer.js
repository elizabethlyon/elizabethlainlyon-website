/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export default function Footer() {
    const getYear = () => {
        const year = new Date();
        return year.getFullYear();
    };
    return (
        <footer className="site-footer" role="contentinfo">
            <p className="ft-copyright">
                Copyright &copy; {getYear()} Elizabeth L Lyon
            </p>
            <p className="ft-photo-attribution">
                Photo by <a href="https://www.instagram.com/prevailz/?hl=en">Sean Pierce</a> on <a href="https://unsplash.com/@prevailz">Unsplash</a>
            </p>
        </footer>
    );
}
