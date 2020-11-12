import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { AnimatedBg, Transition } from 'scroll-background';

class Skills extends React.Component {
    render() {
        return (
            <>
                <AnimatedBg>
                    <Transition from="#E6E6E6" to="#FFFFFF" position={0.7}>
                        <section
                        id="skills"
                        className="fullPageFlex"
                        >
                            <h2>
                                Skills
                            </h2>
                            <CardGroup>
                                <Card className="skillsCards shadow-sm p-4 bg-white rounded">
                                    <Card.Body className="centreFlexColumn">
                                        <div className="skillsIcons">
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                                                <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                                            </svg>
                                        </div>
                                        <Card.Title className="orange">
                                            Front-end
                                        </Card.Title>
                                            <ul className="centreFlexColumn">
                                                <li>HTML5 &#38; CSS3</li>
                                                <li>JavaScript</li>
                                                <li>React.js</li>
                                            </ul>
                                    </Card.Body>
                                </Card>
                                <Card className="skillsCards shadow-sm p-4 bg-white rounded">
                                    <Card.Body className="centreFlexColumn">
                                        <div className="skillsIcons">
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                                            </svg>
                                        </div>
                                        <Card.Title className="orange">
                                            Back-end
                                        </Card.Title>
                                            <ul className="centreFlexColumn">
                                                <li>Python (Django / Flask)</li>
                                                <li>JavaScript (Express)</li>
                                            </ul>
                                    </Card.Body>
                                </Card>
                                <Card className="skillsCards shadow-sm p-4 bg-white rounded">
                                    <Card.Body className="centreFlexColumn">
                                        <div className="skillsIcons">
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-file-earmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                        </div>
                                        <Card.Title className="orange">
                                            Other
                                        </Card.Title>
                                        <ul className="centreFlexColumn">
                                            <li>SQL (PostgreSQL / MongoDB)</li>
                                            <li>TDD (Mocha / Chai / Jest )</li>
                                            <li>Git Version Control</li>
                                            <li>Visual Basic.NET</li>
                                            <li>Microsoft Office</li>
                                        </ul>                                    
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </section>
                    </Transition>
                </AnimatedBg>
            </>
        )
    }
}

export default Skills