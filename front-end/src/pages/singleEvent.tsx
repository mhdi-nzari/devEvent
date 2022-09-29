import { Link, useLocation } from "react-router-dom";
import AnimatedPage from "components/animatedPage";
import PathContainer from "components/pathContainer";

import SliderWrapper from "../components/sliderWrapper";
import { SwiperSlide } from "swiper/react";
// Icons
import InProgressIcon from "../assists/icons/in-progress.svg";
import CheckIcon from "../assists/icons/check-outline.svg";
import hamyarLogo from "../assists/logos/hamyar-logo.png";
import hamyarSpace from "../assists/hamyar-space.png";
import CostIcon from "../assists/icons/cost-outline.svg";
import WatchIcon from "../assists/icons/watch.svg";
import CalendarIcon from "../assists/icons/calendar.svg";
import MealIcon from "../assists/icons/meal.svg";
import RedirectIcon from "../assists/icons/redirect.svg";
import MoreIcon from "../assists/icons/more.svg";
import ChartIcon from "../assists/icons/linear-chart.svg";
import SaveIcon from "../assists/icons/save.svg";
import FillIcon from "../assists/icons/fill.svg";
import CapacityIcon from "../assists/icons/capacity.svg";
import CompassIcon from "../assists/icons/compass.svg";
import LocationIcon from "../assists/icons/location.svg";
import CostColorIcon from "../assists/icons/cost.svg";

import MapImage from "../assists/map-image.png";

import "../styles/singleEvent.scss";
import Comments from "components/comments";

function Event() {
  const location = useLocation();

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
  return (
    <AnimatedPage>
      <main className="event">
        <PathContainer eventName={eventName} />

        <div className="event__container">
          <div className={"header__container"}>
            <img src={InProgressIcon} alt="" />
            <h1>
              رویداد <span className="header__event__name">{eventName}</span>
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
                      <img src={SaveIcon} alt="" className="header__save" />
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
                    <a href="" target={"_blank"} rel="noreferrer">
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
                    <a href="https://google.com" target="_blank" rel="noreferrer" className="location__link">
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
        <section className="event__events">
          <div className="events__header">
            <img src={ChartIcon} alt="" />
            <h2>رویداد های دیگر ....</h2>
          </div>

          <div className="events__container">
            <SliderWrapper direction="horizontal" pagination={false}>
              <SwiperSlide>
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
            </SliderWrapper>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default Event;
