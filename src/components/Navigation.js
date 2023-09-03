import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="aboutMe" smooth={true}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}>
                        Contact
                    </Link>
                </li>
                {/* Add a "Home" link that points to the "home" section */}
                <li>
                    <Link to="home" smooth={true}>
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
