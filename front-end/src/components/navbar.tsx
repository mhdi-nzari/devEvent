import { useContext } from "react";

import { StateContext } from "modules/context";
import { Link, useLocation } from "react-router-dom";

import websiteIcon from "../assists/icon.svg";
import avatarIcon from "../assists/icons/avatar-outline.svg";
import searchIcon from "../assists/icons/search-outline.svg";
import notificationsIcon from "../assists/icons/notification-outline.svg";

import "../styles/navbar.scss";

function Navbar() {
  const { newNotifications } = useContext(StateContext);

  const location = useLocation();

  const links = [
    {
      header: "جدوا زمان بندی",
      path: "/timetable",
    },
    {
      header: "درباره ما",
      path: "/about",
    },
  ];

  return (
    <div className="navbar">
      <div className="right-container">
        <Link to={"/"}>
          <div className="name--logo-container">
            <img src={websiteIcon} alt="" />
            <h2>رویداد</h2>
          </div>
        </Link>

        <ul className="links">
          <li className={newNotifications ? "new-notification" : ""}>
            <Link
              to={"/"}
              className={
                "/" === location.pathname || location.pathname.slice(0, 7) === "/events" ? "active" : "disabled"
              }
            >
              خانه
            </Link>
          </li>

          {links.map((item, index) => (
            <li>
              <Link to={item.path} className={item.path === location.pathname ? "active" : ""} key={item.path}>
                {item.header}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="left-container">
        <button>
          <img src={searchIcon} alt="" />
        </button>
        <button className={true ? "notification" : ""}>
          <img src={notificationsIcon} alt="" />
        </button>
        <button>
          <img src={avatarIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
