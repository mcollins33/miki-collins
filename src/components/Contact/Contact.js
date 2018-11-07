import React from 'react';
import './Contact.css';


const Contact = () => {

    return (

        <div id="contact" className="contact-background">
            <section className="contact container">
                    <h1 className="is-size-2-mobile">Follow Me</h1>
                    <div className="border"></div>
                    <div className="column has-text-centered">
                        <a className="icon" href="https://www.linkedin.com/in/miki-collins/"><i className="fab fa-3x fa-linkedin"></i></a>
                        <a className="icon" href="https://github.com/mcollins33"><i className="fab fa-3x fa-github-square"></i></a>
                        <a className="icon" href="https://mikicollins.wordpress.com/"><i className="fab fa-3x fa-wordpress"></i></a>
                        <a className="icon" href="https://twitter.com/MikiCollins4"><i className="fab fa-3x fa-twitter"></i></a>
                        <a className="icon" href="https://www.hackerrank.com/collins_miki"><i className="fas fa-3x fa-h-square"></i></a>

                    </div>
                    <div className="copy has-text-centered">
                        <p>© 2018 Miki Collins</p>
                        <p>Created with: React.js, Bulma & Node.js</p>
                    </div>
            </section>
        </div>
    );
};

export default Contact;