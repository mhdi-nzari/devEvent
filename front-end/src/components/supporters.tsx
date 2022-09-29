import Header from "./header";

// Icons
import ChartIcon from "../assists/icons/chart.svg";

// Supporters Icons
import RTLLogo from "../assists/logos/rtl-theme.svg";
import ZhakatLogo from "../assists/logos/zhakat.svg";
import DigikalaLogo from "../assists/logos/digikala.svg";
import IranHostLogo from "../assists/logos/iran-host.svg";
import SevenLearnLogo from "../assists/logos/7learn.svg";

import "../styles/supporters.scss";

function Supporters() {
  return (
    <section className="home__supporters supporters">
      <Header title="اسپانسرها و حامیان" icon={ChartIcon} />

      <div className="supporters__list">
        <img src={SevenLearnLogo} alt="" />
        <img src={DigikalaLogo} alt="" />
        <img src={ZhakatLogo} alt="" />
        <img src={RTLLogo} alt="" />
        <img src={IranHostLogo} alt="" />
      </div>
    </section>
  );
}

export default Supporters;
