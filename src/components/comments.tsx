import Comment from "././comment";

import CommentIcon from "./../assets/icons/comment.svg";
import DoubleTIcon from "./../assets/icons/double-t.svg";
import UnderlineColorsIcon from "./../assets/icons/underline-colors.svg";
import OrderedListIcon from "./../assets/icons/ordered-list.svg";
import UnOrderedListIcon from "./../assets/icons/unordered-list.svg";
import JustifyTextIcon from "./../assets/icons/justify-text.svg";
import RightTextIcon from "./../assets/icons/right-text.svg";
import CenterTextIcon from "./../assets/icons/right-text.svg";
import UnderlineIcon from "./../assets/icons/underline.svg";
import ItalicIcon from "./../assets/icons/italic.svg";
import BoldIcon from "./../assets/icons/bold.svg";

import "../styles/comments.scss";

function Comments() {
  return (
    <section className="event__comments">
      <div className="comments__header">
        <img src={CommentIcon} alt="" />
        <h2>نظرات شرکت کنندگان</h2>
        <span className="header__comments__count">
          (<span>15</span> نظر)
        </span>
      </div>
      <div className="comments__content">
        <div className="new-comment">
          <div className="new-comment__header">
            <select name="" id="">
              <option value="paragraph">پاراگراف</option>
              <option value="heading1">عنوان اول</option>
              <option value="heading2">عنوان دوم</option>
              <option value="heading3">عنوان سوم</option>
            </select>
            <button className="first-button">
              <img src={DoubleTIcon} alt="" />
            </button>
            <button>
              <img src={UnderlineColorsIcon} alt="" />
            </button>
            <button>
              <img src={OrderedListIcon} alt="" />
            </button>
            <button>
              <img src={UnOrderedListIcon} alt="" />
            </button>
            <button>
              <img src={JustifyTextIcon} alt="" />
            </button>
            <button>
              <img src={RightTextIcon} alt="" />
            </button>
            <button>
              <img src={CenterTextIcon} alt="" />
            </button>
            <button>
              <img src={UnderlineIcon} alt="" />
            </button>
            <button>
              <img src={ItalicIcon} alt="" />
            </button>
            <button>
              <img src={BoldIcon} alt="" />
            </button>
          </div>
          <form className="new-comment__form">
            <textarea className="new-comment__textarea" placeholder="نظر خودتون رو در مورد این برنامه بنویسید ..." />
            <div className="new-comment__button__container">
              <button>ثبت نظر</button>
            </div>
          </form>
        </div>
        <div className="comments__container">
          <Comment />
        </div>
      </div>
    </section>
  );
}

export default Comments;
