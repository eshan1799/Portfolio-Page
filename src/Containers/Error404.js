import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Error404 = () => {
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
                <button>Back</button>
            </Link>
        </div>
    )
}
export default Error404;