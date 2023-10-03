import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Swipers() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.top10mobiles.info/images/top10mobiles.com/slider/416743900202309210719.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.top10mobiles.info/images/top10mobiles.com/slider/229167945202309210719.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.top10mobiles.info/images/top10mobiles.com/slider/428589168202309210720.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.top10mobiles.info/images/top10mobiles.com/slider/981704934202309210720.jpg"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
