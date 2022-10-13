import Header from "././header";

// Icons
import ChartIcon from "./../assets/icons/chart.svg";

import { SwiperSlide } from "swiper/react";

// Supporters Icons
import RTLLogo from "./../assets/logos/rtl-theme.svg";
import ZhakatLogo from "./../assets/logos/zhakat.svg";
import DigikalaLogo from "./../assets/logos/digikala.svg";
import IranHostLogo from "./../assets/logos/iran-host.svg";
import SevenLearnLogo from "./../assets/logos/7learn.svg";

import "../styles/supporters.scss";
import SliderWrapper from "././sliderWrapper";

function Supporters() {
  return (
    <section className="home__supporters supporters">
      <Header title="اسپانسرها و حامیان" icon={ChartIcon} />

      <div className="supporters__list static">
        <img src={SevenLearnLogo} alt="" />
        <img src={DigikalaLogo} alt="" />
        <img src={ZhakatLogo} alt="" />
        <img src={RTLLogo} alt="" />
        <img src={IranHostLogo} alt="" />
      </div>

      <div className="supporters__list slider">
        <SliderWrapper direction="horizontal" pagination={false}>
          <SwiperSlide>
            <img src={SevenLearnLogo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DigikalaLogo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ZhakatLogo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={RTLLogo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IranHostLogo} alt="" />
          </SwiperSlide>
        </SliderWrapper>
      </div>
    </section>
  );
}

export default Supporters;
