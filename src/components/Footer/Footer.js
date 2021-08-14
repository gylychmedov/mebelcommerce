import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  RiCustomerService2Line,
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="mt-8 py-8 px-3 xl:px-56 bg-gray-100 grid grid-cols-12 gap-2">
      <aside className="col-span-12 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0 flex flex-col">
        <div className="font-bold text-gray-800 uppercase mb-2">
          {t("categories")}
        </div>
        <Link href="/">
          <a>Bed room</a>
        </Link>

        <Link href="/">
          <a>Dining room</a>
        </Link>

        <Link href="/">
          <a>TV units</a>
        </Link>

        <Link href="/">
          <a>Set stol</a>
        </Link>
      </aside>

      <aside className="col-span-12 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0 flex flex-col">
        <div className="font-bold text-gray-800 uppercase mb-2">
          {t("corporation")}
        </div>
        <Link href="/About">
          <a>{t("about")}</a>
        </Link>

        <Link href="/Stories">
          <a>{t("stories")}</a>
        </Link>

        <Link href="/Contact">
          <a>{t("contact")}</a>
        </Link>
      </aside>

      <aside className="col-span-12 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0 flex flex-col">
        <div className="font-bold text-gray-800 uppercase mb-2">
          {t("social")}
        </div>
        <a href="http://instagram.com" className="flex items-center">
          <RiInstagramLine className="mr-2" /> Instagram
        </a>

        <a href="http://facebook.com" className="flex items-center">
          <RiFacebookCircleLine className="mr-2" /> Facebook
        </a>

        <a href="http://twitter.com" className="flex items-center">
          <RiTwitterLine className="mr-2" /> Twitter
        </a>

        <a href="http://youtube.com" className="flex items-center">
          <RiYoutubeLine className="mr-2" /> Youtube
        </a>
      </aside>

      <aside className="col-span-12 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0 flex flex-col">
        <div className="font-bold text-gray-800 uppercase mb-2">
          {t("contact")}
        </div>
        <div>{t("relationship")}</div>

        <div className="flex mt-2">
          <div className="flex flex-col mr-2">
            <a
              className="text-red-600 text-lg font-bold"
              href="tel:+908504663333"
            >
              0850 466 33 33
            </a>
            <a
              className="text-gray-700 font-bold"
              href="mailto:online@site.com"
            >
              online@site.com
            </a>
          </div>
          <RiCustomerService2Line size={42} />
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
