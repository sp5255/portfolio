import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import HomeSection from "./Components/Home/HomeSection";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactMe from "./Components/Contact Me/ContactMe";
import Footer from "./Components/Footer/Footer";
import './App.css'

class App extends Component {
    componentDidMount() {
        Aos.init({
            duration: 1000,
        });
    }   

    nav_menu = ["Home", /* 'About', */ "Skills", "Portfolio", "ContactMe"];
    home_details = {
        name: "Sachin Pundir",
        position: "Software Engineer",
        home_content:
            "MCA student from Kurukshetra University with proven problem solving, technical and communication skills",
    };

    // problem with the aos slide-left 
    // element goes out of the viwpowrt which increase the widht

    render() {
        const { name, position, home_content } = this.home_details;
        return (
            <div className="App">
                <Navbar name = {name} nav_menu={this.nav_menu} />
                <HomeSection
                    name={name}
                    position={position}
                    home_content={home_content}
                    scrollDown = {this.nav_menu[1]}                    
                />
                <Skills />
                <Portfolio />                                
                <ContactMe />
                <Footer name="Sachin Pundir" title="Software Engineer" />
            </div>
        );
    }
}

/* <div className='box'>
<div id='Home'>Home</div>
<div  id='Skills'> skills</div>
<div data-aos ="fade-right"  id='Portfolio'>Portfoil</div>
<div data-aos="fade-right" id='About'>About</div>
<div data-aos="fade-left">one</div>
<div>one</div>
<div>one</div>
</div> */

export default App;
