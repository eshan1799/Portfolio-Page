import React from "react";
import { AnimatedBg, Transition } from 'scroll-background';

class About extends React.Component {
    render() {
        return (
            <>
                <AnimatedBg>
                    <Transition from="#FFFFFF" to="#E6E6E6" position={0.7}>
                        <section
                        id="about"
                        className="fullPageFlex"
                        >
                            <h2>
                                About
                            </h2>
                            <p id="morePadding" className="centreP">
                                I am an Economics graduate from City, University of London and have always possessed a growing zeal for IT and technology. I was first introduced to programming in 2013 - after deciding to found my own tech review site and complementary Android application, and subsequently have continued to broaden my technical skills and knowledge of the highly dynamic sector.
                            </p>
                            <p id="paraSpace" className="centreP">
                                With the constant inception of new and upcoming disruptive technologies, it is a particularly exciting time to be a tech enthusiast. This passion led me to enrol in a software engineering bootcamp, which I recently completed. During this time, I thoroughly enjoyed learning to use new software and programming languages and thereafter have continued to develop my technical skillset.
                            </p>
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default About