import React, { Component } from "react";
import { Link } from "react-scroll";
import lightMode from  '../../Assets/icons/day-sunny.svg'
import darkMode from  '../../Assets/icons/moon-line.svg'
import "../../Assets/Styles/Navbar/index.css";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDarkMode : false
    }
  }

  changeMode(e){
    console.log(this.state)
    const current_mode = this.state.isDarkMode;
    
    this.setState({isDarkMode : !current_mode}, () => {
      const {isDarkMode} = this.state;
      this.props.handleMode(isDarkMode)
    });
  }


  render() {
    const { name, nav_menu } = this.props;
    // console.log(this.state)
    const mode = (this.state.isDarkMode) ? "uil uil-sun" : "uil uil-moon" ;
    console.log(nav_menu);

    return (
      <nav>
        <div className="nav__name">{name}</div>
        <div className="nav--menu">
          <ul>            
            {nav_menu.map((value , ind) => {
              // console.log(value)
              return (
                <li key={ind}>
                  <Link
                    to={value}
                    // offset={-100}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    duration={400}
                  >
                    {value}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="modes--icon" onClick={() => this.changeMode()}>    {/* onClick={this.changeMode} -> here  this is not bind with changeMode method that's why i was getting error in reeading the sate inside method*/} 
          {/*  */}
          <i className={mode}></i>
            {/* <img src={mode} alt="darkmode" />             */}
            {/* <i class="uil uil-sun"></i>
              <i class="uil uil-moon"></i>
               */}
          </div>
        </div>
      </nav>
    );

  }
}

export default Navbar;
 