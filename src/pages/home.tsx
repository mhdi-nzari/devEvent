import AnimatedPage from "../components/animatedPage";
import { EmailReceiver, CurrentEvent, HomeEvents, Supporters, NewEvent } from "../components/home";

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
