import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav, SideNav, Landing, About, Skills, Projects, Contact } from '../Components/index/index';

class HomePage extends React.Component {
    render() {
        return (
            <>
            <MainNav />
            <Container>
                <Row>
                    <Col>
                    <SideNav />
                    </Col>
                    <Col xs={12}>
                        <Landing />
                        <About />
                        <Skills />
                        <Projects />
                        <Contact />
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default HomePage;