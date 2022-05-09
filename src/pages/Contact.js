import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Contact() {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1> Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0622781477">
                                    <span className="clickInput"
                                          onClick={() => alert("numéro de téléphone copié")}>
                                        0622781477
                                    </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="charon.hugo@gmail.com">
                                    <span
                                        className="clickInput"
                                          onClick={() => alert("mail copié")}>
                                        charon.hugo@gmail.com
                                    </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                <ul>
                    <a href="https://www.linkedin.com/in/hugo-charon/" target="_blank"
                       rel="noopener noreferrer">
                        <h4>LinkedIn</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="https://twitter.com/hugo_charon" target="_blank"
                       rel="noopener noreferrer">
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i> </a>

                    <a href="https://github.com/kenchi-san" target="_blank"
                       rel="noopener noreferrer">
                        <h4> GitHub</h4>
                        <i className="fab fa-github"></i> </a>

                </ul>

            </div>
            </div>
        </div>
    );
}

export default Contact;