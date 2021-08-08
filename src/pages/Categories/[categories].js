import { useState } from "react";
import View from "../../Layouts/View";
import Product from "../../components/Product/Product";
import Breadcrumb from "../../components/Header/Breadcrumb";
import Filters from "../../components/Categories/Filters";
import SubCategories from "../../components/Categories/Subcategories";

const Categories = () => {
  const [grid, setGrid] = useState(2);

  const handleGrid = (count) => {
    setGrid(count);
  };

  return (
    <View>
      <main className="flex flex-col w-full ">
        <Breadcrumb />
        <SubCategories />
        <Filters grid={handleGrid} />
        <section className={`grid grid-cols-${grid} gap-x-4 gap-y-8`}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
      </main>
    </View>
  );
};

export default Categories;
