import React from "react";
import { AnimatedBg, Transition } from 'scroll-background';

class Footer extends React.Component {
    render() {
        return (
            <>
                            <AnimatedBg>
                    <Transition from="#FFFFFF" to="#E6E6E6" position={0.7}>

            <section 
            id="footer"
            className="fullPageFlex"
            >
                <p>
                    Made by Eshan Chatwal.
                </p>
            </section>
            </Transition>
                </AnimatedBg>

            </>
        )
    }
}

export default Footer;