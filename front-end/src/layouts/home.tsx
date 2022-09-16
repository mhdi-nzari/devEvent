import InProgressIcon from "../assists/icons/in-progress.svg";
import EventSpaceImage from "../assists/event-image.png";
import EventImage from "../assists/dev-summit.png";
import TicketImage from "../assists/icons/ticket.svg";
import ClockImage from "../assists/icons/clock.svg";
import LocationIconOutline from "../assists/icons/location-outline.svg";
import watchIcon from "../assists/icons/watch.svg";
import CalendarIcon from "../assists/icons/calendar.svg";
import MealIcon from "../assists/icons/meal.svg";
import ChartIcon from "../assists/icons/chart.svg";
import SevenLearnLogo from "../assists/logos/7learn.svg";
import DigikalaLogo from "../assists/logos/digikala.svg";
import ZhakatLogo from "../assists/logos/zhakat.svg";
import RTLLogo from "../assists/logos/rtl-theme.svg";
import IranHostLogo from "../assists/logos/iran-host.svg";
import CompassIcon from "../assists/icons/compass.svg";
import CurrentEventImage from "../assists/current-events-image.png";
import LocationIcon from "../assists/icons/location.svg";
import CostIcon from "../assists/icons/cost.svg";
import MapIcon from "../assists/icons/map-outline.svg";
import likeIcon from "../assists/icons/like-outline.svg";
import starIcon from "../assists/icons/star.svg";
import Emailicon from "../assists/icons/email.svg";
import ArrowIcon from "../assists/icons/arrow.svg";

import "../styles/home.scss";

function HomeLayout() {
  const text =
    "اولین رویداد تخصصی جامعه توسعه دهندگان ایران که توسط مرجع رسمی فروش قالب و فروش افزونه ژاکت راه اندازی شده است";

  return (
    <div className="home-container">
      <div className="new-one-container">
        <span className="dot"></span>
        <span className="new-header">جدید</span>
        <span>3 رویدادی جدید اضافه شد.</span>
      </div>

      <section className="in-progress-events">
        <div className="header">
          <img src={InProgressIcon} alt="" />
          <h2>رویداد های در حال برگذاری ...</h2>
        </div>
        <div className="main-container">
          <img src={EventSpaceImage} alt="" className="event-space-image" />
          <div className="information-container">
            <div className="header">
              <img src={EventImage} alt="" className="event-image" />
              <h3>رویداد Dev Summit</h3>
              <p>{text.length >= 110 ? text.slice(0, 128) + "..." : text}</p>

              <div className="top-container">
                <div className="timer-container">
                  <img src={ClockImage} alt="" />
                  <span>03:07: 15</span>
                </div>
                {true && (
                  <div className="ticket-container">
                    <img src={TicketImage} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="details-container">
              <div className="detail">
                <div className="image-contianer">
                  <img src={LocationIconOutline} alt="" />
                </div>
                <span>تهران ، بزرگراه شهید حسن رفسنجانی هتل قلب....</span>
              </div>
              <div className="detail">
                <div className="image-contianer">
                  <img src={watchIcon} alt="" />
                </div>
                <span>14:00 بعداظهر</span>
              </div>
              <div className="detail">
                <div className="image-contianer">
                  <img src={CalendarIcon} alt="" />
                </div>
                <span>یکشنبه 16 مرداد ماه 1400</span>
              </div>
              <div className="detail">
                <div className="image-contianer">
                  <img src={MealIcon} alt="" />
                </div>
                <span>عصرانه ، شام</span>
              </div>
            </div>
            <div className="buttons-container">
              <button className="capacity">ظرفیت ثبت نام تکمیل</button>
              <button className="capacity">مشاهده جزئیات</button>
            </div>
          </div>
        </div>
      </section>
      <section className="supporters">
        <div className="header">
          <img src={ChartIcon} alt="" />
          <h2>اسپانسرها و حامیان</h2>
        </div>
        <div className="supporters-images-container">
          <img src={SevenLearnLogo} alt="" />
          <img src={DigikalaLogo} alt="" />
          <img src={ZhakatLogo} alt="" />
          <img src={RTLLogo} alt="" />
          <img src={IranHostLogo} alt="" />
        </div>
      </section>
      <section className="current-events">
        <div className="header">
          <img src={CompassIcon} alt="" />
          <h2>رویداد های جاری</h2>
        </div>
        <div className="current-events-container">
          {Array.apply(0, new Array(3)).map((item, index) => (
            <div className="current-event-container">
              <div className="header">
                <img src={CurrentEventImage} alt="" className="current-event-image" />
                <img src={EventImage} alt="" className="event-image" />
                <div className="timer-container">
                  <img src={ClockImage} alt="" />
                  <span>03:07: 15</span>
                </div>
                {index === 0 && (
                  <div className="location--rate-container">
                    <button className="see-location">
                      <span>مشاهده روی نقشه</span>
                      <img src={MapIcon} alt="" />
                    </button>
                    <div className="rate-container">
                      <div className="rate">
                        <span>5.00</span>
                        <img src={starIcon} alt="" />
                      </div>
                      <button className="like">
                        <img src={likeIcon} alt="" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="details">
                <div className="detail-container">
                  <div className="icon-container">
                    <img src={CompassIcon} alt="" />
                  </div>
                  <span>
                    {"جشنواره توسعه دهندگان".length >= 21
                      ? "جشنواره توسعه دهندگان".slice(0, 21) + " ..."
                      : "جشنواره توسعه دهندگان"}
                  </span>
                </div>
                <div className="detail-container">
                  <div className="icon-container">
                    <img src={CostIcon} alt="" />
                  </div>
                  <span>55،000 تومان</span>
                </div>
                <div className="detail-container">
                  <div className="icon-container">
                    <img src={LocationIcon} alt="" />
                  </div>
                  <span>ایران ، تهران ، قم ، کاشان اصفهان</span>
                </div>
              </div>
              <div className="details-button-container">
                <button>مشاهده جزئیات رویداد</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="email-giver">
        <h5>از اینا بیشترم هست!</h5>
        <p className="first">
          میتونی با عضو شدن تو خبرنامه Dev رویداد ، میتونی از رویداد ها ، ورکشاپ های آموزشی و جلسات هفتگی کارخانه نوآوری
          ها باخبر بشی .
        </p>
        <p className="last">درضمن قول می‌دیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)</p>
        <div className="email-container">
          <img src={Emailicon} alt="" className="email-icon" />
          <div className="input-container">
            <input type="email" placeholder="آدرس ایمیل شما" />
          </div>
          <button>
            <span>عضو میشم</span>
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomeLayout;
