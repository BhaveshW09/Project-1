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
        <div className=" "></div>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/realistic-shopping-online-landing-page_23-2148527198.jpg?w=1060&t=st=1696338120~exp=1696338720~hmac=d03f87d6262f7ca327d05f36934060f449bcfac7a5f3afd95294b14e6df10f6e"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336669.jpg?size=626&ext=jpg&ga=GA1.1.77913099.1694320724&semt=ais"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-1671.jpg?w=1060&t=st=1696338038~exp=1696338638~hmac=d9a1364b9a51f4adb96e396d0090b9fa8fd30fa1f155cd98979219b7ef118bea"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-psd/sales-discount-facebook-template_23-2149959351.jpg?w=1380&t=st=1696338230~exp=1696338830~hmac=01576af4ce784331ba42e5a9439098e241af1bbded82885c7ada483700a6dce1"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
