import Link from "next/link";
import Image from "next/image";

const Product = () => {
  return (
    <Link href="/Product/product">
      <a>
        <aside className="col-span-1 flex flex-col">
          <Image
            className="w-100"
            width="554"
            height="369"
            src="/product/1.jpg"
            alt="Product"
          />
          <section className="flex justify-between">
            <div className="py-3 px-1 font-bold">Carmen yatak</div>
            <div className="flex flex-col text-right">
              <div className="mt-3 px-1 font-bold text-xl text-red-600">
                $215
              </div>
              <div className="px-1 text-md text-gray-500 line-through">
                $227
              </div>
            </div>
          </section>
        </aside>
      </a>
    </Link>
  );
};

export default Product;
