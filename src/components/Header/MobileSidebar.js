import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import CategoriesContext from "../Contexts/categoriesContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import useTranslation from "next-translate/useTranslation";
import { BiChevronRight } from "react-icons/bi";

const MobileSidebar = () => {
  const categories = useContext(CategoriesContext);
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <header className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size="26" />
      </header>
      <AnimatePresence>
        {isOpen && (
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-800 fixed top-0 left-0 w-screen h-screen z-20 bg-opacity-50"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100vh" }}
            transition={{ type: "tween" }}
            className="fixed overflow-y-auto top-0 left-0 w-80 h-screen bg-white shadow z-30 flex flex-col justify-start items-start"
          >
            <aside className="bg-indigo-50 w-full py-3 px-3 flex items-center">
              <div className="p-2" onClick={() => setIsOpen(!isOpen)}>
                <IoMdClose size={22} />
              </div>
            </aside>
            {categories &&
              categories.map((category, index) => {
                return (
                  <div key={index} className="w-full my-1 ">
                    {category.categories && category.categories.length > 0 ? (
                      <div
                        onClick={() => {
                          if (categoryIndex !== index) {
                            setCategoryIndex(index);
                          } else {
                            setCategoryIndex();
                          }
                        }}
                        className="hover:text-white duration-500 flex justify-between items-center hover:bg-indigo-600 px-5 py-3 font-bold cursor-pointer"
                      >
                        {route.locale == "en"
                          ? category.title_en
                          : category.title_fr}
                        {category.categories && category.categories.length > 0 && (
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{
                              rotate: categoryIndex == index ? 90 : 0,
                            }}
                          >
                            <BiChevronRight />
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link href={`/categories/${category.slug}`}>
                        <a className="hover:text-white duration-500 flex justify-between items-center hover:bg-indigo-600 px-5 py-3 font-bold cursor-pointer">
                          {route.locale == "en"
                            ? category.title_en
                            : category.title_fr}
                        </a>
                      </Link>
                    )}
                    <AnimatePresence>
                      {categoryIndex == index && (
                        <motion.section
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            staggerChildren: 0.1,
                            delayChildren: 0.3,
                          }}
                        >
                          {category.categories &&
                            category.categories.length > 0 &&
                            category.categories.map((subcategory, key) => {
                              return (
                                <Link
                                  href={`/categories/sub/${subcategory.slug}`}
                                  passHref
                                  key={key}
                                >
                                  <motion.a
                                    className="ml-5"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                  >
                                    {route.locale == "en"
                                      ? subcategory.title_en
                                      : subcategory.title_fr}
                                  </motion.a>
                                </Link>
                              );
                            })}
                        </motion.section>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSidebar;
