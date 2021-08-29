import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Product = ({ data }) => {
  const route = useRouter();
  const { t } = useTranslation("common");
  return (
    <Link href={"/product/" + data.slug || "/"}>
      <a>
        <aside className="col-span-1 hover:shadow-lg flex flex-col relative transform hover:-translate-y-1 duration-1000">
          <img
            className="w-100 hover:scale-105 transform duration-1000 hover:rotate-1"
            src={
              data?.images?.[0]
                ? data?.images?.[0].image
                : "/Errors/notImage.png"
            }
            alt="Product"
          />
          {data.is_new && (
            <div className="uppercase bg-red-500 absolute top-2 right-2 px-2 py-1 rounded-md text-white font-md text-xs">
              {t("newProduct")}
            </div>
          )}
          {data.percent && (
            <div className="uppercase bg-green-500 absolute top-2 left-2 px-2 py-1 rounded-md text-white font-md text-xs">
              {t("discount", { percent: data.percent })}
            </div>
          )}
          <section className="flex justify-between items-center xl:px-3">
            <div className="py-3 px-1 font-bold">
              {route.locale == "en" ? data.name_en : data.name_fr}
            </div>
            <div className="flex flex-col text-right">
              {data.price && data.discountPrice ? (
                <>
                  <div className="mt-3 px-1 text-md text-gray-500 line-through">
                    ${data.price}
                  </div>
                  <div className="px-1 font-bold text-xl text-red-600">
                    ${data.discountPrice}
                  </div>
                </>
              ) : (
                <div className="px-1 font-bold text-xl text-red-600">
                  ${data.price}
                </div>
              )}
            </div>
          </section>
        </aside>
      </a>
    </Link>
  );
};

export default Product;
