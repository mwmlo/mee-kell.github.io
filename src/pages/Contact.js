import React from 'react';
// Styling
import '../styles/contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <h1 data-aos="fade">Get in touch</h1>
            <p>
                You can check out my <a href="https://github.com/mee-kell/" className="contact-btn">👩‍💻 Github</a> for more information, or email me at <a href="michelle.lo21@imperial.ac.uk" className="contact-btn">📬 michelle.lo21@imperial.ac.uk</a>.
            </p>
            <div className="footer">
                Copyright © 2021 Michelle Wai Man Lo
            </div>
        </div>
    )
}