import View from "../../Layouts/View";
import useTranslation from "next-translate/useTranslation";
import Maps from "../../components/Stories/Maps";

const Stories = () => {
  const { t } = useTranslation("common");
  return (
    <View title={t("stories")}>
      <main>
        <h1 className="text-3xl my-8 text-indigo-700 font-bold text-center">
          {t("stories")}
        </h1>
        <section className="grid grid-cols-12 w-full">
          <aside className="col-span-12 ">
            <div className="shadow-lg rounded-lg overflow-hidden w-full">
              <Maps />
            </div>
          </aside>
        </section>
      </main>
    </View>
  );
};

export default Stories;
