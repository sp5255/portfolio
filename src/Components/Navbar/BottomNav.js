// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import HomeIcon from "@mui/icons-material/Home";
// import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
// import PsychologyIcon from "@mui/icons-material/Psychology";

import * as React from "react";
import Link from "react-scroll/modules/components/Link";

import "../../Assets/Styles/bottomNav.scss";

const NavItem = ({ icon, label, className, idx, setIdx, path = "#" }) => {
  const liRef = React.useRef(null);

  React.useEffect(() => {
    liRef.current.classList.remove("a");
  }, [liRef]);

  return (
    <li className={`list ${className}`} ref={liRef} onClick={() => {
      console.log('clcik')
      setIdx(idx)}}>
      <Link to={path} offset={-50} smooth={true} spy={true} duration={400} onClick = { () => setIdx(idx)}>
        <span className="icon">{icon}</span>
        <span className="text">{label}</span>
      </Link>
    </li>
  );
};

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");
  const indicatorRef = React.useRef(null);

  const menuIcon = [
    <i class="uil uil-estate"></i>,
    <i class="uil uil-arrow"></i>,
    <i class="uil uil-bag"></i>,
    <i class="uil uil-at"></i>,
    // <PsychologyIcon />,
    // <AccountTreeIcon />,
    // <PermPhoneMsgIcon />,
  ];

  const menuLabel = ["Home", "Skills", "Portfolio", "Contact Me"];
  const paths = ["Home", "Skills", "Portfolio", "ContactMe"];

  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const left = {
      0: "-3px",
      1: "90px",
      2: "182px",
      3: "270px",
    };

    indicatorRef.current.style.left = left[idx];
  }, [idx]);

  return (
    <>
      <div>
        <div className="navigation">
          <ul>
            {menuIcon.map((icon, ind) => (
              <NavItem
                key={ind}
                icon={icon}
                label={menuLabel[ind]}
                className={ind === idx ? "active" : ""}
                idx={ind}
                setIdx={setIdx}
                path={paths[ind]}
              />
            ))}

            <div className="indicator" ref={indicatorRef}></div>
          </ul>
        </div>
      </div>
    </>
  );
}
