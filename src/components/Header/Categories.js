import { Swiper, SwiperSlide } from "swiper/react";
import CategoryMenu from "./CategoryMenu";

const Categories = () => {
  return (
    <nav className="border-t">
      <div className="my-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          breakpoints={{
            480: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 6,
            },
            960: {
              slidesPerView: 8,
            },
            1200: {
              slidesPerView: 10,
            },
            1400: {
              slidesPerView: 12,
            },
          }}
        >
          <SwiperSlide>
            <CategoryMenu image="/categories/1.jpg" name="Room merge" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/2.jpg" name="Big data" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/1.jpg" name="Room merge" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/2.jpg" name="Big data" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/1.jpg" name="Room merge" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/2.jpg" name="Big data" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/1.jpg" name="Room merge" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/2.jpg" name="Big data" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/1.jpg" name="Room merge" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/2.jpg" name="Big data" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
          </SwiperSlide>
        </Swiper>
      </div>
    </nav>
  );
};

export default Categories;
