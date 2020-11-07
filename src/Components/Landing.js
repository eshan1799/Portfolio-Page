import React, { cloneElement } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Landing extends React.Component {
    render() {
        return (
            <section
                className="fullPage"
            >
                <Container>
                <Row>
                    <Col className="img">
                        <img src="../img/me.png" />
                    </Col>
                    <Col>
                        <Col id='half'></Col>
                        <Col>
                        <h1>
                            Eshan Chatwal
                        </h1>
                        <p>
                            Full Stack Developer
                        </p>
                        </Col>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default Landing