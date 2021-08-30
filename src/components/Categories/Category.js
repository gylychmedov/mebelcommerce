import Link from "next/link";
import { useRouter } from "next/router";

const Category = ({ data }) => {
  const route = useRouter();
  return (
    <Link href={`/categories/${data.slug}`}>
      <a className="relative col-span-12 sm:col-span-6 lg:col-span-4 group">
        <div className="w-full h-full overflow-hidden rounded-md ">
          <img
            src={data.image}
            alt={route.locale == "en" ? data.title_en : data.title_fr}
            className="hover:scale-110 transform duration-500 w-full"
          />
        </div>
        <div className="w-6/12 bg-gradient-to-r rounded-l-md from-purple-700 to-transparent text-white font-bold text-md flex items-center justify-center absolute top-0 left-0  h-full">
          {route.locale == "en" ? data.title_en : data.title_fr}
        </div>
      </a>
    </Link>
  );
};

export default Category;
