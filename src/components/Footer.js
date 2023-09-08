import React from 'react';

const Footer = () => {
    return (
        <footer style={{ marginTop: '0px', marginBottom: '0px' }}>
                <p style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '13px'}}>&copy; 2023 Lavina&nbsp;&nbsp;All rights reserved 🌷&nbsp;&nbsp;&nbsp;</p>

                <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a href="https://github.com/WHT-RBT" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" ></i>
                </a>
                <a href="https://www.linkedin.com/in/lavinacastillo" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" ></i>
                </a>
                    <a href="https://stackoverflow.com/users/22519404/wht-rbt" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-stack-overflow" ></i>
                </a>
            </div>
            
        </footer>
    );
};

export default Footer;
