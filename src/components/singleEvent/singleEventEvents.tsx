import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import ChartIcon from "../../assets/icons/linear-chart.svg";

import "../../styles/singleEventEvents.scss";
import EventPreview from "../eventPreview";

function SingleEventEvents() {
  const [swipe, setSwipe] = useState<any>();
  const [swipeIndex, setSwipeIndex] = useState<number>(0);

  return (
    <section className="event__events">
      <div className="events__header header">
        <div className="header__content">
          <img src={ChartIcon} alt="" />
          <h2>رویداد های دیگر ....</h2>
        </div>
        <div className="header__navigators navigators">
          <button
            onClick={() => {
              swipe?.slidePrev();
              setSwipeIndex(swipe?.realIndex);
            }}
            className={0 === swipeIndex ? "navigators-disabled" : ""}
          >
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.3998 30L19.6975 26.3307C16.7451 23.4044 15.2688 21.9413 15.0415 20.158C14.9858 19.7211 14.9858 19.2789 15.0415 18.842C15.2688 17.0587 16.7451 15.5956 19.6975 12.6693L23.3998 9"
                stroke="#8D56C3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              swipe?.slideNext();
              setSwipeIndex(swipe?.realIndex);
            }}
            className={
              swipe?.slides !== undefined ? (swipe?.slides.length - 1 === swipeIndex ? "navigators-disabled" : "") : ""
            }
          >
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.3998 30L19.6975 26.3307C16.7451 23.4044 15.2688 21.9413 15.0415 20.158C14.9858 19.7211 14.9858 19.2789 15.0415 18.842C15.2688 17.0587 16.7451 15.5956 19.6975 12.6693L23.3998 9"
                stroke="#8D56C3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="events__container container">
        <Swiper className="mySwiper" onBeforeInit={(swipper) => setSwipe(swipper)}>
          {Array.apply(0, new Array(4)).map((item, index) => (
            <SwiperSlide className="slide" key={index}>
              {Array.apply(0, new Array(4)).map((item, index) => (
                <EventPreview />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SingleEventEvents;
