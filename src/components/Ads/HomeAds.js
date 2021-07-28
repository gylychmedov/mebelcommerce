import { SwiperSlide, Swiper } from "swiper/react";

const HomeAds = () => {
  return (
    <Swiper breakpoints={}>
      <SwiperSlide>
        <img src="/banner/1.jpg" alt="Banner" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/banner/1.jpg" alt="Banner" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/banner/1.jpg" alt="Banner" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeAds;
