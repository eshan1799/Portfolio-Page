import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'

const Error404 = history => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
            </nav>
                <h1>
                    Oops!
                </h1>
                <h3>
                    We can't seem to find the page you're looking for.
                </h3>
                <p>
                    Error Code: 404
                </p>
            <Link to="/">
                <button>Go to homepage</button>
            </Link>
        </div>
    )
}
export default withRouter(Error404);