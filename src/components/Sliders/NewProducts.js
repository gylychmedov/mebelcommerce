import Product from "../Product/Product";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const NewProducts = () => {
  const { t } = useTranslation("common");
  SwiperCore.use([Autoplay]);

  return (
    <main className="mt-10">
      <div className="mb-5 text-center text-2xl font-extrabold">
        {t("newProducts")}
      </div>
      <Swiper
        autoplay={{ delay: 5000 }}
        spaceBetween={5}
        slidesPerView={2}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default NewProducts;
