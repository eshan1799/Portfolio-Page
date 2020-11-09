import React from "react";

class Landing extends React.Component {
    render() {
        return (
            <section
            id="landingFullPage"
            >
            <section 
            id="centreFlex"
            >
                <img id="image" src="../img/me.png" />
                <div id="nameAndRole">
                    <h1>
                        Eshan Chatwal
                    </h1>
                    <p id="role">
                        Full Stack Developer
                    </p>
                </div>
            </section>
            </section>
        )
    }
}

export default Landing