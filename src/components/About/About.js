import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const About = ({ data }) => {
  const { t } = useTranslation("common");
  const route = useRouter();
  return (
    <main>
      <h1 className="text-3xl my-8 text-indigo-700 font-bold text-center">
        {t("about")}
      </h1>
      <section className="grid grid-cols-12 gap-2 lg:gap-4">
        <aside className="col-span-12 lg:col-span-6">
          <img src={data.image} alt="about" className="w-full rounded-md" />
        </aside>
        <aside className="col-span-12 lg:col-span-6">
          {route.locale == "en" ? data.text_en : data.text_fr}
        </aside>
      </section>
    </main>
  );
};

export default About;
