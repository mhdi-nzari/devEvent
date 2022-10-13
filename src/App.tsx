import { Route, Routes } from "react-router-dom";

import HomeLayout from "./pages/home";
import AnimatedPage from "./components/animatedPage";

import Navbar from "./components/navbar";
import Events from "./pages/events";
import Event from "./pages/singleEvent";
import Footer from "./components/footer";

import "./styles/App.scss";

function App() {
  return (
    <div className="main-container">
      <header>
        <Navbar />
        <h1 hidden>Dev Events Farsi</h1>
      </header>

      <div className="app">
        <AnimatedPage>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/events">
              <Route index element={<Events />} />
              <Route path=":event" element={<Event />} />
            </Route>
            <Route path="/about" element={<HomeLayout />} />
          </Routes>
        </AnimatedPage>
      </div>
      <Footer />
    </div>
  );
}

export default App;
