import { useLocation } from "react-router-dom";

import AnimatedPage from "../components/animatedPage";
import PathContainer from "../components/pathContainer";
import Sidebar from "../components/singleEvent/sidebar";
import Comments from "../components/singleEvent/comments";
import EventInfo from "../components/singleEvent/eventInfo";
import SingleEventEvents from "../components/singleEvent/singleEventEvents";

import hamyarLogo from "../assets/mvp/hamyar-logo.png";
import hamyarSpace from "../assets/mvp/hamyar-space.png";
// Icons
import InProgressIcon from "./../assets/icons/in-progress.svg";

import "../styles/singleEvent.scss";

function Event() {
  const location = useLocation();

  const eventName = decodeURI(location.pathname.split("/")[2].replaceAll("-", " "));

  var english = /^[A-Za-z0-9]*$/;

  return (
    <AnimatedPage>
      <main className="event">
        <PathContainer eventName={eventName} />

        <div className="event__container">
          <div className={"header__container"}>
            <img src={InProgressIcon} alt="" />
            <h1>
              <span className={english.test(eventName[0]) ? "english" : ""}>{eventName}</span>
            </h1>
          </div>

          <div className="container__content">
            <EventInfo
              title={eventName}
              supporter="همیار اکادمی"
              date="14 مرداد ماه 1400"
              time="16:00 بعداظهر"
              meal="صبحانه کله پاچه"
              cost={256000}
              capacityNum={302}
              filledNum={285}
              link="https://www.google.com/"
              locationLink="https://goo.gl/maps/TYNykj9YJx2pggqs6"
              saved={false}
              logo={hamyarLogo}
              images={[hamyarSpace, hamyarSpace, hamyarSpace]}
              dsrc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
            />

            <Sidebar />
          </div>
        </div>

        <Comments />

        <SingleEventEvents />
      </main>
    </AnimatedPage>
  );
}

export default Event;
