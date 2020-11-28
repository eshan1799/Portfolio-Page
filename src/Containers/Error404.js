import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <section id="errorPage" className="fullPageFlex">
                <h1>
                    Oops!
                </h1>
                <h3>
                    I can't seem to find the page you're looking for.
                </h3><br />
                <p>
                    Error Code: 404
                </p>
            <Link id="errorButton" className="buttons" to="/">
                Back
            </Link>
        </section>
    )
}
export default Error404;