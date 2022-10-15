import Comment from "./comment";

import CommentIcon from "../../assets/icons/comment.svg";

import "../../styles/comments.scss";
import CreateComment from "./createComment";

function Comments() {
  return (
    <section className="event__comments comments">
      <div className="comments__header header">
        <img src={CommentIcon} alt="" />
        <h2>نظرات شرکت کنندگان</h2>
        <span className="header__count">
          (<span>15</span> نظر)
        </span>
      </div>

      <div className="comments__content content">
        <div className="comments__container">
          <CreateComment />

          <Comment />
        </div>
      </div>
    </section>
  );
}

export default Comments;
