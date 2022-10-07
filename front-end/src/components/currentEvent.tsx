import { Link } from "react-router-dom";

import Header from "components/header";

// Icons
import MealIcon from "../assets/icons/meal.svg";
import OrangeBox from "../assets/orange-box.png";
import watchIcon from "../assets/icons/watch.svg";
import ClockImage from "../assets/icons/clock.svg";
import TicketImage from "../assets/icons/ticket.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import InProgressIcon from "../assets/icons/in-progress.svg";
import LocationIconOutline from "../assets/icons/location-outline.svg";

// Event example images
import EventSpaceImage from "../assets/event-image.png";
import EventImage from "../assets/dev-summit.png";

import "../styles/currentEvent.scss";

function CurrentEvent() {
  const text =
    "اولین رویداد تخصصی جامعه توسعه دهندگان ایران که توسط مرجع رسمی فروش قالب و فروش افزونه ژاکت راه اندازی شده است";

  return (
    <section className="home__current-event current-event">
      <Header title="رویداد های در حال برگذاری " icon={InProgressIcon} />
      <div className="current-event__container">
        <div className="current-event__container__image">
          <img src={EventSpaceImage} alt="" />
        </div>
        <div className="current-event__container__content">
          <div className="content__header">
            <img src={OrangeBox} alt="" className="orange-box" />
            <img src={EventImage} alt="" className="content__header__image" />
            <figcaption>رویداد Dev Summit</figcaption>
            <summary>{text.length >= 110 ? text.slice(0, 128) + "..." : text}</summary>

            <div className="top-container">
              <div className="top-container__timer">
                <img src={ClockImage} alt="" />
                <time>
                  <span>03</span>:<span>07</span>: <span>15</span>
                </time>
              </div>
              {true && (
                <div className="top-container__ticket">
                  <img src={TicketImage} alt="" />
                </div>
              )}
            </div>
          </div>
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
            <Link to={`/events/${"Dev Summit"}`}>
              <button className="buttons__see-details btn third">مشاهده جزئیات</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentEvent;
