import { Link } from "react-router-dom";

import Error404Image from "../assets/error-404.png";

import "../styles/Error404.scss";

function Error404() {
  return (
    <div className="error404">
      <section className="error404__path path">
        <div className="path__link link">
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="link__icon link__icon-home"
          >
            <path
              d="M1.93524 9L10.6962 1.99951C11.4274 1.41516 12.4666 1.41516 13.1979 1.99951L21.9588 9"
              stroke="#C5C5C5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.42165 3.04943L5.41693 6.29943C4.68983 6.88951 4.32627 7.18455 4.13191 7.5924C3.93756 8.00025 3.93756 8.46813 3.93756 9.4039V13C3.93756 16.7712 3.93756 18.6569 5.11051 19.8284C6.28347 21 8.17131 21 11.947 21C15.7226 21 17.6106 21 18.7834 19.8284C19.9564 18.6569 19.9564 16.7712 19.9564 13V9.4039C19.9564 8.46813 19.9564 8.00025 19.7621 7.5924C19.5677 7.18455 19.2041 6.88951 18.4771 6.29943L14.4724 3.04943C13.2627 2.06777 12.6579 1.57694 11.947 1.57694C11.2361 1.57694 10.6312 2.06777 9.42165 3.04943Z"
              stroke="#C5C5C5"
              strokeWidth="1.5"
            />
            <path d="M9.69434 15.25H14.1996" stroke="#C5C5C5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <Link to={"/"}>خانه</Link>
        </div>
        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.52796 1.53269C5.82216 1.24111 5.82427 0.766238 5.53269 0.472041C5.24111 0.177844 4.76624 0.175726 4.47204 0.467309L2.67731 2.2461C2.00134 2.91604 1.44886 3.46359 1.05706 3.95146C0.649628 4.45878 0.354695 4.97372 0.275909 5.59184C0.241364 5.86286 0.241364 6.13714 0.275909 6.40816C0.354695 7.02628 0.649628 7.54122 1.05706 8.04854C1.44886 8.53641 2.00133 9.08395 2.6773 9.75389L4.47204 11.5327C4.76624 11.8243 5.24111 11.8222 5.53269 11.528C5.82427 11.2338 5.82216 10.7589 5.52796 10.4673L3.76499 8.72C3.0495 8.01086 2.55869 7.52282 2.22659 7.10929C1.904 6.7076 1.79332 6.44958 1.76387 6.2185C1.74538 6.07341 1.74538 5.92659 1.76387 5.7815C1.79332 5.55042 1.904 5.2924 2.22659 4.89071C2.55869 4.47718 3.0495 3.98914 3.76499 3.28L5.52796 1.53269Z"
            fill="#C5C5C5"
          />
        </svg>
        <div className="path__link link">
          <Link to={"/"} className="link-active">
            404
          </Link>
        </div>
      </section>
      <section className="error404__content content">
        <div className="content__notFound">صفحه تون پیدا نشد</div>
        <h1>اوه نه ! خطای 404</h1>
        <p>
          ممکنه اشتباه سرچ کردین یا شاید ما اشتباه کردیم.
          <br />
          میتونید به صفحه اصلی برگردین شاید چیز تازه ای پیدا کردین
        </p>
        <button className="content__redirect">
          <span>برگشت به صفحه اصلی</span>
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8268 35.0438C13.5005 35.2465 15.6243 35.2465 18.5 35.2465C21.3757 35.2465 23.4995 35.2465 25.1732 35.0438M11.8268 35.0438C10.2999 34.8588 9.14763 34.5051 8.14094 33.8287C7.97167 33.7149 7.80663 33.595 7.64615 33.4692C5.64562 31.9005 4.79593 29.2854 3.09655 24.0553C1.39717 18.8251 0.547478 16.21 1.2439 13.7651C1.29977 13.5689 1.36281 13.3749 1.43289 13.1834C2.30659 10.796 4.53111 9.17984 8.98014 5.94743C13.4292 2.71501 15.6537 1.09881 18.1942 1.00561C18.398 0.998131 18.602 0.998131 18.8058 1.00561C21.3463 1.09881 23.5708 2.71501 28.0199 5.94743C32.4689 9.17984 34.6934 10.796 35.5671 13.1834C35.6372 13.3749 35.7002 13.5689 35.7561 13.7651C36.4525 16.21 35.6028 18.8251 33.9035 24.0553C32.2041 29.2854 31.3544 31.9005 29.3539 33.4692C29.1934 33.595 29.0283 33.7149 28.8591 33.8287C27.8524 34.5051 26.7001 34.8588 25.1732 35.0438M11.8268 35.0438V34.8992V29.0602C11.8268 25.3747 14.8145 22.387 18.5 22.387C22.1855 22.387 25.1732 25.3747 25.1732 29.0602V34.8992V35.0438"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
        <img src={Error404Image} alt="" className="content__image" />
      </section>
    </div>
  );
}

export default Error404;
