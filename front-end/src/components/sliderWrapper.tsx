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
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={pagination ? [Pagination, Autoplay] : [Autoplay]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}

export default SliderWrapper;
