import Link from "next/link";
import { useRouter } from "next/router";

const SubCategory = ({ data }) => {
  const route = useRouter();
  return (
    <Link href={`/categories/sub/${data.slug}`}>
      <a>
        <div className="relative transform duration-500 hover:-translate-y-1 my-5 rounded-md">
          <img
            src={data.image}
            alt={data.title_en}
            className="w-full rounded-md"
          />

          <div className="bg-gray-900 hover:bg-opacity-60 duration-1000 text-white text-center font-bold px-5 text-lg absolute top-0 left-0 right-0 w-full h-full bg-opacity-30 flex justify-center items-center">
            {route.locale == "en" ? data.title_en : data.title_fr}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SubCategory;
