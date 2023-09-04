import React from 'react';
import { Link } from 'react-scroll';
import resumePDF from '../assets/Resume_Lavina.pdf';
import '../App.css';

const Navigation = () => {
    return (
        <nav style={{ border: '1px solid rgb(133, 105, 105)' }}>
            <Link to="aboutMe" smooth={true} style={{ border: '1px solid rgb(133, 105, 105)', width: '100px', height: '30px' }}>
                About Me
            </Link>
            <Link to="portfolio" smooth={true} style={{ border: '1px solid rgb(133, 105, 105)', width: '100px', height: '30px' }}>
                Portfolio
            </Link>
            <Link to="contact" smooth={true} style={{ border: '1px solid rgb(133, 105, 105)', width: '100px', height: '30px' }}>
                Contact
            </Link>
            <a href={resumePDF} download="Resume_Lavina.pdf" className="resume-download">
                Download Resume
            </a>
            <div className="social-icons">
                <a href="https://github.com/WHT-RBT" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/lavinacastillo" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
