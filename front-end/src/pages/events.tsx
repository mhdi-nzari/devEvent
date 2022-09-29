import AnimatedPage from "components/animatedPage";
import EventsFilter from "components/eventsFilter";
import PathContainer from "components/pathContainer";

import "../styles/events.scss";

function Events() {
  return (
    <AnimatedPage>
      <div style={{ padding: " 10rem 1rem 5rem 1rem" }}>
        <PathContainer />
        <EventsFilter/>
      </div>
    </AnimatedPage>
  );
}

export default Events;
