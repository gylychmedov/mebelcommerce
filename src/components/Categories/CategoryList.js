import useTranslation from "next-translate/useTranslation";
import Category from "./Category";
import { useRouter } from "next/router";

const CategoryList = (props) => {
  const { t } = useTranslation("common");
  const route = useRouter();
  return (
    <main className="mt-10">
      <div className="mb-5 text-center text-2xl font-extrabold">
        {t("categories")}
      </div>
      <main className="grid grid-cols-12 gap-4">
        {props.data &&
          props.data.map((category, key) => {
            return <Category key={key} data={category} />;
          })}
      </main>
    </main>
  );
};

export default CategoryList;
