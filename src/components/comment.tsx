import Reply from "././reply";

import AavandProfile from "./../assets/aavand.png";
import LikeIcon from "./../assets/icons/like.svg";
import EditIcon from "./../assets/icons/edit.svg";

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
                <button className="name-date__edit">
                  <img src={EditIcon} alt="" />
                </button>
                <button className="name-date__reply">پاسخ دادن</button>
                <button className="comment__like">
                  <span className="like__count">23</span>
                  <img src={LikeIcon} alt="" />
                </button>
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
        </div>
      </div>
      <div className="comment__replies">
        <Reply />
      </div>
    </div>
  );
}

export default Comment;
