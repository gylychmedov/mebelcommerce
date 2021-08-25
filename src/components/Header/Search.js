import { IoSearchOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import Link from "next/link";

const Search = () => {
  const { t } = useTranslation("common");
  const [search, setSearch] = useState();

  const handleShow = () => {
    const search = document.querySelector("#search");
    search.classList.toggle("hidden");
  };

  return (
    <>
      <div className="lg:w-4/12 lg:order-4 flex justify-between mt-2 lg:mt-0">
        <aside className="flex w-full">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("search")}
            className={`border px-4 py-2 rounded-l w-full hidden lg:block`}
          />
          {search ? (
            <Link href={`/Search/${search}`}>
              <a className="lg:hidden bg-indigo-600 px-4 py-2 rounded-l lg:rounded-l-none flex justify-center items-center rounded-r">
                <IoSearchOutline size="20" color="#fff" />
              </a>
            </Link>
          ) : (
            <div
              onClick={() => {
                if (!search) {
                  handleShow();
                }
              }}
              className="lg:hidden bg-indigo-600 px-4 py-2 rounded-l lg:rounded-l-none flex justify-center items-center rounded-r"
            >
              <IoSearchOutline size="20" color="#fff" />
            </div>
          )}

          <Link
            href={`/Search/${search ? (search.length > 0 ? search : "") : ""}`}
          >
            <a
              // onClick={() => handleShow()}
              className="hidden lg:flex bg-indigo-600 px-4 py-2 rounded-l lg:rounded-l-none justify-center items-center rounded-r"
            >
              <IoSearchOutline size="20" color="#fff" />
            </a>
          </Link>
        </aside>
      </div>
    </>
  );
};

export default Search;
