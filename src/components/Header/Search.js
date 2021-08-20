import { IoSearchOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";

const Search = () => {
  const { t } = useTranslation("common");
  const handleShow = () => {
    const search = document.querySelector("#search");
    search.classList.toggle("hidden");
  };
  return (
    <>
      <aside className="flex">
        <input
          type="text"
          id="search"
          placeholder={t("search")}
          className={`border px-4 py-2 rounded-l w-full hidden lg:block`}
        />
        <div
          onClick={() => handleShow()}
          className="bg-indigo-600 px-4 py-2 rounded-l lg:rounded-l-none flex justify-center items-center rounded-r"
        >
          <IoSearchOutline size="20" color="#fff" />
        </div>
      </aside>
    </>
  );
};

export default Search;
