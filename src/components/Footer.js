import React from 'react';
import resumePDF from '../assets/Resume_Lavina.pdf';

const Footer = () => {
    return (
        <footer>
            <a href={resumePDF} download="Resume_Lavina.pdf" className="resume-download">
                Download Resume
            </a>
            <div className="social-icons">
                <a href="https://https://github.com/WHT-RBT" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                </a>
                <a href="www.linkedin.com/in/lavinacastillo" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
