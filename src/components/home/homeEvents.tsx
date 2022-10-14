import Header from "../header";

import HomeEvent from "./homeEvent";

// header icon
import CompassIcon from "../../assets/icons/compass.svg";

// demo image
import EventImage from "../../assets/mvp/dev-summit.png";
import EventSpaceImage from "../../assets/mvp/current-events-image.png";

import "../../styles/homeEvents.scss";

function HomeEvents() {
  // events demo data for MVP
  const events = [
    {
      title: "رویداد فرانت چپتر  ",
      location: "گرگان ، شهرک  غرب ، هتل ستارگان",
      locationLink: "https://goo.gl/maps/PhdByirQL8k9LTwK6",
      spaceImage: EventSpaceImage,
      eventImage: EventImage,
      time: 1213749817234,
      cost: 0,
      star: 5.0,
    },
    {
      title: "جشنواره توسعه دهندگان",
      location: "ایران ، اصفهان ، اصفهان ، تالار خوارزمی",
      locationLink: "https://goo.gl/maps/PhdByirQL8k9LTwK6",
      spaceImage: EventSpaceImage,
      eventImage: EventImage,
      time: 1213749817234,
      cost: 2550000,
      star: 5.0,
    },
    {
      title: "مجموعه ورکشاپ آموزش تجربه",
      location: "ایران ، تهران ، تهران ، کاخ گلستان",
      locationLink: "https://goo.gl/maps/PhdByirQL8k9LTwK6",
      spaceImage: EventSpaceImage,
      eventImage: EventImage,
      time: 1213749817234,
      cost: 1000000,
      star: 4.0,
    },
  ];

  return (
    <section className="home__events events">
      <Header title="رویداد های جاری" icon={CompassIcon} />

      <div className="events__container">
        {events.map((item, index) => (
          <HomeEvent {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default HomeEvents;
