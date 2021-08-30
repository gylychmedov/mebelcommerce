import { useRef } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Link from "next/link";

const HomeSlider = ({ data }) => {
  const nextSlide = useRef(null);
  const prevSlide = useRef(null);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <section>
      {data && (
        <Swiper
          autoplay={{ delay: 3000 }}
          spaceBetween={5}
          className="relative"
          pagination={{
            clickable: true,
          }}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = nextSlide.current;
            swiper.params.navigation.prevEl = prevSlide.current;
          }}
        >
          <div
            ref={nextSlide}
            className="cursor-pointer transform -translate-y-2/4 rounded-lg p-3 absolute top-2/4  right-5 z-10"
          >
            <FcNext size={36} />
          </div>
          <div
            ref={prevSlide}
            className="cursor-pointer transform -translate-y-2/4 rounded-lg p-3 absolute top-2/4  left-5 z-10"
          >
            <FcPrevious size={36} />
          </div>
          {data?.map((slide, key) => {
            return (
              <SwiperSlide key={key}>
                {slide.link ? (
                  <Link href={slide.link || "/"}>
                    <a>
                      <img
                        src={slide.image}
                        alt="slider"
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </a>
                  </Link>
                ) : (
                  <img
                    src={slide.image}
                    alt="slider"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default HomeSlider;
