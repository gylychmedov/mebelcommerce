import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Product = () => {
  const { t } = useTranslation("common");
  return (
    <Link href="/Product/1">
      <a>
        <aside className="col-span-1 hover:shadow-lg flex flex-col relative transform hover:-translate-y-1 duration-1000">
          <Image
            className="w-100 hover:scale-105 transform duration-1000 hover:rotate-1"
            width="554"
            height="369"
            src="/product/1.jpg"
            alt="Product"
          />
          <div className="uppercase bg-red-500 absolute top-2 right-2 px-2 py-1 rounded-md text-white font-md text-xs">
            {t("newProduct")}
          </div>
          <div className="uppercase bg-green-500 absolute top-2 left-2 px-2 py-1 rounded-md text-white font-md text-xs">
            {t("discount", { percent: 14 })}
          </div>
          <section className="flex justify-between items-center xl:px-3">
            <div className="py-3 px-1 font-bold">Carmen yatak</div>
            <div className="flex flex-col text-right">
              <div className="mt-3 px-1 text-md text-gray-500 line-through">
                $227
              </div>
              <div className="px-1 font-bold text-xl text-red-600">$215</div>
            </div>
          </section>
        </aside>
      </a>
    </Link>
  );
};

export default Product;
