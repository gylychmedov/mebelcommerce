import { SwiperSlide, Swiper } from "swiper/react";

const HomeAds = () => {
  return (
    <main className="grid grid-cols-12 gap-3">
      {/* // <Swiper
    //   spaceBetween={5}
    //   slidesPerView={2}
    //   breakpoints={{
    //     640: {
    //       slidesPerView: 4,
    //     },
    //   }}
    // >
    //   <SwiperSlide> */}
      <div className="col-span-3">
        <img src="/banner/1.jpg" alt="Banner" />
        {/* //   </SwiperSlide> */}
      </div>
      <div className="col-span-3">
        <img src="/banner/1.jpg" alt="Banner" />
      </div>
      <div className="col-span-3">
        <img src="/banner/1.jpg" alt="Banner" />
      </div>
      <div className="col-span-3">
        <img src="/banner/1.jpg" alt="Banner" />
      </div>
    </main>
  );
};

export default HomeAds;
