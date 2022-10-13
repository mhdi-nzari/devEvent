import { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import { Link, NavLink, useLocation } from "react-router-dom";

import websiteIcon from "./../assets/icon.svg";
import menuIcon from "./../assets/icons/menu.svg";
import avatarIcon from "./../assets/icons/avatar-outline.svg";
import searchIcon from "./../assets/icons/search-outline.svg";
import notificationsIcon from "./../assets/icons/notification-outline.svg";

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
            <svg
              // onClick={searchBarHandler}
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9453 20.5311C21.5548 20.1406 20.9216 20.1406 20.5311 20.5311C20.1406 20.9216 20.1405 21.5548 20.5311 21.9453L21.9453 20.5311ZM25.2929 26.7072C25.6834 27.0977 26.3165 27.0977 26.7071 26.7072C27.0976 26.3167 27.0976 25.6835 26.7071 25.293L25.2929 26.7072ZM9.74905 5.6324C10.2945 5.546 10.6667 5.03376 10.5803 4.48827C10.4939 3.94279 9.98166 3.57062 9.43618 3.65702L9.74905 5.6324ZM3.65698 9.43622C3.57059 9.9817 3.94275 10.4939 4.48824 10.5803C5.03372 10.6667 5.54596 10.2946 5.63236 9.74909L3.65698 9.43622ZM20.5311 21.9453L25.2929 26.7072L26.7071 25.293L21.9453 20.5311L20.5311 21.9453ZM11.7143 21.4286C6.34924 21.4286 2 17.0793 2 11.7143H0C0 18.1839 5.24467 23.4286 11.7143 23.4286V21.4286ZM21.4286 11.7143C21.4286 17.0793 17.0793 21.4286 11.7143 21.4286V23.4286C18.1839 23.4286 23.4286 18.1839 23.4286 11.7143H21.4286ZM11.7143 2C17.0793 2 21.4286 6.34924 21.4286 11.7143H23.4286C23.4286 5.24467 18.1839 0 11.7143 0V2ZM11.7143 0C5.24467 0 0 5.24467 0 11.7143H2C2 6.34924 6.34924 2 11.7143 2V0ZM9.43618 3.65702C6.46131 4.12819 4.12816 6.46134 3.65698 9.43622L5.63236 9.74909C5.96799 7.63 7.62996 5.96803 9.74905 5.6324L9.43618 3.65702Z"
                fill="#2D264B"
              />
            </svg>

            <form id="search-form" onSubmit={searchBarHandler}>
              <input type="text" placeholder="جستجوی رویداد" />
            </form>
          </button>
          <button className={true ? "notification" : ""}>
            <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.94471 23.7368L7.51313 24.7113C10.071 29.0962 15.1868 29.0962 17.7447 24.7113L18.3131 23.7368M1.52031 20.2547L1.66718 20.5575C2.61043 22.5021 4.58175 23.7368 6.74303 23.7368H18.4252C20.2773 23.7368 22.001 22.7907 22.9954 21.2282C24.3991 19.0226 24.0273 16.1292 22.1117 14.3501L22.0493 14.2922C20.7486 13.0843 20.1083 11.3246 20.3284 9.56324L20.4203 8.82865C20.9399 4.6717 17.6986 1 13.5093 1H11.0893C6.90514 1 3.66778 4.66723 4.18676 8.81911L4.29953 9.72126C4.5072 11.3826 3.90034 13.0421 2.66986 14.1776C0.98916 15.7285 0.522212 18.197 1.52031 20.2547Z"
                stroke="#2D264B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button>
            <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.2104 6.89474C16.2104 9.59803 14.019 11.7895 11.3157 11.7895V13.7895C15.1235 13.7895 18.2104 10.7026 18.2104 6.89474H16.2104ZM11.3157 11.7895C8.61238 11.7895 6.42093 9.59803 6.42093 6.89474H4.42093C4.42093 10.7026 7.50781 13.7895 11.3157 13.7895V11.7895ZM6.42093 6.89474C6.42093 4.19145 8.61238 2 11.3157 2V0C7.50781 0 4.42093 3.08688 4.42093 6.89474H6.42093ZM11.3157 2C14.019 2 16.2104 4.19145 16.2104 6.89474H18.2104C18.2104 3.08688 15.1235 0 11.3157 0V2ZM6.89461 18.2105H15.7367V16.2105H6.89461V18.2105ZM15.7367 28H6.89461V30H15.7367V28ZM6.89461 28C4.19133 28 1.99988 25.8086 1.99988 23.1053H-0.00012207C-0.00012207 26.9131 3.08676 30 6.89461 30V28ZM20.6315 23.1053C20.6315 25.8086 18.44 28 15.7367 28V30C19.5446 30 22.6315 26.9131 22.6315 23.1053H20.6315ZM15.7367 18.2105C18.44 18.2105 20.6315 20.402 20.6315 23.1053H22.6315C22.6315 19.2974 19.5446 16.2105 15.7367 16.2105V18.2105ZM6.89461 16.2105C3.08676 16.2105 -0.00012207 19.2974 -0.00012207 23.1053H1.99988C1.99988 20.402 4.19133 18.2105 6.89461 18.2105V16.2105Z"
                fill="#2D264B"
              />
            </svg>
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
            </div>
          </div>
        </CSSTransition>
      </nav>
    </>
  );
}

export default Navbar;
