import { useState } from "react";

import Emailicon from "../assets/icons/email.svg";
import ArrowIcon from "../assets/icons/arrow.svg";

import "../styles/emailReceiver.scss";

function EmailReceiver() {
  const [SentEmail, setSentEmail] = useState(false);

  return (
    <section className="email-reciever">
      <h5>از اینا بیشترم هست!</h5>
      <p className="first">
        میتونی با عضو شدن تو خبرنامه Dev رویداد ، میتونی از رویداد ها ، ورکشاپ های آموزشی و جلسات هفتگی کارخانه نوآوری
        ها باخبر بشی .
      </p>
      <p className="last">درضمن قول می‌دیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)</p>
      <form
        className="email-reciever__form"
        onSubmit={(e: any) => {
          e.preventDefault();
          setSentEmail(true);
        }}
      >
        <img src={Emailicon} alt="" className="form__icon" />
        <div className="form__input">
          <input type="email" placeholder="آدرس ایمیل شما" />
        </div>
        <button className={`form__button ${SentEmail && "active"}`}>
          <span>{SentEmail ? "عضو شدم" : "عضو میشم"}</span>
          <img src={ArrowIcon} alt="" />
        </button>
      </form>
    </section>
  );
}

export default EmailReceiver;
