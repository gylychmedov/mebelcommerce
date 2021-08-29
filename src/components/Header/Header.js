import Search from "./Search";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import useTranslation from "next-translate/useTranslation";
import MobileSidebar from "./MobileSidebar";
import LNG from "./LNG";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <header className="px-2 lg:px-16 xl:px-56 z-10">
      <div className="flex flex-wrap justify-between items-center py-4 border-b">
        <div className="flex">
          <MobileSidebar />
        </div>
        <Link href="/">
          <a className="lg:order-1">
            <img src="/logo.svg" alt="logo" className="w-28" />
          </a>
        </Link>
        <div className="lg:hidden"></div>

        <Search />
        <div className="lg:order-3">
          <LNG />
        </div>
        <aside className="flex my-3 lg:order-2 lg:my-0 w-full justify-between lg:w-auto">
          <div className="flex lg:flex-col items-center mx-4">
            <div className="mr-1 lg:text-2xl">
              <BiSupport color="#313131" />
            </div>
            <a href="tel:+99362818725">8 62 81-87-25 </a>
          </div>
          <Link href="/stories">
            <a className="flex lg:flex-col items-center">
              <div className="mr-1 lg:text-2xl">
                <ImLocation2 color="#313131" />
              </div>
              <span>{t("stories")}</span>
            </a>
          </Link>
        </aside>
      </div>
    </header>
  );
};

export default Header;
