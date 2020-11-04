import React from "react";
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Nav, Navbar } from "react-bootstrap";

class MainNav extends React.Component {
    render() {
        return (
            <>
            <Navbar id="navbar" fixed="top">
                    <Scrollspy 
                    className="navFlex"
                    items={ ['top', 'about', 'skills', 'projects', 'contact'] } 
                    currentClassName="isCurrent">
                <Navbar.Brand>
                    <AnchorLink className="anchor" href="#top">
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
                </Scrollspy>
            </Navbar>
            </>
        )
    }
}

export default MainNav;