import { Pagination, Autoplay } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function SliderWrapper({
  children,
  direction,
  pagination,
}: {
  children: any;
  direction: "horizontal" | "vertical" | undefined;
  pagination: boolean | undefined;
}) {
  return (
    <Swiper
      direction={direction}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={pagination ? [Pagination, Autoplay] : [Autoplay]}
      navigation={true}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}

export default SliderWrapper;
