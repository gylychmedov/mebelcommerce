import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

const Breadcrumb = ({ data }) => {
  return (
    <nav className="flex items-center  px-5 py-2">
      <HiOutlineHome />
      {data?.map((link, key) => {
        return (
          <nav key={key} className="flex justify-start">
            <span className="mx-2 text-gray-400">/</span>
            <Link href={link.link || "/"}>
              <a className="text-gray-500">{link.name}</a>
            </Link>
          </nav>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
