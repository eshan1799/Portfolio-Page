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
                                I am a Cloud Engineer at PwC, and technology enthusiast who enjoys designing & building solutions to complex technical problems. I have considerable experience working on large-scale cloud transformation projects built on AWS, and can comfortably build rapport with fellow colleagues and clients.
                                In addition to working extensively on cloud and DevOps technologies, I also have experience in full-stack development and am comfortable with multiple programming languages and frameworks.
                            </p>
                            <p className="centreP paraSpace">
                                <b>
                                    Certifications: AWS DevOps Professional, AWS Developer Associate, AWS Cloud Practitioner, HashiCorp Terraform Associate, MS Azure Fundamentals
                                </b>
                            </p>
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default About