import { useState } from "react";

import { Link } from "react-router-dom";

import EventPreview from "../components/eventPreview";
import AnimatedPage from "../components/animatedPage";
import LocationRadio from "../components/locationRadio";
import EventTypeCheckbox from "../components/eventTypeCheckbox";
import FilterCollpaseExpand from "./../components/filterCollpaseExpand";
import MobileEventsFilterContainer from "../components/mobileEventsFilterContainer";

import FilterIcon from "../assets/icons/FilterIcon";
import hamyarLogo from "../assets/mvp/hamyar-logo.png";
import hamyarSpace from "../assets/mvp/hamyar-space.png";

import Wave from "./../assets/icons/wave.svg";

import "../styles/events.scss";
import { CSSTransition } from "react-transition-group";

function Events() {
  const DEFAULTCOSTMAX = 750000;

  const [maxCost, setMaxCost] = useState<number>(DEFAULTCOSTMAX);

  const [isMobileFilterSectionCollapsed, setIsMobileFilterSectionCollapsed] = useState(true);

  const SetMobileSectionFilterCollapsed = () => {
    setIsMobileFilterSectionCollapsed((prevValue) => !prevValue);
  };

  const MaxCostHandler = (e: any) => {
    setMaxCost(e.target.value);
  };

  // first we need to convert maxCost to string because of split method then reverse array because we
  // seprate numbers from right to left then join charaters to together to make it ready for match method
  // in which this will seprate 3 by 3 charaters after that we need to reverse these 3 by 3 charaters
  // because these reversed in the first stage
  // in the end due to reversing cost we have to reverse it again to neutralize the first one.
  const sepratedMaxCost = maxCost
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.map((item) => item.toString().split("").reverse().join(""))
    ?.reverse()
    ?.join(",");

  return (
    <AnimatedPage>
      <div className="events">
        <div className="events_header">
          <span>اینجا دست خالی برنمیگردی</span>
          <h2>رویداد ها ، همایش ، کمپین های آموزشی و جشنواره ها</h2>
          <p>
            اینجا میتونی همه رویداد ها جشنواره ها و و بوت کمپ های آموزشی رو پیدا کنی و بدون دغدغه از جزئیات اونا باخبر
            بشی .
          </p>
          <img src={Wave} alt="" />
        </div>
        <div className="header_filter">
          <div className="filter_menu">
            <div className="menu_item">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.0406 28.6264C29.6501 28.2359 29.0169 28.2359 28.6264 28.6264C28.2359 29.0169 28.2359 29.6501 28.6264 30.0406L30.0406 28.6264ZM35.2929 36.7072C35.6834 37.0977 36.3166 37.0977 36.7071 36.7072C37.0976 36.3167 37.0976 35.6835 36.7071 35.293L35.2929 36.7072ZM13.1861 7.09026C13.7316 7.00386 14.1038 6.49162 14.0174 5.94613C13.931 5.40065 13.4187 5.02848 12.8732 5.11488L13.1861 7.09026ZM5.11486 12.8733C5.02846 13.4187 5.40063 13.931 5.94611 14.0174C6.4916 14.1038 7.00384 13.7316 7.09024 13.1861L5.11486 12.8733ZM28.6264 30.0406L35.2929 36.7072L36.7071 35.293L30.0406 28.6264L28.6264 30.0406ZM16 30C8.26803 30 2 23.732 2 16H0C0 24.8366 7.16346 32 16 32V30ZM30.0001 16C30.0001 23.732 23.732 30 16 30V32C24.8366 32 32.0001 24.8366 32.0001 16H30.0001ZM16 1.99997C23.732 1.99997 30.0001 8.268 30.0001 16H32.0001C32.0001 7.16343 24.8366 -3.05176e-05 16 -3.05176e-05V1.99997ZM16 -3.05176e-05C7.16346 -3.05176e-05 0 7.16343 0 16H2C2 8.268 8.26803 1.99997 16 1.99997V-3.05176e-05ZM12.8732 5.11488C8.87957 5.74742 5.7474 8.87959 5.11486 12.8733L7.09024 13.1861C7.58723 10.0482 10.0482 7.58725 13.1861 7.09026L12.8732 5.11488Z"
                  fill="#DA9E03"
                />
              </svg>

              <input type="text" placeholder="دنبال چی هستی این مهمه !!" />
            </div>
            <div className="menu_seprater" />
            <div className="menu_item">
              <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 1.24997C7.26801 1.24997 1 7.51798 1 15.25V15.8229C1 18.7727 1.93112 21.6305 3.63617 24H3.625L3.66523 24.0402C4.01369 24.5208 4.39412 24.9812 4.8052 25.418C5.42465 26.0762 15 33.625 15 33.625C16.3974 32.9132 24.0545 26.6295 25.1948 25.418C25.6102 24.9766 25.9942 24.5111 26.3458 24.025L26.375 24H26.3638C28.0688 21.6305 29 18.7727 29 15.8229V15.25C29 7.51798 22.732 1.24997 15 1.24997Z"
                  stroke="#DA9E03"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6875 15.25C20.6875 12.1089 18.1411 9.56247 15 9.56247C11.8589 9.56247 9.3125 12.1089 9.3125 15.25C9.3125 18.3911 11.8589 20.9375 15 20.9375C18.1411 20.9375 20.6875 18.3911 20.6875 15.25Z"
                  stroke="#DA9E03"
                  strokeWidth="2"
                />
              </svg>

              <select>
                <option value="" disabled selected>
                  کجا باشه خوبه ؟
                </option>
                <option value="">اصفهان</option>
                <option value="">تهران</option>
                <option value="">شیراز</option>
              </select>
            </div>
            <div className="menu_seprater" />
            <div className="menu_item">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 26.5C15 27.0523 15.4477 27.5 16 27.5C16.5523 27.5 17 27.0523 17 26.5H15ZM17 5.49997C17 4.94768 16.5523 4.49997 16 4.49997C15.4477 4.49997 15 4.94768 15 5.49997H17ZM19.7648 10.6151C20.041 11.0934 20.6526 11.2573 21.1309 10.9811C21.6092 10.705 21.773 10.0934 21.4969 9.61509L19.7648 10.6151ZM20.0675 9.13935L19.2015 9.63935V9.63935L20.0675 9.13935ZM14.6951 15.5199L15.0403 14.5814L15.0403 14.5814L14.6951 15.5199ZM17.3052 16.48L17.6504 15.5415L17.6504 15.5415L17.3052 16.48ZM11.9328 22.8606L11.0668 23.3606H11.0668L11.9328 22.8606ZM12.2355 21.3849C11.9593 20.9066 11.3477 20.7427 10.8695 21.0188C10.3912 21.295 10.2273 21.9066 10.5034 22.3849L12.2355 21.3849ZM17.9918 24.4841L17.4918 23.6181L17.9918 24.4841ZM14.0085 7.51584L14.5085 8.38187H14.5085L14.0085 7.51584ZM30 16C30 23.732 23.732 30 16 30V32C24.8366 32 32 24.8365 32 16H30ZM16 30C8.26801 30 2 23.732 2 16H0C0 24.8365 7.16344 32 16 32V30ZM2 16C2 8.26798 8.26801 1.99997 16 1.99997V-3.05176e-05C7.16344 -3.05176e-05 0 7.16341 0 16H2ZM16 1.99997C23.732 1.99997 30 8.26798 30 16H32C32 7.16341 24.8366 -3.05176e-05 16 -3.05176e-05V1.99997ZM21.4969 9.61509L20.9336 8.63935L19.2015 9.63935L19.7648 10.6151L21.4969 9.61509ZM12.7988 22.3606L12.2355 21.3849L10.5034 22.3849L11.0668 23.3606L12.7988 22.3606ZM16.96 17.4185C19.6937 18.424 20.0143 22.1617 17.4918 23.6181L18.4918 25.3501C22.4828 23.0459 21.9756 17.1323 17.6504 15.5415L16.96 17.4185ZM13.5085 6.64982C9.51749 8.95403 10.0248 14.8676 14.3499 16.4585L15.0403 14.5814C12.3066 13.5759 11.986 9.83824 14.5085 8.38187L13.5085 6.64982ZM17 26.5V25.0735H15V26.5H17ZM17 25.0735V16H15V25.0735H17ZM17.4918 23.6181C17.0023 23.9007 16.475 24.0484 15.9499 24.0748L16.0501 26.0723C16.8846 26.0304 17.7214 25.7949 18.4918 25.3501L17.4918 23.6181ZM15.9499 24.0748C14.7005 24.1375 13.4651 23.5146 12.7988 22.3606L11.0668 23.3606C12.1228 25.1896 14.0805 26.1711 16.0501 26.0723L15.9499 24.0748ZM14.3499 16.4585L15.6548 16.9385L16.3452 15.0615L15.0403 14.5814L14.3499 16.4585ZM15.6548 16.9385L16.9601 17.4185L17.6504 15.5415L16.3452 15.0614L15.6548 16.9385ZM17 16L17 6.92643H15L15 16H17ZM17 6.92643V5.49997H15V6.92643H17ZM20.9336 8.63935C19.8775 6.8102 17.9195 5.82871 15.9498 5.92769L16.0502 7.92517C17.2997 7.86238 18.5352 8.48526 19.2015 9.63935L20.9336 8.63935ZM15.9498 5.92769C15.1155 5.96962 14.2788 6.20508 13.5085 6.64982L14.5085 8.38187C14.9979 8.09931 15.5252 7.95155 16.0502 7.92517L15.9498 5.92769Z"
                  fill="#DA9E03"
                />
              </svg>

              <select>
                <option value="">قیمتش چند باشه ؟</option>
                <option value="">اصفهان</option>
                <option value="">تهران</option>
                <option value="">شیراز</option>
              </select>
            </div>
            <button>جستجو</button>
          </div>
        </div>
        <div className="events_filterbar">
          <h3>فیلتر نتایج براساس</h3>
          <div className="filterbar__list">
            <button>دورهمی</button>
            <button>رویداد</button>
            <button>همایش</button>
            <button>جشنواره ها</button>
          </div>
        </div>
        <main>
          <aside className="sidebar upAndDownBadges">
            <form
              onChange={(e) => {
                e.preventDefault();
              }}
            >
              <div className="filter_header">
                <h5>فیلتر</h5>
                <button
                  className="filter_reset"
                  type="reset"
                  onClick={() => {
                    setMaxCost(DEFAULTCOSTMAX);
                  }}
                >
                  ریست
                </button>
              </div>
              <FilterCollpaseExpand title="قیمت">
                <div className="cost_container">
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    defaultValue={DEFAULTCOSTMAX}
                    onChange={MaxCostHandler}
                    style={{
                      background: `linear-gradient(90deg, #8D56C3 ${(maxCost * 100) / 1000000}%, #8D56C380 ${
                        (maxCost * 100) / 1000000
                      }%)`,
                    }}
                  />
                  <div className="cost_count">{maxCost === 0 ? "رایگان" : `حداکثر تا ${sepratedMaxCost} تومان`}</div>
                </div>
              </FilterCollpaseExpand>
              <FilterCollpaseExpand title="مکان">
                <div className="location_container">
                  <div className="location_item">
                    <input type="radio" id={"تهران"} value={"تهران"} name={"location_filter"} defaultChecked />
                    <label htmlFor={"تهران"}>تهران</label>
                  </div>
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                  <LocationRadio title="اصفهان" />
                  <LocationRadio title="یزد" />
                </div>
              </FilterCollpaseExpand>
              <FilterCollpaseExpand title="نوع مراسم">
                <div className="type_container">
                  <div className="type_item">
                    <input type="checkbox" id={"جشنواره"} value={"جشنواره"} name={"event_type_filter"} defaultChecked />
                    <label htmlFor={"جشنواره"}>جشنواره</label>
                  </div>
                  <EventTypeCheckbox title="رویداد" />
                  <EventTypeCheckbox title="بوت کمپ آموزشی" />
                  <EventTypeCheckbox title="دورهمی" />
                  <a href="">دیدن همه</a>
                </div>
              </FilterCollpaseExpand>
            </form>
          </aside>
          <section>
            <div className="banner">
              <div className="banner_logo">
                <img src={hamyarLogo} alt="" />
              </div>
              <div className="banner_content">
                <a>رویداد رفرش کانف دورهمی برنامه نویسان بک اند</a>
                <h4>
                  مکان
                  {/* <img src={LocationIcon} alt="" /> */}
                  <span>اصفهان چهارباغ نبش مسجد جامع سالن همایش قیاصی </span>
                </h4>
                <div className="content_details">
                  <div className="details_cost">
                    <span>1،500,000 </span> تومان
                  </div>
                  <div className="capacity">
                    <span style={{ color: 3 < 10 ? "red" : undefined }}>3</span> نفر تا تکمیل ظرفیت
                  </div>
                </div>
              </div>
              <div className="banner_spaces">
                {Array.apply(0, new Array(4))
                  .slice(0, 3)
                  .map((item, index) => (
                    <Link key={index} to="/events/دورهمی-برنامه-نویسان-بک-اند">
                      <img src={hamyarSpace} alt="" key={index} />
                    </Link>
                  ))}
                {Array.apply(0, new Array(5)).length > 3 ? (
                  <Link className="spaces_more" to="/events/دورهمی-برنامه-نویسان-بک-اند">
                    <img src={hamyarSpace} alt="" />
                    <div className="more_count">
                      <span>3</span>+
                    </div>
                  </Link>
                ) : (
                  "df"
                )}
              </div>
              <div className="banner_timer">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 5.725C8.5 5.44886 8.27614 5.225 8 5.225C7.72386 5.225 7.5 5.44886 7.5 5.725H8.5ZM10.1 9.725C10.3761 9.725 10.6 9.50114 10.6 9.225C10.6 8.94886 10.3761 8.725 10.1 8.725V9.725ZM1.38765 2.00957C1.17202 2.18207 1.13706 2.49672 1.30957 2.71235C1.48207 2.92798 1.79672 2.96294 2.01235 2.79043L1.38765 2.00957ZM3.76235 1.39043C3.97798 1.21793 4.01294 0.903283 3.84043 0.687652C3.66793 0.472022 3.35328 0.437061 3.13765 0.609566L3.76235 1.39043ZM13.9877 2.79043C14.2033 2.96294 14.5179 2.92798 14.6904 2.71235C14.8629 2.49672 14.828 2.18207 14.6123 2.00957L13.9877 2.79043ZM12.8623 0.609566C12.6467 0.437061 12.3321 0.472022 12.1596 0.687652C11.9871 0.903283 12.022 1.21793 12.2377 1.39043L12.8623 0.609566ZM8 8.175H7.5H8ZM7.5 5.725L7.5 8.175H8.5L8.5 5.725H7.5ZM14.5 8.525C14.5 12.1149 11.5899 15.025 8 15.025V16.025C12.1421 16.025 15.5 12.6671 15.5 8.525H14.5ZM8 15.025C4.41015 15.025 1.5 12.1149 1.5 8.525H0.5C0.5 12.6671 3.85786 16.025 8 16.025V15.025ZM1.5 8.525C1.5 4.93515 4.41015 2.025 8 2.025V1.025C3.85786 1.025 0.5 4.38286 0.5 8.525H1.5ZM8 2.025C11.5899 2.025 14.5 4.93515 14.5 8.525H15.5C15.5 4.38286 12.1421 1.025 8 1.025V2.025ZM2.01235 2.79043L3.76235 1.39043L3.13765 0.609566L1.38765 2.00957L2.01235 2.79043ZM14.6123 2.00957L12.8623 0.609566L12.2377 1.39043L13.9877 2.79043L14.6123 2.00957ZM9.05 9.725H10.1V8.725H9.05V9.725ZM7.5 8.175C7.5 9.03104 8.19396 9.725 9.05 9.725V8.725C8.74624 8.725 8.5 8.47876 8.5 8.175H7.5Z"
                    fill="white"
                  />
                </svg>

                <time>
                  <span>03 </span>: <span>07 </span>: <span>15 </span>
                </time>
              </div>
              <Link className="redirect_button" to="/events/دورهمی-برنامه-نویسان-بک-اند">
                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                    fill="#DA9E03"
                  />
                </svg>
              </Link>
            </div>
            <div className="filter_header">
              <div>
                <span>فیلتر براساس</span>
                <select>
                  <option value="rate">امتیاز</option>
                  <option value="date">زمان</option>
                  <option value="cost">قیمت</option>
                </select>
              </div>
              <span className="filter_count">
                <span>100</span> آیتم توسط جستجو پیدا شد{" "}
              </span>
            </div>
            <button className="filter__mobileFilterButton" onClick={SetMobileSectionFilterCollapsed}>
              <FilterIcon />
              <p>فیلتر</p>
            </button>

            <div className="events_box">
              {Array.apply(0, new Array(5)).map((item, index) => (
                <EventPreview />
              ))}
            </div>
          </section>
        </main>
        <div className="events__mobileFilterBlock mobileFilterBlock">
          {!isMobileFilterSectionCollapsed && (
            <button className="mobileFilterBlock__closer" onClick={SetMobileSectionFilterCollapsed} />
          )}
          <CSSTransition
            in={!isMobileFilterSectionCollapsed}
            timeout={1000}
            classNames="mobileFilterSection"
            unmountOnExit
          >
            <div className="mobileFilterBlock__content content">
              <span className="content__closerBadge" onClick={SetMobileSectionFilterCollapsed} />
              <p className="content__header">فیلتر</p>
              <div className="filter_item" style={{ height: true ? "5rem" : "fit-content" }}>
                <MobileEventsFilterContainer title="نوع مراسم">
                  <div className="location_container">
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                    <LocationRadio title="اصفهان" />
                    <LocationRadio title="یزد" />
                  </div>
                </MobileEventsFilterContainer>
                <MobileEventsFilterContainer title="مکان مراسم">
                  <div className="type_container">
                    <div className="type_item">
                      <input
                        type="checkbox"
                        id={"جشنواره"}
                        value={"جشنواره"}
                        name={"event_type_filter"}
                        defaultChecked
                      />
                      <label htmlFor={"جشنواره"}>جشنواره</label>
                    </div>
                    <EventTypeCheckbox title="رویداد" />
                    <EventTypeCheckbox title="بوت کمپ آموزشی" />
                    <EventTypeCheckbox title="دورهمی" />
                  </div>
                </MobileEventsFilterContainer>
                <MobileEventsFilterContainer title="محدوده قیمت">
                  <div className="cost_container">
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      defaultValue={DEFAULTCOSTMAX}
                      onChange={MaxCostHandler}
                      style={{
                        background: `linear-gradient(90deg, #8D56C3 ${(maxCost * 100) / 1000000}%, #8D56C380 ${
                          (maxCost * 100) / 1000000
                        }%)`,
                      }}
                    />
                    <div className="cost_count">{maxCost === 0 ? "رایگان" : `حداکثر تا ${sepratedMaxCost} تومان`}</div>
                  </div>
                </MobileEventsFilterContainer>
                <div className="content__buttons buttons">
                  <button className="buttons__submit">تایید</button>
                  <button className="buttons__reset">لغو فیلتر</button>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Events;
