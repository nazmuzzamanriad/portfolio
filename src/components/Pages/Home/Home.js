import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutMe from '../AboutMe.js/AboutMe';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MyBlogs from '../MyBlogs/MyBlogs';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Header></Header>
           <Skills></Skills>
           <Projects></Projects>
           <AboutMe ></AboutMe>
           <MyBlogs></MyBlogs>
           <Contact></Contact>
            
        </div>
    );
};

export default Home;