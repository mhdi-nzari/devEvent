import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link, NavLink } from "react-router-dom";

import MobileLink from "./mobileLink";

import JadiProfile from "../../assets/mvp/jadi.png";

import WebsiteIcon from "../../assets/icon.png";
import MealIcon from "../../assets/icons/MealIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import PanelIcon from "../../assets/icons/PanelIcon";
import CompassIcon from "../../assets/icons/Compass";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import TelePhoneIcon from "../../assets/icons/TelePhoneIcon";
import NavMobileHomeIcon from "../../assets/icons/NavMobileHomeIcon";
import OtherPagesOutlineIcon from "../../assets/icons/OtherPagesOutlineIcon";

import "../../styles/navbar.scss";
import MenuIcon from "../../assets/icons/MenuIcon";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import AvatarIcon from "../../assets/icons/AvatarIcon";

function Navbar() {
  const [SearchBar, setSearchBar] = useState(false);
  const [isNavExtended, setIsNavExtended] = useState(false);

  const links = [
    {
      header: "رویدادها",
      path: "/events",
      icon: CompassIcon,
    },
    {
      header: "درباره ما",
      path: "/about",
      icon: MealIcon,
    },
  ];

  const searchBarHandler = (e?: any) => {
    if (SearchBar) {
      if (e) {
        e.preventDefault();

        // * form submit codes
      }
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  };

  const ExtendNavHandler = () => {
    setIsNavExtended((prevValue) => !prevValue);
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
        <MenuIcon onClick={ExtendNavHandler} className="nav__menuIcon" />

        <div className="nav__right">
          <Link to={"/"}>
            <figure className="nav__right__logo">
              <img src={WebsiteIcon} alt="" />
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
              <li key={index}>
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                  {item.header}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__left">
          <button className={`nav__left__search ${SearchBar ? "search--active" : ""}`}>
            <SearchIcon />
            <form id="search-form" onSubmit={searchBarHandler}>
              <input type="text" placeholder="جستجوی رویداد" />
            </form>
          </button>

          <button className={true ? "notification" : ""}>
            <NotificationIcon />
          </button>

          <button>
            <AvatarIcon />
          </button>
        </div>
      </nav>

      {isNavExtended && (
        <div
          onClick={() => {
            ExtendNavHandler();
          }}
          className="nav__closer"
        />
      )}
      <CSSTransition in={isNavExtended} timeout={300} classNames="navbar" unmountOnExit>
        <div className="nav__mobile mobile">
          <figure className="mobile__logo">
            <img src={WebsiteIcon} alt="" />
            <figcaption>رویداد</figcaption>
          </figure>

          <div className="mobile__seprater" />

          <button className="mobile__closer" onClick={ExtendNavHandler}>
            <ArrowIcon />
          </button>

          <form className="mobile__searchBar">
            <button>
              <SearchIcon />
            </button>
            <input type="text" placeholder="اینجا سرچ بزن مثلا : بده بزنیم" />
          </form>

          <div className="mobile__links links">
            <ul className="links__menu menu">
              <MobileLink icon={NavMobileHomeIcon} header="صفحه  اصلی" path="/" home />

              {links.map((item, index) => (
                <MobileLink icon={item.icon} header={item.header} path={item.path} key={index} />
              ))}

              <MobileLink icon={PanelIcon} header="پنل کاربری" path="/panel" />
              <MobileLink icon={TelePhoneIcon} header="تماس با ما" path="/contact" />
            </ul>

            <div className="mobile__otherPages otherPages">
              <div className="otherPages__header header">
                <OtherPagesOutlineIcon />
                <h1>صفحات دیگر</h1>
              </div>

              <MobileLink icon={InfoIcon} header="سوالات متداول" path="/commonquestions" />
              <MobileLink icon={PanelIcon} header="راهنمای ثبت رویداد" path="/guide" />
            </div>
          </div>
          <div className="mobile__footer footer">
            <svg width="360" height="70" viewBox="0 0 360 70" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M153.074 17.2285C144.867 10.0812 136.301 0 125.418 0H0V50C0 61.0457 8.95432 70 20 70H340C351.046 70 360 61.0457 360 50V0H211.582C200.699 0 192.133 10.0812 183.926 17.2285C179.798 20.8232 174.403 23 168.5 23C162.597 23 157.202 20.8232 153.074 17.2285Z"
                fill="white"
              />
            </svg>

            <button className="footer__logout">
              <LogoutIcon />
            </button>
            <div className="footer__content content">
              <div className="content__logo logo">
                <img src={JadiProfile} alt="" />
                <div>
                  <h3>جادی میرمیرانی</h3>
                  <h4>توسعه دهنده ارشد پایتون</h4>
                </div>
              </div>

              <CodeIcon />
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Navbar;
