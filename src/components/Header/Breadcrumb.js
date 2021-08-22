import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

const Breadcrumb = ({ data }) => {
  return (
    <nav className="flex items-center px-5 py-2">
      <HiOutlineHome />
      <span className="mx-2 text-gray-400">/</span>
      {data?.map((link, key) => {
        return (
          <nav key={key} className="flex">
            <Link href={link.link || "/"}>
              <a className="text-gray-500">{link.name}</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </nav>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
