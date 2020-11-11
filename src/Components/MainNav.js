import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Nav, Navbar } from "react-bootstrap";

class MainNav extends React.Component {
    render() {
        return (
            <>
            <Navbar
                id="topNav"
                collapseOnSelect expand="md"
            >
                <Navbar.Brand>
                    <a id="logo" href="http://localhost:8000/">
                        EC
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav.Link bg="transparent" className="navlinks">
                        <AnchorLink href="#about">
                            About
                        </AnchorLink>
                    </Nav.Link>

                    <Nav.Link className="navlinks">
                        <AnchorLink href="#skills">
                            Skills
                        </AnchorLink>
                    </Nav.Link>
                    <Nav.Link className="navlinks">
                        <AnchorLink href="#projects">
                            Projects
                        </AnchorLink>
                    </Nav.Link>
                    <Nav.Link className="navlinks">
                        <AnchorLink href="#contact">
                            Contact
                        </AnchorLink>
                    </Nav.Link>
                    </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}

export default MainNav;