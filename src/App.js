import React, { Component } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar/Navbar";
import HomeSection from "./Components/Home/HomeSection";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactMe from "./Components/Contact Me/ContactMe";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import BottomNav from "./Components/Navbar/BottomNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
    };
  }

  componentDidMount() {
    Aos.init({
      duration: 500,
    });
  }

  changeMode = (current_mode) => {
    this.setState({
      isDarkMode: current_mode,
    });
  };

  nav_menu = ["Home", /* 'About', */ "Skills", "Portfolio", "ContactMe"];
  home_details = {
    name: "Sachin Pundir",
    position: "Software Engineer",
    home_content:
      "MCA final year student at Kurukshetra University going to be graduated in 2022 with proven problem solving, technical and communication skills",
  };
  render() {
    const { name, position, home_content } = this.home_details;
    const dark = this.state.isDarkMode ? "dark--mode" : "";
    return (
      <div className={`App ${dark}`}>
        <Navbar
          name={name}
          nav_menu={this.nav_menu}
          handleMode={this.changeMode}
        />
        {/* <BottomNav /> */}
        <HomeSection
          name={name}
          position={position}
          home_content={home_content}
          scrollDown={this.nav_menu[1]}
        />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer name="Sachin Pundir" title="Software Engineer" />
        <BottomNav />
      </div>
    );
  }
}

export default App;
