import React, { Component } from "react";
import "../../Assets/Styles/Navbar/index.scss";
import NavMenu from "./NavMenu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  changeMode(e) {
    console.log(this.state);
    const current_mode = this.state.isDarkMode;

    this.setState({ isDarkMode: !current_mode }, () => {
      const { isDarkMode } = this.state;
      this.props.handleMode(isDarkMode);
    });
  }

  render() {
    const { name, nav_menu } = this.props;
    const mode = this.state.isDarkMode ? "uil uil-sun" : "uil uil-moon";

    return (
      <nav>
        <div className="nav__name">{name}</div>
        <div className="nav--menu">
          <NavMenu nav_menu={nav_menu} />

          <div className="modes--icon" onClick={() => this.changeMode()}>
            {" "}
            <i className={mode}></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
