import { Link, useLocation } from "react-router-dom";

import ArrowOutlineIcon from "../assists/icons/arrow-ouline.svg";
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
import LineArrow from "../assists/icons/line-arrow.svg";
import ChartIcon from "../assists/icons/linear-chart.svg";

import "../styles/event.scss";
import SliderWrapper from "components/sliderWrapper";
import { SwiperSlide } from "swiper/react";
import MultiEventSlider from "components/multiEventSlider";

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
    <main className="event">
      <section className="event__path__container">
        <Link to={"/"}>خانه</Link>
        <img src={ArrowOutlineIcon} alt="" />

        <Link to={"/events"}>رویدادها</Link>
        <img src={ArrowOutlineIcon} alt="" />

        <Link to={`/events/${eventName.replaceAll(" ", "-")}`}>رویداد {eventName}</Link>
      </section>

      <div className="event__container">
        <header className="container__header">
          <img src={InProgressIcon} alt="" />
          <h2>رویداد {eventName}</h2>
        </header>

        <div className="container__content">
          <section className="content__section">
            <header className="section__header">
              <div className="haeder__right">
                <figure className="right__organizer">
                  <div className="organizer-logo">
                    <img src={hamyarLogo} alt="" />
                  </div>
                  <div className="organizer-name">
                    <h4>برگزار کننده | حامی رویداد</h4>
                    <figcaption>همیار اکادمی</figcaption>
                  </div>
                </figure>
                <figure className="right__title">
                  <div className="title_image">
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
                <SliderWrapper direction="vertical" pagination>
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
            </header>
            <div className="section__dscr">
              <h6>توضیحات</h6>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
              <button>مشاهده همه</button>
            </header>
            <div className="event__watch">
              <img src={hamyarSpace} alt="" />
              <button>
                <img src={RedirectIcon} alt="" />
                <span>مشاهده رویداد</span>
              </button>
            </div>
            <header className="sidebar__header second">
              <div className="header__icon-title">
                <div className="header__icon">
                  <img src={MoreIcon} alt="" />
                </div>
                <h2>رویداد هفته آینده</h2>
              </div>
              <button>مشاهده همه</button>
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
                <button>
                  <img src={LineArrow} alt="" />
                </button>
              </div>
              <div className="more-events__event">
                <div className="event__image">
                  <img src={hamyarSpace} alt="" />
                </div>
                <div className="event__content">
                  <h6>رویداد Skillup Quera</h6>
                  <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                </div>
                <button>
                  <img src={LineArrow} alt="" />
                </button>
              </div>
              <div className="more-events__event">
                <div className="event__image">
                  <img src={hamyarSpace} alt="" />
                </div>
                <div className="event__content">
                  <h6>رویداد Skillup Quera</h6>
                  <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                </div>
                <button>
                  <img src={LineArrow} alt="" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="event__events">
        <div className="events__header">
          <img src={ChartIcon} alt="" />
          <h2>رویداد های دیگر ....</h2>
        </div>

        <MultiEventSlider />
      </section>
    </main>
  );
}

export default Event;
