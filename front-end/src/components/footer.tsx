import callIcon from "../assists/icons/tel.svg";
import webIcon from "../assists/icon.svg";

import "../styles/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container__call-us">
          <span>تماس</span>
          <a href="https://google.com" target={"_blank"} rel="noreferrer">
            <img src={callIcon} alt="" />
          </a>
          <a href="https://google.com" target={"_blank"} rel="noreferrer">
            <img src={callIcon} alt="" />
          </a>
        </div>
        <figure className="footer__container__info">
          <div className="info__name-logo">
            <img src={webIcon} alt="" />
            <figcaption>رویداد</figcaption>
          </div>
          <p>تمامی حقوق مادی و معنوی برای این وبسایت محفوظ است. ©1400</p>
        </figure>
        <div className="footer__container__links">
          <a>درباره</a>
          <a>قوانین</a>
          <a>خط مشی</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
