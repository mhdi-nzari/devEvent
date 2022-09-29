import { useState } from "react";

import { Link } from "react-router-dom";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import ChartIcon from "../assists/icons/linear-chart.svg";
import CompassIcon from "../assists/icons/compass.svg";
import LocationIcon from "../assists/icons/location.svg";
import CostColorIcon from "../assists/icons/cost.svg";

import hamyarLogo from "../assists/logos/hamyar-logo.png";
import hamyarSpace from "../assists/hamyar-space.png";

import "../styles/singleEventEvents.scss";

function SingleEventEvents() {
  const [swipe, setSwipe] = useState<any>();
  const [swipeIndex, setSwipeIndex] = useState<number>(0);

  return (
    <section className="event__events">
      <div className="events__header">
        <div className="header_content">
          <img src={ChartIcon} alt="" />
          <h2>رویداد های دیگر ....</h2>
        </div>
        <div className="header_navigators">
          <button
            onClick={() => {
              swipe?.slidePrev();
              setSwipeIndex(swipe?.realIndex);
            }}
            className={0 === swipeIndex ? "disabled" : ""}
          >
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.3998 30L19.6975 26.3307C16.7451 23.4044 15.2688 21.9413 15.0415 20.158C14.9858 19.7211 14.9858 19.2789 15.0415 18.842C15.2688 17.0587 16.7451 15.5956 19.6975 12.6693L23.3998 9"
                stroke="#8D56C3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              swipe?.slideNext();
              setSwipeIndex(swipe?.realIndex);
            }}
            className={swipe?.slides.length - 1 === swipeIndex ? "disabled" : ""}
          >
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.3998 30L19.6975 26.3307C16.7451 23.4044 15.2688 21.9413 15.0415 20.158C14.9858 19.7211 14.9858 19.2789 15.0415 18.842C15.2688 17.0587 16.7451 15.5956 19.6975 12.6693L23.3998 9"
                stroke="#8D56C3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="events__container">
        <Swiper className="mySwiper" onBeforeInit={(swipper) => setSwipe(swipper)}>
          {Array.apply(0, new Array(4)).map(() => (
            <SwiperSlide className="slide">
              {Array.apply(0, new Array(4)).map(() => (
                <div className="events__container__content">
                  <div className="content__header">
                    <img src={hamyarSpace} alt="" className="header-image" />
                    <div className="header__header__container">
                      <img src={hamyarLogo} alt="" className="header-logo" />
                    </div>
                  </div>
                  <div className="caption">
                    <div className="caption__item">
                      <div className="caption__item__icon">
                        <img src={CompassIcon} alt="" />
                      </div>
                      <span>جشنوا جشنواره توسعه دهندگان </span>
                    </div>
                    <div className="caption__item">
                      <div className="caption__item__icon">
                        <img src={CostColorIcon} alt="" />
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
                      <button className="btn primary">مشاهده جزئیات رویداد</button>
                    </div>
                  </Link>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SingleEventEvents;
