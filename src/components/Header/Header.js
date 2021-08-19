import Search from "./Search";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const route = useRouter();
  const { t } = useTranslation("common");
  return (
    <header>
      <div className="flex flex-wrap justify-between items-center py-4 border-b">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" className="w-24" />
          </a>
        </Link>

        <aside className="flex my-3 lg:my-0 w-full justify-between lg:w-auto">
          <Link href={route.asPath} locale={route.locale == "en" ? "fr" : "en"}>
            <a className="flex lg:flex-col items-center lg:mx-4">
              <div className="mr-1 lg:text-2xl">
                {/* <BiSupport color="#313131" /> */}
                <img
                  src={
                    route.locale == "en"
                      ? "/lng/english.svg"
                      : "/lng/france.svg"
                  }
                  className="w-6"
                  alt="lng"
                />
              </div>
              <span>{route.locale == "en" ? "English" : "France"}</span>
            </a>
          </Link>

          <div className="flex lg:flex-col items-center mx-4">
            <div className="mr-1 lg:text-2xl">
              <BiSupport color="#313131" />
            </div>
            <span>8 62 81-87-25 </span>
          </div>
          <Link href="/Stories">
            <a className="flex lg:flex-col items-center">
              <div className="mr-1 lg:text-2xl">
                <ImLocation2 color="#313131" />
              </div>
              <span>{t("stories")}</span>
            </a>
          </Link>
        </aside>

        <div className="w-full lg:w-4/12">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
