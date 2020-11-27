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
                items={ ['topNav', 'about', 'skills', 'projects', 'contact'] } 
                currentClassName="isCurrent"
                >
                    <li>
                        <AnchorLink className="sideLinks" href="#topNav">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="sideLinks" href="#about">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="sideLinks" href="#skills">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="sideLinks" href="#projects">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="sideLinks" href="#contact">
                            <Diamond />
                        </AnchorLink>
                    </li>
                </Scrollspy>
            </>
        )
    }
}

export default SideNav