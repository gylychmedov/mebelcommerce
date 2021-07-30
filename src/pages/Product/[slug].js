import Image from "next/image";
import View from "../../Layouts/View";

const ProductDetail = () => {
  return (
    <View>
      <main className="grid grid-cols-12 gap-3">
        <section className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-3">
          <div className="col-span-2 flex flex-col overflow-y-auto max-h-96">
            <div className="mb-2">
              <Image
                width="554"
                layout="responsive"
                height="369"
                src="/product/1.jpg"
                alt="Product"
              />
            </div>
            <div className="mb-2">
              <Image
                width="554"
                layout="responsive"
                height="369"
                src="/product/1.jpg"
                alt="Product"
              />
            </div>
            <div className="mb-2">
              <Image
                width="554"
                layout="responsive"
                height="369"
                src="/product/1.jpg"
                alt="Product"
              />
            </div>
            <div className="mb-2">
              <Image
                width="554"
                layout="responsive"
                height="369"
                src="/product/1.jpg"
                alt="Product"
              />
            </div>
            <div className="mb-2">
              <Image
                width="554"
                layout="responsive"
                height="369"
                src="/product/1.jpg"
                alt="Product"
              />
            </div>
            <div className="mb-2">
              <Image
                width="554"
                layout="responsive"
                height="369"
                src="/product/1.jpg"
                alt="Product"
              />
            </div>
          </div>
          <div className="col-span-10">
            <Image
              width="554"
              layout="responsive"
              height="369"
              src="/product/1.jpg"
              alt="Product"
            />
          </div>
        </section>
        <section className="col-span-12 lg:col-span-4 bg-red-600"></section>
      </main>
    </View>
  );
};

export default ProductDetail;
