import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navbar } from "react-bootstrap";

class MainNav extends React.Component {
    render() {
        return (
            <>
            <Navbar
                id="topNav"
                collapseOnSelect expand="sm"
            >
                <Navbar.Brand>
                    <a id="logo" className="navlinks" href="http://localhost:8000/">
                        EC
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <AnchorLink href="#about" className="navlinks">
                        About
                    </AnchorLink>
                    <AnchorLink href="#skills" className="navlinks">
                        Skills
                    </AnchorLink>
                    <AnchorLink href="#projects" className="navlinks">
                        Projects
                    </AnchorLink>
                    <AnchorLink className="navlinks" href="#contact">
                        Contact
                    </AnchorLink>
                </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}

export default MainNav;