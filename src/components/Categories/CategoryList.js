import useTranslation from "next-translate/useTranslation";
import Category from "./Category";

const CategoryList = () => {
  const { t } = useTranslation("common");
  return (
    <main className="mt-10">
      <div className="mb-5 text-center text-2xl font-extrabold">
        {t("categories")}
      </div>
      <main className="grid grid-cols-12 gap-4">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </main>
    </main>
  );
};

export default CategoryList;
