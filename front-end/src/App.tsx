import { Route, Routes } from "react-router-dom";

import HomeLayout from "layouts/home";

import Navbar from "components/navbar";
import Events from "components/events";
import Event from "components/event";
import Footer from "components/footer";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/">
            <Route index element={<HomeLayout />} />
            <Route path="events">
              <Route index element={<Events />} />
              <Route path=":event" element={<Event />} />
            </Route>
            <Route path="timetable" element={<HomeLayout />} />
            <Route path="about" element={<HomeLayout />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
