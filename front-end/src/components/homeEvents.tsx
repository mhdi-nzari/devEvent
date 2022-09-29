import Header from "./header";

import CompassIcon from "../assists/icons/compass.svg";
import MultiEventSlider from "components/multiEventSlider";

import "../styles/homeEvents.scss";

function HomeEvents() {
  return (
    <section className="home__events events">
      <Header title="رویداد های جاری" icon={CompassIcon} />

      <MultiEventSlider />
    </section>
  );
}

export default HomeEvents;
