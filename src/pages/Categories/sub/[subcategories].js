import { useState, useEffect } from "react";
import View from "../../../Layouts/View";
import Product from "../../../components/Product/Product";
import Breadcrumb from "../../../components/Header/Breadcrumb";
import useTranslation from "next-translate/useTranslation";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { useRouter, withRouter } from "next/router";
import { http } from "../../../components/API/http";
import { ErrorApi } from "../../../components/Errors/Errors";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const subCategories = (props) => {
  const [grid, setGrid] = useState(2);
  const { t } = useTranslation("common");
  const route = useRouter();
  console.log(props);

  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState(props.brands || []);
  const [isDrawer, setIsDrawer] = useState({ visible: false });

  // scroll states
  const [scrollEnd, setScrollEnd] = useState(false);
  const [page, setPage] = useState(props.page || 1);
  const [ended, setEnded] = useState(false);
  const [postReq, setPosReq] = useState(false);
  let loadingMore = false;
  let totalPage = props.pageCount || 1;

  // // filter chekbox
  const [filters, setFilters] = useState({
    sizes: props.filters && props.filters.sizes ? props.filters.sizes : [],
    colors: props.filters && props.filters.colors ? props.filters.colors : [],
    materials:
      props.filters && props.filters.materials ? props.filters.materials : [],
    categories:
      props.filters && props.filters.categories ? props.filters.categories : [],
  });
  const [filterProducts, setFilterProducts] = useState();
  const [allFilters, setAllFilters] = useState({
    sizes: [],
    materials: [],
    colors: [],
    categories: [],
  });

  const newSize = filters.sizes.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let clientScreen = document.body.clientHeight + 800;
    if (
      document.body.scrollHeight - document.scrollingElement.scrollTop <=
      clientScreen
    ) {
      setScrollEnd(true);
    }
  };

  // sazlandy
  useEffect(async () => {
    if (
      allFilters.sizes.length >= 1 ||
      allFilters.materials.length >= 1 ||
      allFilters.colors.length >= 1 ||
      allFilters.categories.length >= 1
    ) {
      await http
        .post(
          `category/${props.slug}/products`,
          {
            materials: allFilters.materials,
            sizes: allFilters.sizes,
            categories: allFilters.categories,
            colors: allFilters.colors,
          },
          {}
        )
        .then((res) => {
          if (res.status === 200) {
            totalPage = res.data.meta.last_page;
            setFilterProducts(res.data.data.products);
            setLoad(false);
            setPage(1);
            setFilters({
              sizes: res.data.data.filters.sizes,
              colors: res.data.data.filters.colors,
              materials: res.data.data.filters.materials,
              categories: res.data.data.filters.categories,
            });
          }
        });
    } else {
      totalPage = props.pageCount || 1;
      setFilters({
        sizes: props.filters && props.filters.sizes ? props.filters.sizes : [],
        colors:
          props.filters && props.filters.colors ? props.filters.colors : [],
        materials:
          props.filters && props.filters.materials
            ? props.filters.materials
            : [],
        categories:
          props.filters && props.filters.categories
            ? props.filters.categories
            : [],
      });
      setFilterProducts();
      setLoad(false);
    }
  }, [allFilters]);

  const handleFilterSize = (event, id) => {
    if (event.target.checked == true) {
      let newSize = [...allFilters.sizes];
      allFilters.sizes.includes(id) == false && newSize.push(id);
      setAllFilters({ ...allFilters, sizes: [...newSize] });
    }

    if (event.target.checked == false) {
      let newSize = [...allFilters.sizes];
      let index = newSize.indexOf(id);
      newSize.splice(index, 1);
      setAllFilters({ ...allFilters, sizes: [...newSize] });
    }
    setLoad(!load);
  };

  const handleFilterMaterial = (event, id) => {
    if (event.target.checked == true) {
      let newMaterial = [...allFilters.materials];
      allFilters.materials.includes(id) == false && newMaterial.push(id);
      setAllFilters({ ...allFilters, materials: [...newMaterial] });
    }

    if (event.target.checked == false) {
      let newMaterial = [...allFilters.materials];
      let index = newMaterial.indexOf(id);
      newMaterial.splice(index, 1);
      setAllFilters({ ...allFilters, materials: [...newMaterial] });
    }
    setLoad(!load);
  };

  const handleFilterCategory = (event, id) => {
    if (event.target.checked == true) {
      let newCategories = [...allFilters.categories];
      allFilters.categories.includes(id) == false && newCategories.push(id);
      setAllFilters({ ...allFilters, categories: [...newCategories] });
    }

    if (event.target.checked == false) {
      let newCategories = [...allFilters.categories];
      let index = newCategories.indexOf(id);
      newCategories.splice(index, 1);
      setAllFilters({ ...allFilters, categories: [...newCategories] });
    }
    setLoad(!load);
  };

  const handleFilterColor = (event, id) => {
    if (event.target.checked == true) {
      let newColor = [...allFilters.colors];
      newColor.push(parseInt(id));
      setAllFilters({ ...allFilters, colors: [...newColor] });
    }

    if (event.target.checked == false) {
      let newColor = [...allFilters.colors];
      let index = newColor.indexOf(parseInt(id));
      newColor.splice(index, 1);
      setAllFilters({ ...allFilters, colors: [...newColor] });
    }
    setLoad(!load);
  };

  if (scrollEnd == true) {
    loadingMore = true;
    if (postReq == false && page >= totalPage) {
      setPosReq(true);
      setEnded(true);
      setTimeout(() => {
        setPosReq(false);
        loadingMore = false;
      }, 5000);
    }
    if (postReq == false && page < totalPage) {
      setPosReq(true);
      if (
        allFilters.sizes.length >= 1 ||
        allFilters.materials.length >= 1 ||
        allFilters.colors.length >= 1 ||
        allFilters.categories.length >= 1
      ) {
        http
          .post(
            `category/${props.slug}/products?page=${page + 1}`,
            {
              materials: allFilters.materials,
              sizes: allFilters.sizes,
              categories: allFilters.categories,
              colors: allFilters.colors,
            },
            {}
          )
          .then((res) => {
            if (res.status === 200) {
              totalPage = res.data.meta.last_page;
              setFilterProducts([...filterProducts, ...res.data.data.products]);
              setLoad(false);
              setPage(page + 1);
            }
            if (res.data.data.products.length == 0) {
              setEnded(true);
            }
          });
      } else {
        http
          .post(`category/${props.slug}/products?page=${page + 1}`)
          .then((res) => {
            setProducts([...products, ...res.data.data.products]);
            setPage(page + 1);
          });
      }

      setTimeout(() => {
        setPosReq(false);
        setScrollEnd(false);
        loadingMore = false;
      }, 5000);
    }
  }

  return (
    <View>
      {props.error ? (
        <ErrorApi />
      ) : (
        <main className="flex flex-col w-full ">
          <Breadcrumb product={route.query.subcategories} />
          <section className="w-full flex items-center rounded-md bg-gray-100 py-2 px-4 my-5">
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

            <aside className="w-full  flex space-x-2 justify-end">
              {/* colors */}
              <Dropdown>
                <DropdownToggle className="bg-white px-3 py-2 rounded-lg focus:ring-2">
                  Colors
                </DropdownToggle>
                <DropdownMenu className="z-10">
                  <div className="bg-white my-1 px-3 py-2 shadow rounded-lg">
                    {filters.colors.map((color, key) => {
                      return (
                        <div key={key}>
                          <input
                            type="checkbox"
                            checked={allFilters.colors.includes(color.id)}
                            onChange={(event) =>
                              handleFilterColor(event, color.id)
                            }
                            checked={allFilters.colors.includes(color.id)}
                            id={`color_` + color.id}
                          />
                          <label htmlFor={`color_` + color.id} className="ml-2">
                            {route.locale == "en"
                              ? color.name_en
                              : color.name_fr}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </DropdownMenu>
              </Dropdown>
              {/* sizes */}
              <Dropdown>
                <DropdownToggle className="bg-white px-3 py-2 rounded-lg focus:ring-2">
                  Sizes
                </DropdownToggle>
                <DropdownMenu className="z-10">
                  <div className="bg-white my-1 px-3 py-2 shadow rounded-lg">
                    {filters.sizes.map((size, key) => {
                      return (
                        <div key={key}>
                          <input
                            type="checkbox"
                            checked={allFilters.sizes.includes(size.id)}
                            onChange={(event) =>
                              handleFilterSize(event, size.id)
                            }
                            checked={allFilters.sizes.includes(size.id)}
                            id={`size_` + size.id}
                          />
                          <label htmlFor={`size_` + size.id} className="ml-2">
                            {route.locale == "en" ? size.name_en : size.name_fr}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </DropdownMenu>
              </Dropdown>

              {/* material */}
              <Dropdown>
                <DropdownToggle className="bg-white px-3 py-2 rounded-lg focus:ring-2">
                  Material
                </DropdownToggle>
                <DropdownMenu className="z-10">
                  <div className="bg-white my-1 px-3 py-2 shadow rounded-lg">
                    {filters.materials.map((material, key) => {
                      return (
                        <div key={key}>
                          <input
                            type="checkbox"
                            checked={allFilters.materials.includes(material.id)}
                            onChange={(event) =>
                              handleFilterMaterial(event, material.id)
                            }
                            checked={allFilters.materials.includes(material.id)}
                            id={`material_` + material.id}
                          />
                          <label
                            htmlFor={`material_` + material.id}
                            className="ml-2"
                          >
                            {route.locale == "en"
                              ? material.name_en
                              : material.name_fr}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </DropdownMenu>
              </Dropdown>
            </aside>
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
    const products = await http.post(`category/${slug}/products`);
    return {
      props: {
        pageCount: products.data.meta.last_page,
        totalCount: products.data.meta.total,
        products: products.data.data.products,
        filters: products.data.data.filters,
        slug: slug,
        error: false,
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

export default withRouter(subCategories);
