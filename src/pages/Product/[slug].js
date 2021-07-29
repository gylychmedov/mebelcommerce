import Image from "next/image";
import View from "../../Layouts/View";

const ProductDetail = () => {
  return (
    <View>
      <main className="grid grid-cols-12">
        <section className="col-span-12 lg:col-span-6">
          <div className="">
            <Image
              className=""
              width="554"
              height="369"
              src="/product/1.jpg"
              alt="Product"
            />
          </div>
        </section>
        <section className="col-span-12 lg:col-span-6"></section>
      </main>
    </View>
  );
};

export default ProductDetail;
