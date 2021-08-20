import { useState, useEffect } from "react";
import View from "../../../Layouts/View";
import Product from "../../../components/Product/Product";
import Breadcrumb from "../../../components/Header/Breadcrumb";
import useTranslation from "next-translate/useTranslation";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { useRouter, withRouter } from "next/router";
import { http } from "../../../components/API/http";
import { ErrorApi } from "../../../components/Errors/Errors";

const subCategories = (props) => {
  console.log(props);
  const [grid, setGrid] = useState(2);
  const { t } = useTranslation("common");
  const route = useRouter();

  return (
    <View>
      {props.error ? (
        <ErrorApi />
      ) : (
        <main className="flex flex-col w-full ">
          <Breadcrumb product={route.query.subcategories} />
          <section className="w-full flex items-center rounded-md bg-gray-100 py-3 px-4 my-5">
            {/* grid start */}
            <div className="flex items-center">
              <div className="mr-2">{t("view")}:</div>
              <div
                onClick={() => setGrid(3)}
                className={`p-2 mx-1 rounded-md hover:bg-gray-300 cursor-pointer duration-500 ${
                  grid == 3 ? "bg-gray-500 text-white" : "bg-white shadow-lg"
                }`}
              >
                <BsFillGrid3X3GapFill />
              </div>
              <div
                onClick={() => setGrid(2)}
                className={`p-2 mx-1 rounded-md hover:bg-gray-300 cursor-pointer duration-500 ${
                  grid == 2 ? "bg-gray-500 text-white" : "bg-white shadow-lg"
                }`}
              >
                <BsFillGridFill />
              </div>
            </div>
            {/* grid end */}
          </section>
          <section
            className={`grid ${
              grid == 2 ? "grid-cols-2" : "grid-cols-3"
            } gap-x-4 gap-y-8`}
          >
            {props.products?.map((product) => {
              return <Product data={product} />;
            })}
          </section>
        </main>
      )}
    </View>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const slug = query.subcategories;
    const products = await http.post(`center/${slug}/products`);

    return {
      props: {
        pageCount: products.data.meta.last_page,
        totalCount: products.data.meta.total,
        products: products.data.data.products,
        filters: products.data.data.filters,
        slug: slug,
        notFound: false,
      },
    };
  } catch {
    return {
      props: {
        notFound: true,
      },
    };
  }
};

export default withRouter(subCategories);
