import callIcon from "../assists/icons/tel.svg";
import webIcon from "../assists/icon.svg";

import "../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="main-container">
        <div className="call-container">
          <span>تماس</span>
          <div className="call-image-container">
            <img src={callIcon} alt="" />
          </div>
          <div className="call-image-container">
            <img src={callIcon} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="name--logo">
            <img src={webIcon} alt="" />
            <span>رویداد</span>
          </div>
          <p>تمامی حقوق مادی و معنوی برای این وبسایت محفوظ است. ©1400</p>
        </div>
        <div className="links">
          <a>درباره</a>
          <a>قوانین</a>
          <a>خط مشی</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
