import Comment from "./comment";

import CommentIcon from "../../assets/icons/comment.svg";

import "../../styles/comments.scss";
import CreateComment from "./createComment";

type comment = {
  name: string;
  date: string;
  time: string;
  likesCount: number;
  profile: string;
  positions: string[];
  text: string;
  replies: reply[];
};

type reply = {
  name: string;
  date: string;
  time: string;
  likesCount: number;
  profile: string;
  positions: string[];
  text: string;
};

interface Props {
  comments: comment[];
}

function Comments(props: Props) {
  console.log(props.comments);
  return (
    <section className="event__comments comments">
      <div className="comments__header header">
        <img src={CommentIcon} alt="" />
        <h2>نظرات شرکت کنندگان</h2>
        <span className="header__count">
          (<span>{props.comments.length}</span> نظر)
        </span>
      </div>

      <div className="comments__content content">
        <div className="comments__container">
          <CreateComment />

          {props.comments.map((item, index) => (
            <Comment {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;
