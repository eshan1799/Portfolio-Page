import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navbar, Nav } from "react-bootstrap";

class MainNav extends React.Component {
    render() {
        return (
            <>
            <Navbar
                id="topNav"
                collapseOnSelect expand="sm"
            >
                <Nav.Link id="logo" href="https://eshanchatwal.netlify.app/">
                    EC
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Navbar.Brand>
                    <AnchorLink href="#about" className="small navlinks">
                        About
                    </AnchorLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                    <AnchorLink href="#skills" className="small navlinks">
                        Skills
                    </AnchorLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                    <AnchorLink href="#projects" className="small navlinks">
                        Projects
                    </AnchorLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                    <AnchorLink href="#contact" className="small navlinks">
                        Contact
                    </AnchorLink>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}

export default MainNav;