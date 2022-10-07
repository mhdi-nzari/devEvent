import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";

import Comments from "components/comments";
import AnimatedPage from "components/animatedPage";
import PathContainer from "components/pathContainer";
import SliderWrapper from "../components/sliderWrapper";
import SingleEventEvents from "components/singleEventEvents";

// Icons
import InProgressIcon from "../assets/icons/in-progress.svg";
import CheckIcon from "../assets/icons/check-outline.svg";
import CostIcon from "../assets/icons/cost-outline.svg";
import WatchIcon from "../assets/icons/watch.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import MealIcon from "../assets/icons/meal.svg";
import RedirectIcon from "../assets/icons/redirect.svg";
import MoreIcon from "../assets/icons/more.svg";
import FillIcon from "../assets/icons/fill.svg";
import CapacityIcon from "../assets/icons/capacity.svg";
import MapImage from "../assets/map-image.png";

import hamyarSpace from "../assets/hamyar-space.png";
import hamyarLogo from "../assets/logos/hamyar-logo.png";

import "../styles/singleEvent.scss";

function Event() {
  const location = useLocation();

  // ! use localStorge or account to set it
  const [saved, setSaved] = useState<boolean>(false);

  const eventName = decodeURI(location.pathname.split("/")[2].replaceAll("-", " "));

  const details = [
    {
      header: "14 مرداد ماه 1400",
      icon: CalendarIcon,
    },
    {
      header: "16:00 بعداظهر",
      icon: WatchIcon,
    },
    {
      header: "صبحانه کله پاچه",
      icon: MealIcon,
    },
    {
      header: "256،000 تومان",
      icon: CostIcon,
    },
  ];

  var english = /^[A-Za-z0-9]*$/;

  const saveHandler = () => {
    setSaved((prevValue) => !prevValue);
  };

  return (
    <AnimatedPage>
      <main className="event">
        <PathContainer eventName={eventName} />

        <div className="event__container">
          <div className={"header__container"}>
            <img src={InProgressIcon} alt="" />
            <h1>
              رویداد <span className={english.test(eventName[0]) ? "english" : ""}>{eventName}</span>
            </h1>
          </div>

          <div className="container__content">
            <section className="content__section">
              <header className="section__header">
                <div className="header__top">
                  <div className="haeder__right">
                    <div className="right__header">
                      <figure className="header__right">
                        <div className="header__logo">
                          <img src={hamyarLogo} alt="" />
                        </div>
                        <div className="header__name">
                          <h4>برگزار کننده | حامی رویداد</h4>
                          <figcaption>همیار اکادمی</figcaption>
                        </div>
                      </figure>
                      <svg
                        width="26"
                        height="33"
                        viewBox="0 0 26 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`header__save ${saved ? "active" : ""}`}
                        onClick={saveHandler}
                      >
                        <path
                          d="M8.09832 9.67743C7.43024 9.67743 6.88865 10.219 6.88865 10.8871C6.88865 11.5552 7.43024 12.0968 8.09832 12.0968H17.7757C18.4438 12.0968 18.9854 11.5552 18.9854 10.8871C18.9854 10.219 18.4438 9.67743 17.7757 9.67743H8.09832Z"
                          fill="#2D264B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.676 2.62548e-05C9.92393 -0.000406838 8.24457 -0.00067103 6.84535 0.453963C4.02194 1.37134 1.80835 3.58493 0.890975 6.40834C0.436341 7.80756 0.436605 9.48692 0.437038 12.239L0.437065 24.4699C0.437054 25.9695 0.437046 27.168 0.509743 28.0909C0.581377 29.0003 0.733733 29.8629 1.19543 30.5473C2.12189 31.9208 3.73657 32.6634 5.38231 32.473C6.20246 32.3781 6.95654 31.9325 7.69363 31.395C8.44167 30.8496 9.35165 30.0696 10.4902 29.0937L10.5318 29.058C11.646 28.103 11.9632 27.8576 12.2653 27.7508C12.6999 27.5973 13.1741 27.5973 13.6087 27.7508C13.9109 27.8576 14.228 28.103 15.3422 29.058L15.3838 29.0936C16.5224 30.0696 17.4323 30.8496 18.1804 31.395C18.9175 31.9325 19.6716 32.3781 20.4917 32.473C22.1375 32.6634 23.7521 31.9208 24.6786 30.5473C25.1403 29.8629 25.2926 29.0003 25.3643 28.0909C25.437 27.168 25.437 25.9695 25.437 24.47L25.437 12.239C25.4374 9.48693 25.4377 7.80756 24.983 6.40834C24.0657 3.58493 21.8521 1.37134 19.0287 0.453963C17.6295 -0.00067103 15.9501 -0.000406838 13.198 2.62548e-05H12.676ZM7.59297 2.7549C8.57959 2.43432 9.84081 2.4194 12.937 2.4194C16.0332 2.4194 17.2944 2.43432 18.2811 2.7549C20.3679 3.43296 22.0041 5.06909 22.6821 7.15595C23.0027 8.14258 23.0176 9.40379 23.0176 12.5V24.415C23.0176 25.982 23.0167 27.0846 22.9524 27.9009C22.8862 28.742 22.7627 29.0612 22.6729 29.1944C22.2518 29.8187 21.5178 30.1563 20.7698 30.0697C20.6102 30.0513 20.2875 29.9372 19.6058 29.4401C18.9441 28.9577 18.1064 28.2408 16.9167 27.2211L16.7567 27.0837C15.8823 26.3329 15.2004 25.7473 14.4147 25.4697C13.4585 25.1319 12.4155 25.1319 11.4593 25.4697C10.6736 25.7473 9.99174 26.3329 9.11738 27.0837L8.95735 27.2211C7.76766 28.2408 6.92991 28.9577 6.26825 29.4401C5.58655 29.9372 5.26384 30.0513 5.10425 30.0697C4.35618 30.1563 3.62224 29.8187 3.20112 29.1944C3.11128 29.0612 2.98787 28.742 2.92162 27.9009C2.85731 27.0846 2.85641 25.982 2.85641 24.415V12.5C2.85641 9.40379 2.87133 8.14258 3.19191 7.15595C3.86997 5.06909 5.5061 3.43296 7.59297 2.7549Z"
                          fill="#2D264B"
                        />
                      </svg>
                    </div>
                    <figure className="right__title">
                      <div className="title__image">
                        <img src={CheckIcon} alt="" />
                      </div>
                      <figcaption>بوت کمپ آموزشی همیار وردپرس</figcaption>
                    </figure>
                    <div className="right__details">
                      {details.map((item, index) => (
                        <figure className="details__item" key={index}>
                          <div>
                            <img src={item.icon} alt="" />
                          </div>
                          <figcaption>{item.header}</figcaption>
                        </figure>
                      ))}
                    </div>
                    <a href="https://google.com" target={"_blank"} rel="noreferrer">
                      <button>ثبت نام زود هنگام</button>
                    </a>
                  </div>
                  <figure className="header__left">
                    <SliderWrapper direction="horizontal" pagination>
                      <SwiperSlide>
                        <img src={hamyarSpace} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={hamyarSpace} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={hamyarSpace} alt="" />
                      </SwiperSlide>
                    </SliderWrapper>
                  </figure>
                </div>
                <div className="header__bottom">
                  <div className="header__capacity">
                    <div className="capacity__item">
                      <div className="item__logo">
                        <img src={FillIcon} alt="" />
                        <span className="item__title">تکمیل شده</span>
                      </div>
                      <span className="item__content">
                        <span className="content__count">302</span>
                        <span className="content__unit">نفر</span>
                      </span>
                    </div>
                    <div className="capacity__item">
                      <div className="item__logo">
                        <img src={CapacityIcon} alt="" />
                        <span className="item__title">تکمیل شده</span>
                      </div>
                      <span className="item__content">
                        <span className="content__count">302</span>
                        <span className="content__unit">نفر</span>
                      </span>
                    </div>
                  </div>
                  <div className="header__location">
                    <a
                      href="https://goo.gl/maps/TYNykj9YJx2pggqs6"
                      target="_blank"
                      rel="noreferrer"
                      className="location__link"
                    >
                      <img src={MapImage} alt="" />
                      <span className="link__title">لوکیشن رویداد روی نقشه</span>
                    </a>
                  </div>
                </div>
              </header>
              <div className="section__dscr">
                <h6>توضیحات</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
                  تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                  دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </section>
            <aside className="event__sidebar">
              <header className="sidebar__header">
                <div className="header__icon-title">
                  <div className="header__icon">
                    <img src={CheckIcon} alt="" className="checkIcon" />
                  </div>
                  <span>رویداد هفته آینده</span>
                </div>
                <Link to={"/events"}>
                  <button>مشاهده همه</button>
                </Link>
              </header>
              <div className="event__watch">
                <img src={hamyarSpace} alt="" />
                <a href="https://google.com" target={"_blank"} rel="noreferrer">
                  <button>
                    <img src={RedirectIcon} alt="" />
                    <span>مشاهده رویداد</span>
                  </button>
                </a>
              </div>
              <header className="sidebar__header second">
                <div className="header__icon-title">
                  <div className="header__icon">
                    <img src={MoreIcon} alt="" />
                  </div>
                  <h2>رویداد هفته آینده</h2>
                </div>
                <Link to={"/events"}>
                  <button>مشاهده همه</button>
                </Link>
              </header>
              <div className="sidebar__more-events">
                <div className="more-events__event">
                  <div className="event__image">
                    <img src={hamyarSpace} alt="" />
                  </div>
                  <div className="event__content">
                    <h6>رویداد Skillup Quera</h6>
                    <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                  </div>
                  <Link to={`/events/${"Skillup Quera".replaceAll(" ", "-")}`}>
                    <button>
                      <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                          fill="#DA9E03"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className="more-events__event">
                  <div className="event__image">
                    <img src={hamyarSpace} alt="" />
                  </div>
                  <div className="event__content">
                    <h6>رویداد Skillup Quera</h6>
                    <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                  </div>
                  <Link to={`/events/${"Skillup Quera".replaceAll(" ", "-")}`}>
                    <button>
                      <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                          fill="#DA9E03"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className="more-events__event">
                  <div className="event__image">
                    <img src={hamyarSpace} alt="" />
                  </div>
                  <div className="event__content">
                    <h6>رویداد Skillup Quera</h6>
                    <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                  </div>
                  <Link to={`/events/${"Skillup Quera".replaceAll(" ", "-")}`}>
                    <button>
                      <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                          fill="#DA9E03"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <form className="sidebar__email-newsletters">
                <input type="email" placeholder="در خبرنامه ایمیلی ما عضو شوید" />
                <button>ثبت</button>
              </form>
            </aside>
          </div>
        </div>

        <Comments />

        <SingleEventEvents />
      </main>
    </AnimatedPage>
  );
}

export default Event;
