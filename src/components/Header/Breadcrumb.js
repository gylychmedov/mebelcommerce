import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Breadcrumb = (props) => {
  return (
    <main className="flex items-center px-5 py-2">
      <HiOutlineHome />
      <span className="mx-2 lg:mx-4 text-gray-400">/</span>
      <Link href="/">
        <a className="text-gray-500"></a>
      </Link>
      <span className="text-gray-500"></span>
    </main>
  );
};

export default Breadcrumb;
