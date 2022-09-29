import Header from "./header";

import FilterIcon from "../assists/icons/filter-outline.svg";
import SearchIcon from "../assists/icons/search-outline.svg";
import LocationIcon from "../assists/icons/location-outline.svg";
import CostIcon from "../assists/icons/cost-outline.svg";
import LinearChartIcon from "../assists/icons/linear-chart.svg";

import "../styles/eventsFilter.scss";

function EventsFilter() {
  return (
    <section className="event-filter">
      <Header icon={FilterIcon} title="فیلتر رویداد براساس" />
      <form className="filter__form">
        <div className="filter-item"> 
          <img src={SearchIcon} alt="" />
          <input type="text" />
        </div>
        <div className="filter-item">
          <img src={LocationIcon} alt="" />
          <option value="ig"></option>
          <select name="" id="" >
            <option  id="">
              نافینگ
            </option>
            <option  id="">
              بافینگ
            </option>
          </select>
        </div>
        <div className="filter-item">
          <img src={CostIcon} alt="" />
          <input type="text" />
        </div>
        <div className="filter-item">
          <img src={LinearChartIcon} alt="" />
          <input type="text" />
        </div>
        <button className="filter__list__button">جستجو</button>
      </form>
    </section>
  );
}

export default EventsFilter;
