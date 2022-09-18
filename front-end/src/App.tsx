import { Route, Routes } from "react-router-dom";

import HomeLayout from "pages/home";

import Navbar from "components/navbar";
import Events from "pages/events";
import Event from "pages/event";
import Footer from "components/footer";

import "./styles/App.scss";

function App() {
  return (
    <div className="main-container">
      <header>
        <Navbar />
        <h1 hidden>Dev Events Farsi</h1>
      </header>
      
      <div className="app">
        <Routes>
          <Route path="/">
            <Route index element={<HomeLayout />} />
          </Route>
          <Route path="/events">
            <Route index element={<Events />} />
            <Route path=":event" element={<Event />} />
          </Route>
          <Route path="/timetable" element={<HomeLayout />} />
          <Route path="/about" element={<HomeLayout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
