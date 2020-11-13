import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav, SideNav, Landing, About, Skills, Projects, Contact, Footer } from '../Components/index/index';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <MainNav />
                <SideNav />
                <Landing/>
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </>
        )
    }
}

export default HomePage;