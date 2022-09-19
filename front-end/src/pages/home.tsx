import { useState } from "react";

import Header from "components/header";
import MultiEventSlider from "components/multiEventSlider";
import CurrentEventsSlider from "components/currentEventsSlider";
import AnimatedPage from "components/animatedPage";

import InProgressIcon from "../assists/icons/in-progress.svg";
import ChartIcon from "../assists/icons/chart.svg";
import CompassIcon from "../assists/icons/compass.svg";
import Emailicon from "../assists/icons/email.svg";
import ArrowIcon from "../assists/icons/arrow.svg";

// Supporters logos
import RTLLogo from "../assists/logos/rtl-theme.svg";
import ZhakatLogo from "../assists/logos/zhakat.svg";
import DigikalaLogo from "../assists/logos/digikala.svg";
import IranHostLogo from "../assists/logos/iran-host.svg";
import SevenLearnLogo from "../assists/logos/7learn.svg";

import "../styles/home.scss";

function HomeLayout() {
  const [SentEmail, setSentEmail] = useState(false);

  return (
    <AnimatedPage>
      <main className="home">
        <div className="home__new-event new-event">
          <span className="new-event__icon" />
          <span className="new-event__title">جدید</span>
          <span>3 رویدادی جدید اضافه شد.</span>
        </div>

        <section className="home__current-events current-events">
          <Header title="رویداد های در حال برگذاری " icon={InProgressIcon} containerClassName="current-events" />

          <CurrentEventsSlider />
        </section>

        <section className="home__supporters">
          <Header title="اسپانسرها و حامیان" icon={ChartIcon} containerClassName="supporters" />

          <div className="supporters__list">
            <img src={SevenLearnLogo} alt="" />
            <img src={DigikalaLogo} alt="" />
            <img src={ZhakatLogo} alt="" />
            <img src={RTLLogo} alt="" />
            <img src={IranHostLogo} alt="" />
          </div>
        </section>

        <section className="home__events">
          <Header title="رویداد های جاری" icon={CompassIcon} containerClassName="events" />

          <MultiEventSlider />
        </section>
        <section className="email-reciever">
          <h5>از اینا بیشترم هست!</h5>
          <p className="first">
            میتونی با عضو شدن تو خبرنامه Dev رویداد ، میتونی از رویداد ها ، ورکشاپ های آموزشی و جلسات هفتگی کارخانه
            نوآوری ها باخبر بشی .
          </p>
          <p className="last">درضمن قول می‌دیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)</p>
          <form
            className="email-reciever__form"
            onSubmit={(e: any) => {
              e.preventDefault();
              setSentEmail(true);
            }}
          >
            <img src={Emailicon} alt="" className="form__icon" />
            <div className="form__input">
              <input type="email" placeholder="آدرس ایمیل شما" />
            </div>
            <button className={`form__button ${SentEmail && "active"}`}>
              <span>{SentEmail ? "عضو شدم" : "عضو میشم"}</span>
              <img src={ArrowIcon} alt="" />
            </button>
          </form>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default HomeLayout;