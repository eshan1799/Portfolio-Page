import React from "react";
import { AnimatedBg, Transition } from 'scroll-background';

class Contact extends React.Component {
    render() {
        return (
            <>
                <AnimatedBg>
                    <Transition from="#E6E6E6" to="#FFFFFF" position={0.7}>
                        <section
                            id="contact"
                            className="fullPageFlex"
                        >
                            <h2 id="contactHeader">
                                Contact
                            </h2>
                            <div id="contact">
                                <a className="contactIcons" href="https://www.linkedin.com/in/eshan-chatwal/" target="_blank">
                                    <i className="fab fa-linkedin-in fa-3x"></i>
                                </a>
                                <a className="contactIcons" href="mailto: eshan1799@gmail.com" target="_blank">
                                    <i class="far fa-envelope fa-3x"></i>
                                </a>
                                <a className="contactIcons" href="https://github.com/eshan1799/" target="_blank">
                                    <i className="fab fa-github fa-3x"></i>
                                </a>
                                <a id="lastIcon" className="contactIcons" href="./assets/Eshan_Chatwal_CV.pdf" target="_blank">
                                    <i className="far fa-file-alt fa-3x"></i>
                                </a>
                            </div>
                            <div id="footer">
                                <p id="bottom">
                                    Made by Eshan Chatwal.
                                </p>
                            </div>
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default Contact