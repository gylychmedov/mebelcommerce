import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import View from "../../Layouts/View";

const ProductDetail = () => {
  const data = {
    name_en: "Product name EN",
    name_fr: "Product name fr",
    product_code: "012345",
    price: 350,
    discountPrice: 320,
    cashPrice: 300,
    percent: 10,
    deliveryDay: 5,
    material: "gold",
    color: "red",
    warranty: "1 year",
    size: "14x15 cm",
    description: "Lorem ipsum big paragraph minimum 40 word",
    inSet: [
      {
        id: 1,
        name: "Stol",
        count: 2,
        price: 320,
        description: "Lorem ipsum big paragraph minimum 40 word",
      },
    ],
    images: [
      {
        id: 1,
        link: "/product/1.jpg",
      },
      {
        id: 2,
        link: "/product/2.jpg",
      },
      {
        id: 3,
        link: "/product/3.jpg",
      },
      {
        id: 1,
        link: "/product/1.jpg",
      },
      {
        id: 2,
        link: "/product/2.jpg",
      },
      {
        id: 3,
        link: "/product/3.jpg",
      },
    ],

    similarProdict: [
      {
        id: 1,
        name_en: "Product name EN",
        name_fr: "Product name fr",
        slug: "http://slug.ru/slug",
        image: "http://link.ru",
        price: 350,
        discountPrice: 320,
        newProduct: true,
        percent: 10,
      },
      {
        id: 2,
        name_en: "Product name EN",
        name_fr: "Product name fr",
        slug: "http://slug.ru/slug",
        image: "http://link.ru",
        price: 350,
        discountPrice: 320,
        newProduct: false,
        percent: 10,
      },
      {
        id: 3,
        name_en: "Product name EN",
        name_fr: "Product name fr",
        slug: "http://slug.ru/slug",
        image: "http://link.ru",
        price: 350,
        discountPrice: 320,
        newProduct: true,
        percent: 10,
      },
    ],
  };

  const route = useRouter();
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    setMainImage(data.images?.[0].link);
  }, [route]);

  useEffect(() => {
    imageZoom("myimage", "myresult");
  }, [mainImage]);

  console.log(mainImage);

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
    <View>
      <main className="grid grid-cols-12 gap-3">
        <section className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-3">
          <div className="col-span-2 flex flex-col overflow-y-auto max-h-96">
            {data.images?.map((product, key) => {
              return (
                <div
                  key={key}
                  className="mb-2"
                  onClick={() => setMainImage(product.link)}
                >
                  <img className="rounded" src={product.link} alt="Product" />
                </div>
              );
            })}
          </div>
          <div className="col-span-10">
            <div class="img-zoom-container">
              <img id="myimage" className="w-full" src={mainImage} />
              <div
                id="myresult"
                className={"img-zoom-result absolute top-0"}
                style={{ left: "102%" }}
              ></div>
            </div>
          </div>
        </section>
        <section className="col-span-12 lg:col-span-4 flex flex-col bg-red-600">
          <div className="font-bold">
            {route.locale == "en" ? data.name_en : data.name_fr}
          </div>
        </section>
      </main>
    </View>
  );
};

export default ProductDetail;
