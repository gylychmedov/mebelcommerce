import Search from "./Search";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap justify-between items-center mt-3">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" className="w-28  lg:w-36" />
          </a>
        </Link>
        <div>
          <Search />
        </div>
        <aside className="flex mt-3 lg:mt-0 w-full justify-between lg:w-auto">
          <div className="flex lg:flex-col items-center mx-4">
            <div className="mr-1 lg:text-2xl">
              <BiSupport color="#313131" />
            </div>
            <span>8 62 81-87-25 </span>
          </div>
          <Link href="Shops">
            <a className="flex lg:flex-col items-center">
              <div className="mr-1 lg:text-2xl">
                <ImLocation2 color="#313131" />
              </div>
              <span>Our stories</span>
            </a>
          </Link>
        </aside>
      </div>
    </header>
  );
};

export default Header;
