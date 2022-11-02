import { Route, Routes } from "react-router-dom";

import HomeLayout from "./pages/home";
import AnimatedPage from "./components/animatedPage";

import Events from "./pages/events";
import Error404 from "./pages/Error404";
import Event from "./pages/singleEvent";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";

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
            <Route path="/contact" element={<HomeLayout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AnimatedPage>
      </div>
      <Footer />
    </div>
  );
}

export default App;
