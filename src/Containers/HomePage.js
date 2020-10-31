import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Eshan Chatwal</h1>
                <Link to='#about'>
                    About
                </Link>
                <a href='#about'>About a</a>
                <section className='fullPage'></section>
                <p id='about'>About Me</p>
            </div>
        )
    }
}

export default HomePage;