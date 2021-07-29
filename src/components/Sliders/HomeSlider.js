import { useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Image from "next/image";

const HomeSlider = () => {
  const nextSlide = useRef(null);
  const prevSlide = useRef(null);
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <section>
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={5}
        className="relative"
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextSlide.current;
          swiper.params.navigation.prevEl = prevSlide.current;
        }}
      >
        <div
          ref={nextSlide}
          className="bg-white hover:bg-gray-200 duration-300 cursor-pointer transform -translate-y-2/4 rounded-lg p-3 absolute top-2/4  right-5 z-10"
        >
          <FcNext size={24} />
        </div>
        <div
          ref={prevSlide}
          className="bg-white hover:bg-gray-200 duration-300 cursor-pointer transform -translate-y-2/4 rounded-lg p-3 absolute top-2/4  left-5 z-10"
        >
          <FcPrevious size={24} />
        </div>

        <SwiperSlide>
          <Image
            width="1180"
            height="470"
            src="/sliders/1.jpg"
            alt="slider"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width="1180"
            height="470"
            src="/sliders/2.jpg"
            alt="slider"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlider;
