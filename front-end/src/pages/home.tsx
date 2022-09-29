import NewEvent from "components/newEvent";
import Supporters from "components/supporters";
import HomeEvents from "components/homeEvents";
import AnimatedPage from "components/animatedPage";
import CurrentEvent from "components/currentEvent";
import EmailReceiver from "components/emailReceiver";

import "../styles/home.scss";

function HomeLayout() {
  return (
    <AnimatedPage>
      <main className="home">
        <NewEvent />

        <CurrentEvent />

        <Supporters />

        <HomeEvents />

        <EmailReceiver />
      </main>
    </AnimatedPage>
  );
}

export default HomeLayout;
