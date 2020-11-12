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
                            {/* <p>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p> */}
                            <CardGroup>
                                <Card className="skillsCards shadow-sm p-4 bg-white rounded">
                                    <Card.Body className="centreFlexColumn">
                                        <div className="skillsIcons">
                                            <svg width="2.5m" height="2.5em" viewBox="0 0 16 16" class="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                                                <path fill-rule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                                            </svg>
                                        </div>
                                        <Card.Title className="orange">
                                            Front-end
                                        </Card.Title>
                                        <Card.Text>
                                            <ul className="centreFlexColumn">
                                                <li>HTML5 &#38; CSS3</li>
                                                <li>JavaScript</li>
                                                <li>React.js</li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="skillsCards shadow-sm p-4 bg-white rounded">
                                    <Card.Body className="centreFlexColumn">
                                        <div className="skillsIcons">
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                                            </svg>
                                        </div>
                                        <Card.Title className="orange">
                                            Back-end
                                        </Card.Title>
                                        <Card.Text>
                                            <ul className="centreFlexColumn">
                                                <li>Python (Django / Flask)</li>
                                                <li>JavaScript (Express)</li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="skillsCards shadow-sm p-4 bg-white rounded">
                                    <Card.Body className="centreFlexColumn">
                                        <div className="skillsIcons">
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-file-earmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                        </div>
                                        <Card.Title className="orange">
                                            Other
                                        </Card.Title>
                                        <Card.Text>
                                        <ul className="centreFlexColumn">
                                            <li>SQL (PostgreSQL / MongoDB)</li>
                                            <li>TDD (Mocha / Chai / Jest )</li>
                                            <li>Git Version Control</li>
                                            <li>Visual Basic.NET</li>
                                            <li>Microsoft Office</li>
                                        </ul>                                    
                                        </Card.Text>
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