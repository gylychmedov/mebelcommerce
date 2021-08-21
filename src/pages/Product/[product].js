import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import View from "../../Layouts/View";
import useTranslation from "next-translate/useTranslation";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineInbox } from "react-icons/ai";
import SimilarProducts from "../../components/Sliders/SimilarProducts";
import Breadcrumb from "../../components/Header/Breadcrumb";
import { ErrorApi } from "../../components/Errors/Errors";
import { http } from "../../components/API/http";

const ProductDetail = ({ error, product }) => {
  console.log(product);

  const route = useRouter();
  const { t } = useTranslation("common");
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    product.images && setMainImage(product.images[0].image);
  }, [route]);

  useEffect(() => {
    imageZoom("myimage", "myresult");
  }, [mainImage]);

  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    img.parentElement.insertBefore(lens, img);
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      e.preventDefault();
      pos = getCursorPos(e);
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

  return (
    <View title={route.locale == "en" ? product.name_en : product.name_fr}>
      {error ? (
        <ErrorApi />
      ) : (
        <main className="grid grid-cols-12 gap-3 mt-5">
          <section className="col-span-12">
            <Breadcrumb
              product={
                product && route.locale == "en"
                  ? product.name_en
                  : product.name_fr
              }
            />
          </section>
          <section className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-3">
            <div className="col-span-2 flex flex-col overflow-y-auto max-h-96">
              {product.images?.map((product, key) => {
                return (
                  <div
                    key={key}
                    className="mb-2"
                    onClick={() => setMainImage(product.image)}
                  >
                    <img
                      className="rounded"
                      src={product.image}
                      alt="Product"
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-span-10">
              <div className="img-zoom-container">
                <img
                  id="myimage"
                  className="w-full"
                  alt="product"
                  src={mainImage}
                />
                <div
                  id="myresult"
                  className={"img-zoom-result absolute top-0"}
                  style={{ left: "102%" }}
                ></div>
              </div>
            </div>
          </section>
          <section className="col-span-12 lg:col-span-5 flex flex-col p-2">
            <h1 className="text-lg font-semibold">
              {route.locale == "en" ? product.name_en : product.name_fr}
            </h1>

            <div className="my-2">
              {t("productCode")}:{" "}
              <span className="font-bold">({product.product_code})</span>
            </div>

            <div className="text-red-600 text-2xl">
              <div className="font-bold flex items-center">
                <div
                  className={`${
                    product.percent &&
                    "line-through font-normal text-base text-gray-500"
                  }`}
                >
                  ${product.price}
                </div>
                {product.percent && (
                  <div
                    className={`border-l ml-5 px-3 py-2 ${
                      product.cashPrice && "line-through text-base"
                    }`}
                  >
                    ${product.discountPrice}
                    <small className="text-gray-500 text-sm ml-2">
                      ({t("discount", { percent: product.percent })})
                    </small>
                  </div>
                )}
                {product.cashPrice && (
                  <div className={`border-l ml-2 px-3 py-2`}>
                    ${product.cashPrice}
                  </div>
                )}
              </div>
            </div>
            {product.deliveryDay && (
              <div className="flex items-center my-2">
                <GrDeliver className="mr-2" />{" "}
                {t("delivery", { day: product.deliveryDay })}
              </div>
            )}

            {product.include && product.include.length > 0 && (
              <div className="flex flex-col my-2 pt-4 border-t">
                <h3 className="font-bold">{t("setContent")}</h3>
                <table className="table-fixed text-left">
                  <thead>
                    <tr>
                      <th className="w-3/12">{t("name")}</th>
                      <th className="w-5/12">{t("description")}</th>
                      <th className="w-2/12">{t("total")}</th>
                      <th className="w-2/12">{t("price")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.include.map((include, key) => {
                      return (
                        <tr className="border-t border-gray-100" key={key}>
                          <td>{include.name}</td>
                          <td className="text-sm">{include.description}</td>
                          <td>
                            <span className="flex items-center">
                              <AiOutlineInbox className="mr-1" />{" "}
                              {include.count}
                            </span>
                          </td>
                          <td>${include.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
          <section className="col-span-12 grid grid-cols-12 gap-4 xl:gap-8 my-5">
            {product.warranty && (
              <aside className="bg-green-50 hover:shadow-lg hover:-translate-y-1  hover:bg-green-200 duration-500 transform hover:scale-105 rounded-lg ring-1 ring-green-200 items-center justify-center flex flex-col col-span-6 md:col-span-3 py-10">
                <h4 className="text-lg">{t("warranty")}</h4>
                <div className="text-green-700 hover:text-green-900 text-2xl uppercase font-black mt-3">
                  {product.warranty}
                </div>
              </aside>
            )}

            {product.color && product.color.length > 0 && (
              <aside className="bg-indigo-50 hover:shadow-lg hover:-translate-y-1  hover:bg-indigo-200 duration-500 transform hover:scale-105 rounded-lg ring-1 ring-indigo-200 items-center justify-center flex flex-col col-span-6 md:col-span-3 py-10">
                <h4 className="text-lg">{t("color")}</h4>
                <div className="text-indigo-700 hover:text-indigo-900 text-2xl uppercase font-black mt-3">
                  {route.locale == "en"
                    ? product.color[0].name_en
                    : product.color[0].name_fr}
                </div>
              </aside>
            )}

            {product.material && product.material.length > 0 && (
              <aside className="bg-gray-50 hover:shadow-lg hover:-translate-y-1  hover:bg-gray-200 duration-500 transform hover:scale-105 rounded-lg ring-1 ring-gray-200 items-center justify-center flex flex-col col-span-6 md:col-span-3 py-10">
                <h4 className="text-lg">{t("material")}</h4>
                <div className="text-gray-700 hover:text-gray-900 text-2xl uppercase font-black mt-3">
                  {route.locale == "en"
                    ? product.material[0].name_en
                    : product.material[0].name_fr}
                </div>
              </aside>
            )}

            {product.size && product.size.length > 0 && (
              <aside className="bg-red-50 hover:shadow-lg hover:-translate-y-1  hover:bg-red-200 duration-500 transform hover:scale-105 rounded-lg ring-1 ring-red-200 items-center justify-center flex flex-col col-span-6 md:col-span-3 py-10">
                <h4 className="text-lg">{t("size")}</h4>
                <div className="text-red-700 hover:text-red-900 text-2xl uppercase font-black mt-3">
                  {route.locale == "en"
                    ? product.size[0].name_en
                    : product.size[0].name_fr}
                </div>
              </aside>
            )}
          </section>

          <section className="col-span-12">
            <SimilarProducts data={product.similarProduct} />
          </section>
        </main>
      )}
    </View>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const slug = ctx.params.product;
    const product = await http.get(`product/${slug}`);
    return {
      props: {
        error: false,
        product: product.data.data,
      },
    };
  } catch {
    return {
      props: {
        error: true,
      },
    };
  }
};
export default ProductDetail;
