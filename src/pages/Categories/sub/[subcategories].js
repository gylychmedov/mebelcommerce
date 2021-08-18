import { useState, useEffect } from "react";
import View from "../../../Layouts/View";
import Product from "../../../components/Product/Product";
import Breadcrumb from "../../../components/Header/Breadcrumb";
import useTranslation from "next-translate/useTranslation";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { useRouter, withRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { http } from "../../../components/API/http";
import { ErrorApi } from "../../../components/Errors/Errors";

const subCategories = (props) => {
  console.log(props);
  const [grid, setGrid] = useState(2);
  const { t } = useTranslation("common");
  const route = useRouter();

  const pagginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };
  const [products, setProducts] = useState(props.brands || []);
  const [page, setPage] = useState(props.page || 1);
  const [load, setLoad] = useState(false);

  const [filters, setFilters] = useState({
    sizes: props.filters && props.filters.sizes ? props.filters.sizes : [],
    colors: props.filters && props.filters.colors ? props.filters.colors : [],
    genders:
      props.filters && props.filters.genders ? props.filters.genders : [],
    categories:
      props.filters && props.filters.categories ? props.filters.categories : [],
  });
  const [filterProducts, setFilterProducts] = useState();
  const [allFilters, setAllFilters] = useState({
    sizes: [],
    genders: [],
    colors: [],
    categories: [],
  });

  useEffect(async () => {
    if (
      allFilters.sizes.length >= 1 ||
      allFilters.genders.length >= 1 ||
      allFilters.colors.length >= 1 ||
      allFilters.categories.length >= 1
    ) {
      await http
        .post(
          `brand/${props.slug}/products`,
          {
            genders: allFilters.genders,
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
            setFilters({
              sizes: res.data.data.filters.sizes,
              colors: res.data.data.filters.colors,
              genders: res.data.data.filters.genders,
              categories: res.data.data.filters.categories,
            });
          }
        });
    } else {
      setFilters({
        sizes: props.filters && props.filters.sizes ? props.filters.sizes : [],
        colors:
          props.filters && props.filters.colors ? props.filters.colors : [],
        genders:
          props.filters && props.filters.genders ? props.filters.genders : [],
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

  const handleFilterGender = (event, id) => {
    if (event.target.checked == true) {
      let newGender = [...allFilters.genders];
      allFilters.genders.includes(id) == false && newGender.push(id);
      setAllFilters({ ...allFilters, genders: [...newGender] });
    }

    if (event.target.checked == false) {
      let newGender = [...allFilters.genders];
      let index = newGender.indexOf(id);
      newGender.splice(index, 1);
      setAllFilters({ ...allFilters, genders: [...newGender] });
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
  return (
    <View>
      {props.error ? (
        <ErrorApi />
      ) : (
        <main className="flex flex-col w-full ">
          <Breadcrumb product={route.query.subcategories} />
          <section className="w-full flex items-center rounded-md bg-gray-100 py-3 px-4 my-5">
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
          </section>
          <section
            className={`grid ${
              grid == 2 ? "grid-cols-2" : "grid-cols-3"
            } gap-x-4 gap-y-8`}
          >
            {props.products?.map((product) => {
              return <Product data={product} />;
            })}

            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              activeClassName={"active"}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              initialPage={props.currentPage - 1}
              pageCount={props.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={pagginationHandler}
            />
          </section>
        </main>
      )}
    </View>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const slug = query.subcategories;
    const page = query.page || 1;
    const data = await http.post(`category/${slug}/products?page=${page}`);
    return {
      props: {
        error: false,
        slug: slug,
        page: page,
        totalCount: data.data.meta.total,
        pageCount: data.data.meta.last_page,
        currentPage: data.data.meta.current_page,
        perPage: data.data.meta.per_page,
        products: data.data.data.products,
        filters: data.data.data.filters,
      },
    };
  } catch {
    {
      return {
        props: {
          error: true,
        },
      };
    }
  }
};

export default withRouter(subCategories);
