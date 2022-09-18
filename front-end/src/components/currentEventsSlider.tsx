import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "./sliderWrapper";

import LocationIconOutline from "../assists/icons/location-outline.svg";
import watchIcon from "../assists/icons/watch.svg";
import CalendarIcon from "../assists/icons/calendar.svg";
import MealIcon from "../assists/icons/meal.svg";
import TicketImage from "../assists/icons/ticket.svg";
import ClockImage from "../assists/icons/clock.svg";

import EventSpaceImage from "../assists/event-image.png";
import EventImage from "../assists/dev-summit.png";

function CurrentEventsSlider() {
  const text =
    "اولین رویداد تخصصی جامعه توسعه دهندگان ایران که توسط مرجع رسمی فروش قالب و فروش افزونه ژاکت راه اندازی شده است";

  return (
    <SliderWrapper direction="vertical" pagination>
      <SwiperSlide>
        <div className="current-events__container">
          <div className="current-events__container__image">
            <img src={EventSpaceImage} alt="" />
          </div>
          <div className="current-events__container__content">
            <figure className="content__header">
              <img src={EventImage} alt="" className="content__header__image" />
              <figcaption>رویداد Dev Summit</figcaption>
              <summary>{text.length >= 110 ? text.slice(0, 128) + "..." : text}</summary>

              <div className="top-container">
                <div className="top-container__timer">
                  <img src={ClockImage} alt="" />
                  <time>03:07: 15</time>
                </div>
                {true && (
                  <div className="top-container__ticket">
                    <img src={TicketImage} alt="" />
                  </div>
                )}
              </div>
            </figure>

            <div className="content__list">
              <div className="list__item">
                <div className="item__image">
                  <img src={LocationIconOutline} alt="" />
                </div>
                <span>تهران ، بزرگراه شهید حسن رفسنجانی هتل قلب....</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={watchIcon} alt="" />
                </div>
                <span>14:00 بعداظهر</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={CalendarIcon} alt="" />
                </div>
                <span>یکشنبه 16 مرداد ماه 1400</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={MealIcon} alt="" />
                </div>
                <span>عصرانه ، شام</span>
              </div>
            </div>
            <div className="buttons-container">
              <button className="buttons__capacity btn disabled">ظرفیت ثبت نام تکمیل</button>
              <button className="buttons__see-details btn third">مشاهده جزئیات</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="current-events__container">
          <div className="current-events__container__image">
            <img src={EventSpaceImage} alt="" />
          </div>
          <div className="current-events__container__content">
            <figure className="content__header">
              <img src={EventImage} alt="" className="content__header__image" />
              <figcaption>رویداد Dev Summit</figcaption>
              <summary>{text.length >= 110 ? text.slice(0, 128) + "..." : text}</summary>

              <div className="top-container">
                <div className="top-container__timer">
                  <img src={ClockImage} alt="" />
                  <time>03:07: 15</time>
                </div>
                {true && (
                  <div className="top-container__ticket">
                    <img src={TicketImage} alt="" />
                  </div>
                )}
              </div>
            </figure>

            <div className="content__list">
              <div className="list__item">
                <div className="item__image">
                  <img src={LocationIconOutline} alt="" />
                </div>
                <span>تهران ، بزرگراه شهید حسن رفسنجانی هتل قلب....</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={watchIcon} alt="" />
                </div>
                <span>14:00 بعداظهر</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={CalendarIcon} alt="" />
                </div>
                <span>یکشنبه 16 مرداد ماه 1400</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={MealIcon} alt="" />
                </div>
                <span>عصرانه ، شام</span>
              </div>
            </div>
            <div className="buttons-container">
              <button className="buttons__capacity btn disabled">ظرفیت ثبت نام تکمیل</button>
              <button className="buttons__see-details btn third">مشاهده جزئیات</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="current-events__container">
          <div className="current-events__container__image">
            <img src={EventSpaceImage} alt="" />
          </div>
          <div className="current-events__container__content">
            <figure className="content__header">
              <img src={EventImage} alt="" className="content__header__image" />
              <figcaption>رویداد Dev Summit</figcaption>
              <summary>{text.length >= 110 ? text.slice(0, 128) + "..." : text}</summary>

              <div className="top-container">
                <div className="top-container__timer">
                  <img src={ClockImage} alt="" />
                  <time>03:07: 15</time>
                </div>
                {true && (
                  <div className="top-container__ticket">
                    <img src={TicketImage} alt="" />
                  </div>
                )}
              </div>
            </figure>

            <div className="content__list">
              <div className="list__item">
                <div className="item__image">
                  <img src={LocationIconOutline} alt="" />
                </div>
                <span>تهران ، بزرگراه شهید حسن رفسنجانی هتل قلب....</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={watchIcon} alt="" />
                </div>
                <span>14:00 بعداظهر</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={CalendarIcon} alt="" />
                </div>
                <span>یکشنبه 16 مرداد ماه 1400</span>
              </div>
              <div className="list__item">
                <div className="item__image">
                  <img src={MealIcon} alt="" />
                </div>
                <span>عصرانه ، شام</span>
              </div>
            </div>
            <div className="buttons-container">
              <button className="buttons__capacity btn disabled">ظرفیت ثبت نام تکمیل</button>
              <button className="buttons__see-details btn third">مشاهده جزئیات</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </SliderWrapper>
  );
}

export default CurrentEventsSlider;
