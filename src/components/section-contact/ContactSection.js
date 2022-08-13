import React from 'react';
import './ContactSection.css';

class ContactSection extends React.Component {
    render() {
        return (
            <section id="contact">
                <h1 className="viewport-animation viewport-top">
                    Contact
                </h1>
                <p className="viewport-animation viewport-top">
                    You can send me an E-Mail by clicking on the following button:
                </p>
                <center className="viewport-animation viewport-bottom">
                    <button type="button" onClick={() => window.open("mailto:development.jensostertag@gmail.com")} name="button"><p>Contact me</p></button>
                </center>
            </section>
        );
    }
}

export default ContactSection;