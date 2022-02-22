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
    this.setState({isDarkMode : !current_mode});
  }


  render() {
    const { name, nav_menu } = this.props;
    // console.log(this.state)
    const mode = (this.state.isDarkMode) ? lightMode : darkMode ;
    console.log(nav_menu);

    return (
      <nav>
        <div>{name}</div>
        <div className="nav--menu">
          <ul>            
            {nav_menu.map((value , ind) => {
              // console.log(value)
              return (
                <li key={ind}>
                  <Link
                    to={value}
                    offset={-100}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    duration={50}
                  >
                    {value}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="modes--icon" onClick={() => this.changeMode()}>    {/* onClick={this.changeMode} -> here  this is not bind with changeMode method that's why i was getting error in reeading the sate inside method*/} 
          {/*  */}
            <img src={mode} alt="darkmode" />            
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
 