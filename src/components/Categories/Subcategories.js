import { useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SubCategory from "./SubCategory";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const SubCategories = ({ data }) => {
  SwiperCore.use([Navigation]);
  const nextSlide = useRef(null);
  const prevSlide = useRef(null);
  return (
    <main className="w-full relative">
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextSlide.current;
          swiper.params.navigation.prevEl = prevSlide.current;
        }}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          400: {
            slidesPerView: 3,
          },
          840: {
            slidesPerView: 5,
          },
        }}
      >
        <div
          ref={prevSlide}
          className="flex items-center shadow-md justify-center absolute top-2/4 left-2 transform -translate-y-2/4 cursor-pointer z-10 bg-white w-10 h-10 rounded-full"
        >
          <GrFormPrevious size={24} />
        </div>
        <div
          ref={nextSlide}
          className="flex items-center shadow-md justify-center absolute top-2/4 right-2 transform -translate-y-2/4 cursor-pointer z-10 bg-white w-10 h-10 rounded-full"
        >
          <GrFormNext size={24} />
        </div>
        {data &&
          data.map((subcategory, key) => {
            return (
              <SwiperSlide key={key}>
                <SubCategory data={subcategory} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </main>
  );
};

export default SubCategories;
