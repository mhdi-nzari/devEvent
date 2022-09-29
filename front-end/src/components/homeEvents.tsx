import { Link } from "react-router-dom";

import Header from "./header";

import ClockImage from "../assists/icons/clock.svg";
import LocationIcon from "../assists/icons/location.svg";
import CostIcon from "../assists/icons/cost.svg";
import MapIcon from "../assists/icons/map-outline.svg";
import likeIcon from "../assists/icons/like-outline.svg";
import starIcon from "../assists/icons/star.svg";
import CompassIcon from "../assists/icons/compass.svg";

import EventImage from "../assists/dev-summit.png";
import CurrentEventImage from "../assists/current-events-image.png";

import "../styles/homeEvents.scss";

function HomeEvents() {
  return (
    <section className="home__events events">
      <Header title="رویداد های جاری" icon={CompassIcon} />
      <div className="events__container">
        {Array.apply(0, new Array(3)).map((item, index) => (
          <div className="events__container__content">
            <div className="content__header">
              <img src={CurrentEventImage} alt="" className="header-image" />
              <svg
                width="500"
                height="243"
                viewBox="0 0 500 243"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="header-frame"
              >
                <path
                  d="M0.5 19.0369C0.5 8.79871 8.79032 0.5 19.0157 0.5H480.984C491.21 0.5 499.5 8.79871 499.5 19.0369V198.207C499.5 222.67 479.691 242.5 455.257 242.5H443.243C432.754 242.5 424.424 233.823 419.944 224.097C412.161 207.198 395.089 195.468 375.28 195.468C355.47 195.468 338.398 207.198 330.615 224.097C326.135 233.823 317.805 242.5 307.316 242.5H19.0157C8.79032 242.5 0.5 234.201 0.5 223.963V19.0369Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
              <img src={EventImage} alt="" className="header-logo" />
              <div className="header-timer">
                <img src={ClockImage} alt="" />
                <time>
                  <span>03 </span>: <span>07 </span>: <span>15 </span>
                </time>
              </div>

              <div className="header-hover">
                <button className="see-location">
                  <a target={"_blank"} href="https://goo.gl/maps/B76C4UNniybAizSU9" rel="noreferrer">
                    مشاهده روی نقشه
                  </a>
                  <img src={MapIcon} alt="" />
                </button>
                <div className="header-hover__rate">
                  <div className="header-hover__rate__caption">
                    <span>5.00</span>
                    <img src={starIcon} alt="" />
                  </div>
                  <button className="header-hover__rate__like">
                    <img src={likeIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="caption">
              <div className="caption__item">
                <div className="caption__item__icon">
                  <img src={CompassIcon} alt="" />
                </div>
                <span>
                  {"جشنواره توسعه دهندگان".length >= 21
                    ? "جشنواره توسعه دهندگان".slice(0, 21) + " ..."
                    : "جشنواره توسعه دهندگان"}
                </span>
              </div>
              <div className="caption__item">
                <div className="caption__item__icon">
                  <img src={CostIcon} alt="" />
                </div>
                <span>55،000 تومان</span>
              </div>
              <div className="caption__item">
                <div className="caption__item__icon">
                  <img src={LocationIcon} alt="" />
                </div>
                <span>ایران ، تهران ، قم ، کاشان اصفهان</span>
              </div>
            </div>
            <Link to={`/events/${"جشنواره توسعه دهندگان".replaceAll(" ", "-")}`}>
              <div className="events__container__content__button ">
                <button className="btn second">مشاهده جزئیات رویداد</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeEvents;
