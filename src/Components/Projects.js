import React from "react";
import { AnimatedBg, Transition } from 'scroll-background';
import { CardCarousel } from "./index/index";

class Projects extends React.Component {
    render() {
        return (
            <>
                <AnimatedBg>
                    <Transition from="#FFFFFF" to="#E6E6E6" position={0.7}>
                        <section
                        id="projects"
                        className="fullPageFlex"
                        >
                            <h2>Projects</h2>
                            <CardCarousel />
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default Projects