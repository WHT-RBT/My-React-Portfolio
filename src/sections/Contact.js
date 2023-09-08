import React, { useState } from 'react';
import ContactMe from '../assets/Contact_Me.png';
import whtrbt from '../assets/whtrbt.mp4';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/33e0e2a0-4b5a-11ee-b711-0fdc810d0d65';

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response not successful!');
                }

                setSubmitted(true);
            })
            .catch((err) => {
                e.target.submit();
            });
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We will be in touch soon!</div>
            </>
        );
    }

    return (
        <form
            className="contact-form-container"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            style={{ margin: '0px' }} 

        >
            <div className="pt-0 mb-3">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <textarea
                    placeholder="Your message here..."
                    name="message"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
            <div style={{ textAlign: 'center' }}>

                <button
                    className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                    type="submit"
                >
                    Submit message!
                </button>
            </div>
            </div>

        </form>

    );
};

<ContactForm />


const Contact = () => (
    <div style={{ position: 'relative', backgroundColor: 'black', color: 'white', minHeight: '30%', marginBottom: '0px', margin: '0px' }}> 
        <div style={{ textAlign: 'left', color: 'white', marginRight: '0px' }}>
            <img src={ContactMe} alt="ContactMe Header" style={{ maxWidth: '100%' }} />
        </div>

        {/* Contact Form and Video */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', color: 'white', marginBottom: '0px', width: '80%', marginRight: '0px' }}>
            <div style={{ marginLeft: '5%', marginRight: '1%', marginBottom: '0px', padding: '0px', width: '80%' }}>
            <p style={{ color: 'white', textAlign: 'left',  width: '75%', marginRight: '3%'}}>Thank you for visiting my site! <br /><br />Please feel free to visit any time to see what other projects I'm working on, or what has been added to my portfolio.<br /><br />
            I look forward to hearing from you!</p>

                <ContactForm />
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContentustifyContent: 'flex-start', marginBottom: '0px' }}>
            <video src={whtrbt} loop autoPlay style={{ width: '100%', maxHeight: '400px', marginBottom: '0px', marginTop: '40%' }}></video>
            </div>
        </div>
    </div>
);

export default Contact;

