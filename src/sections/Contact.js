import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact-section">
            <div className="contact-content">
                <p>My small paragraph here.</p>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <p>Email: your.email@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
