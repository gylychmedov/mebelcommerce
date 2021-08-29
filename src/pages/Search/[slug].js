import { http } from "../../components/API/http";
import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Product from "../../components/Product/Product";
import View from "../../Layouts/View";
import Breadcrumb from "../../components/Header/Breadcrumb";

const SubCategories = (props) => {
  const links = {
    name: "Search",
    link: "link",
  };
  const [products, setProducts] = useState();
  const route = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    http
      .post(`search`, { search: route.query.slug }, {})
      .then((res) => setProducts(res.data.data));
  }, []);

  return (
    <View>
      <main className="flex flex-col w-full ">
        {/* <Breadcrumb data={links} /> */}
        <section className="w-full flex justify-between mb-4 font-bold text-gray-500">
          {t("total_product")}: {products?.length}
        </section>
        <section className={`grid grid-cols-3 gap-3`}>
          {products &&
            products.map((product, key) => {
              return <Product key={key} data={product} />;
            })}
          {products?.length == 0 && (
            <div className="col-span-12 font-bold text-lg text-red-700 bg-red-100 p-5 mt-3 rounded">
              {t("notFound")}
            </div>
          )}
        </section>
      </main>
    </View>
  );
};

export default withRouter(SubCategories);
