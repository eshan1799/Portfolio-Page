import React from "react";
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Diamond } from "./index/index";

class SideNav extends React.Component {
    render() {
        return (
            <>
            <Scrollspy 
                        className="diamondsNav"
                        items={ ['top', 'about', 'skills', 'projects', 'contact'] } 
                        currentClassName="isCurrent">
                            <li>
                                <AnchorLink href="#top">
                                    <Diamond />
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#about">
                                    <Diamond />
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#skills">
                                    <Diamond />
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#projects">
                                    <Diamond />
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#contact">
                                    <Diamond />
                                </AnchorLink>
                            </li>
                        </Scrollspy>
            </>
        )
    }
}

export default SideNav