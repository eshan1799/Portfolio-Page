import React from "react";

class Landing extends React.Component {
    render() {
        return (
            <section
            id="landingFullPage"
            >
            <section 
            className="centreFlexRow"
            >
                <img id="landingImage" src="../assets/img/me.png" />
                <div id="nameAndRole">
                    <h1>
                        Eshan Chatwal
                    </h1>
                    <p id="role">
                        Junior DevOps Engineer
                    </p>
                </div>
            </section>
            </section>
        )
    }
}

export default Landing