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
                            <h2 id="aboutHeader">
                                About
                            </h2>
                            <p className="centreP">
                                I am a junior DevOps/Platform engineer at Capgemini and have always possessed a growing zeal for IT and technology. I was first introduced to programming in 2013 - after deciding to found my own tech review site and complementary Android application. I have since continued to broaden my technical skills and knowledge of the highly dynamic sector.
                            </p>
                            <p id="paraSpace" className="centreP">
                                This passion led me to enrol in a software engineering bootcamp, shortly after graduating in Economics from City, University of London. Subsequently, I have worked as a junior full-stack engineer and currently as a DevOps engineer. I have thoroughly enjoyed learning to use new software and programming languages, and currently have certifications in AWS (Certified Cloud Practitioner) and Terraform (HashiCorp Certified: Terraform Associate).
                            </p>
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default About