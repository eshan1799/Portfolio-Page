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
                        <AnchorLink className="diamondsNavLinks" href="#topNav">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="diamondsNavLinks" href="#about">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="diamondsNavLinks" href="#skills">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="diamondsNavLinks" href="#projects">
                            <Diamond />
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="diamondsNavLinks" href="#contact">
                            <Diamond />
                        </AnchorLink>
                    </li>
                </Scrollspy>
            </>
        )
    }
}

export default SideNav