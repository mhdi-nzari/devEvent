import { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import { Link, NavLink, useLocation } from "react-router-dom";

import websiteIcon from "../assists/icon.svg";
import menuIcon from "../assists/icons/menu.svg";
import avatarIcon from "../assists/icons/avatar-outline.svg";
import searchIcon from "../assists/icons/search-outline.svg";
import notificationsIcon from "../assists/icons/notification-outline.svg";

import "../styles/navbar.scss";

function Navbar() {
  const location = useLocation();

  const [SearchBar, setSearchBar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const links = [
    {
      header: "رویدادها",
      path: "/events",
    },
    {
      header: "جدول زمان بندی",
      path: "/timetable",
    },
    {
      header: "درباره ما",
      path: "/about",
    },
  ];

  const searchBarHandler = (e?: any) => {
    if (SearchBar) {
      if (e) {
        e.preventDefault();

        // form submit codes
      }
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  };

  useEffect(() => {
    // this will give us pageYOffset when component mounted
    var prevScrollpos = window.pageYOffset;

    function onScroll() {
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos) {
          // surely this could be coded by useState
          // but this one is more optimzed.
          document.getElementById("nav")!.style.top = "0";
          // top 0 is regular navbar top property so it makes  it visiable.
        } else {
          document.getElementById("nav")!.style.top = "-100%";
        }
        // then preScrollpos will update to current page Y offset
        // to become ready for next scroll eventListner.
        prevScrollpos = currentScrollPos;
      };
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav__right">
          <Link to={"/"}>
            <figure className="nav__right__logo">
              <img src={websiteIcon} alt="" />
              <figcaption>رویداد</figcaption>
            </figure>
          </Link>

          <ul className="nav__right__menu">
            <li>
              <NavLink end to={"/"}>
                خانه
              </NavLink>
            </li>
            {links.map((item, index) => (
              <li>
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")} key={item.path}>
                  {item.header}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__left">
          <button className={`nav__left__search ${SearchBar ? "search--active" : ""}`}>
            <img src={searchIcon} alt="" onClick={searchBarHandler} />
            <form id="search-form" onSubmit={searchBarHandler}>
              <input type="text" placeholder="جستجوی رویداد" />
            </form>
          </button>
          <button className={true ? "notification" : ""}>
            <img src={notificationsIcon} alt="" />
          </button>
          <button>
            <img src={avatarIcon} alt="" />
          </button>
          <button
            onClick={() => {
              setShowNavbar((prevValue) => !prevValue);
            }}
          >
            <img src={menuIcon} alt="" />
          </button>
        </div>

        <CSSTransition in={showNavbar} timeout={700} classNames="navbar" unmountOnExit>
          <div className={`nav-mobile__container ${showNavbar && "active"}`}>
            <div
              className="nav-mobile__closer"
              onClick={() => {
                setShowNavbar(false);
              }}
            />
            <div className="nav-mobile navbar">
              <div className="nav-mobile__top">
                <Link to={"/"}>
                  <figure className="nav-mobile__top__logo">
                    <img src={websiteIcon} alt="" />
                    <figcaption>رویداد</figcaption>
                  </figure>
                </Link>
              </div>
              <ul className="nav-mobile__menu">
                <li>
                  <NavLink
                    end
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "active" : location.pathname.slice(0, 7) === "/events" ? "active" : ""
                    }
                  >
                    خانه
                  </NavLink>
                </li>
                {links.map((item, index) => (
                  <li>
                    <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")} key={item.path}>
                      {item.header}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="nav-mobile__bottom">
                <button className={`nav-mobile__left__search ${SearchBar ? "search--active" : ""}`}>
                  <img src={searchIcon} alt="" onClick={searchBarHandler} />
                  <form id="search-form" onSubmit={searchBarHandler}>
                    <input type="text" placeholder="جستجوی رویداد" />
                  </form>
                </button>
                <button className={true ? "notification" : ""}>
                  <img src={notificationsIcon} alt="" />
                </button>
                <button>
                  <img src={avatarIcon} alt="" />
                </button>
                <button>
                  <img src={menuIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </nav>
    </>
  );
}

export default Navbar;
