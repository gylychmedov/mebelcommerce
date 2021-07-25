import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <aside className="flex">
      <input
        type="text"
        placeholder="Search"
        className="border px-4 py-2 rounded-l"
      />
      <div className="bg-indigo-600 px-4  flex justify-center items-center rounded-r">
        <IoSearchOutline size="20" color="#fff" />
      </div>
    </aside>
  );
};

export default Search;
