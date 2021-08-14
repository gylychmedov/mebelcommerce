import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Breadcrumb = (props) => {
  const { t } = useTranslation("common");
  const { product = t("product"), category = t("categories") } = props;
  const route = useRouter();
  const splited = route.route.split("/");

  const getLinkName = (name) => {
    switch (name) {
      case "": {
        return <HiOutlineHome />;
      }
      case "Categories": {
        return category;
      }
      case "sub": {
        return ">";
      }
      case "[categories]": {
        return product;
      }
      case "[subcategories]": {
        return product;
      }
      case "Product": {
        return t("product");
      }
      case "[product]": {
        return product;
      }
    }
  };

  const getLink = (name) => {
    switch (name) {
      case "": {
        return "/";
      }
      case "[categories]": {
        return false;
      }
      case "[category]": {
        return false;
      }
    }
  };
  return (
    <main className="flex items-center px-5 py-2">
      {splited.map((links) => {
        return (
          <>
            {links != "" && (
              <span className="mx-2 lg:mx-4 text-gray-400">/</span>
            )}
            {getLink(links) ? (
              <Link href={getLink(links) || "/"}>
                <a className="text-gray-500">{getLinkName(links)}</a>
              </Link>
            ) : (
              <span className="text-gray-500">{getLinkName(links)}</span>
            )}
          </>
        );
      })}
    </main>
  );
};

export default Breadcrumb;
