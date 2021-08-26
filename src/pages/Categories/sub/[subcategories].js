import { http } from "../../../components/API/http";
import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Product from "../../../components/Product/Product";
import View from "../../../Layouts/View";
import Breadcrumb from "../../../components/Header/Breadcrumb";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { ErrorApi } from "../../../components/Errors/Errors";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";

const SubCategories = (props) => {
  const route = useRouter();
  const { t } = useTranslation("common");
  const [grid, setGrid] = useState(2);
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState(props.products || []);
  const [totalProduct, setTotalProduct] = useState(props.totalProduct);

  const links = [
    {
      name: route.query.subcategories,
      link: route.asPath,
    },
  ];

  // scroll states
  const [scrollEnd, setScrollEnd] = useState(false);
  const [page, setPage] = useState(props.page || 1);
  const [ended, setEnded] = useState(false);
  const [postReq, setPosReq] = useState(false);
  let loadingMore = false;
  let totalPage = props.pageCount || 1;
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

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
  useEffect(() => {
    if (
      allFilters.sizes.length >= 1 ||
      allFilters.materials.length >= 1 ||
      allFilters.colors.length >= 1 ||
      allFilters.categories.length >= 1
    ) {
      http
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
            setTotalProduct(res.data.meta.total);
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
      setTotalProduct(props.totalProduct);
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
              setTotalProduct(res.data.meta.total);
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
          <Breadcrumb data={links} />
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

            <aside className="w-full flex justify-end">
              <div
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                className="bg-white px-3 py-2 rounded-lg focus:ring-2 lg:hidden"
              >
                {t("filters")}
              </div>

              <AnimatePresence>
                {isOpenSidebar && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                    className="fixed top-0 z-10 left-0 w-screen h-screen bg-gray-700 bg-opacity-30"
                  ></motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isOpenSidebar && (
                  <motion.section
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -500 }}
                    transition={{ duration: 0.6, ease: "linear" }}
                    className="fixed top-0 left-0 bottom-0 h-screen z-30 w-80 bg-white shadow-lg flex flex-col"
                  >
                    <div className="font-bold uppercase flex justify-between items-center px-6 text-white py-3 w-full text-lg bg-indigo-600">
                      <span>{t("filters")}</span>
                      <span onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                        <CgClose />
                      </span>
                    </div>
                    {newSize && (
                      <>
                        <div className="px-6 py-2 font-bold text-gray-500 mt-2">
                          {t("size")}
                        </div>
                        {newSize.map((size, key) => {
                          return (
                            <label
                              key={key}
                              htmlFor={`size_` + size.id}
                              className="ml-2 block px-8 py-2 text-gray-500"
                            >
                              <input
                                className="mr-2"
                                type="checkbox"
                                checked={allFilters.sizes.includes(size.id)}
                                onChange={(event) =>
                                  handleFilterSize(event, size.id)
                                }
                                id={`size_` + size.id}
                              />
                              {route.locale == "en"
                                ? size.name_en
                                : size.name_fr}
                            </label>
                          );
                        })}
                      </>
                    )}

                    {filters.colors && (
                      <>
                        <div className="px-6 py-2 font-bold text-gray-500 mt-2">
                          {t("color")}
                        </div>
                        {filters.colors.map((color, key) => {
                          return (
                            <label
                              key={key}
                              htmlFor={`color_` + color.id}
                              className="ml-2 block px-8 py-2 text-gray-500"
                            >
                              <input
                                className="mr-2"
                                type="checkbox"
                                checked={allFilters.colors.includes(color.id)}
                                onChange={(event) =>
                                  handleFilterColor(event, color.id)
                                }
                                id={`color_` + color.id}
                              />
                              {route.locale == "en"
                                ? color.name_en
                                : color.name_fr}
                            </label>
                          );
                        })}
                      </>
                    )}

                    {filters.materials && (
                      <>
                        <div className="px-6 py-2 font-bold text-gray-500 mt-2">
                          {t("material")}
                        </div>

                        {filters.materials.map((material, key) => {
                          return (
                            <label
                              key={key}
                              htmlFor={`material_` + material.id}
                              className="ml-2 block px-8 py-2 text-gray-500"
                            >
                              <input
                                className="mr-2"
                                type="checkbox"
                                checked={allFilters.materials.includes(
                                  material.id
                                )}
                                onChange={(event) =>
                                  handleFilterMaterial(event, material.id)
                                }
                                id={`material_` + material.id}
                              />
                              {route.locale == "en"
                                ? material.name_en
                                : material.name_fr}
                            </label>
                          );
                        })}
                      </>
                    )}
                  </motion.section>
                )}
              </AnimatePresence>
            </aside>
            <aside className="w-full space-x-2 justify-end hidden lg:flex">
              {/* colors */}
              {filters.colors && (
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
                              id={`color_` + color.id}
                            />
                            <label
                              htmlFor={`color_` + color.id}
                              className="ml-2"
                            >
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
              )}
              {/* sizes */}
              {newSize && (
                <Dropdown>
                  <DropdownToggle className="bg-white px-3 py-2 rounded-lg focus:ring-2">
                    Sizes
                  </DropdownToggle>
                  <DropdownMenu className="z-10">
                    <div className="bg-white my-1 px-3 py-2 shadow rounded-lg">
                      {newSize.map((size, key) => {
                        return (
                          <div key={key}>
                            <input
                              type="checkbox"
                              checked={allFilters.sizes.includes(size.id)}
                              onChange={(event) =>
                                handleFilterSize(event, size.id)
                              }
                              id={`size_` + size.id}
                            />
                            <label htmlFor={`size_` + size.id} className="ml-2">
                              {route.locale == "en"
                                ? size.name_en
                                : size.name_fr}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </DropdownMenu>
                </Dropdown>
              )}

              {/* material */}
              {filters.materials && (
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
                              checked={allFilters.materials.includes(
                                material.id
                              )}
                              onChange={(event) =>
                                handleFilterMaterial(event, material.id)
                              }
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
              )}
            </aside>
          </section>
          <section className="w-full flex justify-between">
            Total product: {totalProduct}
          </section>
          <section
            className={`grid ${
              grid == 2 ? "grid-cols-2" : "grid-cols-3"
            } gap-x-4 gap-y-8`}
          >
            {filterProducts &&
              filterProducts.length > 0 &&
              filterProducts.map((product, key) => {
                return <Product key={key} data={product} />;
              })}

            {!filterProducts &&
              products &&
              products.map((product, key) => {
                return <Product key={key} data={product} />;
              })}
          </section>
          {!ended && (
            <div className="text-center font-bold my-3 text-lg">Loading...</div>
          )}
          {ended && (
            <div className="w-full text-center font-bold my-3 text-lg">End</div>
          )}
        </main>
      )}
    </View>
  );
};

export const getServerSideProps = async (ctx) => {
  const path = ctx.query.subcategories;
  const page = ctx.query.page || 1;
  try {
    const products = await http.post(`category/${path}/products`, {}, {});
    return {
      props: {
        pageCount: products.data.meta.last_page,
        totalProduct: products.data.meta.total,
        products: products.data.data.products,
        filters: products.data.data.filters,
        slug: path,
        page: page,
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

export default withRouter(SubCategories);
