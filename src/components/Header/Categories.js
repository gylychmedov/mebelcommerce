import { Swiper, SwiperSlide } from "swiper/react";
import CategoryMenu from "./CategoryMenu";

const Categories = () => {
  return (
    <nav className="border-t">
      <div className="my-5 border-b flex overflow-x-auto">
        <CategoryMenu image="/categories/1.jpg" name="Dining room" />
        <CategoryMenu image="/categories/2.jpg" name="Bedrom" />
        <CategoryMenu image="/categories/3.jpg" name="Living room" />
        <CategoryMenu image="/categories/4.jpg" name="Teen room" />
        <CategoryMenu image="/categories/1.jpg" name="Corner sets" />
        <CategoryMenu image="/categories/2.jpg" name="Bed & Bedrom set" />
        <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
        <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
        <CategoryMenu image="/categories/1.jpg" name="Room merge" />
        <CategoryMenu image="/categories/2.jpg" name="Big data" />
        <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
        <CategoryMenu image="/categories/2.jpg" name="Bed & Bedrom set" />
        <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
        <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
        <CategoryMenu image="/categories/1.jpg" name="Room merge" />
        <CategoryMenu image="/categories/2.jpg" name="Big data" />
        <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
      </div>
    </nav>
  );
};

export default Categories;

// import { Swiper, SwiperSlide } from "swiper/react";
// import CategoryMenu from "./CategoryMenu";

// const Categories = () => {
//   return (
//     <nav className="border-t">
//       <div className="my-5 border-b">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={5}
//           breakpoints={{
//             480: {
//               slidesPerView: 4,
//             },
//             640: {
//               slidesPerView: 6,
//             },
//             960: {
//               slidesPerView: 8,
//             },
//             1200: {
//               slidesPerView: 9,
//             },
//             1400: {
//               slidesPerView: 10,
//             },
//           }}
//         >
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Dining room" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Bedrom" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Living room" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Teen room" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Corner sets" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Bed & Bedrom set" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Room merge" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Big data" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Room merge" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Big data" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Room merge" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Big data" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </nav>
//   );
// };

// export default Categories;
