import { SwiperSlide } from "swiper/react";
import SliderWrapper from "./sliderWrapper";

import { Link } from "react-router-dom";

import CompassIcon from "../assists/icons/compass.svg";
import ClockImage from "../assists/icons/clock.svg";
import LocationIcon from "../assists/icons/location.svg";
import CostIcon from "../assists/icons/cost.svg";
import MapIcon from "../assists/icons/map-outline.svg";
import likeIcon from "../assists/icons/like-outline.svg";
import starIcon from "../assists/icons/star.svg";

import EventImage from "../assists/dev-summit.png";
import CurrentEventImage from "../assists/current-events-image.png";

function MultiEventSlider() {
  return (
    <SliderWrapper direction="horizontal" pagination={false}>
      <SwiperSlide>
        <div className="events__container">
          {Array.apply(0, new Array(3)).map((item, index) => (
            <div className="events__container__content">
              <div className="content__header">
                <img src={CurrentEventImage} alt="" className="header-image" />
                <img src={EventImage} alt="" className="header-logo" />
                <div className="header-timer">
                  <img src={ClockImage} alt="" />
                  <time>03:07: 15</time>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="events__container">
          {Array.apply(0, new Array(3)).map((item, index) => (
            <div className="events__container__content">
              <div className="content__header">
                <img src={CurrentEventImage} alt="" className="header-image" />
                <img src={EventImage} alt="" className="header-logo" />
                <div className="header-timer">
                  <img src={ClockImage} alt="" />
                  <time>03:07: 15</time>
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
      </SwiperSlide>
    </SliderWrapper>
  );
}

export default MultiEventSlider;
