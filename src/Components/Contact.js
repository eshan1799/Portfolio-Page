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
                                <i className="contactIcons fab fa-linkedin-in fa-3x"></i>
                                <i class="contactIcons far fa-envelope fa-3x"></i>
                                <i className="contactIcons fab fa-github fa-3x"></i>
                                <i id="lastIcon" className="contactIcons far fa-file-alt fa-3x"></i>
                            </div>
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default Contact