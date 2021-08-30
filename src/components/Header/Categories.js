import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext } from "react";
import CategoriesContext from "../Contexts/categoriesContext";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = useContext(CategoriesContext);
  const route = useRouter();

  return (
    <>
      <aside className="navbar shadow ">
        <nav className="px-2 lg:px-16 xl:px-56 z-30 max-w-full overflow-x-auto">
          {categories &&
            categories.map((cat) => {
              return (
                <ul key={cat.id} className="text-center px-0 mx-0 ">
                  <li>
                    <div className="font-bold px-0 nav__link cursor-pointer">
                      <div className="flex flex-col items-center hover:text-red-700">
                        <img src={cat.icon} alt="cat" className="w-12" />
                        {route.locale == "en" ? cat.title_en : cat.title_fr}
                      </div>
                    </div>
                    <ul className="text-left ">
                      <div className="grid grid-cols-12 pt-2 border-b">
                        <div className="col-span-12 flex flex-col overflow-y-auto max-h-96 flex-wrap px-2 lg:px-16 xl:px-56">
                          <div className="font-bold text-gray-500 text-lg">
                            <Link href={`/categories/${cat.slug}` || "/"}>
                              <a>
                                {route.locale == "en"
                                  ? cat.title_en
                                  : cat.title_fr}
                              </a>
                            </Link>
                          </div>
                          {cat.categories &&
                            cat.categories.map((sub) => {
                              return (
                                <li
                                  key={sub.title_fr}
                                  className="col-span-3 xl:col-span-2 mx-2"
                                >
                                  <div className="font-normal">
                                    <Link
                                      href={
                                        `/categories/sub/${sub.slug}` || "/"
                                      }
                                    >
                                      <a className="p-0">
                                        {route.locale == "en"
                                          ? sub.title_en
                                          : sub.title_fr}
                                      </a>
                                    </Link>
                                  </div>
                                </li>
                              );
                            })}
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>
              );
            })}
        </nav>
      </aside>
      {/* <div className="fixed top-0 left-0 bg-gray-700 w-screen h-screen"></div> */}
    </>
  );
};

export default Categories;
