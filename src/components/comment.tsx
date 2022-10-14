import Reply from "././reply";

import AavandProfile from "../assets/mvp/aavand.png";

function Comment() {
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__profile">
          <img src={AavandProfile} alt="" />
        </div>
        <div className="comment__content">
          <div className="content__header">
            <div className="comment__data">
              <div className="data__name-date">
                <h3>ایمان مدائنی</h3>
                <time>1400/06/05</time>
                <span>8:56 بعد از ظهر</span>
                <div className="buttons">
                  <button className="name-date__edit">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.9969 21.1537H13.1772C12.7309 21.1537 12.3687 20.7914 12.3687 20.3451C12.3687 19.8987 12.7309 19.5365 13.1772 19.5365H20.9969C21.4432 19.5365 21.8055 19.8987 21.8055 20.3451C21.8055 20.7914 21.4432 21.1537 20.9969 21.1537Z"
                        fill="#494949"
                      />
                      <mask id="mask0_974_252" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="22">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.781738 0.734497H19.3046V21.1537H0.781738V0.734497Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_974_252)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.76 2.90869L2.60946 15.6036C2.4251 15.8343 2.35717 16.1319 2.4251 16.4176L3.1593 19.528L6.43572 19.487C6.7473 19.4838 7.03516 19.3447 7.22599 19.1075C10.6943 14.7681 17.3065 6.49453 17.494 6.25196C17.6709 5.96517 17.7399 5.5598 17.6471 5.16952C17.5523 4.76953 17.3032 4.42992 16.9442 4.21322C16.8677 4.16039 15.051 2.75021 14.995 2.706C14.3114 2.15831 13.3142 2.25319 12.76 2.90869ZM2.52105 21.1538C2.14694 21.1538 1.82135 20.8972 1.73402 20.5317L0.851034 16.7895C0.668831 16.0144 0.849956 15.2144 1.34697 14.5934L11.5029 1.89094C11.5072 1.88663 11.5105 1.88124 11.5148 1.87692C12.6285 0.54544 14.6424 0.349221 16.0008 1.43921C16.0548 1.48125 17.8585 2.88281 17.8585 2.88281C18.514 3.2731 19.0261 3.97064 19.2201 4.79649C19.4131 5.61371 19.273 6.4568 18.8234 7.16944C18.79 7.22227 18.7608 7.26755 8.48847 20.1188C7.99361 20.7355 7.25186 21.0945 6.45513 21.1042L2.53183 21.1538H2.52105Z"
                          fill="#494949"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.1161 10.0976C15.9436 10.0976 15.7711 10.0426 15.6234 9.93046L9.74551 5.41527C9.39188 5.14359 9.32504 4.63687 9.59673 4.28109C9.86949 3.92746 10.3762 3.8617 10.7309 4.13338L16.6099 8.64749C16.9636 8.91918 17.0304 9.42698 16.7576 9.78168C16.5991 9.98868 16.3587 10.0976 16.1161 10.0976Z"
                        fill="#494949"
                      />
                    </svg>
                  </button>
                  <button className="name-date__reply">پاسخ دادن</button>
                </div>
              </div>
            </div>
            <div className="data__position">
              <span>توسعه دهنده فرانت اند </span> <span>|</span> <span>عضو انجمن برنامه نویسان</span>
            </div>
          </div>
          <p className="comment__text">
            سلام . از اینکه در چنین رویداد با این سطح از تجربه و دانش افراد شرکت کردم راضی هستم :) پذیرایی عالی بود و
            حرف نداشت .امیدوارم سال بعد بهتر و پرقدرت از امسال باز هم برگذار بشه . دکتر آوند بعنوان ارائه کننده اطلاعات
            بسیار جامع و مفیدی ارائه و انتقال دادن. در کل حرف نداشت 👌
          </p>
          <button className="comment__like">
            <span className="like__count">23</span>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.00001 6.77673C4.2068 6.10613 4.57722 5.47603 5.14527 4.91284C5.59251 4.46941 6.05668 4.17698 6.52241 4M12.6007 2.14593C14.2743 1.08425 16.9773 0.0803204 19.3115 2.46071C24.8525 8.11136 15.3502 19 11 19C6.64988 19 -2.85249 8.11136 2.68853 2.46072C5.02272 0.0803466 7.72564 1.08427 9.39929 2.14593C10.345 2.74582 11.655 2.74582 12.6007 2.14593Z"
                stroke="#FF4E4E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="comment__replies">
        <Reply />
      </div>
    </div>
  );
}

export default Comment;
