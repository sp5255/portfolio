import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PsychologyIcon from "@mui/icons-material/Psychology";
import "../../Assets/Styles/bottomNav.scss";

const NavItem = ({ icon, label, className, idx, setIdx, path = "#" }) => {
  const liRef = React.useRef(null);

  React.useEffect(() => {
    liRef.current.classList.remove("a");
  }, [liRef]);

  return (
    <li className={`list ${className}`} ref={liRef} onClick={() => setIdx(idx)}>
      <a href={path}>
        <span className="icon">{icon}</span>
        <span className="text">{label}</span>
      </a>
    </li>
  );
};

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");
  const indicatorRef = React.useRef(null);

  const menuIcon = [
    <HomeIcon />,
    <PsychologyIcon />,
    <AccountTreeIcon />,
    <PermPhoneMsgIcon />,
  ];

  const menuLabel = ["Home", "Skills", "Portfolio", "Contact Me"];
  const paths = ["#Home", "#Skills", "#Portfolio", "#ContactMe"];

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
