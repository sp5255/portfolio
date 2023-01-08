import { Component } from "react";
import Link from "react-scroll/modules/components/Link";

class NavMenu extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { nav_menu } = this.props;
    return (
      <>
        <ul>
          {nav_menu.map((value, ind) => {
            // console.log(value)
            return (
              <li key={ind}>
                <Link
                  to={value}
                  offset={-50}
                  // activeClass="active"
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
      </>
    );
  }
}

export default NavMenu;

export default NavMenu;