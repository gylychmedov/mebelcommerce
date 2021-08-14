import { IoSearchOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";

const Search = () => {
  const { t } = useTranslation("common");
  return (
    <aside className="flex w-full">
      <input
        type="text"
        placeholder={t("search")}
        className="border px-4 py-2 rounded-l"
      />
      <div className="bg-indigo-600 px-4  flex justify-center items-center rounded-r">
        <IoSearchOutline size="20" color="#fff" />
      </div>
    </aside>
  );
};

export default Search;
