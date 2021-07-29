import { useState } from "react";
import Product from "../Product/Product";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeTabProducts = () => {
  const [tab, setTab] = useState("Tv units");
  SwiperCore.use([Autoplay]);
  return (
    <section>
      <nav className="my-5">
        <Swiper
          spaceBetween={5}
          breakpoints={{
            380: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-full">
              <input
                type="checkbox"
                className="hidden"
                id="Discounted Products"
              />
              <label
                className="bg-gray-200 block text-center py-5"
                onClick={(e) => setTab(e.target.htmlFor)}
                htmlFor="Discounted Products"
              >
                Discounted Products
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-red-300">
              <input type="checkbox" className="hidden" id="Bed & Bedrom Set" />
              <label
                className="bg-gray-200 block text-center py-5"
                onClick={(e) => setTab(e.target.htmlFor)}
                htmlFor="Bed & Bedrom Set"
              >
                Bed & Bedrom Set
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-red-300">
              <input type="checkbox" className="hidden" id="Tv units" />
              <label
                className="bg-gray-200 block text-center py-5"
                onClick={(e) => setTab(e.target.htmlFor)}
                htmlFor="Tv units"
              >
                Tv units
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-red-300">
              <input type="checkbox" className="hidden" id="Dining room" />
              <label
                className="bg-gray-200 block text-center py-5"
                onClick={(e) => setTab(e.target.htmlFor)}
                htmlFor="Dining room"
              >
                Dining room
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-red-300">
              <input type="checkbox" className="hidden" id="Accessories" />
              <label
                className="bg-gray-200 block text-center py-5"
                onClick={(e) => setTab(e.target.htmlFor)}
                htmlFor="Accessories"
              >
                Accessories
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-red-300">
              <input type="checkbox" className="hidden" id="Teen room" />
              <label
                className="bg-gray-200 block text-center py-5"
                onClick={(e) => setTab(e.target.htmlFor)}
                htmlFor="Teen room"
              >
                Teen room
              </label>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </nav>

      <aside>
        <Swiper
          autoplay={{ delay: 3000 }}
          breakpoints={{
            380: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1400: {
              slidesPerView: 5,
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
        </Swiper>
      </aside>
    </section>
  );
};

export default HomeTabProducts;
