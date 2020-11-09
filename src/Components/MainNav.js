import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Nav, Navbar } from "react-bootstrap";

class MainNav extends React.Component {
    render() {
        return (
            <>
            <Navbar
                id="topNav"
            >
                <Navbar.Brand>
                    <AnchorLink id="logo" href="#topNav">
                        EC
                    </AnchorLink>
                </Navbar.Brand>
                    <Nav.Link bg="transparent"  id="mid" className="navlinks">
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
            </Navbar>
            </>
        )
    }
}

export default MainNav;