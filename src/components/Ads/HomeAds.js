import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

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
        <Image src="/banner/1.jpg" width="720" height="830" alt="Banner" />
        {/* //   </SwiperSlide> */}
      </div>
      <div className="col-span-3">
        <Image src="/banner/1.jpg" width="720" height="830" alt="Banner" />
      </div>
      <div className="col-span-3">
        <Image src="/banner/1.jpg" width="720" height="830" alt="Banner" />
      </div>
      <div className="col-span-3">
        <Image src="/banner/1.jpg" width="720" height="830" alt="Banner" />
      </div>
    </main>
  );
};

export default HomeAds;
