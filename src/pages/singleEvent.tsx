import { useLocation } from "react-router-dom";

import AnimatedPage from "../components/animatedPage";
import PathContainer from "../components/pathContainer";
import Sidebar from "../components/singleEvent/sidebar";
import Comments from "../components/singleEvent/comments";

import SingleEventEvents from "../components/singleEvent/singleEventEvents";

// Icons
import InProgressIcon from "./../assets/icons/in-progress.svg";
import CheckIcon from "./../assets/icons/check-outline.svg";
import FillIcon from "./../assets/icons/fill.svg";
import CapacityIcon from "./../assets/icons/capacity.svg";

import "../styles/singleEvent.scss";
import EventInfo from "../components/singleEvent/eventInfo";

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
              رویداد <span className={english.test(eventName[0]) ? "english" : ""}>{eventName}</span>
            </h1>
          </div>

          <div className="container__content">
            <EventInfo />

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
