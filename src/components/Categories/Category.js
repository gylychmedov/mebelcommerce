import Link from "next/link";

const Category = () => {
  return (
    <Link href="/Categories/test">
      <a className="relative col-span-12 lg:col-span-4 group">
        <div className="w-full h-full overflow-hidden rounded-md ">
          <img
            src="/categories/1-big.png"
            alt="categories"
            className="hover:scale-110 transform duration-500 w-full"
          />
        </div>
        <div className="w-6/12 bg-gradient-to-r rounded-l-md from-purple-700 to-transparent text-white font-bold text-md flex items-center justify-center absolute top-0 left-0 z-10 h-full">
          Dining room
        </div>
      </a>
    </Link>
  );
};

export default Category;
